---
type: Concept
title: "LLM-as-Judge Runtime"
description: "把 LLM 裁判从离线评测搬进 agent 运行时：拆分判据、成对比较、审过程而非只审终答、多裁判分歧升级，并用确定性检查包住裁判。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-09T13:15:00Z }
related:
  - evidence-gate
  - loop-engineering
  - delivery-harness
  - playbook-feedback-loop
  - eval-driven-development
sources:
  - ../../../raw/articles/Codez/How to Build a team of AI Agents that actually work together in 8 Steps (Full-course).md
  - ../../../raw/articles/Josh Rosen/LLM-as-Judge Architectures: Putting Evals Into Your Agent Runtime.md
---

# Definition

**LLM-as-Judge Runtime**（运行时 LLM 裁判）：评测不只在数据集上离线打分，而作为 **agent 控制流的一部分**——在关键检查点判断「能否继续 / 是否可用 / 证据是否支撑」。

常见架构模式（Josh Rosen）：

1. **另模裁判**：工作模型 vs 裁判模型；窄属性可用更小/专用裁判控成本。  
2. **拆开判断**：完整度、证据支撑、是否完成要求等分项，再结构化合成（如 DAG eval）。  
3. **成对比较**：比「打 7 还是 8」更稳；可用于选计划、双路分析或动作提交前对照。  
4. **审过程**：长任务要评检索/工具/步骤，不只终答；裁判散落在轨迹检查点。  
5. **多裁判**：分歧可触发更强模型重试、补证据或人审。  
6. **裁判元评**：对人标校准、防位置/文风偏好。  
7. **确定性包住裁判**：能 schema/测试/策略引擎查的，别全扔给 LLM。

与 [Evidence Gate](./evidence-gate.md)、[Loop Engineering](./loop-engineering.md) 互补；工程迭代侧见 [评测驱动开发](../../engineering/concepts/eval-driven-development.md)。

## Related

- [How to Build a team of AI Agents that actually work together in 8 Steps (Full-course)](../../../raw/articles/Codez/How to Build a team of AI Agents that actually work together in 8 Steps (Full-course).md)
- [Evidence Gate](./evidence-gate.md)
- [Loop Engineering](./loop-engineering.md)
- [Delivery Harness](./delivery-harness.md)
- [Playbook Feedback Loop](./playbook-feedback-loop.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
- [打开 raw](../../../raw/articles/Josh Rosen/LLM-as-Judge Architectures: Putting Evals Into Your Agent Runtime.md)
