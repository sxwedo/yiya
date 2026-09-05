---
type: Concept
title: "WikiSkill 三层架构"
description: "把 Agent 变强拆成 Raw（不可变轨迹）、Wiki（可复用知识）、Skills（可执行技能）三层，技能从知识生长。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:24:00Z }
sources:
  - /references/wikiskill-three-layer.md
---

# Definition

**WikiSkill 三层架构**把「经验」与「知识」拆开，再让技能从知识中长出来：

1. **Raw Layer** — 不可变执行轨迹（推理、工具调用、结果），为进化保留事实依据。
2. **Wiki Layer** — 把轨迹编译成结构化知识（patterns、logs、skill-impact）；跨迭代积累。
3. **Skills Layer** — 当前生效技能（如 `SKILL.md`）+ 溯源（`PURPOSE.md` 指向对应 Pattern）。

进化循环：用当前 Skill 跑 rollout → Maintainer 更新 Wiki → Proposer 基于 Wiki 提补丁 → Gating 在验证集决定接受/回滚。训练推理阶段不访问 Wiki，避免「查答案」污染轨迹。
