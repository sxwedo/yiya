---
type: Entity
title: "Jev"
description: "TypeSafe 旗舰、第一个 System One 模型：对 state 问类型化问题，直接返回 Choice / Score / Noul。不生成长文、不用 parse。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-17T23:55:00Z }
related:
  - typesafe-ai
  - jev-ultrafast
  - awesome-jev
sources:
  - ../../../raw/articles/TypeSafe AI/Introduction.md
  - ../../../raw/bookmarks/tools.md
  - ../../../raw/articles/Movez/Jev Engineering: how to build the fastest AI Agent Brain in 10 Steps (Full-Setup).md
---

# Identity

**Jev**（[TypeSafe AI](./typesafe-ai.md) 旗舰模型；Vercel 页 [ai-gateway/models/jev](https://vercel.com/ai-gateway/models/jev)）：第一个 System One 模型。LLM 给人读长文；代码要的是判断。Jev 对一份 **state** 问若干类型化 **questions**，直接返回结构化结果和概率分布，供分支、排序、路由。不生成文本，不用再 parse。

## Mechanism

三个原语可混在一次请求里，对同一 state **并行、隔离**评估；加问题几乎不拖响应，也不互相抢上下文。

| 问题 | 目标 | 返回 |
| --- | --- | --- |
| Choice | 从列表选一个 | `choice`、`probabilities`、`confidence` |
| Score | 按量尺打分 | `score`、`probabilities`、`confidence` |
| Noul | 这句话是真的吗 | `noul`（0–1） |

问题要窄，像几秒能做的直觉判断。多因素拆开问，权重写在代码里（改系数，不改 prompt）。例：别问「给创业计划打分」，分问市场规模、技术可行性、差异化。

浏览器环见 [Jev Ultrafast](./jev-ultrafast.md)。训练路径（RLCD）在 Primer，本页未灌。

Movez《Jev Engineering》：Agent 环里用贵 LLM 回答是否、选下一个工人、打相关性，是错配。拆开——LLM 检索/写段落；Jev 路由、打分、放行；**代码执行**。字段名（如 `safe_to_publish`）Jev 看不见，要求写进问题正文，证据和原始请求分开。选项菜单每轮按**当前可用**重建，否则在选昨天的菜单。问题互相读不到答案；需要新搜索结果就先搜再问。confidence 高不能证明文件已保存或消息已发出——[Jev Ultrafast](./jev-ultrafast.md) 在 DONE 之后另做结果核对。文称 Jev 1.13 约 $0.042 / 百万 input、无 output 计费；价目仍以官方页为准。

## Boundaries

不是聊天模型，不写 briefing、不写代码、不解释推理。官方介绍未写图/音/视频输入。不是实验室本体（那是 TypeSafe AI）。

## Related

- [TypeSafe AI](./typesafe-ai.md)
- [Jev Ultrafast](./jev-ultrafast.md)
- [Awesome Jev](./awesome-jev.md)
