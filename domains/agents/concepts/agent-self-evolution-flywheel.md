---
type: Concept
title: "Agent 自进化飞轮"
description: "评测→记忆→落地→控制四齿咬合的工程闭环：每环输出成为下一环输入，靠回流持续转动。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:22:00Z }
related:
  - delivery-harness
  - eval-driven-development
  - harness-self-improvement
  - playbook-feedback-loop
sources:
  - ../references/agent-self-evolution-flywheel.md
  - ../../../raw/articles/腾讯技术工程/Agent开始“自我进化”：会出题、会反思，还会自己长出新技能.md
  - ../../../raw/articles/阿里云云原生/让 Agent 越用越准、成本越来越低：AgentLoop 的 Agent 经验自进化闭环.md
---

# Definition

**Agent 自进化飞轮**把拆散的评测、记忆、Self-Improve、人机协作接成同一闭环：

1. **信号** — 评测感知缺陷，决定记忆与 Skill 更新方向（评测失真则飞轮反转）。
2. **积累** — 把信号沉淀为可治理经验（版本、遗忘、冲突、溯源），而非堆向量。
3. **落地** — 从「知道」到「改好」：候选修复经门控/灰度；线上失败回流为下一轮种子。
4. **控制** — 人当教练与裁判，防隐蔽累积偏移；冷启动第一圈须人推。

瓶颈通常不在单点技术，而在环节间数据通路是否接通。研究侧三条路：经验/Skill 外挂（不改权重）、RL 把经验写进权重、零数据互出题；被低估的是「总结者」本身该不该训练。

## Related

- [Delivery Harness](./delivery-harness.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
- [AgentLoop](../entities/agentloop.md)
