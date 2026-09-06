---
type: Concept
title: "复合检索 Agent"
description: "由 Agent 自主决定多源并行检索、评估补搜与精读，再整合权威与实时上下文生成回答，而非单次向量召回。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:25:00Z }
related:
  - llm-semantic-ranking-embedding
  - retrieval-quality-pipeline
sources:
  - /references/dewu-compound-retrieval-agent.md
---

# Definition

**复合检索 Agent** 把检索做成 ReAct 闭环：搜索 → 评估 →（必要时）精读/再搜 → 整合。Agent 决定用哪些工具、搜几次、何时停止；用户不必指定「去查某源」。

典型配置：公共知识库提供权威结构化基座，个人协作数据（消息/文档/会议）提供实时补全；多工具多查询变体可并行。关注点分离：提示词定策略，中间件定质量，循环定执行。

## Related

- [检索质量 Pipeline](./retrieval-quality-pipeline.md)
- [LLM 排序语义表征](../../engineering/concepts/llm-semantic-ranking-embedding.md)
