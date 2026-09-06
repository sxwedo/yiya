---
type: Concept
title: "语义层"
description: "把指标、维度、粒度与筛选规则从人脑/文档搬进机器可读结构，横在物理表与 AI/BI 之间做确定性口径翻译。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:25:00Z }
related:
  - business-ontology
  - semantic-engineer
  - semantic-service
  - text2semantic2sql
  - wikiskill-architecture
sources:
  - /references/semantic-layer-chatbi.md
---

# Definition

**语义层**是口径知识的工程化：逻辑层定义指标与维度关系，物理层映射表字段，中间是确定翻译规则（常配血缘元数据）。

它不是又一份自然语言文档，而是机器可执行的口径模型。AI/BI 消费语义层时，优先「选口径」而非直接猜表写 SQL。原子口径应挂公共层唯一权威，避免各业务线各建一套把表冲突上移到模型冲突。

## Related

- [业务 Ontology](/concepts/business-ontology.md)
- [语义工程师](/concepts/semantic-engineer.md)
- [Semantic Service](/concepts/semantic-service.md)
- [Text2Semantic2SQL](/concepts/text2semantic2sql.md)
- [WikiSkill 三层架构](../../agents/concepts/wikiskill-architecture.md)
