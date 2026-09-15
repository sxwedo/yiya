---
type: Entity
title: "Grok Bot"
description: "Cursor/xAI 侧长期驻场的工程多智能体产品：人做关键判断，Engineering Bot 带队，Cloud Agent 进仓执行。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T02:30:00Z }
related:
  - role-first-agent
  - grok-build
  - raft
  - puffo
  - mena
  - engineering-bot
  - playbook-feedback-loop
  - delivery-harness
  - oto-dock
  - pstack
sources:
  - ../references/jinchenma-grok-bot-guide.md
  - ../references/javaguide-grok-bot-engineering.md
  - ../references/usegrokbot-site.md
  - ../../../raw/articles/Codez/Every AI tool you have used so far waits for you. You open it, you ask, it answers, you.md
  - ../../../raw/articles/Miles Deutscher/Grok Bot－ The Ultimate Guide.md
  - ../../../raw/articles/Matt Van Horn/Every Grok Bot Hack I Know (Aug 2026).md
  - ../../../raw/articles/lifcc/Grok Bot 上线 17 天。有好多人问我这玩意到底能干啥？.md
  - ../../../raw/articles/Mai Yang/X 上最值得关注的 21 个 Grok Bot 探索者.md
  - ../../../raw/articles/小互/Grok Bot 内部实践指南：.md
---

# Identity

**Grok Bot** 是面向工程协作的多智能体产品形态（非「再开一个写代码窗口」）：人保留产品取舍与高影响决策；长期驻场的 [Engineering Bot](../concepts/engineering-bot.md) 接任务、跟进 Cloud Agent；Cloud Agent 进具体仓库改代码、测、开 PR。

## Mechanism

验收强调可复查证据（截图须体现需求变化、测试命令与 Diff）；共享看板接续任务；运营/元 Bot 复盘失误后写入 Playbook，供其他 Bot 加载（见 [Playbook 反馈闭环](../concepts/playbook-feedback-loop.md)）。

对照本域 [Delivery Harness](../concepts/delivery-harness.md)：同属「仓外控制面」，Grok Bot 更强调角色分层与任务接续，Harness 更强调合同/边界/证据门禁/修复写回。社区怎么用见 UseGrokBot 站点（筛选公开帖与用例，不是产品本体）。

## Boundaries

不是再开一个写代码窗口，不是 [Grok Build](./grok-build.md) CLI，不是 [pstack](./pstack.md) 技能包。21 人探索者清单不在本页展开。

## Related

- [Role-first Agent](../concepts/role-first-agent.md)
- [Grok Build](./grok-build.md)
- [Raft](./raft.md)
- [OtoDock](./oto-dock.md)
- [Puffo](./puffo.md)
- [mena](./mena.md)
- [Engineering Bot](../concepts/engineering-bot.md)
- [Playbook 反馈闭环](../concepts/playbook-feedback-loop.md)
- [pstack](./pstack.md)
- [Delivery Harness](../concepts/delivery-harness.md)
