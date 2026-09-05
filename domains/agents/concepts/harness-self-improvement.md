---
type: Concept
title: "Harness 自改进"
description: "通过持久化改记忆、Skill、Prompt、工具与工作流来进化 Agent；即时生效、可回滚，是当前最高性价比的自进化层。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:22:00Z }
sources:
  - /references/agent-self-evolution-flywheel.md
---

# Definition

**Harness 自改进**改的是 Agent 配套系统，而不是单次输出草稿，也不是模型权重：

- **Artifacts 迭代**：改本次产物，任务结束 Agent 无变化（打草稿）。
- **Harness 自改进**：改 Skill/Prompt/记忆/工具配置等，跨会话生效，可立刻回滚。
- **Model 进化**：改参数，持久最强但成本与风险最高。

当下主战场是 Harness：即时、可控；收益可来自更少迭代与更低 token，而不动模型。与 Delivery Harness / Minimal Harness 概念相邻：此处强调「配套系统可被评测驱动地持续改写」。
