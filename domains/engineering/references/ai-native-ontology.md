---
type: Reference
title: "AI Native 服务架构（二）：从 DDD 到 Ontology"
description: "昀启AI+：Ontology 作为企业语义资产（Fact·Logic·Action），六步建设 Semantic Service 供 Agent 消费；与 DDD/数据中台分工。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:10:00Z }
resource: /raw/articles/AI Native 服务架构（二）：从 DDD 到 Ontology.md
sources: []
---

# Notes

- Agent 需要跨系统身份、指标口径、规则版本、证据与行动边界；DDD 限界上下文内词典不够。
- 三层：Fact（对象/关系/状态）· Logic（指标/规则/策略）· Action（受约束动作+证据）。
- 路径：场景驱动六步 → 封装 Semantic Service（查询/计算/执行/审计 + Adapter）。
- 与数据中台：中台管数据与指标一致性；Ontology 管业务含义、运行时判断与受控执行。
- 可与本域「语义层」对照：彼处偏数仓口径→SQL；此处偏企业运行时语义→Agent。
