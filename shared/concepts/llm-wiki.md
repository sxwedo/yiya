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
  - obsidian
  - wikiskill-architecture
  - zread
  - code-wiki
  - agents-md
  - grokipedia
  - yiya
  - llmwiki
  - open-knowledge-format
sources:
  - ../../raw/articles/rvaniaaa/The Second Brain Is Not a Storage System. It's a Compiler..md
  - ../../raw/articles/金尘马/你需要的不再是一个云笔记，而是一个会自己生长的AI知识库.md
  - ../references/karpathy-llm-wiki.md
  - ../../raw/articles/飞叔慢谈/OKF 工程：一种新的语义表达范式正在形成.md
  - ../../raw/articles/AI大模型应用实践/深度解读｜从 LLM Wiki 到 Google OKF，如何重建企业 Agent 的可靠知识底座.md
---

# Definition

**LLM Wiki** 把个人知识库做成三层：（1）**raw** 不可改原料；（2）**wiki** 由 LLM 写的实体/概念/摘要页，ingest 时集成而非仅索引；（3）**schema**（如 [`AGENTS.md`](../../domains/agents/entities/agents-md.md)）规定约定与工作流。人负责选源与提问；LLM 负责摘要、互链、记账与 lint。

与 RAG 上传文件的差别：问题答案与矛盾标注会**沉淀进 wiki**，下次查询直接用已编译知识。配套操作：ingest、query（好答可回写）、lint；导航靠 `index.md` + `log.md`。

本库落地见 [yiya](../entities/yiya.md)：raw（articles/bookmarks）+ domains/shared 当 wiki + AGENTS/skills；Reference 仅按需。开源对照实现见 [llmwiki](../entities/llmwiki.md)。人读面用 [Obsidian](../entities/obsidian.md)（Karpathy：Obsidian 是 IDE，LLM 是程序员，wiki 是代码库）。

与 [WikiSkill 三层架构](../../domains/agents/concepts/wikiskill-architecture.md) 同族三层（Raw → 编纂 → 可执行层）：本页是个人知识库的编译 wiki；WikiSkill 是 Agent 技能从知识里进化。对照见该页。[Zread](../../domains/agents/entities/zread.md)、[Code Wiki](../../domains/agents/entities/code-wiki.md) 也是「编译成 wiki」，但对象是 GitHub 代码仓，不是你策展的 raw。[Grokipedia](../entities/grokipedia.md) 是 xAI 的公开百科（Grok 写条目），不是个人 vault。互操作格式见 [Open Knowledge Format](../entities/open-knowledge-format.md)：Wiki 是方法，OKF 是知识包怎么表示与交换。

## Related

- [The Second Brain Is Not a Storage System. It's a Compiler.](<../../raw/articles/rvaniaaa/The Second Brain Is Not a Storage System. It's a Compiler..md>)
- [WikiSkill 三层架构](../../domains/agents/concepts/wikiskill-architecture.md)
- [Self-growing Knowledge Base](./self-growing-kb.md)
- [Zread](../../domains/agents/entities/zread.md)
- [Code Wiki](../../domains/agents/entities/code-wiki.md)
- [Obsidian](../entities/obsidian.md)
- [Grokipedia](../entities/grokipedia.md)
- [yiya](../entities/yiya.md)
- [llmwiki](../entities/llmwiki.md)
- [AGENTS.md](../../domains/agents/entities/agents-md.md)
- [Andrej Karpathy](../entities/karpathy.md)
- [Open Knowledge Format](../entities/open-knowledge-format.md)
- [LLM Wiki（原文卡）](../references/karpathy-llm-wiki.md)
