---
type: Concept
title: "表征难负样本"
description: "Embedding 质量的天花板往往在负例质量：Batch 内易负不够；需构造难负并处理假负，让模型学会细粒度区分。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:05:00Z }
related:
  - llm-semantic-ranking-embedding
sources:
  - /references/meituan-llm-search-ranking.md
---

# Definition

**表征难负样本**指与正样本在意图/上下文上高度相似、但用户行为上应判为不匹配的负例（如同请求同商家曝光未点）。相对 in-batch 随机负，难负才逼模型学细粒度边界。

实践要点：InfoNCE 配 Triplet/难负；警惕假负污染分母；负例策略的性价比常高于盲目换更大 backbone。

## Related

- [LLM 排序语义表征](./llm-semantic-ranking-embedding.md)
