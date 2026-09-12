---
type: Concept
title: "多智能体治理"
description: "多 Agent 系统的核心不是堆叠数量，而是提供信任、冲突解决与多样性保护等社会基础设施。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:27:00Z }
related:
  - multi-agent-architecture-selection
  - multi-agent-collaboration-patterns
  - graph-driven-agent-workflow
  - plan-mode-multiagent
  - graph-engineering
  - multi-agent-failure-modes
  - raft
sources:
  - ../../../raw/articles/叶小钗/一文讲透多Agent协作：4种模式、3个判断标准、4大工程落地陷阱.md
  - ../../../raw/articles/Rahul/10 Ways People Are Making Money With GPT-6 Astra.md
  - ../../../raw/articles/Codez/How to Build a team of AI Agents that actually work together in 8 Steps (Full-course).md
  - ../references/anthropic-multiagent-failures.md
---

# Definition

**多智能体治理**强调：即使每个 Agent 单独对齐，相互作用仍可能产生意外系统性问题；协调不会随模型变强自动生长。

需要为 Agent 设计社会基础设施，例如：

- 信任与来源可靠性判断
- 冲突解决协议
- 多样性保护（对抗低方差从众）
- 共享协调面（如中心论坛）及其边界

与 Engineering Bot 分层不同：此处焦点是多执行体之间的全局风险与制度设计，而非「人—带队 Bot—执行 Agent」的岗位分工。

## Related

- [多 Agent 架构选型](./multi-agent-architecture-selection.md)
- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
- [10 Ways People Are Making Money With GPT-6 Astra](../../../raw/articles/Rahul/10 Ways People Are Making Money With GPT-6 Astra.md)
- [How to Build a team of AI Agents that actually work together in 8 Steps (Full-course)](<../../../raw/articles/Codez/How to Build a team of AI Agents that actually work together in 8 Steps (Full-course).md>)
- [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Graph Engineering](./graph-engineering.md)
- [多智能体失效模式](./multi-agent-failure-modes.md)
- [Raft](../entities/raft.md)
