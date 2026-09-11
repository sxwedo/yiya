---
type: Concept
title: "语义工程师"
description: "面向 AI Agent 消费方建设术语库、指标中台与实体模型，把业务口语变成机器可读口径并管理变更连锁影响。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:12:00Z }
related:
  - business-ontology
  - de-bottleneck-upshift
  - knowledge-skill-separation
  - semantic-layer
  - semantic-service
  - text2semantic2sql
sources:
  - ../references/data-engineer-skills-2026-2036.md
  - ../../../raw/articles/Datawhale/一文读懂怎么让 Agent 理解业务，别一上手就写 Prompt！.md
---

# Definition

**语义工程师**（或业务语义与数据专家路线）把「什么叫有效付费用户」这类人定判断工程化：企业术语、指标共识、实体模型，供助手/Agent/特征库统一读取。

AI 可按已定口径生成 SQL，但不能自主裁决口径冲突。变更管理要评估指标改动对下游 Agent 与产品的连锁影响——这是拉开差距的分水岭技能。意图识别也别一上来写 Prompt：规则接确定流量，分类器接高频稳定标签，Embedding 缩小候选，LLM 处理口语与多轮状态；语言相似不等于同一业务动作。

## Related

- [业务 Ontology](./business-ontology.md)
- [数据工程瓶颈上移](./de-bottleneck-upshift.md)
- [语义层](./semantic-layer.md)
- [Semantic Service](./semantic-service.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
- [知识与技能分离](../../agents/concepts/knowledge-skill-separation.md)
