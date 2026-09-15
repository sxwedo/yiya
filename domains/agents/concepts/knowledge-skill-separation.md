---
type: Concept
title: "知识与技能分离"
description: "知识回答「我们知道什么」，技能回答「我们该怎么做」。Skill 被拒可回滚；Wiki 保留拒因，不随技能回滚。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - wikiskill-architecture
  - skills-sh
  - agent-skills
  - llm-wiki
  - open-knowledge-format
  - skill-whiteboard-video
sources:
  - ../references/wikiskill-three-layer.md
  - ../../../raw/articles/飞叔慢谈/OKF 工程：一种新的语义表达范式正在形成.md
---

# Definition

**知识与技能分离**（WikiSkill）避免把一次性经验焊进可执行规程。以前 EvoSkill / Trace2Skill / SkillOpt 分析完轨迹就直接改 Skill，经验用一次就丢。中间加持久 Wiki 之后，经验先沉淀再复用。

- **知识**：跨任务可复用的模式、失败原因、修复方案、影响记录。回答「我们知道什么」。
- **技能**：Agent 执行时读取的操作规程（`SKILL.md`）。回答「我们该怎么做」。应能溯源到对应知识模式（`PURPOSE.md` 指向 Pattern），改技能时能看见当初为什么存在。

硬约束：**Wiki 永不回滚。** Gating 拒绝候选 Skill 时，Skills 层回到上一版，Wiki 留下「为何被拒」和完整 diff。下一轮 Proposer 看得到历史，少重复踩坑。混写两者时，改技能常丢掉推理上下文；分层后知识持续积累，技能可受控试验。

训练/推理 rollout **不许访问 Wiki**，否则 Agent 直接查答案，轨迹失去参考价值。消融：去掉 Wiki 访问，平均分 63.7% → 48.7%（约 −15pt）。技能与规模互补：Qwen 9B+Skill 47.4% 超过 27B 裸模 39.4%；发现策略和执行策略可跨模型分工（9B 用 27B 进化出的技能 70.2% > 用自己的 63.4%）。

OKF 把同一分离写成个人知识库约定：raw 不可变，wiki 编纂可复利，skills 可回滚。产品落点见 [Open Knowledge Format](../../../shared/entities/open-knowledge-format.md)。三层怎么转见 [WikiSkill 三层架构](./wikiskill-architecture.md)。

白板成片是技能例子：skill 规定分幕和确认点，图像/TTS 仍是外挂工具，见 [字幕驱动白板手绘成片](./skill-whiteboard-video.md)。


## Boundaries

知识回答我们知道什么，技能回答该怎么做。拒 Skill 可回滚，Wiki 不随技能回滚。不是把规程焊进 wiki 正文。

## Related

- [WikiSkill 三层架构](./wikiskill-architecture.md)
- [skills.sh](../entities/skills-sh.md)
- [Agent Skills](../entities/agent-skills.md)
- [字幕驱动白板手绘成片](./skill-whiteboard-video.md)
- [LLM Wiki](../../../shared/concepts/llm-wiki.md)
- [Open Knowledge Format](../../../shared/entities/open-knowledge-format.md)
