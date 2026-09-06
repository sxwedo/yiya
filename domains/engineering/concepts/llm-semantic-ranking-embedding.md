---
type: Concept
title: "LLM 排序语义表征"
description: "用 LLM 为 Query/供给生成语义向量，以相似度信号注入精排，弥补词面匹配在长尾与非标供给上的语义 Gap。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:05:00Z }
sources:
  - /references/meituan-llm-search-ranking.md
---

# Definition

**LLM 排序语义表征**把「搜索词与供给是否语义相关」从脆弱的文本重叠，变成可学习的向量空间匹配：为 Query、商家、商品等实体产 Embedding，用 cosine（或门控注入）进入排序模型。

工程路径常分三步：先验证单点特征有收益 → 再系统化训练与降维（对比学习、多尺度）→ 再跨模块复用并补覆盖率。目标不只是多曝光，更是让更匹配的结果排前面。
