---
type: Concept
title: "Self-growing Knowledge Base"
description: "人留下原料，AI 整理、补实体页、接到旧主题上。知识库是编译器，不是云同步仓库；新材料应能续写旧页。"
status: draft
domain: shared
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - llm-wiki
  - wikiskill-architecture
  - obsidian
  - grokipedia
sources:
  - ../../raw/articles/rvaniaaa/The Second Brain Is Not a Storage System. It's a Compiler..md
  - ../../raw/articles/金尘马/你需要的不再是一个云笔记，而是一个会自己生长的AI知识库.md
  - ../../raw/articles/老张来了/Karpathy 最新分享：用 LLM 搭建个人知识库，告别 RAG 的低效循环.md
---

# Definition

**Self-growing Knowledge Base** 针对云笔记「保存容易、长期维护难」：分类、标签、回链全靠人，最后要么不记，要么变成难搜的仓库。第二大脑若只是存储，新笔记不会改变旧结构；若当成**编译器**，每次原料进来都更新可执行的知识图。

拆开两件事：

- **人**：记录与判断。文字、录音转写即可，不必当时分类完美。
- **AI**：维护。留原文、抽重点、认人/公司/项目、补长期实体页、把新内容接在旧主题上。会议和白天随手记，可以晚上批量整理，让下一次沟通接着上一次。

Karpathy 侧对照：个人 wiki 用 LLM 编纂，告别每次提问都 RAG 重挖同一批碎片。持久页复利；检索是导航，不是每次从零合成答案。

验收很土：先从一种常出现的资料试起，看新信息**能否续写旧页**。续写不了，就还是仓库。与 [LLM Wiki](./llm-wiki.md) 同族（Raw 不可变、Wiki 可复利）。WikiSkill 把同一逻辑给 Agent 技能进化，见 [WikiSkill 三层架构](../../domains/agents/concepts/wikiskill-architecture.md)。本页偏普通人 / OPC：关系维护、创作草稿，不是论文训练循环。

## Related

- [LLM Wiki](./llm-wiki.md)
- [WikiSkill 三层架构](../../domains/agents/concepts/wikiskill-architecture.md)
- [Obsidian](../entities/obsidian.md)
- [Grokipedia](../entities/grokipedia.md)
