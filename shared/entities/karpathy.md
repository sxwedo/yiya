---
type: Entity
title: "Andrej Karpathy"
description: "公开 gist《LLM Wiki》：LLM 当程序员、Obsidian 当 IDE、wiki 当代码库。yiya 骨架按此裁剪，不是每次 RAG 重挖。"
kind: person
status: draft
domain: shared
aliases: [Karpathy]
generated: { by: agent:yiya-librarian, at: 2026-09-15T00:05:00Z }
related:
  - llm-wiki
  - obsidian
  - yiya
  - llmwiki
  - self-growing-kb
sources:
  - ../references/karpathy-llm-wiki.md
  - ../references/karpathy-autoresearch-github.md
  - ../../raw/articles/Chrome/Andrej Karpathy spent 2h showing how he actually uses AI day to day.md
  - ../../raw/articles/Andrej Karpathy/Fireside chat at Sequoia Ascent 2026 from a －~week ago. Some highlights－.md
  - ../../raw/articles/Raytar/Andrej Karpathy joined Anthropic five weeks ago.md
  - ../../raw/articles/Codez/Andrej Karpathy just dropped a 6-hour course on how to build LLMs from scratch－.md
  - ../../raw/articles/Avi Chawla/Karpathy said something you'll regret ignoring－.md
---

# Identity

本库记的是他公开的**知识库模式**，不是简历。gist《LLM Wiki》（[原文卡](../references/karpathy-llm-wiki.md)）：对照 RAG 每次提问重挖碎片，wiki 一次编译、交叉引用复利。

## Timeline

- 公开《LLM Wiki》gist：raw / wiki / schema；ingest · query · lint。
- 成文还提到日常用 AI、Sequoia 炉边、加入 Anthropic、从零训 LLM 课——只证明他持续谈同一类实践，**不**在本页展开传记。
- autoresearch 仓是另一条实验线，书签在 GitHub 卡，不和 Wiki 模式焊死。

## Mechanism

三层：raw 不可改；wiki 由 LLM 写实体/概念/摘要，ingest 时集成；schema（`AGENTS.md` / `CLAUDE.md`）管约定。操作：ingest、query（好答案可回写）、lint。导航：`index.md` + `log.md`。比喻：LLM 是程序员，[Obsidian](./obsidian.md) 是 IDE，wiki 是代码库。

[yiya](./yiya.md) 按此裁成 Domain + OKF。[llmwiki](./llmwiki.md) 是另一份开源实现。概念页 [LLM Wiki](../concepts/llm-wiki.md)；普通人场景 [Self-growing Knowledge Base](../concepts/self-growing-kb.md)。

## Boundaries

不是人物百科、不是六小时课程笔记、不是 autoresearch 实验日志。清单里点名 Karpathy 的屠榜不进 `sources`。

## Related

- [LLM Wiki](../concepts/llm-wiki.md)
- [Self-growing Knowledge Base](../concepts/self-growing-kb.md)
- [Obsidian](./obsidian.md)
- [yiya](./yiya.md)
- [llmwiki](./llmwiki.md)
