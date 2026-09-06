---
type: Concept
title: "评测驱动开发"
description: "用有纪律的评测与错误分析循环导航 AI 系统迭代：决定测什么、怎么测、何时让 LLM/人当裁判，并让评测本身随项目进化。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:25:00Z }
related:
  - agent-self-evolution-flywheel
  - evidence-gate
  - unreliable-components-reliable-systems
sources:
  - /references/ng-evals-watershed.md
---

# Definition

**评测驱动开发**（eval-driven development）把 evals + 错误分析当作迭代的方向盘：没有它，在多方向上瞎试；有了它，每一步踩在上一步的证据上。

实践要点：

- 看 trace 与输出，做探索性分析，再结合产品/业务判断什么值得测。
- 在确定性代码评测、LLM-as-judge、人工评测之间选型，并学会「评测你的评测」。
- 正确做法随项目与阶段变化——纪律在于循环，不在于固定清单。

与「会调 API」区分：demo 验证可行性；evals 支撑可靠性。可与 agents 域的 Evidence Gate 对照：都强调状态/结论需证据，此处焦点在工程迭代导航。

## Related

- [用不可靠组件造可靠系统](./unreliable-components-reliable-systems.md)
- [Agent 自进化飞轮](../../agents/concepts/agent-self-evolution-flywheel.md)
- [Evidence Gate](../../agents/concepts/evidence-gate.md)
