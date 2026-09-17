#!/usr/bin/env python3
"""Scan yiya knowledge base for changes within N days (default 7 days).

Analyzes raw articles, bookmarks, and domain/shared knowledge nodes
added or updated, calculating digestion rates and structural gaps.
No third-party dependencies.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

SKIP_NAMES = {
    "index.md",
    "log.md",
    "README.md",
    "AGENTS.md",
    "overview.md",
    "map.md",
}


def repo_root() -> Path:
    return Path(__file__).resolve().parents[3]


def split_fm(raw: str) -> tuple[str, str]:
    if not raw.startswith("---"):
        return "", raw
    end = raw.find("\n---", 3)
    if end < 0:
        return "", raw
    return raw[3:end].strip(), raw[end + 4 :]


def fm_get(fm: str, key: str) -> str:
    m = re.search(rf"^{re.escape(key)}:\s*(.*)$", fm, re.M)
    if not m:
        return ""
    return m.group(1).strip().strip("\"'")


def parse_list(fm: str, key: str) -> list[str]:
    m = re.search(rf"^{re.escape(key)}:\s*$", fm, re.M)
    if not m:
        m2 = re.search(rf"^{re.escape(key)}:\s*\[(.*)\]\s*$", fm, re.M)
        if not m2:
            return []
        inner = m2.group(1).strip()
        if not inner:
            return []
        return [x.strip().strip("\"'") for x in inner.split(",") if x.strip()]
    items: list[str] = []
    for line in fm[m.end() :].splitlines():
        if re.match(r"^[A-Za-z0-9_]+:", line) and not line.startswith(" "):
            break
        mm = re.match(r"^\s*-\s+(.*)$", line)
        if mm:
            items.append(mm.group(1).strip().strip("\"'"))
    return items


def run_cmd(args: list[str], cwd: Path) -> str:
    try:
        res = subprocess.run(args, cwd=cwd, capture_output=True, text=True, check=True)
        return res.stdout.strip()
    except Exception:
        return ""


def get_git_changes(root: Path, days: int) -> dict[str, str]:
    """Return {relative_path: status_code} within recent days from git log and status."""
    changes: dict[str, str] = {}
    since_arg = f"--since={days} days ago"

    # 1. git log with unquoted paths
    log_out = run_cmd(
        [
            "git",
            "-c",
            "core.quotepath=false",
            "log",
            since_arg,
            "--name-status",
            "--pretty=format:",
        ],
        root,
    )
    if log_out:
        for line in log_out.splitlines():
            line = line.strip()
            if not line:
                continue
            parts = line.split(maxsplit=1)
            if len(parts) == 2:
                status_raw, path_raw = parts[0], parts[1]
                # handle rename "R100 old\tnew"
                if "\t" in path_raw:
                    path_raw = path_raw.split("\t")[-1]
                status_letter = status_raw[0].upper()
                clean_path = path_raw.strip('"')
                if clean_path not in changes:
                    changes[clean_path] = status_letter

    # 2. uncommitted changes from working tree (staged & unstaged)
    status_out = run_cmd(
        ["git", "-c", "core.quotepath=false", "status", "--porcelain"], root
    )
    if status_out:
        for line in status_out.splitlines():
            if len(line) >= 4:
                xy = line[:2]
                path_raw = line[3:].strip().strip('"')
                if " -> " in path_raw:
                    path_raw = path_raw.split(" -> ")[-1].strip('"')
                code = "A" if ("A" in xy or "?" in xy) else "M"
                if path_raw not in changes:
                    changes[path_raw] = code

    # 3. Fallback: if git returned nothing, scan mtime
    if not changes:
        threshold = datetime.now(timezone.utc).timestamp() - (days * 86400)
        scan_dirs = ["raw", "domains", "shared"]
        for sdir in scan_dirs:
            dp = root / sdir
            if not dp.is_dir():
                continue
            for p in dp.rglob("*.md"):
                try:
                    if p.stat().st_mtime >= threshold:
                        rel = str(p.relative_to(root))
                        changes[rel] = "M"
                except OSError:
                    continue

    return changes


def scan_recent_activity(
    root: Path, days: int = 7, target_domain: str | None = None
) -> dict[str, Any]:
    file_changes = get_git_changes(root, days)

    # All known markdown knowledge files in whole repo (for source digestion check)
    all_knowledge_files: list[Path] = []
    for base in [root / "domains", root / "shared"]:
        if base.is_dir():
            for p in base.rglob("*.md"):
                if p.name not in SKIP_NAMES and not p.name.endswith(".draft.md"):
                    all_knowledge_files.append(p)

    # Build global map of raw references: {normalized_raw_path: [referencing_knowledge_paths]}
    raw_reference_map: dict[str, list[str]] = {}
    knowledge_records: dict[str, dict[str, Any]] = {}

    for kf in all_knowledge_files:
        krel = str(kf.relative_to(root))
        try:
            content = kf.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        fm, body = split_fm(content)
        sources = parse_list(fm, "sources")
        related = parse_list(fm, "related")
        k_type = fm_get(fm, "type") or "Unknown"
        title = fm_get(fm, "title") or kf.stem

        knowledge_records[krel] = {
            "path": krel,
            "title": title,
            "type": k_type,
            "sources": sources,
            "related": related,
            "has_mechanism": bool(re.search(r"^##\s+Mechanism", body, re.M | re.I)),
            "has_boundaries": bool(re.search(r"^##\s+Boundaries", body, re.M | re.I)),
            "has_identity": bool(re.search(r"^##\s+Identity", body, re.M | re.I)),
            "line_count": len(content.splitlines()),
            "char_count": len(content),
        }

        # Resolve sources to repo-relative paths
        for s in sources:
            s_clean = s.strip().lstrip("<").rstrip(">")
            if s_clean.startswith(("./", "../")):
                resolved = (kf.parent / s_clean).resolve()
                try:
                    rel_s = str(resolved.relative_to(root))
                    raw_reference_map.setdefault(rel_s, []).append(krel)
                except ValueError:
                    pass
            elif s_clean.startswith("raw/"):
                raw_reference_map.setdefault(s_clean, []).append(krel)

    # Categorize changes
    raw_articles: list[dict[str, Any]] = []
    raw_bookmarks: list[dict[str, Any]] = []
    raw_inbox: list[dict[str, Any]] = []
    knowledge_nodes: list[dict[str, Any]] = []

    for rel_path, status in sorted(file_changes.items()):
        # Filter out media, web build artifacts, git, etc.
        if rel_path.startswith(
            ("raw/articles/_media/", ".git/", "web/")
        ) or not rel_path.endswith(".md"):
            continue

        full_p = root / rel_path
        if not full_p.is_file():
            continue

        try:
            content = full_p.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue

        fm, body = split_fm(content)

        # 1. Raw articles
        if rel_path.startswith("raw/articles/"):
            title = fm_get(fm, "title") or full_p.stem
            author = fm_get(fm, "author") or full_p.parent.name
            url = fm_get(fm, "url")
            date_str = fm_get(fm, "date")
            claimed_by = raw_reference_map.get(rel_path, [])
            raw_articles.append(
                {
                    "path": rel_path,
                    "title": title,
                    "author": author,
                    "url": url,
                    "date": date_str,
                    "status": status,
                    "claimed_by": claimed_by,
                    "is_claimed": len(claimed_by) > 0,
                }
            )

        # 2. Raw bookmarks
        elif rel_path.startswith("raw/bookmarks/"):
            raw_bookmarks.append(
                {
                    "path": rel_path,
                    "name": full_p.name,
                    "status": status,
                    "line_count": len(content.splitlines()),
                }
            )

        # 3. Raw inbox
        elif rel_path.startswith("raw/_inbox/"):
            if (
                "research/explore/archive" in rel_path
                or "research/dream/archive" in rel_path
            ):
                continue
            raw_inbox.append(
                {
                    "path": rel_path,
                    "title": fm_get(fm, "title") or full_p.stem,
                    "status": status,
                }
            )

        # 4. Knowledge nodes (domains/ or shared/)
        elif rel_path.startswith(("domains/", "shared/")):
            if full_p.name in SKIP_NAMES:
                continue

            # Domain filter if requested
            domain_match = (
                "shared" if rel_path.startswith("shared/") else rel_path.split("/")[1]
            )
            if target_domain and domain_match != target_domain:
                continue

            node_meta = knowledge_records.get(rel_path)
            if not node_meta:
                continue

            node_data = dict(node_meta)
            node_data["domain"] = domain_match
            node_data["status"] = status
            # Check which of its sources are from recent raw
            recent_sources = [
                s
                for s in node_data["sources"]
                if any(art["path"] in s for art in raw_articles)
            ]
            node_data["recent_sources_count"] = len(recent_sources)
            knowledge_nodes.append(node_data)

    # Digestion & Gap analysis
    claimed_articles = [a for a in raw_articles if a["is_claimed"]]
    orphaned_articles = [a for a in raw_articles if not a["is_claimed"]]
    digestion_rate = len(claimed_articles) / len(raw_articles) if raw_articles else 1.0

    # Identify thin knowledge nodes (has article sources, but lacks mechanism)
    thin_nodes = [
        k
        for k in knowledge_nodes
        if k["sources"]
        and any(
            s.startswith("raw/articles/") or "/raw/articles/" in s for s in k["sources"]
        )
        and not k["has_mechanism"]
        and k["type"] in ("Entity", "Concept")
    ]

    # Identify isolated nodes (related count < 2)
    isolated_nodes = [
        k
        for k in knowledge_nodes
        if len(k["related"]) < 2 and k["type"] in ("Entity", "Concept")
    ]

    # Group knowledge nodes by domain
    by_domain: dict[str, list[dict[str, Any]]] = {}
    for k in knowledge_nodes:
        by_domain.setdefault(k["domain"], []).append(k)

    return {
        "period_days": days,
        "scan_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "target_domain": target_domain or "all",
        "summary": {
            "raw_articles_count": len(raw_articles),
            "raw_articles_claimed": len(claimed_articles),
            "raw_articles_orphaned": len(orphaned_articles),
            "digestion_rate": round(digestion_rate * 100, 1),
            "raw_bookmarks_changed": len(raw_bookmarks),
            "raw_inbox_count": len(raw_inbox),
            "knowledge_nodes_count": len(knowledge_nodes),
            "thin_nodes_count": len(thin_nodes),
            "isolated_nodes_count": len(isolated_nodes),
        },
        "raw_articles": raw_articles,
        "raw_bookmarks": raw_bookmarks,
        "raw_inbox": raw_inbox,
        "knowledge_nodes": knowledge_nodes,
        "by_domain": by_domain,
        "gaps": {
            "orphaned_articles": orphaned_articles,
            "thin_nodes": thin_nodes,
            "isolated_nodes": isolated_nodes,
        },
    }


def format_markdown(data: dict[str, Any]) -> str:
    s = data["summary"]
    lines: list[str] = [
        f"# yiya 7日活动扫描 ({data['scan_time'][:10]}，跨度 {data['period_days']} 天)",
        "",
        "## 统计概要",
        f"- **原料成文**: {s['raw_articles_count']} 篇（已认领: {s['raw_articles_claimed']}，未认领: {s['raw_articles_orphaned']}，转化吸收率: {s['digestion_rate']}%）",
        f"- **书签表变动**: {s['raw_bookmarks_changed']} 个",
        f"- **知识节点更新**: {s['knowledge_nodes_count']} 个（薄卡预警: {s['thin_nodes_count']}，孤岛节点: {s['isolated_nodes_count']}）",
        "",
    ]

    # 1. 知识层变动 (按 domain 组织)
    lines.append("## 知识层更新 (Knowledge Nodes)")
    if not data["knowledge_nodes"]:
        lines.append("_本周期内无知识页面变动记录。_")
    else:
        for dom, nodes in data["by_domain"].items():
            lines.append(f"\n### Domain: {dom} ({len(nodes)} 页)")
            for n in nodes:
                tag = "新建" if n["status"] == "A" else "修订"
                mech = "✓机制" if n["has_mechanism"] else "✗无机制"
                bound = "✓边界" if n["has_boundaries"] else "✗无边界"
                lines.append(
                    f"- **[{n['title']}]({n['path']})** `{n['type']}` [{tag}] "
                    f"({mech}, {bound}, Related: {len(n['related'])}, Sources: {len(n['sources'])})"
                )

    # 2. 原料成文清单与认领情况
    lines.append("\n## 原料成文摄入 (Raw Articles)")
    if not data["raw_articles"]:
        lines.append("_本周期内无成文原料摄入。_")
    else:
        for a in data["raw_articles"]:
            tag = "新增" if a["status"] == "A" else "更新"
            claims = (
                ", ".join(f"`{c}`" for c in a["claimed_by"])
                if a["claimed_by"]
                else "**未认领 (悬挂)**"
            )
            lines.append(f"- **{a['title']}** ({a['author']}) [{tag}]")
            lines.append(f"  - 路径: `{a['path']}`")
            lines.append(f"  - 认领: {claims}")

    # 3. 书签表与收件箱
    if data["raw_bookmarks"] or data["raw_inbox"]:
        lines.append("\n## 书签与收件箱")
        for b in data["raw_bookmarks"]:
            lines.append(f"- 书签表更新: `{b['path']}` ({b['status']})")
        for ib in data["raw_inbox"]:
            lines.append(f"- Inbox 候选项: `{ib['path']}` - {ib['title']}")

    # 4. 盲点与消化诊断
    lines.append("\n## 消化诊断与缺口 (Gaps & Opportunities)")
    orphans = data["gaps"]["orphaned_articles"]
    thins = data["gaps"]["thin_nodes"]
    isolates = data["gaps"]["isolated_nodes"]

    if orphans:
        lines.append(f"### 待转化/未认领原料 ({len(orphans)} 篇)")
        max_show = 15
        for o in orphans[:max_show]:
            lines.append(f"- `{o['path']}` ({o['author']}) - {o['title']}")
        if len(orphans) > max_show:
            lines.append(f"- _... 及其余 {len(orphans) - max_show} 篇待转化原料_")
    else:
        lines.append("- ✓ 所有摄入成文均已挂载至对应知识节点。")

    if thins:
        lines.append(f"\n### 机制薄弱节点 (建议精读重写 yiya-rewrite, {len(thins)} 个)")
        max_show = 12
        for t in thins[:max_show]:
            lines.append(
                f"- `{t['path']}`: 含有成文 sources，但未提炼出 `## Mechanism` 机制核心"
            )
        if len(thins) > max_show:
            lines.append(f"- _... 及其余 {len(thins) - max_show} 个薄弱节点_")

    if isolates:
        lines.append(f"\n### 链接孤岛 (建议补充 Related 互链, {len(isolates)} 个)")
        max_show = 12
        for iso in isolates[:max_show]:
            lines.append(
                f"- `{iso['path']}`: 关联链接较少 (Related: {len(iso['related'])})"
            )
        if len(isolates) > max_show:
            lines.append(f"- _... 及其余 {len(isolates) - max_show} 个孤岛节点_")

    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Scan yiya recent additions and modifications."
    )
    parser.add_argument(
        "--days",
        type=int,
        default=7,
        help="Number of days to look back (default: 7)",
    )
    parser.add_argument(
        "--domain",
        type=str,
        default=None,
        help="Filter by domain (e.g. agents, engineering, design, trading, shared)",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output raw JSON instead of markdown",
    )
    parser.add_argument(
        "--output",
        type=str,
        default=None,
        help="Save output to file",
    )

    args = parser.parse_args()
    root = repo_root()

    data = scan_recent_activity(root, days=args.days, target_domain=args.domain)

    if args.json:
        out_text = json.dumps(data, ensure_ascii=False, indent=2)
    else:
        out_text = format_markdown(data)

    if args.output:
        out_path = Path(args.output)
        if not out_path.is_absolute():
            out_path = root / out_path
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(out_text, encoding="utf-8")
        print(f"Report saved to {out_path}")
    else:
        print(out_text)


if __name__ == "__main__":
    main()
