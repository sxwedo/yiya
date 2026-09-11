---
type: Concept
title: "评测驱动开发"
description: "用有纪律的评测与错误分析循环导航 AI 系统迭代：决定测什么、怎么测、何时让 LLM/人当裁判，并让评测本身随项目进化。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:25:00Z }
related:
  - llm-as-judge-runtime
  - agent-self-evolution-flywheel
  - evidence-gate
  - four-layer-agent-memory
  - unreliable-components-reliable-systems
  - discovery-loop
  - looped-transformer
sources:
  - ../references/ng-evals-watershed.md
  - ../../../raw/articles/Hugo Vergnes/Training a 3.8B LLM to 0.384 CORE for $998.md
  - ../../../raw/articles/阿里技术/相关性 ≠ 因果性：因果推断在 AI 评测归因中的方法与实践.md
  - ../../../raw/articles/得物技术/推荐系统体验的数字化突破：得物自动化评测平台的技术实践｜AICon 文章整理.md
  - ../../../raw/articles/字节跳动技术团队/火山引擎开源 Agent 驱动的搜索自迭代技术.md
---

# Definition

**评测驱动开发**（eval-driven development）把 evals + 错误分析当作迭代的方向盘：没有它，在多方向上瞎试；有了它，每一步踩在上一步的证据上。

实践要点：

- 看 trace 与输出，做探索性分析，再结合产品/业务判断什么值得测。
- 在确定性代码评测、LLM-as-judge、人工评测之间选型，并学会「评测你的评测」。
- 正确做法随项目与阶段变化——纪律在于循环，不在于固定清单。

与「会调 API」区分：demo 验证可行性；evals 支撑可靠性。可与 agents 域的 Evidence Gate 对照：都强调状态/结论需证据，此处焦点在工程迭代导航。

个人从零训练也可把单一公开分数当方向盘：Hugo Vergnes 用 CORE 导航 3.8B / $998 的训练线，早年失败跑（cosine 衰减到 0）在分数上立刻可见。

复杂系统还要分清相关与因果：指标一起动不等于某组件是因。搜索调参则把「提出假设 → 分配评测预算 → 验证收益」交给 Agent，人只审候选配置。主观体验指标可用 LLM 评测员把反馈从周级收到小时级，但仍需人机校验对齐。

## Related

- [LLM-as-Judge Runtime](../../agents/concepts/llm-as-judge-runtime.md)
- [用不可靠组件造可靠系统](./unreliable-components-reliable-systems.md)
- [Agent 自进化飞轮](../../agents/concepts/agent-self-evolution-flywheel.md)
- [Evidence Gate](../../agents/concepts/evidence-gate.md)
- [四层 Agent 记忆](../../agents/concepts/four-layer-agent-memory.md)
- [Discovery Loop](../../../shared/entities/discovery-loop.md)
- [Looped Transformer](./looped-transformer.md)
- [Artificial Analysis](../../agents/entities/artificial-analysis.md)
- [SearchCLI](../../agents/entities/searchcli.md)
