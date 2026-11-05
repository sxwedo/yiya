---
type: Entity
title: "cornercase"
description: "编码代理终端多路复用：每 agent 独立 worktree 和 tab，关窗口还在跑。Linux / macOS。库里只有入口。"
kind: product
status: draft
domain: agents
aliases: [Cornercase]
generated: { by: agent:yiya-librarian, at: 2026-10-08T14:53:00Z }
related:
  - herdr
  - termany
  - orca
  - agent-orchestrator
  - paseo
sources:
  - ../../../raw/bookmarks/sites.md
  - ../../../raw/bookmarks/github.md
  - ../../../raw/bookmarks/docs.md
---

# Identity

**cornercase**（<https://usecornercase.dev/>，仓 [usecornercase/cornercase-terminal](https://github.com/usecornercase/cornercase-terminal)）：给编码代理的终端多路复用。站点说法：每个 agent 自己的 branch / 目录 / tab；终端连到本机 server，关窗口、断 SSH 后 agent 和测试/dev server 还在跑，换终端或手机再连。点选操作；Linux / macOS；MIT 或 Apache-2.0；Rust + ratatui + libghostty-vt。文档门户 <https://usecornercase.dev/docs/>。

定位：agent 终端**工作台壳**，不是又一款 coding agent。合盖后续跑见 [Herdr](./herdr.md)；桌面工作区见 [Termany](./termany.md)；舰队编排见 [Orca](./orca.md) / [Agent Orchestrator](./agent-orchestrator.md)。

## Boundaries

库里只有入口。不编速度对比，不写安装步骤。不是 [Herdr](./herdr.md)（那是持有各家 CLI 的终端运行时）。不替换 Claude Code / Codex。

## Related

- [Herdr](./herdr.md)
- [Termany](./termany.md)
- [Orca](./orca.md)
- [Agent Orchestrator](./agent-orchestrator.md)
- [Paseo](./paseo.md)
