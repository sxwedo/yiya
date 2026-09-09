---
type: Concept
title: "Graph Engineering"
description: "把工作拆成节点（单任务）与边（真依赖）：去掉假边、用菱形并行汇聚，加 checker，静态优先于动态图。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-09T03:50:00Z }
related:
  - plan-mode-multiagent
  - loop-engineering
  - harness-self-improvement
  - coding-agent-workflow
  - multi-agent-governance
sources:
  - ../../../raw/articles/Mahax/Agents, Loops, Graphs. Everything You Need to Know in One Place.md
  - ../../../raw/articles/Mahax/Graph Engineering with Claude. What It Is and How to Actually Use It.md
  - ../../../raw/articles/Carlos E. Perez/From Loop Engineering to Graph Engineering－.md
---

# Definition

**Graph Engineering**（图工程）把 agent 工作流看成**节点 + 边**：节点是边界清晰的单任务；边只在「后者真要消费前者产出」时存在。线性 prompt 链是最简图，但假边制造无谓等待。

要点：

1. **假边测试**：连续步骤若不传递数据，删边、可并行。  
2. **菱形（Diamond）**：扇出并行收集 → 汇聚合成；并行节点须独立，汇聚须真需要全部输入。  
3. **Checker 节点**：并行层与汇聚之间验空结果/矛盾/跑题/低置信/格式，防坏输入稀释进终稿。  
4. **静态优先**：可重复任务先画死结构；范围随发现生长再用动态图（更难审计）。

相对 [Loop Engineering](./loop-engineering.md)：loop 偏「闭环自治怎么转」；本页偏「任务依赖图怎么铺与并行」。演进叙述见 Carlos「From Loop to Graph」raw（若已认领）。

## Related

- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Agents, Loops, Graphs. Everything You Need to Know in One Place.](../../../raw/articles/Mahax/Agents, Loops, Graphs. Everything You Need to Know in One Place.md)
- [Loop Engineering](./loop-engineering.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [多智能体治理](./multi-agent-governance.md)
- [打开 raw](../../../raw/articles/Mahax/Graph Engineering with Claude. What It Is and How to Actually Use It.md)
- [From Loop Engineering to Graph Engineering－](../../../raw/articles/Carlos E. Perez/From Loop Engineering to Graph Engineering－.md)
