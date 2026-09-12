---
type: Concept
title: "多 Agent 架构选型"
description: "Google/DeepMind/MIT 经验判据：先看单 Agent 基线与任务可分解性，再在 SAS / Independent / Centralized / Decentralized / Hybrid 中选型；防错靠验证而非堆数量，智能体数有最优值。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T15:05:00Z }
related:
  - multi-agent-collaboration-patterns
  - multi-agent-governance
  - multi-agent-failure-modes
  - plan-mode-multiagent
  - llm-as-judge-runtime
sources:
  - ../../../raw/articles/Datawhale/重磅！Google发布多智能体最佳实践！.md
---

# Definition

**多 Agent 架构选型**把「该不该上多 Agent、上哪种拓扑」从经验启发式换成可查询判据。Google Research、DeepMind 与 MIT 在约 260 个受控配置（6 基准 × 5 架构 × 3 模型族）上的结论：效果取决于**任务结构是否适合分工**，不取决于模型是否够新。论文：<https://arxiv.org/abs/2512.08296>（Datawhale 中文梳理）。

## 三条判据 + 一条贯穿约束

1. **单 Agent 基线**：基线已很高时，协调开销吃掉剩余空间。文中稳健分界约 **45%**——低于此多智能体更有空间，高于则收益递减。
2. **能否并行分解（且需要通信）**：「可拆」≠「切成子任务」；关键是拆开后各块是否提供**互补信息**、是否仍需通信。步骤固定、状态强共享时加协调常是浪费；工具维度多、可并行时协调才是杠杆。
3. **防错靠什么**：Independent（无通信并行）收益常只有 2～4 个百分点。Centralized 在聚合前交叉核验、Decentralized 靠互相质询——**验证环节**才是成功成本比，不是再加几个同提示词取平均。

**贯穿约束**：智能体数量有最优值；推理轮次随数量**超线性**涨（文中称涨幅指数约为经典 NN 参数缩放指数的两倍多）。错误会滚雪球。操作口诀：先 2～3 个证明逻辑，再扩；6 人系统不行时优先减人，而非先换更强模型。

## 五种架构（对照 SAS 基线）

| 架构 | 协调形态 | 通信量级（文中） | 何时倾向 |
| --- | --- | --- | --- |
| **SAS** | 单 Agent | — | 规划类、工具少、基线已够好 |
| **Independent** | 并行无通信 | 0 | 实现最简、收益通常最低 |
| **Centralized** | orchestrator 层级 + 聚合前验证 | O(r·n) | 分析/尽调等可分块再汇总 |
| **Decentralized** | 无中心、顺序辩论/互质询 | O(d·n) | 工具密集、可并行维度多 |
| **Hybrid** | 层级 + 横向 | O(r·n+p·m) | 最灵活也最贵；顺序任务上退化相对少 |

任务原型对照：规划（合成配方）→ 倾向 SAS；财务尽调式分析 → Centralized；Workbench 类多工具 → Decentralized。

与 [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)（工程侧顺序/主管/路由/并行与任务面）互补：本页偏**实证选型与成本形状**；与 [多智能体失效模式](./multi-agent-failure-modes.md)、[LLM-as-Judge Runtime](./llm-as-judge-runtime.md)（验证/裁判）同族。

## Related

- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
- [多智能体治理](./multi-agent-governance.md)
- [多智能体失效模式](./multi-agent-failure-modes.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
