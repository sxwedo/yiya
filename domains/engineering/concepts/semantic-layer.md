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
  - warehouse-layering
sources:
  - ../references/semantic-layer-chatbi.md
  - ../../../raw/articles/本体与AI/本体驱动问数：国内外技术方案深度研究.md
  - ../../../raw/articles/数据集成与治理/ODS、DWD、DWS、ADS已经不够用了？AI时代的数仓该怎么分层.md
  - ../../../raw/articles/大胖说数据智能/【大胖智能】Data Agent 的本质不是 Agent，而是 Data Engineering.md
  - ../../../raw/articles/AI数据奇点/Data Agent二篇：查数Agent 你们的是否可信？.md
  - ../../../raw/articles/智透圈/OpenAI 如何构建内部数据智能体（Data Agent）.md
---

# Definition

**语义层**是口径知识的工程化：逻辑层定义指标与维度关系，物理层映射表字段，中间是确定翻译规则（常配血缘元数据）。

它不是又一份自然语言文档，而是机器可执行的口径模型。AI/BI 消费语义层时，优先「选口径」而非直接猜表写 SQL。原子口径应挂公共层唯一权威，避免各业务线各建一套把表冲突上移到模型冲突。

形态上，国内主流是指标语义层（度量 / 维度 / 口径 / 权限前置）；国际还有操作型本体（数据+逻辑+动作同一层）。数仓侧：ODS–ADS 仍是地基，但 Agent 成为使用者后 ADS 不是唯一终点——语义层解释「收入」指哪一口径，再交给受控查询工具，而不是让模型直连库。标准化在向中立语义互换收敛（如 Apache Ossie），把含义做成可移植资产。

## Related

- [业务 Ontology](./business-ontology.md)
- [语义工程师](./semantic-engineer.md)
- [Semantic Service](./semantic-service.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
- [WikiSkill 三层架构](../../agents/concepts/wikiskill-architecture.md)
- [数仓分层](./warehouse-layering.md)
