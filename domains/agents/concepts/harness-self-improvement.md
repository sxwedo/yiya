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
  - ../../../raw/articles/Claude/How Warp builds self-improving agents on Claude.md
  - ../../../raw/articles/Claude/New in Claude Managed Agents： dreaming, outcomes, and multiagent orchestration.md
  - ../../../raw/articles/腾讯技术工程/Agent开始“自我进化”：会出题、会反思，还会自己长出新技能.md
---

# Definition

**Harness 自改进**改的是 Agent 配套系统，而不是单次输出草稿，也不是模型权重：

- **Artifacts 迭代**：改本次产物，任务结束 Agent 无变化（打草稿）。
- **Harness 自改进**：改 Skill/Prompt/记忆/工具配置等，跨会话生效，可立刻回滚。
- **Model 进化**：改参数，持久最强但成本与风险最高。

当下主战场是 Harness：即时、可控；收益可来自更少迭代与更低 token，而不动模型。与 Delivery Harness / Minimal Harness 概念相邻：此处强调「配套系统可被评测驱动地持续改写」。

[Hermes Agent](../entities/hermes-agent.md) 把这条路做成运行时：Background Review 从 Session Archive 提炼 Memory 与 Skills，问的是第二次少走弯路，而不是把聊天记录当记忆。对照 [Harness 运行时层](./harness-runtime-layer.md)。

Warp 把同一层写成双 Skill 环：内圈是领域规程（评审/分诊），人在已有工作流里留反馈；外圈 Improver 定时读反馈、对内圈 Skill 提最小 diff，走普通 PR。Skill 是稳定的「怎么做」，不是推理时乱写的 memory。反馈要可执行（为什么不好），Improver 可跨 Agent 复用。

Managed Agents 的 Dreaming 是会话间整理：扫历史 session 与 memory store，抽出反复犯错与团队偏好，可自动写回或等人审。Outcomes 用独立 grader（另开上下文）对照 rubric，不过关就打回；这是 [LLM-as-Judge Runtime](./llm-as-judge-runtime.md) 的托管形。

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
