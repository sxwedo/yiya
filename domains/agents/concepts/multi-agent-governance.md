---
type: Concept
title: "多智能体治理"
description: "即使每个 Agent 单独对齐，相互作用仍可能出系统问题。需要信任、冲突协议、多样性保护与共享协调面，而不是堆数量。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
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

**多智能体治理**把 [多智能体失效模式](./multi-agent-failure-modes.md) 收成制度：协调不会因为模型变强就自己长出来。即使每个 Agent 都「对齐」，相互作用仍可能产生意外系统问题——从众同错、独有信息被淹没、目标冲突时互相破坏。风险不是单 Agent 对齐的简单叠加。

需要给 Agent 的社会基础设施，而不是再加一个工人：

- **信任与来源**：谁的报告可以交叉验证、谁在说谎。人类有声誉和第三方仲裁；Agent 默认没有。
- **冲突协议**：目标不兼容时停、升级、还是隔离，不能等它们自己发明杀进程脚本。
- **多样性保护**：对抗低方差从众（同一分支名、同一标题、同一错误策略）。故意引入不同工具、不同提示、不同搜索区域，而不是克隆 45 份相同角色。
- **共享协调面**：中心论坛是论文提到的可能方案，有边界——论坛本身也会成为信息级联的扩音器。

工程落地不要和 [Engineering Bot](./engineering-bot.md) 的岗位分层混为一谈：那边是人—带队 Bot—执行 Agent；这边是多执行体之间的全局风险。叶小钗侧把协作收成可判断的模式（顺序/主管/路由/并行）和落地陷阱，见 [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)；先问该不该拆，再问怎么治，见 [多 Agent 架构选型](./multi-agent-architecture-selection.md)。

图上的 checker、计划对象的权限隔离、A2A 的 `contextId` 绑租户，都是治理的局部零件，见 [Graph Engineering](./graph-engineering.md)、[Plan 模式与主子 Agent](./plan-mode-multiagent.md)。


## Boundaries

即使每个 Agent 单独对齐，相互作用仍可能出系统问题。不是协作四种形，不是「再加一个 Agent」。

## Related

- [多 Agent 架构选型](./multi-agent-architecture-selection.md)
- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
- [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Graph Engineering](./graph-engineering.md)
- [多智能体失效模式](./multi-agent-failure-modes.md)
- [Raft](../entities/raft.md)
