---
type: Concept
title: "数据工程瓶颈上移"
description: "人力瓶颈从物理搬运与清洗，上移到业务语义、合规与 AI 体系管控；确定性重复工作交给 AI，判断与责任留给人。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:12:00Z }
related:
  - semantic-engineer
  - warehouse-layering
sources:
  - ../references/data-engineer-skills-2026-2036.md
  - ../../../raw/articles/数据集成与治理/ODS、DWD、DWS、ADS已经不够用了？AI时代的数仓该怎么分层.md
  - ../../../raw/articles/大胖说数据智能/【大胖智能】Data Agent 的本质不是 Agent，而是 Data Engineering.md
  - ../../../raw/articles/程序员老桥/数据治理90%的人第一步就错了，我用一张表理清了所有问题.md
  - ../../../raw/articles/数据集成与治理/终于有人把数据挖掘讲透了：原理、流程、方法一次看懂.md
---

# Definition

**数据工程瓶颈上移**描述三代变迁：能入库 → 是否可信 → 让所有 AI 正确理解并安全使用数据。

含义：手写 ETL/常规清洗将被大规模替代；人的价值集中在口径仲裁、法律责任、长期架构、利益权衡——AI 无法全自动接手之处。数仓从 BI 后端变为企业 AI 基础设施底座。

这不意味着拆掉 [数仓分层](./warehouse-layering.md)。AI 越进经营场景，越依赖 ODS–DWD 的主数据与可追溯链路；缺的是 ADS 之上的语义与调用边界，不是少做集成。Data Agent 能对话不难，难的是口径、权限、证据链——「Data Agent is Easy，Data Context is Hard」。治理第一步是问数据在哪、谁管、能用比例，不是先买工具。报表只回答发生了什么；要加深业务理解，还得追问为什么、什么重要、下一步做什么。

## Related

- [语义工程师](./semantic-engineer.md)
- [数仓分层](./warehouse-layering.md)
