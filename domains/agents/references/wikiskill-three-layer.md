---
type: Reference
title: "谷歌重磅发布WikiSkill，技能可以自己进化了！"
description: "Datawhale 解读 Google Research WikiSkill：Raw / Wiki / Skills 三层架构，让技能从持久知识中进化。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:24:00Z }
resource: /raw/library/2026/09/wikiskill-three-layer/谷歌重磅发布WikiSkill，技能可以自己进化了！.md
sources: []
---

# Notes

- 论文：https://arxiv.org/abs/2608.27454
- 相对 EvoSkill 等「轨迹直接改 Skill」：中间加持久 Wiki，经验先沉淀再复用。
- 循环：Inference → Wiki Maintainer → Skill Proposer → Gating（拒则回滚 Skill，Wiki 不回滚）。
- 实验要点：技能与规模互补；9B+Skill 可超 27B 裸模；技能可跨模型迁移；去掉 Wiki 访问掉分约 15pt。
- 与本库 LLM Wiki（raw → 编纂 → skills/概念）高度同构，可对照养护约定。
