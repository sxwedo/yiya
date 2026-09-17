---
type: Entity
title: "Hacker News"
description: "Y Combinator 的黑客新闻板：用户提交链接与讨论；Show HN / Ask HN。跨域外探源，不是本库知识页。"
kind: product
status: draft
domain: shared
aliases: [HN]
generated: { by: agent:yiya-librarian, at: 2026-09-15T00:05:00Z }
related:
  - arxiv
  - medium
sources:
  - ../references/hacker-news-site.md
---

# Identity

<https://news.ycombinator.com/> Y Combinator 新闻讨论板：用户提交链接，按分数和时间排序。Show HN / Ask HN。本库当**外探源**（`yiya-explore`），不把首页当知识正文。

## Boundaries

不是 harness，不开「新闻域」。对照 [Trendshift](../../domains/agents/entities/trendshift.md)（GitHub 动量榜）和 [arXiv](./arxiv.md)（论文本体库）。

## Related

- [Trendshift](../../domains/agents/entities/trendshift.md)
- [arXiv](./arxiv.md)
- [Medium](./medium.md)
