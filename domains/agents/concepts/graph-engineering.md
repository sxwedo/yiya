---
type: Concept
title: "Graph Engineering"
description: "节点是有合同的单任务，边只在真传递产出时存在。删假边、菱形并行、checker 拦坏输入；静态图优先于动态图。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - multi-agent-collaboration-patterns
  - graph-driven-agent-workflow
  - plan-mode-multiagent
  - loop-engineering
  - harness-self-improvement
  - coding-agent-workflow
  - multi-agent-governance
sources:
  - ../../../raw/articles/wast3/Graph Engineering: How to Run 1,000 AI Agents in Parallel From One Prompt.md
  - ../../../raw/articles/Anatoli Kopadze/Graph Engineering explained: what it is, when to use it and when not to.md
  - ../../../raw/articles/Mahax/Agents, Loops, Graphs. Everything You Need to Know in One Place.md
  - ../../../raw/articles/Mahax/Graph Engineering with Claude. What It Is and How to Actually Use It.md
  - ../../../raw/articles/Carlos E. Perez/From Loop Engineering to Graph Engineering－.md
  - ../../../raw/articles/腾讯技术工程/Loop Engineering 已死？ 一文带你了解Graph Engineering.md
---

# Definition

**Graph Engineering** 把 agent 工作流看成计划图，只回答两件事：哪些活要发生，谁必须等谁。节点（盒子）是边界清晰的单任务：一个输入、一个输出。边（箭头）只在后者真要消费前者产出时存在。线性 prompt 链是最简图，假边制造无谓等待。

节点能被下一节点消费，靠的是**合同**：固定输出形状。一堵自由文本墙只有人能读；有合同的节点，下一节点不用猜。

要点：

1. **假边测试**：连续步骤若不传递数据，删边，可并行。这是让图变快的第一刀。
2. **菱形（Diamond）**：扇出并行收集 → 汇聚合成。并行节点必须独立；汇聚必须真需要全部输入，否则又是假边。
3. **Checker**：并行层与汇聚之间验空结果、矛盾、跑题、低置信、格式。坏输入进终稿会被稀释，看起来像「模型笨」，其实是图没验。
4. **静态优先**：可重复任务先画死结构，可审计、可恢复。范围随发现生长再用动态图，更难追责。

相对 [Loop Engineering](./loop-engineering.md)：loop 是一个 agent 对一件事 try-check-adjust；graph 是多条 loop 互相等产出。Loop 解决持续工作；Graph 解决多节点组织成可观测系统。杠杆在确定性（独立 Verifier、代码落在边上），不在堆智能体数量。

何时不用图：单人单任务闭环、步骤天然串行且共享全部上下文、还没有稳定合同。先 loop 跑通验证，再拆边。与 [Plan 模式与主子 Agent](./plan-mode-multiagent.md) 互补：那边计划是运行对象；这边依赖是可并行的图。


## Boundaries

何时不用图：单人单任务闭环、步骤天然串行且共享全部上下文、还没有稳定合同。先 loop 跑通再拆边。不是堆智能体数量。

## Related

- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
- [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Loop Engineering](./loop-engineering.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [多智能体治理](./multi-agent-governance.md)
