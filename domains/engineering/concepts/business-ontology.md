---
type: Concept
title: "业务 Ontology"
description: "把分散系统中的数据、规则与能力组织成可理解、可计算、可执行的企业语义：Fact · Logic · Action。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:10:00Z }
related:
  - semantic-engineer
  - semantic-layer
  - semantic-service
  - text2semantic2sql
  - warehouse-layering
sources:
  - ../references/ai-native-ontology.md
  - ../../../raw/articles/技术自由圈/别被概念骗，Ontology 本体论 RAG 其实很简单，大白话就是 DDD、OOD 加 RAG.md
  - ../../../raw/articles/Servi-Pedia 智服汇/本体论 or 知识图谱，傻傻分不清楚？.md
  - ../../../raw/articles/本体与AI/本体驱动问数：国内外技术方案深度研究.md
  - ../../../raw/articles/智能数据研讨/本体建设第一步：如何识别业务对象、关系和状态？.md
  - ../../../raw/articles/大兵E视界/从领域驱动设计（DDD）到本体论（Ontology）：软件架构师视角下的一次回归.md
  - ../../../raw/articles/大胖说数据智能/【大胖智能】Data Agent 的本质不是 Agent，而是 Data Engineering.md
---

# Definition

**业务 Ontology** 是 Agent 与人共享的企业级语义资产，目标概括为：统一事实，显式表达规则，把能力封装为受约束的动作。

- **Fact** — 对象、属性、关系、状态；跨系统身份映射。
- **Logic** — 指标、规则、Policy；版本化、可查询。
- **Action** — 动作契约、权限/审批前置、执行证据链。

建设应复用 DDD/数仓/微服务资产，补齐跨上下文桥接与运行时语义，并以 Semantic Service 交付，而非只写文档。

检索侧可把同一套骨架看成 Ontology RAG：向量 RAG（意会）→ KG RAG（关系链）→ 本体层（TBox 类型约束 + 推理规则约束 ABox）。无 Schema 的扁平三元组会关系爆炸、语义不归一、推理停在图遍历；本体把 DDD 的统一语言 / 限界上下文 / 不变量映射为 Class、Domain-Range 与规则。落地宜渐进，不要一上来求完备本体。

TBox 是规则手册（应该是什么），ABox 是事实（实际有什么）；知识图谱 = TBox + ABox。跳过本体直接灌三元组，后期补约束成本倍增。数据库 Schema 做格式校验，本体做语义推理（开放世界：没说的是未知，不是假）。ER 图 / Neo4j 标签不是本体——缺公理与自动推理。大模型的幻觉、黑盒、不懂内部铁律，正好靠这层硬约束对冲；问数侧 Palantir 式操作型本体把 Data / Logic / Action 收进同一语义层。

第一步不是列名词表：从任务反推边界，分清对象 / 事件 / 状态 / 角色 / 规则 / 证据。状态是动作边界，角色是场景中的责任位置，证据支撑可审计执行。DDD 解决人与代码的语义一致（限界上下文给人画墙）；Agent 不认墙，需要平台声明的 ObjectType / LinkType / ActionType。两者互补：服务边界用 DDD，跨系统语义与 AI 消费用本体。

## Related

- [语义工程师](./semantic-engineer.md)
- [语义层](./semantic-layer.md)
- [Semantic Service](./semantic-service.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
- [数仓分层](./warehouse-layering.md)
- [打开 raw](<../../../raw/articles/技术自由圈/别被概念骗，Ontology 本体论 RAG 其实很简单，大白话就是 DDD、OOD 加 RAG.md>)
