---
type: Concept
title: "Role-first Agent"
description: "以长期岗位（而非单次对话或单仓项目）组织 Agent：稳定职责、可验收交付、可交接与权限边界。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T10:15:00Z }
related:
  - grok-bot
  - engineering-bot
  - playbook-feedback-loop
sources:
  - /references/jinchenma-grok-bot-guide.md
---

# Definition

**Role-first Agent** 从「这份工作长期归谁」出发，而不是从一轮聊天或一个代码仓出发。岗位说明保存长期职责、数据源、判断与交付；单次消息只带当天任务。适合结果反复出现、工具相对稳定、方法可逐步说清、可验收、可划审批边界的工作。

与 [Engineering Bot](./engineering-bot.md) 同属「仓外长期角色」一族：Engineering Bot 强调带队 Cloud Agent 做工程交付；Role-first 更泛化到跨软件岗位（情报、选题、运营等）。产品侧示例见 [Grok Bot](../entities/grok-bot.md) 的 Bot / Skill / 定时 / 群聊 / 连接器组合。

反例：先挂「营销总监」等空头衔却没有可验收结果——应改成具体、可检查的长期交付（如「每周 10 个可跟进选题 + 来源与理由」）。

## Related

- [Grok Bot](../entities/grok-bot.md)
- [Engineering Bot](./engineering-bot.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [万字长文｜Grok Bot 从入门到精通](../references/jinchenma-grok-bot-guide.md)
