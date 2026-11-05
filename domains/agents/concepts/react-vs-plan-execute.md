---
type: Concept
title: "ReAct 与 Plan & Execute"
description: "Agent 两种执行范式的选型轴：边想边做（现算下一步、适应强、调用线性涨）vs 先规划再执行（显式计划、可审可控、偏航要重规划）；探索型走前者，结构化/强管控走后者，成熟架构两层叠用。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-26T15:00:00Z }
related:
  - plan-mode-multiagent
  - compound-retrieval-agent
  - graph-engineering
  - harness-runtime-layer
  - coding-agent-workflow
  - loop-engineering
sources:
  - ../../../raw/articles/算法狗/Agent三面P9追问：Plan & Execute与ReAct两种范式核心差异.md
---

# Definition

两种范式回答同一个问题：多步、要调工具的任务，「思考」和「行动」怎么排。

- **ReAct**（Reasoning + Acting）：Thought → Action → Observation 交织在一个循环里，下一步是**现算的**，没有提前定死的整体计划。走到哪一步，才根据当前反馈决定走向哪。
- **Plan & Execute**：Planner 先出完整任务分解 → Executor 照单执行 →（可选）Replanner 中途纠偏。执行前就对全局有分解方案，执行多半在「照图施工」。

对照：[Plan 模式与主子 Agent](./plan-mode-multiagent.md) 是 P&E 的企业级落地（计划是可持久化、可观察的运行对象）；[复合检索 Agent](./compound-retrieval-agent.md) 是 ReAct 闭环的检索实例；[Graph Engineering](./graph-engineering.md) 里「静态图优先于动态图」是同一取舍在编排层的说法；[Harness 运行时层](./harness-runtime-layer.md) 把 ReAct 循环列为运行时演化的一站。

## Mechanism

四条选型轴（算法狗，2026-10）：

1. **决策粒度**：ReAct 步步为营，环境一变下一步马上调，但每步都调一次模型，token 与延迟随步数线性涨。P&E 一次想清全局，执行可并行、计划可复用，调用次数少、成本可控；计划本身偏了，纠错要触发额外重规划，比 ReAct 贵。
2. **不确定性容忍**：探索型任务（边搜边定下一步搜什么）路径无法预知，ReAct 稳；结构确定、依赖清晰（查数→清洗→报表），提前规划避免 ReAct「走一步退半步」的摸索。
3. **可解释与可控**：P&E 的计划是显式的，执行前可人工 review「Agent 打算怎么做」——涉资金、对外发邮件的企业场景刚需。ReAct 的 Thought 动态展开，执行前看不到完整路径。
4. **工具失败鲁棒性**：ReAct 每步重看反馈，工具挂了下一轮天然感知并改道；P&E 没有 Replanner 时会顺着错计划走到底才暴露，纠错滞后。

场景归纳：ReAct → 开放调研、客服对话（用户下一句定下一步）、反馈驱动的网页自动化。P&E → 数据流水线、多步报告、重构类边界清晰任务；成本/延迟敏感；要先审方案再执行的企业流程。

两层叠用是成熟架构的常态：顶层 Plan & Execute 做任务分解（整体可控），子任务内部 ReAct 动态执行（局部灵活）。

## Boundaries

范式选型页，不是某个框架的安装指南，不是多 Agent 拓扑选型（那看智能体怎么分工，本页看单条执行流怎么组织）。答案不是二选一，是哪层用哪个。

## Related

- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [复合检索 Agent](./compound-retrieval-agent.md)
- [Graph Engineering](./graph-engineering.md)
- [Harness 运行时层](./harness-runtime-layer.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Loop Engineering](./loop-engineering.md)
