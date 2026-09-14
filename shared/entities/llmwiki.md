---
type: Entity
title: "llmwiki"
description: "lucasastorian 开源仓：Karpathy《LLM Wiki》的一份可跑实现。与 yiya 同方法、不同库；本页无其内部约定。"
status: draft
domain: shared
generated: { by: agent:yiya-librarian, at: 2026-09-14T13:40:00Z }
related:
  - yiya
  - karpathy
  - llm-wiki
  - obsidian
  - self-growing-kb
sources:
  - ../references/lucasastorian-llmwiki-github.md
---

# Summary

**llmwiki** 是 [lucasastorian/llmwiki](https://github.com/lucasastorian/llmwiki)：把 [Karpathy](./karpathy.md) 的 gist《LLM Wiki》做成可 fork 的仓库。方法页见 [LLM Wiki](../concepts/llm-wiki.md)——raw 不可改、wiki 由 LLM 编纂、schema 管约定；人读面仍是 [Obsidian](./obsidian.md)。

本库对它的原料只有 GitHub 书签一行，**没有**灌它的 README、目录或 skill。因此本页只定位、对照，不假装写过它的入库纪律。

对照本库 [yiya](./yiya.md)：

| | llmwiki | yiya |
| --- | --- | --- |
| 是什么 | 别人的开源实现 | **这一座** vault（sxwedo/yiya） |
| 方法 | 同一份 Karpathy 流程 | 同一份，再裁成 Domain + OKF bundle |
| 问谁 | 那座仓的 schema | 根 `AGENTS.md` 与 `.agents/skills/` |
| 不是 | 不是本库、不是概念本身 | 不是 llmwiki 的 fork 说明 |

屠榜里把它和 autoresearch / nanochat 并列的帖，只证明名字在传，**不**进 `sources`。

## 何时不用

- 当本库的操作手册：ingest / 问答 / lint 走 yiya，不猜 llmwiki 怎么写。
- 当 [LLM Wiki](../concepts/llm-wiki.md) 概念页：那是模式；这是其中一份实现。
- 当公开百科或代码仓 Wiki（[Grokipedia](./grokipedia.md) / [Zread](../../domains/agents/entities/zread.md)）。
- 要对齐源码、Issue、Release：回 GitHub 卡，不要在本页发明目录。

普通人「人留原料、AI 接旧主题」见 [Self-growing Knowledge Base](../concepts/self-growing-kb.md)。

## Related

- [yiya](./yiya.md)
- [LLM Wiki](../concepts/llm-wiki.md)
- [Andrej Karpathy](./karpathy.md)
- [Obsidian](./obsidian.md)
- [Self-growing Knowledge Base](../concepts/self-growing-kb.md)
