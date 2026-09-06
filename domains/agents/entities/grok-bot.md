---
type: Entity
title: "Grok Bot"
description: "Cursor/xAI 侧长期驻场的工程多智能体产品：人做关键判断，Engineering Bot 带队，Cloud Agent 进仓执行。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T02:30:00Z }
related:
  - role-first-agent
  - mena
  - engineering-bot
  - playbook-feedback-loop
  - delivery-harness
sources:
  - /references/jinchenma-grok-bot-guide.md
  - /references/javaguide-grok-bot-engineering.md
---

# Summary

**Grok Bot** 是面向工程协作的多智能体产品形态（非「再开一个写代码窗口」）：人保留产品取舍与高影响决策；长期驻场的 [Engineering Bot](../concepts/engineering-bot.md) 接任务、跟进 Cloud Agent；Cloud Agent 进具体仓库改代码、测、开 PR。

验收强调可复查证据（截图须体现需求变化、测试命令与 Diff）；共享看板接续任务；运营/元 Bot 复盘失误后写入 Playbook，供其他 Bot 加载（见 [Playbook 反馈闭环](../concepts/playbook-feedback-loop.md)）。

对照本域 [Delivery Harness](../concepts/delivery-harness.md)：同属「仓外控制面」，Grok Bot 更强调角色分层与任务接续，Harness 更强调合同/边界/证据门禁/修复写回。

## Related

- [万字长文｜Grok Bot 从入门到精通](../references/jinchenma-grok-bot-guide.md)
- [Role-first Agent](../concepts/role-first-agent.md)
- [mena](./mena.md)
- [Engineering Bot](../concepts/engineering-bot.md)
- [Playbook 反馈闭环](../concepts/playbook-feedback-loop.md)
- [Delivery Harness](../concepts/delivery-harness.md)
- [一个人管 200+ 个 Agent！Grok Bot 这套 AI 编程玩法太炸裂了](../references/javaguide-grok-bot-engineering.md)
