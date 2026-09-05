---
type: Concept
title: "知识与技能分离"
description: "知识回答「我们知道什么」，技能回答「我们该怎么做」；技能可回滚，知识层应持续积累且不随拒绝回滚。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:24:00Z }
sources:
  - /references/wikiskill-three-layer.md
---

# Definition

**知识与技能分离**避免把一次性经验直接焊进可执行技能：

- **知识**：跨任务可复用的模式、失败原因、修复方案与影响记录。
- **技能**：Agent 执行时读取的操作规程；应能溯源到对应知识模式。

关键约束：**Wiki 永不回滚**——候选 Skill 被 Gating 拒绝时，Skills 回到上一版，但 Wiki 保留「为何被拒」；下一轮 Proposer 可见历史，减少重复踩坑。混写两者时，改技能常丢失推理上下文；分层后知识持续积累，技能可受控试验。
