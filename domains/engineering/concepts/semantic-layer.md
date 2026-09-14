---
type: Concept
title: "语义层"
description: "把指标、维度、粒度与筛选从人脑搬进机器可读结构，横在物理表与 AI/BI 之间做确定性口径翻译。同问「华东高价值用户 GMV」对不上，多半是没有这一层。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
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

**语义层**把口径从人脑和文档搬进机器可执行的结构：逻辑层定义指标与维度关系，物理层映射表字段，中间是确定翻译规则（常配血缘）。不是又一份自然语言说明书。

听挽风的例子：同一句「华东高价值用户 GMV 环比」，AI 和财务口径相反。这不是模型太小。公司口径不在预训练语料里，无答案处找答案只能编。RAG 喂口径文档仍要「理解再翻译」，幻觉空间关不上。治理第三站才是可执行语义模型：文档 → 指标库 → 语义层。原子口径挂公共层唯一权威；各业务线各建一套，只是把表冲突上移成模型冲突。三问：谁消费、谁 owner、能否原子化。

AI/BI 消费时优先**选口径**，再由引擎翻 SQL，见 [Text2Semantic2SQL](./text2semantic2sql.md)。国内主流是指标语义层（度量 / 维度 / 口径 / 权限前置）；国际还有操作型本体，把数据、逻辑、动作收进同一层，见 [业务 Ontology](./business-ontology.md) 与 [Semantic Service](./semantic-service.md)。

数仓 [ODS–ADS](./warehouse-layering.md) 仍是地基。Agent 成为使用者后，ADS 不是唯一终点：语义层解释「收入」指哪一口径，再交给受控查询，而不是让模型直连库。标准化在向中立语义互换收敛（如 Apache Ossie），把含义做成可移植资产。OpenAI 内部 Data Agent 的判断是 vanilla agent、rich foundation：难的是找对表与语义，不是写 SQL。

## Related

- [业务 Ontology](./business-ontology.md)
- [语义工程师](./semantic-engineer.md)
- [Semantic Service](./semantic-service.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
- [WikiSkill 三层架构](../../agents/concepts/wikiskill-architecture.md)
- [数仓分层](./warehouse-layering.md)
