---
type: Concept
title: "Semantic Service"
description: "把 Ontology 定义封装为可查询、可计算、可执行、可审计的运行时服务，供 Agent/工作流/BI 共享同一套契约。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:10:00Z }
related:
  - business-ontology
  - semantic-engineer
  - semantic-layer
  - text2semantic2sql
sources:
  - /references/ai-native-ontology.md
---

# Definition

**Semantic Service** 是 Ontology 的服务化交付形态：查询事实、计算判断、执行受控动作并留下审计证据；底层系统差异由 Adapter 消化。

Agent 应面向 Semantic Service 编排，而不是把业务逻辑塞进提示词或散落工具代码。接口可表现为 API / MCP Resource / Tool；定义需结构化存储并纳入版本与契约测试。

## Related

- [业务 Ontology](./business-ontology.md)
- [语义工程师](./semantic-engineer.md)
- [语义层](./semantic-layer.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
