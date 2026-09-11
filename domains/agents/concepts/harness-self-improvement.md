---
type: Concept
title: "Harness 自改进"
description: "通过持久化改记忆、Skill、Prompt、工具与工作流来进化 Agent；即时生效、可回滚，是当前最高性价比的自进化层。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:22:00Z }
related:
  - agent-oncall
  - graph-engineering
  - loop-engineering
  - agent-self-evolution-flywheel
  - delivery-harness
  - evidence-gate
  - minimal-agent-harness
  - harness-runtime-layer
  - hermes-agent
sources:
  - ../references/agent-self-evolution-flywheel.md
  - ../../../raw/articles/Carlos E. Perez/From Loop Engineering to Graph Engineering－.md
  - ../../../raw/articles/腾讯技术工程/从一次 LLM 调用到完整 Harness，Agent 到底经历了什么？.md
---

# Definition

**Harness 自改进**改的是 Agent 配套系统，而不是单次输出草稿，也不是模型权重：

- **Artifacts 迭代**：改本次产物，任务结束 Agent 无变化（打草稿）。
- **Harness 自改进**：改 Skill/Prompt/记忆/工具配置等，跨会话生效，可立刻回滚。
- **Model 进化**：改参数，持久最强但成本与风险最高。

当下主战场是 Harness：即时、可控；收益可来自更少迭代与更低 token，而不动模型。与 Delivery Harness / Minimal Harness 概念相邻：此处强调「配套系统可被评测驱动地持续改写」。

[Hermes Agent](../entities/hermes-agent.md) 把这条路做成运行时：Background Review 从 Session Archive 提炼 Memory 与 Skills，问的是第二次少走弯路，而不是把聊天记录当记忆。对照 [Harness 运行时层](./harness-runtime-layer.md)。

## Related

- [Agent On-call](./agent-oncall.md)
- [Graph Engineering](./graph-engineering.md)
- [Loop Engineering](./loop-engineering.md)
- [Agent 自进化飞轮](./agent-self-evolution-flywheel.md)
- [Delivery Harness](./delivery-harness.md)
- [Evidence Gate](./evidence-gate.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Harness 运行时层](./harness-runtime-layer.md)
- [Hermes Agent](../entities/hermes-agent.md)
