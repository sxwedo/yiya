---
type: Concept
title: "LLM Wiki"
description: "在 raw 与问答之间维护由 LLM 持续编纂的 markdown wiki：知识一次编译、交叉引用复利，而不是每次 RAG 重挖。"
status: draft
domain: shared
generated: { by: agent:yiya-librarian, at: 2026-09-06T11:40:00Z }
related:
  - self-growing-kb
  - karpathy
sources:
  - ../../raw/articles/金尘马/你需要的不再是一个云笔记，而是一个会自己生长的AI知识库.md
  - ../references/karpathy-llm-wiki.md
---

# Definition

**LLM Wiki** 把个人知识库做成三层：（1）**raw** 不可改原料；（2）**wiki** 由 LLM 写的实体/概念/摘要页，ingest 时集成而非仅索引；（3）**schema**（如 `AGENTS.md`）规定约定与工作流。人负责选源与提问；LLM 负责摘要、互链、记账与 lint。

与 RAG 上传文件的差别：问题答案与矛盾标注会**沉淀进 wiki**，下次查询直接用已编译知识。配套操作：ingest、query（好答可回写）、lint；导航靠 `index.md` + `log.md`。

yiya 落地：raw（articles/bookmarks）+ domains/shared 当 wiki + AGENTS/skills；Reference 仅按需。

## Related

- [Self-growing Knowledge Base](./self-growing-kb.md)
- [Andrej Karpathy](../entities/karpathy.md)
- [LLM Wiki（原文卡）](../references/karpathy-llm-wiki.md)
- [打开 raw](../../raw/articles/Karpathy/LLM Wiki.md)
