---
type: Concept
title: "Playbook 反馈闭环"
description: "局部失误变成全队下次默认行为：复盘 → 更新共享 Playbook / AGENTS.md / CI / Skill，而不是停在聊天提醒里。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - agent-oncall
  - graph-driven-agent-workflow
  - llm-as-judge-runtime
  - loop-engineering
  - role-first-agent
  - grok-bot
  - agent-self-evolution-flywheel
  - delivery-harness
  - engineering-bot
sources:
  - ../../../raw/articles/Sachin Malhotra/Claude on call: How Claude Tag serves as Anthropic’s first responder for CI／CD failures.md
  - ../references/javaguide-grok-bot-engineering.md
---

# Definition

**Playbook 反馈闭环**把一次局部失误写成下次默认行为，而不是停在聊天复盘里。和 [Delivery Harness](./delivery-harness.md) 的 Repair Loop 同族：终点是「下一次同类错误更早失败」。

Grok Bot 侧有一个不写代码的运营 Bot（Jenny）：每天凌晨 5 点和各工程 Bot 做 1:1，过 Playbook 和阻塞，也给新 Bot 入职。某 Bot 过早结束任务，Jenny 回看当时判断、找到漏掉的步骤、更新 Playbook、通知其他 Bot 加载。下次同类任务，新规则已经在上下文里。普通项目不必做一个 Jenny。

落到仓库的最小形态：

- 连续跑错测试命令 → 正确命令和适用目录写入 `AGENTS.md` / Skill
- 漏掉合并前检查 → 用 CI 卡住，而不是靠提醒
- Code Review 总漏某类问题 → 补专用 Review Skill

密钥、禁写目录等硬边界进权限规则 / Hook / Sandbox。聊天里补一句只管当前会话，下一次未必还记得。

Claude Tag（Anthropic 内部 CI 第一响应）是同一纪律的值班形态：记忆 + 连接 + 日程 + Skill/lessons，取证后出 SITREP。值班 Agent 若只修这一次、不把 lessons 写回，飞轮第二圈仍从零开始。见 [Agent On-call](./agent-oncall.md)。

不要和 [Agent 自进化飞轮](./agent-self-evolution-flywheel.md) 的评测齿混为一谈：飞轮要可信评测才能决定「这经验该不该存」；Playbook 闭环往往从一次人看过的失误开始，规模更小、落地更快。先写进默认行为，再考虑自动挖掘轨迹。

## Related

- [Agent On-call](./agent-oncall.md)
- [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
- [Loop Engineering](./loop-engineering.md)
- [Role-first Agent](./role-first-agent.md)
- [Grok Bot](../entities/grok-bot.md)
- [Agent 自进化飞轮](./agent-self-evolution-flywheel.md)
- [Delivery Harness](./delivery-harness.md)
- [Engineering Bot](./engineering-bot.md)
