---
type: Concept
title: "Data Agent 落地"
description: "自然语言→可信可审计的数据服务。LLM 只做理解（业务语义稿），确定性引擎执行 SQL；DSH 当编排层，不 import 引擎。分析能力预留。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-15T23:56:00Z }
related:
  - text2semantic2sql
  - semantic-layer
  - semantic-service
  - business-ontology
  - deepseek-harness
  - mcp
sources:
  - ../../../raw/articles/噪声之下/基于DeepSeek Harness（DSH）的Data Agent 落地方案.md
---

# Definition

**Data Agent 落地**（噪声之下，基于 [DeepSeek Harness](../../agents/entities/deepseek-harness.md)）：把自然语言变成准确、可信、可审计的数据服务。主线 **生产数 → 取到数 → 分析数**。Text2SQL 是关键，但理解与执行必须隔开：LLM 把问题解析成业务语义稿（文中 MQL），确定性引擎把稿编译成 SQL。各管各的、互不越界。编译细节见 [Text2Semantic2SQL](./text2semantic2sql.md)。

面向用户四条能力：① 取数（已注册走标准路径；没注册则探索或先建模）；② 口径/元数据（表、口径、血缘、就绪时间，不产数值；混诉求时先答口径）；③ 建模与运维（指标/表/ETL/调度，阶段确认）；④ 分析（预留 Skill，本文不展开）。贯穿：确认/查询/探索三令牌、审计、只读护栏；规则改动过回归，用户采纳/拒绝反哺本体。

分层：会话 → **DSH 数据助理 preset**（人设硬规则 + skills：意图、规划、语义稿、口径确认）→ MCP 工具口（文称 19 个；DSH **不 import** 引擎代码）→ 零 LLM 引擎（校验、翻译、只读执行、DDL/ETL、令牌、审计）→ 语义/本体 → 存储。

## Boundaries

不是 DeepSeek 对话模型，不是把 DSH 当万能执行器。分析报告不在本页。不是 [AI Design De-slop](../../design/concepts/ai-design-deslop.md)。口径层见 [语义层](./semantic-layer.md) / [Semantic Service](./semantic-service.md)。

## Related

- [Text2Semantic2SQL](./text2semantic2sql.md)
- [语义层](./semantic-layer.md)
- [Semantic Service](./semantic-service.md)
- [业务 Ontology](./business-ontology.md)
- [DeepSeek Harness](../../agents/entities/deepseek-harness.md)
- [MCP](../../agents/entities/mcp.md)
