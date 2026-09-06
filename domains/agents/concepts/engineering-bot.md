---
type: Concept
title: "Engineering Bot"
description: "长期运行、带岗位记忆与工具权限的工程角色 Bot：接任务、创建并跟进 Cloud Agent，人只处理关键判断。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T14:57:00Z }
related:
  - grok-bot
  - playbook-feedback-loop
sources:
  - /references/javaguide-grok-bot-engineering.md
---

# Definition

**Engineering Bot** 是 Cloud Agent 前面的一层「带队」角色，而不是又一个写代码窗口。

两层分工：

- **Engineering Bot**：长期守一个领域（如 iOS、桌面/CI、基础设施、Android、Harness）；持有岗位记忆、Skill 与验收要求；创建 Cloud Agent、读运行记录、卡住补消息、跑偏打断。
- **Cloud Agent**：进入具体代码库修改、测试、开 PR。

人保留产品取舍、权限不足、影响面大的修改；运行中的常规跟进交给 Engineering Bot。领域长期专守，是为了让发任务时带上的规格更具体，而不是把所有上下文塞进单次会话。

与「多开几个 IDE Agent」的差别：麻烦从任务跑起来之后才开始——权限等待、测试卡住、PR 无人查截图与 Diff——需要有人（或 Bot）在仓外持续跟进。

## Related

- [Grok Bot](/entities/grok-bot.md)
- [Playbook 反馈闭环](/concepts/playbook-feedback-loop.md)
