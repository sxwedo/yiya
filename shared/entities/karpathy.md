---
type: Entity
title: "Andrej Karpathy"
description: "公开 gist《LLM Wiki》：LLM 当程序员、Obsidian 当 IDE、wiki 当代码库。yiya 骨架按此裁剪，不是每次 RAG 重挖。"
status: draft
domain: shared
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
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
  - ../../raw/articles/阿西_出海（2.0版）/3 步带你搭建 Karpathy 同款 AI 知识库（附教程）.md
  - ../../raw/articles/Joey Lee/1200 万人围观的 Karpathy 知识库模式，用龙虾为你搭建第二大脑.md
---

# Summary

**Andrej Karpathy** 在本库里的稳定指称，不是简历，是他公开的知识库模式。gist《LLM Wiki》（[原文卡](../references/karpathy-llm-wiki.md)）：对照 RAG「每次提问重挖碎片」，wiki 一次编译、交叉引用复利。

三层：

1. **raw** 不可改原料
2. **wiki** 由 LLM 写实体 / 概念 / 摘要，ingest 时集成
3. **schema**（`AGENTS.md` / `CLAUDE.md`）管约定与工作流

操作：ingest、query（好答案可回写）、lint。导航：`index.md` 内容目录 + `log.md` 时间线。人设比喻：LLM 是程序员，[Obsidian](./obsidian.md) 是 IDE，wiki 是代码库。

本库 [yiya](./yiya.md) 的 raw → domains/shared + AGENTS 即按此裁剪。开源对照实现 [llmwiki](./llmwiki.md)。普通人/OPC 场景见 [Self-growing Knowledge Base](../concepts/self-growing-kb.md)。概念页见 [LLM Wiki](../concepts/llm-wiki.md)。

其余成文（日常怎么用 AI、Sequoia 炉边、加入 Anthropic、从零训 LLM 课、跟风教程）只证明他持续公开谈同一类实践，**不**在本页展开传记或复述六小时课程。autoresearch 仓库是另一条实验线，书签在 GitHub 卡，不和 Wiki 模式焊死。

## Related

- [LLM Wiki](../concepts/llm-wiki.md)
- [Self-growing Knowledge Base](../concepts/self-growing-kb.md)
- [Obsidian](./obsidian.md)
- [yiya](./yiya.md)
- [llmwiki](./llmwiki.md)
