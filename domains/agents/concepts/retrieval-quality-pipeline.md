---
type: Concept
title: "检索质量 Pipeline"
description: "召回之后分级筛选：FastPass 放行、交叉编码粗筛、LLM 精评。向量相似不等于语义相关；筛挂中间件，对 Agent 透明。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T12:00:00Z }
related:
  - compound-retrieval-agent
  - llm-semantic-ranking-embedding
  - embedding-hard-negatives
  - searchcli
sources:
  - ../references/dewu-compound-retrieval-agent.md
  - ../../../raw/articles/字节跳动技术团队/火山引擎开源 Agent 驱动的搜索自迭代技术.md
---

# Definition

**检索质量 Pipeline** 承认两件事：召回率靠「找全」，精准度靠「筛」；**向量相似 ≠ 语义相关**。余弦相似度找「看起来像的」，会被高频词带跑。得物例：问「得物 App 的退货流程」，五条里两条真相关，噪声 60%，直接喂模型答案必脏。

得物没有重造解析 / Chunk / 向量 / 混合检索——那些在公司知识管理平台。他们做的是平台之上的智能检索层。查询扩展先把用户问题写成**完整自然语言句子**（不是关键词串）：Embedding 在句子和段落上训的，「得物内部员工申请薪资调整的流程是什么」比「加薪 申请 流程」更准。Agent 再生成多角度变体并行搜，覆盖流程、条款、入口。

筛分三阶段，挂在 AgentScope Middleware 的 `onActing`：只拦 `knowledge_search` 工具结果，按 `toolCallId` 分组处理，重建事件流，Agent 始终看到过滤后的文本。

1. **FastPass** — 结果数 ≤ 2 且原始分全 ≥ 0.7：直接放行，零额外延迟。
2. **Reranker** — 交叉编码器（文中 `gte-rerank-v2`）打「词像但意思不对」。阈值 0.3，取 Top-8。
3. **LLM Grading** — 逐条 0.1–1.0 精评「主题对但不够直接」。阈值 0.5；最多 10 条、30s 超时。

各阶段可配置开关。只加一层 Reranker 往往不够：粗筛压词面噪声，精评才拦「差不多那个主题」。召回仍由 [复合检索 Agent](./compound-retrieval-agent.md) 的多源并行和补搜负责。

火山引擎把同一纪律推到**策略层**：先廉价银标筛实验方向，再 LLM Judge 精评；Plan 编译实验成本，人不让 Agent 直接改线上。那是搜策自迭代，不是本页的结果过滤，但「先便宜筛、再贵评」是同一条。

排序模型把语义相关做成可学习向量，见 [LLM 排序语义表征](../../engineering/concepts/llm-semantic-ranking-embedding.md)；负例质量见 [表征难负样本](../../engineering/concepts/embedding-hard-negatives.md)。本页只写 Agent 召回之后、进模型之前的分级筛选。

## Related

- [复合检索 Agent](./compound-retrieval-agent.md)
- [LLM 排序语义表征](../../engineering/concepts/llm-semantic-ranking-embedding.md)
- [表征难负样本](../../engineering/concepts/embedding-hard-negatives.md)
- [SearchCLI](../entities/searchcli.md)
