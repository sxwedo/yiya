---
type: Entity
title: "Pi Durable"
description: "Earendil 实验包：任意 JS 运行时上的长时 harness。存储+检查点撑崩溃恢复，不替换 Pi 编码代理。"
kind: product
status: draft
domain: agents
aliases: [pi-durable]
generated: { by: agent:yiya-librarian, at: 2026-10-02T09:13:00Z }
related:
  - pi
  - minimal-agent-harness
  - harness-runtime-layer
  - herdr
sources:
  - ../../../raw/articles/Earendil/Pi Durable.md
---

# Identity

**Pi Durable**（`@earendil-works/pi-durable`，2026-10-01 随 [Pi](./pi.md) 1.0 一起出）是 Earendil 的**实验 harness 包**，给长时、可崩溃恢复、可热换代码、可多人同会话的 agent 用。官网说明：[Pi Durable](https://earendil.com/posts/pi-durable/)。仓在 [earendil-works/pi](https://github.com/earendil-works/pi) 的 `packages/durable`。

不替换终端里的 Pi 编码代理。Pi 1.0 继续干「一台（远程）机器、一个终端、一个人开；进程死了人看着让它续」。Durable 是另一条线：任意 JS 运行时、多表面接入、无限长对话、内外故障后接着跑、多人同时steer。原则仍是极简和可改，并与 `pi-ai` 共享代码。学到的东西证实有用再流回编码代理。API 仍可能变。

## Mechanism

他们把 harness 收成一句：**存储 + 并行跑多路 LLM 会话的机器**，外加工具和工具跑在哪。会话是人和 agent 的 transcript；agent 是模型+设置+工具；工具经 execution environment（本机 / 远程 VM / 内存沙箱）；harness 里每一步都是 task。无测试约 1.5 万行。

- **到处跑。** 存储后端：memory / SQLite / JSONL，有 conformance。SQLite 与 JSONL 不绑 Node API，可适配 Bun 或 Cloudflare Durable Object。同一时刻一个进程拥有一份存储，别人挂上去。内存只留 working set（活跃 transcript、活 task、pending）；compaction 把旧消息摘要掉，所以超长会话也不把内存撑爆。工具的 env 按会话 cwd 建，harness 和工具可以不在同一台机器。
- **崩溃后续上。** 每步先写 checkpoint。新进程打开同一存储，找未完成 task 从检查点续。被切断的模型请求重发，半截答案标 aborted。工具：声明 `replay: "safe"` 才重跑，否则告诉模型中断了。`requestId` 让提交 exactly-once。没有内置子代理；子代理就是自己开的会话，同样可恢复。
- **多会话并行。** 一份 harness 同时跑多路，互不堵。可从 transcript 任意点 fork，看见父历史但不复制。会话各自存模型、扩展/工具名、额外指令、工作目录。
- **扩展也进耐久。** 扩展 = system prompt sections + tools + hooks + tasks。会话只存名字不存代码。sections 每次请求重建；变更写进 transcript 对应位置。工具调用本身是 durable task。hooks 能改请求、拦工具、自己写摘要；崩溃后用 memo（先写赢）避免再问一遍。task 与会话是所有权树：abort 自下而上清；foreground 跟当前轮，background 不跟 Esc。
- **压缩不打断。** compaction 是后台 task，贴上下文上限才等摘要。`reset()` / 工具返回 `control: { handoff }` 开新上下文，旧消息仍可搜。
- **应用状态同提交。** documents 是 typed JSON，和 transcript 同一原子 commit。fork 时可选父当时值 / 当前值 / 空白。
- **可改、多人。** 运行中 registry 按同名覆盖；正在跑的工具调用用旧代码，下一调用用新的。UI 要的都是已提交状态，晚加入的客户端先拿当前视图再收 diff。`whenBusy: "steer"` 把消息插进当前轮。

试用：`packages/durable` README 与 examples；另有实验编码代理和 ~1300 行 vacation planner。`npm i @earendil-works/pi-durable @earendil-works/pi-ai @earendil-works/chord`。

## Boundaries

实验包，API 会变。不是 [Pi](./pi.md) 终端编码代理，不是 [oh-my-pi](./oh-my-pi.md)。不是 [Herdr](./herdr.md)（那是持有真实终端的运行时）。压缩/handoff 仍是 transcript，不是 [历史不等于记忆](../concepts/history-vs-memory.md) 那套可更新事实库。

## Related

- [Pi](./pi.md)
- [Minimal Agent Harness](../concepts/minimal-agent-harness.md)
- [Harness 运行时层](../concepts/harness-runtime-layer.md)
- [Herdr](./herdr.md)
