---
type: Entity
title: "yiya"
description: "本库：raw 不可改，domains/shared 一次编译成 wiki，AGENTS/skills 管流程。LLM Wiki 的落地，不是每次 RAG 重挖。"
kind: product
status: draft
domain: shared
aliases: []
generated: { by: agent:yiya-librarian, at: 2026-09-15T00:05:00Z }
related:
  - karpathy
  - obsidian
  - llm-wiki
  - open-knowledge-format
  - llmwiki
  - self-growing-kb
sources:
  - ../references/sxwedo-yiya-github.md
---

# Identity

[sxwedo/yiya](https://github.com/sxwedo/yiya) 这一座个人知识库。方法来自 [Karpathy](./karpathy.md) 的 [LLM Wiki](../concepts/llm-wiki.md)；页格式跟 [Open Knowledge Format](./open-knowledge-format.md) 同源。人读面：git 上的 Markdown，[Obsidian](./obsidian.md) 或 `./web.sh`。

## Mechanism

三层只做一件事——知识一次编译，交叉引用复利。

1. **raw**：成文 `raw/articles/`，书签四表。正文不改。
2. **wiki**：`domains/<id>/` 与 `shared/` 的 Entity / Concept；Reference 极少。
3. **schema**：根 `AGENTS.md` + `.agents/skills/`。

查询：地图 → overview → 类型 index → 已有页；默认停，不改 wiki。回写才走 ingest。入库先定 Domain、改旧页；新建日常 ≤2；清单不进 `sources`。书签挂产品 Entity，不建空心 Reference。`sources` 溯源，Related 只链 wiki。

## Notes

Entity 正文骨架见 `templates/entity.md`（`kind` + Identity / Mechanism / Boundaries）。旧页按簇回写，不是一次注水 169 张书签卡。

## Boundaries

不是云同步盘、不是当场 RAG。敏感进 `private/`。不是 [Harness 运行时](../../domains/agents/concepts/harness-runtime-layer.md)。对照 [llmwiki](./llmwiki.md)、[Grokipedia](./grokipedia.md)、[Zread](../../domains/agents/entities/zread.md) / [Code Wiki](../../domains/agents/entities/code-wiki.md)。

## Related

- [LLM Wiki](../concepts/llm-wiki.md)
- [Open Knowledge Format](./open-knowledge-format.md)
- [Andrej Karpathy](./karpathy.md)
- [Obsidian](./obsidian.md)
- [llmwiki](./llmwiki.md)
- [Self-growing Knowledge Base](../concepts/self-growing-kb.md)
- [AGENTS.md](../../domains/agents/entities/agents-md.md)
- [Harness 运行时层](../../domains/agents/concepts/harness-runtime-layer.md)
