---
type: Entity
title: "Puffo"
description: "人与 Agent 的端到端加密群聊：本机 daemon 托管多个 agent，底层仍是 Claude / Codex。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T20:20:00Z }
related:
  - puffo-site
  - raft
  - grok-bot
  - herdr
sources:
  - ../references/puffo-site.md
---

# Summary

**Puffo**（https://beta.puffo.ai/）把人和多个 AI agent 放进同一个群聊协作：端到端加密、本机优先。本机跑 `puffo-agent` daemon，监督多个 bot 账号（身份、记忆、频道触发），脑子仍是 Claude Code / Codex 等已有 harness。营销站 https://puffo.ai/ ；daemon 源码 [puffo-ai/puffo-agent](https://github.com/puffo-ai/puffo-agent)。

定位：人机**群聊工作空间**，不是又一款编码 CLI。同形态见 [Raft](./raft.md)；岗位制工程多智能体见 [Grok Bot](./grok-bot.md)；终端会话运行时见 [Herdr](./herdr.md)。

## Related

- [Puffo（站点）](../references/puffo-site.md)
- [Raft](./raft.md)
- [Grok Bot](./grok-bot.md)
- [Herdr](./herdr.md)
