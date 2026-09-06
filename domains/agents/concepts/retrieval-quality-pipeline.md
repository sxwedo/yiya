---
type: Concept
title: "检索质量 Pipeline"
description: "在召回之后用分级筛选提升精准度：快速通道、交叉编码粗筛、LLM 精评；承认向量相似不等于语义相关。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:25:00Z }
sources:
  - /references/dewu-compound-retrieval-agent.md
---

# Definition

**检索质量 Pipeline** 针对「词像但意思不对 / 主题对但不够直接」的噪声，在结果进入模型前分级过滤：

1. **FastPass** — 少量高置信结果直接放行，零额外延迟。
2. **Reranker** — 交叉编码器粗筛，压低词面相似噪声。
3. **LLM Grading** — 逐条精评相关性，再截断。

宜挂在中间件/钩子上对 Agent 透明，各阶段可开关。召回管「找全」，Pipeline 管「找准」；只加一层 Reranker 往往不够。
