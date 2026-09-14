---
type: Concept
title: "数据工程瓶颈上移"
description: "人力从物理搬运与清洗，上移到业务语义、合规与 AI 体系管控。确定性重复交给 AI；口径、法律责任、长期架构留给人。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T14:10:00Z }
related:
  - semantic-engineer
  - warehouse-layering
  - text2semantic2sql
  - business-ontology
sources:
  - ../references/data-engineer-skills-2026-2036.md
  - ../../../raw/articles/数据集成与治理/ODS、DWD、DWS、ADS已经不够用了？AI时代的数仓该怎么分层.md
  - ../../../raw/articles/大胖说数据智能/【大胖智能】Data Agent 的本质不是 Agent，而是 Data Engineering.md
  - ../../../raw/articles/程序员老桥/数据治理90%的人第一步就错了，我用一张表理清了所有问题.md
---

# Definition

**数据工程瓶颈上移**（2026–2036 能力清单口径）描述三代变迁：能入库 → 是否可信 → 让所有 AI 正确理解并安全使用数据。手写 ETL、常规清洗会被大规模替代；人的价值集中在口径仲裁、法律责任、长期架构、利益权衡。数仓从 BI 后端变成企业 AI 基础设施。清单把耗时序写成：语义与指标共识 > 治理合规 > 多架构运维 > 技术债 > 数据产品 > 跨组织协作；未来一半以上工时可能砸在语义层工程。岗位会拆成 AI-Data 架构师、业务语义专家、合规风险专家，而不是「会写 Spark 的人」。

这不意味着拆掉 [数仓分层](./warehouse-layering.md)。AI 越进经营场景，越依赖 ODS–DWD 的主数据与可追溯链路。缺的是 ADS 之上的语义与调用边界：大模型会写 SQL，仍不知道「收入」按下单、开票还是确认收入。

Data Agent 能对话不难，难的是口径、权限、证据链——「Data Agent is Easy，Data Context is Hard」。人会脑补表名和部门默契；Agent 不会。大胖例：CRM「合同签订」对财务「回款确认」，同一个销售额差 30%，模型没坏、口径错了。脏数据接通后 Agent 只会更快放大。演示几千行能秒回，上线宽时间窗+多人并发就堵塞；查数门槛降到一句话，权限穿透做不到就是裸奔。

治理第一步问数据在哪、谁管、能用比例，不是先买工具；先痛核心实体表，不要一次管全部。人怎么把口语变成机器可读口径，见 [语义工程师](./semantic-engineer.md)；问数怎么把幻觉压进选择层，见 [Text2Semantic2SQL](./text2semantic2sql.md)。

## 何时不用

- 当「把四层数仓推倒重来」：经典分层仍是地基。
- 当数据挖掘教程（为什么/下一步做什么）：那是另一页，不进本页 `sources`。
- 当只换更大模型就能对齐财务口径：根因是语义不在语料里。

## Related

- [语义工程师](./semantic-engineer.md)
- [数仓分层](./warehouse-layering.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
- [业务 Ontology](./business-ontology.md)
