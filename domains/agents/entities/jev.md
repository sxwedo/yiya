---
type: Entity
title: "Jev"
description: "TypeSafe 的 System One 模型：对共享 state 问类型化问题，返回 Choice / Score / 是否概率。给软件用，不生成给人读的长文。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-17T23:50:00Z }
related:
  - typesafe-ai
  - jev-ultrafast
sources:
  - ../../../raw/bookmarks/tools.md
---

# Identity

**Jev**（Vercel 模型页 [vercel.com/ai-gateway/models/jev](https://vercel.com/ai-gateway/models/jev)，提供方 [TypeSafe AI](./typesafe-ai.md)）：System One 评估模型。对同一份 state 并行问若干类型化问题，返回选项、分数、布尔概率，供分类、路由、量尺评估、自动核对。不生成聊天回复。页上模型 id：`typesafe-ai/jev`。价目以该页为准，本页不抄单价。

浏览器演示见 [Jev Ultrafast](./jev-ultrafast.md)（Jev 选操作和元素，打字另叫小模型）。

## Boundaries

库里只有 Gateway 模型入口，不是 TypeSafe 文档全书。不是 LLM 聊天。暂不把官方 docs 机制写满——那要另 ingest `docs.typesafe.ai`。

## Related

- [TypeSafe AI](./typesafe-ai.md)
- [Jev Ultrafast](./jev-ultrafast.md)
