---
type: Concept
title: "Graph-Driven Agent Workflow"
description: "用知识图状态动态选工作与路由：固定 schema/gate，查询式 launch，按节点状态分流，永久记录纠错，并由人审元循环提议改规则。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-09T15:55:00Z }
related:
  - graph-engineering
  - loop-engineering
  - evidence-gate
  - playbook-feedback-loop
  - multi-agent-governance
sources:
  - ../../../raw/articles/wast3/Graph Engineering: How to Run 1,000 AI Agents in Parallel From One Prompt.md
  - ../../../raw/articles/Mr. Buzzoni/300 AGENTS, ONE GRAPH, AND A LOOP THAT EDITS THE LOOP.md
---

# Definition

**Graph-Driven Agent Workflow**（图驱动 Agent 工作流）把 graph 从「结果图」升级为下一轮工作的调度依据：系统不是每次跑固定名单，而是查询图状态，决定哪些节点要跳过、增量检查、补证据、双路核验或全量研究。

按文中 14 步可压成四层：

1. **Spine**：挑高频且可逆任务；先写可机器验的停条件与硬上限；流程进 `SKILL.md`；gate 在执行 agent 外部。  
2. **Graph**：先定 `SCHEMA.md`、别名表与固定返回结构；先落全节点，再基于证据画边，避免阅读顺序偏置。  
3. **Dynamic workflow**：launch 是图查询，不是固定 list；按 fresh/stale/thin/contradicted/new 分流；失败理由带回重试，二败转人工。  
4. **Routine + review**：定时 + 事件触发；纠错写进 `CONSTRAINTS.md`；每周 fresh-context 元循环只**提议 diff**，由人批准，禁止自行改掉约束。

目录职责也应单写者：launches → returns → graph → queries → append-only runs，既防覆盖，也保留「为什么图这么说」的追溯链。

与 [Graph Engineering](./graph-engineering.md)（依赖图）、[Loop Engineering](./loop-engineering.md)（闭环自治）、[Evidence Gate](./evidence-gate.md)（外部验收）相接；本页专注它们的**搭建顺序与状态驱动调度**。

## Related

- [Graph Engineering: How to Run 1,000 AI Agents in Parallel From One Prompt](<../../../raw/articles/wast3/Graph Engineering: How to Run 1,000 AI Agents in Parallel From One Prompt.md>)
- [Graph Engineering](./graph-engineering.md)
- [Loop Engineering](./loop-engineering.md)
- [Evidence Gate](./evidence-gate.md)
- [Playbook Feedback Loop](./playbook-feedback-loop.md)
- [多智能体治理](./multi-agent-governance.md)
- [打开 raw](<../../../raw/articles/Mr. Buzzoni/300 AGENTS, ONE GRAPH, AND A LOOP THAT EDITS THE LOOP.md>)
