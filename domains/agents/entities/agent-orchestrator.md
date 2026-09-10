---
type: Entity
title: "Agent Orchestrator"
description: "本机桌面编排 coding agent 舰队：一任务一 worker、独立 worktree，看板跟 CI / PR / 评审。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-10T15:45:00Z }
related:
  - paseo
  - orca
  - herdr
  - multi-harness-control-plane
  - oto-dock
  - gnhf
sources: []
---

# Summary

**Agent Orchestrator**（AO，<https://useao.dev>，仓 [Untrivial-ai/agent-orchestrator](https://github.com/Untrivial-ai/agent-orchestrator)）是本机桌面工作区：给每个编码任务一个 worker（选定 coding agent / 模型 / 界面）、独立 branch 与 worktree；本机 daemon 盯会话、PR、CI 与评审，看板里跟完全程。macOS / Windows / Linux 桌面安装，不替代 Claude Code / Codex 等 CLI。

对照：[Paseo](./paseo.md) 偏跨设备编排入口；[Orca](./orca.md) 是并行舰队 ADE；[Herdr](./herdr.md) 持有终端会话；[Multi-Harness Control Plane](../concepts/multi-harness-control-plane.md) 是控制面概念。AO 是落地的本机编排产品。

## Related

- [Paseo](./paseo.md)
- [Orca](./orca.md)
- [Herdr](./herdr.md)
- [Multi-Harness Control Plane](../concepts/multi-harness-control-plane.md)
- [OtoDock](./oto-dock.md)
- [gnhf](./gnhf.md)
