---
type: Entity
title: "Real API Pricing"
description: "订阅月费 ÷ 月可用 token 做成可比较单价。站内图是对照约定，不是某家真实负载。"
kind: product
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-25T11:40:00Z }
related:
  - artificial-analysis
  - software-factory-cost
sources:
  - ../../../raw/bookmarks/github.md
  - ../../../raw/bookmarks/tools.md
---

# Identity

**Real API Pricing**（[FeiZhuLulu/real-api-pricing](https://github.com/FeiZhuLulu/real-api-pricing)，站 [real-api-pricing.vercel.app](https://real-api-pricing.vercel.app)）：真实单价 = 月费 ÷ 月可用 token。把订阅池和三分计价折成同一套对照负载（文称 97% cache 读 / 2.5% 新 input / 0.5% output），**这是比较约定，不是厂商真实用量**。已给出总 token 的测量不再二次折算。本页无成文，不抄排行数字。

## Boundaries

库里只有入口。不是 [Artificial Analysis](../../agents/entities/artificial-analysis.md) 质量榜，不是价目官方。屠榜不进机制。

## Related

- [Artificial Analysis](../../agents/entities/artificial-analysis.md)
- [Software Factory Cost Equation](../../agents/concepts/software-factory-cost.md)
