---
type: Concept
title: "Semantic Service"
description: "把 Ontology 封装成可查询、可计算、可执行、可审计的运行时：Agent 面向契约编排，不把业务逻辑塞进提示词。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - business-ontology
  - semantic-engineer
  - semantic-layer
  - text2semantic2sql
  - mcp
sources:
  - ../references/ai-native-ontology.md
---

# Definition

**Semantic Service**（昀启：从 DDD 到 Ontology）是 Ontology 的服务化交付，不是又一份文档。Agent 跨系统时需要：身份映射、指标口径、规则版本、证据、行动边界。限界上下文里的词典不够——Agent 不认墙。

服务四件事：

- **查询**事实（对象、关系、状态）
- **计算**判断（指标、Policy）
- **执行**受约束动作（权限/审批前置）
- **审计**留下证据链

底层系统差异由 Adapter 消化。接口可以是 API、[MCP](../../agents/entities/mcp.md) Resource / Tool。定义要结构化存储，纳入版本和契约测试——改口径不能只改提示词。

Agent 应面向 Semantic Service 编排。把业务逻辑塞进 Prompt 或散落工具代码，下次换模型就重写一遍铁律。数据中台管数据和指标一致性；Ontology / Semantic Service 管含义、运行时判断和受控执行。数仓口径如何翻成 SQL，见 [语义层](./semantic-layer.md) 与 [Text2Semantic2SQL](./text2semantic2sql.md)。Fact · Logic · Action 骨架见 [业务 Ontology](./business-ontology.md)。

## Related

- [Model Context Protocol (MCP)](../../agents/entities/mcp.md)
- [业务 Ontology](./business-ontology.md)
- [语义工程师](./semantic-engineer.md)
- [语义层](./semantic-layer.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
