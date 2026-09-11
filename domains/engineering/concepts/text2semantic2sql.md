---
type: Concept
title: "Text2Semantic2SQL"
description: "自然语言先映射到受约束的语义口径选择，再由语义引擎确定性生成 SQL；把幻觉从生成层压到有限选择层。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:25:00Z }
related:
  - business-ontology
  - semantic-engineer
  - semantic-layer
  - semantic-service
  - warehouse-layering
sources:
  - ../references/semantic-layer-chatbi.md
  - ../../../raw/articles/本体与AI/本体驱动问数：国内外技术方案深度研究.md
---

# Definition

**Text2Semantic2SQL** 相对直接 Text2SQL：模型不再在千表中猜字段与聚合，而是在语义模型定义的指标/维度/筛选空间里做选择；选不到则应承认没有。SQL 由引擎按规则生成。

效果：幻觉空间从开放生成收缩为受锁死的选择；口径改一处可全链路生效。与「用 RAG 检索口径文档再让模型翻译」不同——后者仍保留理解误差。

企业级问数有「准确率悬崖」：零样本直接 Text-to-SQL 在复杂 schema / KPI 上会掉到接近不可用（data.world 自研基准：GPT-4 全量 16.7%，高复杂度 0%；数字宜当方向而非行业通值）。破崖路径是先映射到本体或指标语义再编译（NL2Semantics / NL2Metrics），并用规则做确定性校验（OBQC 类：错了就修或拒答，优于静默错数）。国内厂商多走「先建模、后问数」；国际则 Palantir OAG 与云厂商语义层两条主线。

## Related

- [业务 Ontology](./business-ontology.md)
- [语义工程师](./semantic-engineer.md)
- [语义层](./semantic-layer.md)
- [Semantic Service](./semantic-service.md)
- [数仓分层](./warehouse-layering.md)
