---
type: Entity
title: "Raft"
description: "人与 Agent 共用频道工作空间：长期身份与记忆，本机 daemon 跑 Claude / Codex 等；不是分布式共识算法。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T18:40:00Z }
related:
  - raft-site
  - grok-bot
  - puffo
  - proof
  - herdr
  - pilot-protocol
  - multi-agent-governance
sources:
  - ../references/raft-site.md
---

# Summary

**Raft**（https://raft.build/zh-cn/）让人和多个 Agent 在同一套频道、私信、线程、任务里协作。每个 Agent 有名字、身份、记忆和专长，跑在本机轻量 daemon 上，底层仍是 Claude、Codex、Hermes 等已有运行时：自己领任务、并行、交接。不是再做一个编码 CLI，也不是 [分布式共识里的 Raft](https://raft.github.io/)。

定位：人机**组队工作空间**。同公司形态对照：[Grok Bot](./grok-bot.md) 是岗位制工程多智能体（带队 Bot + 进仓执行）；[Proof](./proof.md) 是共写文档；[Herdr](./herdr.md) 是持有终端会话。多 Agent 怎么共处见 [多智能体治理](../concepts/multi-agent-governance.md)。

## Related

- [Raft（站点）](../references/raft-site.md)
- [Grok Bot](./grok-bot.md)
- [Puffo](./puffo.md)
- [Proof](./proof.md)
- [Herdr](./herdr.md)
- [Pilot Protocol](./pilot-protocol.md)
- [多智能体治理](../concepts/multi-agent-governance.md)
