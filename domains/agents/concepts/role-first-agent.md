---
type: Concept
title: "Role-first Agent"
description: "以长期岗位而不是一轮聊天或一个代码仓组织 Agent：稳定职责、可验收交付、可交接、有权限边界。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - ai-job-search
  - multi-agent-collaboration-patterns
  - grok-bot
  - engineering-bot
  - playbook-feedback-loop
sources:
  - ../../../raw/articles/Rahul/10 Ways People Are Making Money With GPT-6 Astra.md
  - ../../../raw/articles/Codez/How to Build a team of AI Agents that actually work together in 8 Steps (Full-course).md
  - ../references/jinchenma-grok-bot-guide.md
---

# Definition

**Role-first Agent** 从「这份工作长期归谁」出发，而不是从一轮聊天或一个代码仓出发。岗位说明保存长期职责、数据源、判断标准与交付物；单次消息只带当天任务。适合结果反复出现、工具相对稳定、方法可逐步说清、可验收、可划审批边界的工作。

反例：先挂「营销总监」空头衔却没有可检查的产出。应改成具体长期交付，例如「每周 10 个可跟进选题，附来源与理由」。没有验收形状的角色，只是换皮聊天窗。

与 [Engineering Bot](./engineering-bot.md) 同属仓外长期角色：Engineering Bot 专指带队 Cloud Agent 做工程交付（领域记忆、30 分钟扫看板、截图/测试/Diff 过关）；Role-first 更泛——情报、选题、运营、客服都可以是岗位。产品组合见 [Grok Bot](../entities/grok-bot.md)：Bot / Skill / 定时 / 群聊 / 连接器。失误写回岗位默认见 [Playbook 反馈闭环](./playbook-feedback-loop.md)。

组队时不要把 Role-first 理解成「克隆 20 个相同角色」。多执行体的从众和冲突是治理问题，见 [多智能体治理](./multi-agent-governance.md)。一个岗位一份合同（输入、输出、权限），才能放进图里当节点，见 [Graph Engineering](./graph-engineering.md)。

## Related

- [AI Job Search](../entities/ai-job-search.md)
- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
- [Grok Bot](../entities/grok-bot.md)
- [Engineering Bot](./engineering-bot.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
