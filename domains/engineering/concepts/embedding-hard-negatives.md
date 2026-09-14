---
type: Concept
title: "表征难负样本"
description: "Embedding 质量的天花板在负例：in-batch 易负不够。同请求、同商家曝光未点的难负，逼模型学细粒度选择；假负要从分母拿掉。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - llm-semantic-ranking-embedding
  - retrieval-quality-pipeline
sources:
  - ../references/meituan-llm-search-ranking.md
---

# Definition

**表征难负样本**（美团搜索 3.0 二期）：与正样本在意图和上下文上高度相似、用户行为上却应判不匹配的负例。业界共识：**Embedding 质量的天花板在负例质量，不在 backbone。** 补负例的性价比高于换更大底座。

一期用 BCE 做点击率二分类，只学「是否匹配」的绝对判断。排序要的是相对序。InfoNCE 用 batch 内负例做「N 选 1」，但 batch 内随机负大多语义差很远，模型不费力。难负才逼它回答：高度相似的候选里，用户为什么选这个。

美团用「店 + 下挂商品」展示结构构造难负：Deal 难负 = 同请求、同商家、曝光未点击的商品；POI 难负 = 同请求曝光未点击的商家。样本扩成五元组（Query、Deal+、POI+、Deal难负、POI难负），2766 万条。相对 ANCE 全局 ANN 难负，这种负例天然绑着当次搜索上下文，更贴近精排分布。

训练：三组 InfoNCE（Query↔POI / Query↔Deal / POI↔Deal）覆盖三元关系；另加 Triplet（欧氏、margin=0.5）专门打这些难负。消融：Triplet 后 Q2I-Click-AUC +4.85pp，**Order-AUC +11.02pp**——下单信号比点击更吃细粒度。

假负会污染 InfoNCE 分母。前沿补丁：Qwen3-Embedding 的 false-negative mask；Nemotron 的相似度阈值只留「够难但不是假负」区间。策略共性是从随机负转到精细构造，而不是堆更难到把正例当负例。

召回之后再筛，见 [检索质量 Pipeline](../../agents/concepts/retrieval-quality-pipeline.md)。向量怎么进精排，见 [LLM 排序语义表征](./llm-semantic-ranking-embedding.md)。

## Related

- [LLM 排序语义表征](./llm-semantic-ranking-embedding.md)
- [检索质量 Pipeline](../../agents/concepts/retrieval-quality-pipeline.md)
