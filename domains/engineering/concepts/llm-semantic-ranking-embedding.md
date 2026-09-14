---
type: Concept
title: "LLM 排序语义表征"
description: "用 LLM 为 Query / 商家 / 商品产语义向量，cosine 注入精排，补词面匹配在长尾非标供给上的语义 Gap。三期：验证 → 对比学习 → 跨模块复用。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - x-algorithm
  - multi-action-feed-ranking
  - embedding-hard-negatives
  - retrieval-quality-pipeline
  - compound-retrieval-agent
sources:
  - ../references/meituan-llm-search-ranking.md
---

# Definition

**LLM 排序语义表征**（美团搜索 3.0，服务零售精排）把「搜索词和供给是否语义相关」从脆弱的文本重叠，变成可学习的向量空间。服务零售品类长尾、描述非结构化、Query 意图复杂：`宠物 SPA+洗澡` ↔ `萌宠清洁护理套餐`，字面几乎不重叠，语义高度相关。传统精排几乎没有语义建模。

路径三期，都已 Launch Review 全量：

1. **验证。** 轻量 LLM 统一建模 Query 与 POI，微调到「只靠文本判断是否匹配」，全量推理向量，cosine 进精排。特殊 Token 聚合 + 64 维分桶。先把路走通，长尾体验先动。
2. **体系。** 目标从点击率分类改成相对序。Query / POI / Deal 三元；InfoNCE 三组两两关系 + Triplet 打难负，见 [表征难负样本](./embedding-hard-negatives.md)。LoRA；**精简 Prompt 优于复杂指令**。
3. **迁移。** 表征下挂到其他精排，补覆盖率，与统计特征协同，不是二选一。覆盖率验证是跨模块第一步。

工程 checklist：负例质量定上限；Prompt 要短；覆盖率先于花式融合；语义与统计协同。降维可用 MRL 多尺度可截断。注入可以分桶，也可以 PEPNet 门控。

目标不只多曝光，是更匹配的排前面。与 Feed 多行为预测不同：本页是 Query–供给语义匹配，见 [Multi-action Feed Ranking](./multi-action-feed-ranking.md)。Agent 检索后的筛，见 [检索质量 Pipeline](../../agents/concepts/retrieval-quality-pipeline.md)。

## Related

- [x-algorithm](../entities/x-algorithm.md)
- [Multi-action Feed Ranking](./multi-action-feed-ranking.md)
- [表征难负样本](./embedding-hard-negatives.md)
- [检索质量 Pipeline](../../agents/concepts/retrieval-quality-pipeline.md)
- [复合检索 Agent](../../agents/concepts/compound-retrieval-agent.md)
