---
type: Entity
title: "Herdr"
description: "编码代理的终端运行时：后台 server 持有真实终端，合盖或断网后会话还在；不替换 Claude Code / Pi 等 CLI。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T17:20:00Z }
related:
  - herdr-site
  - mena
  - omarchy
  - pi
  - raft
  - multi-harness-control-plane
sources:
  - ../references/herdr-site.md
---

# Summary

**Herdr**（https://herdr.dev/）是编码代理活在上面的运行时：本机后台 server 持有真实终端，合盖、断网或换一台键盘再连上，布局和会话还在。它读每个 pane，标 working / blocked / idle，只在 agent 卡住要你回答时叫你。不包装、不替换已有 CLI（Claude Code、Codex、Cursor、Pi、opencode、Grok 等），只拥有它们的终端。Apache-2.0，Rust 单二进制；创始人 Can Celik，YC F26。仓库：[herdrdev/herdr](https://github.com/herdrdev/herdr)。

定位：终端会话的**运行时**，不是又一款 harness。本机无守护进程的启动/巡检见 [mena](./mena.md)；整机桌面运行面见 [Omarchy](./omarchy.md)；任务级多 harness 编排见 [Multi-Harness Control Plane](../concepts/multi-harness-control-plane.md)。

## Related

- [Herdr（站点）](../references/herdr-site.md)
- [mena](./mena.md)
- [Omarchy](./omarchy.md)
- [Pi](./pi.md)
- [Raft](./raft.md)
- [Multi-Harness Control Plane](../concepts/multi-harness-control-plane.md)
