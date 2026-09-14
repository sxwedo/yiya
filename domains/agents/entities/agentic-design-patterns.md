---
type: Entity
title: "Agentic Design Patterns"
description: "Antonio Gullí（Google）Agent 模式书：21 种模式，Level 0 不是 Agent。本库有笔记仓书签 + 一篇读书笔记，未灌全书。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - hello-agents
  - four-layer-agent-memory
  - advisor
  - multi-agent-governance
sources:
  - ../references/evoiz-agentic-design-patterns-github.md
  - ../../../raw/articles/Yanhua/Agentic Design Patterns：一本让我重新理解－－Agent 到底是什么－－的书.md
---

# Summary

**Agentic Design Patterns** 指 Antonio Gullí（Google 工程总监）那本把 Agent 开发拆成 21 种设计模式的书（Yanhua 笔记写 453 页）。上游笔记仓 [evoiz/Agentic-Design-Patterns](https://github.com/evoiz/Agentic-Design-Patterns)。本库**未灌全书**；稳定依据是 Yanhua 的读书笔记。Ng 的 Agentic AI 课不是同一本书，不往本页堆。

笔记里最狠的判断：Level 0 裸 LLM（没工具、没记忆、不会行动）**不是 Agent**。Level 1 工具使用者——自己判断何时调、调什么、结果怎么用。Level 2 战略思考者：规划 + Context Engineering（筛选、裁剪、打包；短小聚焦的上下文），以及自我反思。Level 3 多 Agent：别造全能 super agent，通信拓扑从单 Agent 到自定义混合。

Context Engineering 四层：system prompt；外部数据（RAG/工具返回）；隐式数据（身份、历史、环境）；反馈回路（自动评估、改下次上下文策略）。Reflection：Producer 与 Critic **必须两个 Agent、两套 prompt**；同一 persona 审自己会说「挺好的」。循环有成本，笔记建议最大迭代约 3，Critic 满意就停。Multi-Agent 先问「是否真需要多个」；Level 2 + Reflection 往往够。Memory 三层 Session / State / 持久 Memory，和本库 [四层 Agent 记忆](../concepts/four-layer-agent-memory.md) 可对照但不是同一套生命周期（Working/Session/User/Agent）。

第二模型旁听见 [Advisor](../concepts/advisor.md)。多执行体制度见 [多智能体治理](../concepts/multi-agent-governance.md)。入门构建书见 [从零开始构建智能体](./hello-agents.md)。

## Related

- [从零开始构建智能体](./hello-agents.md)
- [四层 Agent 记忆](../concepts/four-layer-agent-memory.md)
- [Advisor](../concepts/advisor.md)
- [多智能体治理](../concepts/multi-agent-governance.md)
