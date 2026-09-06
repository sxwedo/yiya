---
type: Reference
title: "得物知识问答：复合检索 Agent 的系统设计实践"
description: "得物技术：基于 AgentScope HarnessAgent 的复合检索——多源并行、自主决策、三阶段质量 Pipeline、多模态与 SSE 断点续传。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:25:00Z }
resource: /raw/articles/得物技术/得物知识问答：复合检索 Agent 的系统设计实践.md
sources: []
---

# Notes

- 产品双通道：企业知识库（权威）+ 个人飞书数据（实时上下文），同轮可并行。
- 框架能力：ReAct、Middleware（质量过滤对 Agent 透明）、并行工具调用。
- 核心主张：向量相似 ≠ 语义相关；质量靠「筛」——FastPass → Reranker → LLM Grading。
- 生产：多模态截图提问、多实例 SSE 断点续传、模型容灾。
- 可与 Evidence Gate / 评测驱动 / 在线记忆流水线互证。
