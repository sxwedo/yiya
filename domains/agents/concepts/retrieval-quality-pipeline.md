---
type: Concept
title: "检索质量 Pipeline"
description: "在召回之后用分级筛选提升精准度：快速通道、交叉编码粗筛、LLM 精评；承认向量相似不等于语义相关。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:25:00Z }
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

**检索质量 Pipeline** 针对「词像但意思不对 / 主题对但不够直接」的噪声，在结果进入模型前分级过滤：

1. **FastPass** — 少量高置信结果直接放行，零额外延迟。
2. **Reranker** — 交叉编码器粗筛，压低词面相似噪声。
3. **LLM Grading** — 逐条精评相关性，再截断。

宜挂在中间件/钩子上对 Agent 透明，各阶段可开关。召回管「找全」，Pipeline 管「找准」；只加一层 Reranker 往往不够。Agent 驱动的搜索自迭代把同一纪律推到策略层：先廉价银标筛方向，再 LLM Judge 精评，Plan 编译实验成本，人不让 Agent 直接改线上。

排序侧把语义相关做成可学习向量，见 [LLM 排序语义表征](../../engineering/concepts/llm-semantic-ranking-embedding.md)；负例质量见 [表征难负样本](../../engineering/concepts/embedding-hard-negatives.md)。此处焦点是 Agent 召回之后的分级筛选。

## Related

- [复合检索 Agent](./compound-retrieval-agent.md)
- [LLM 排序语义表征](../../engineering/concepts/llm-semantic-ranking-embedding.md)
- [表征难负样本](../../engineering/concepts/embedding-hard-negatives.md)
- [SearchCLI](../entities/searchcli.md)
