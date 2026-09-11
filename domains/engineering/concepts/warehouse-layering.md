---
type: Concept
title: "数仓分层"
description: "ODS→DWD→DWS→ADS 把从源系统到应用的加工链路拆开；AI 时代四层仍是地基，ADS 不再是唯一终点，其上要补语义与受控 Serving。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-11T08:00:00Z }
related:
  - semantic-layer
  - de-bottleneck-upshift
  - semantic-engineer
  - text2semantic2sql
  - business-ontology
sources:
  - ../../../raw/articles/数据集成与治理/ODS、DWD、DWS、ADS：数据仓库四层架构一次讲清.md
  - ../../../raw/articles/数据集成与治理/ODS、DWD、DWS、ADS已经不够用了？AI时代的数仓该怎么分层.md
  - ../../../raw/articles/商业智能研究/数据建模到底在建什么？业务、逻辑、物理模型一次讲清.md
  - ../../../raw/articles/Data猫DC/数仓模型验证流程.md
---

# Definition

**数仓分层**把「数据从业务系统走到分析应用」拆成可追溯的职责，而不是多建几张表：

- **ODS**：贴源承接。保留原始事实，补来源/批次/时间；不在这里改业务含义。
- **DWD**：统一业务事实。主数据映射、粒度（一行代表什么事件）、事实表 vs 维度表、历史归属。
- **DWS**：公共主题复用。把高频分析只建设一次；区分可加 / 半可加 / 不可加指标。
- **ADS**：场景交付。组织固定看板与接口所需数据集；可重组、不可偷偷重定义公共口径。

分层要解决的是重复加工、口径分裂、异常无法倒查。判断一张表放哪一层，看职责与复用范围，不看「是不是汇总表」。

AI 时代四层没有过时：大模型不会替企业做同步、主数据与指标统一。变的是使用者——从人点报表变成 Agent 追问。因此 **ADS 仍要留**（固定场景、核心指标、高频分析沉淀），但不再是架构终点。其上补：

- [语义层](./semantic-layer.md)：表字段 → 业务语言（实体、指标、维度、规则）
- 知识 / 上下文 / AI Serving：规则与经验、按任务装配权限内信息、把查询与归因封装成受控工具

不要推翻四层去画八层十层；从一个高价值问数场景打通链路，再把验过的分析回沉到 DWD/DWS/ADS。

## Related

- [语义层](./semantic-layer.md)
- [数据工程瓶颈上移](./de-bottleneck-upshift.md)
- [语义工程师](./semantic-engineer.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
- [业务 Ontology](./business-ontology.md)
