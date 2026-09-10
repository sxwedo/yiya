#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEB="$ROOT/web"
PID_FILE="$WEB/.reader.pid"
LOG_FILE="$WEB/.reader.log"
PORT=5173
URL="http://127.0.0.1:${PORT}/"

die() {
  echo "$*" >&2
  exit 1
}

usage() {
  cat <<EOF
用法: $0 start | stop | restart | status

  start    没有 web/node_modules 时先安装依赖，再启动阅读页
  stop     停止
  restart  先停再启
  status   看是否在跑

地址: $URL
EOF
}

running_pid() {
  if [[ -f "$PID_FILE" ]]; then
    local pid
    pid="$(cat "$PID_FILE")"
    if [[ "$pid" =~ ^[0-9]+$ ]] && kill -0 "$pid" 2>/dev/null; then
      echo "$pid"
      return 0
    fi
  fi
  return 1
}

port_pids() {
  lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true
}

is_vite() {
  local pid="$1"
  local args
  args="$(ps -p "$pid" -o args= 2>/dev/null || true)"
  [[ "$args" == *vite* ]]
}

need_install() {
  [[ ! -d "$WEB/node_modules" || ! -x "$WEB/node_modules/.bin/vite" ]]
}

installer() {
  if command -v pnpm >/dev/null 2>&1; then
    echo pnpm
  elif command -v npm >/dev/null 2>&1; then
    echo npm
  else
    die "需要 pnpm 或 npm，且已安装 Node。"
  fi
}

ensure_node() {
  command -v node >/dev/null 2>&1 || die "未找到 node，请先安装 Node.js。"
}

install_deps() {
  ensure_node
  local cmd
  cmd="$(installer)"
  echo "未找到 node_modules，执行 $cmd install…"
  (cd "$WEB" && "$cmd" install)
}

wait_listen() {
  local n=0
  while ((n < 25)); do
    if [[ -n "$(port_pids)" ]]; then
      return 0
    fi
    n=$((n + 1))
    sleep 0.2
  done
  return 1
}

cmd_start() {
  local pid
  if pid="$(running_pid)"; then
    echo "已在运行 pid=$pid"
    echo "$URL"
    return 0
  fi

  local extra
  extra="$(port_pids)"
  if [[ -n "$extra" ]]; then
    die "端口 $PORT 已被占用（pid=$(echo "$extra" | tr '\n' ' ')）。先 ./web.sh stop。"
  fi

  [[ -d "$WEB" && -f "$WEB/package.json" ]] || die "找不到 $WEB/package.json"

  if need_install; then
    install_deps
  fi
  ensure_node
  [[ -x "$WEB/node_modules/.bin/vite" ]] || die "安装后仍没有 vite。"

  echo "启动阅读页…"
  (
    cd "$WEB"
    nohup ./node_modules/.bin/vite --port "$PORT" --strictPort >"$LOG_FILE" 2>&1 &
    echo $! >"$PID_FILE"
  )

  if wait_listen; then
    echo "已启动 pid=$(cat "$PID_FILE")"
    echo "$URL"
  else
    echo "进程已拉起，但端口尚未就绪。日志：$LOG_FILE" >&2
    echo "$URL"
    return 1
  fi
}

cmd_stop() {
  local pids=()
  local pid
  if pid="$(running_pid)"; then
    pids+=("$pid")
  fi
  local p
  for p in $(port_pids); do
    if is_vite "$p"; then
      pids+=("$p")
    fi
  done

  if [[ ${#pids[@]} -eq 0 ]]; then
    echo "未在运行"
    rm -f "$PID_FILE"
    return 0
  fi

  local unique=""
  for p in "${pids[@]}"; do
    case " $unique " in
    *" $p "*) ;;
    *) unique+="$p " ;;
    esac
  done

  for p in $unique; do
    echo "停止 pid=$p"
    kill "$p" 2>/dev/null || true
  done
  for _ in $(seq 1 15); do
    local alive=0
    for p in $unique; do
      if kill -0 "$p" 2>/dev/null; then
        alive=1
      fi
    done
    [[ "$alive" -eq 0 ]] && break
    sleep 0.2
  done
  for p in $unique; do
    if kill -0 "$p" 2>/dev/null; then
      kill -9 "$p" 2>/dev/null || true
    fi
  done
  rm -f "$PID_FILE"
  echo "已停止"
}

cmd_status() {
  local pid
  if pid="$(running_pid)"; then
    echo "运行中 pid=$pid"
    echo "$URL"
    return 0
  fi
  local extra
  extra="$(port_pids)"
  if [[ -n "$extra" ]]; then
    echo "端口 $PORT 有进程 pid=$(echo "$extra" | tr '\n' ' ')（非本脚本记录）"
    echo "$URL"
    return 0
  fi
  echo "未在运行"
  return 1
}

case "${1:-}" in
start) cmd_start ;;
stop) cmd_stop ;;
restart)
  cmd_stop
  cmd_start
  ;;
status) cmd_status ;;
-h | --help | help | "") usage ;;
*)
  usage
  exit 1
  ;;
esac
