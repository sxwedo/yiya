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
  - llm-as-judge-runtime
sources:
  - ../../../raw/articles/TypeSafe AI/Introduction.md
  - ../../../raw/bookmarks/tools.md
  - ../../../raw/articles/Movez/Jev Engineering: how to build the fastest AI Agent Brain in 10 Steps (Full-Setup).md
  - ../../../raw/articles/huangserva/拿到 Jev，然后呢？ Jev 到底能干什么：剔掉虚火之后的一份真实落地清单.md
  - ../../../raw/articles/codila/Jev Engineering: Full 10-Step Roadmap to Set Up and Use a New Brain for AI (from scratch).md
  - ../../../raw/articles/Aparna Dhinakaran/Will TypeSafe’s Jev change how we build AI applications?.md
  - ../../../raw/articles/Daniel Ch/How to master Jev (Full Guide).md
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

0xCodila 另有一份同构 10 步路线图，开头用 Jevons 悖论：判断变便宜，总调用往往会变多，不是少用模型。Movez《Jev Engineering》：Agent 环里用贵 LLM 回答是否、选下一个工人、打相关性，是错配。拆开——LLM 检索/写段落；Jev 路由、打分、放行；**代码执行**。字段名（如 `safe_to_publish`）Jev 看不见，要求写进问题正文，证据和原始请求分开。选项菜单每轮按**当前可用**重建，否则在选昨天的菜单。问题互相读不到答案；需要新搜索结果就先搜再问。confidence 高不能证明文件已保存或消息已发出——[Jev Ultrafast](./jev-ultrafast.md) 在 DONE 之后另做结果核对。文称 Jev 1.13 约 $0.042 / 百万 input、无 output 计费；价目仍以官方页为准。

huangserva 落地清单：网上「200 倍 / 永不幻觉 / 取代 LLM」大多是转发。「永不幻觉」只表示**不答选项外的东西**，选错完全可能。Doom 演示喂的是坐标不是画面。合理分法：大模型想清规则，Jev 高频执行以前不值得上 AI 的小判断。作者往日常订阅制编码工具里塞了四次全失败（上下文 32K 砍完就看不见；订阅边际成本为零再插一层不省钱；周围壳太脆）。217 个公开项目里「今天能用」且证据够的几乎都是框架接入，应用标杆仍是 [Jev Ultrafast](./jev-ultrafast.md)。作者 300 题中文资讯：九成以上把握那一档全对，但样本简单，**今天别当生产结论**。对上轻量模型，准和钱打平，多的是尾延迟稳、带可分流的把握。

Daniel Ch 指南：文称当时稳定版 jev-1.13.0，英语最强，早期软件，贵的事上线前用自己的数据测。别当聊天模型 prompt；state 保持干净；并行问题 + confidence 门槛。Jev 当 judge 不当 writer。

Aparna Dhinakaran：应用里大量 LLM 调用其实是 pass/fail、路由、贴标签，尤其 LLM-as-judge。Jev 把「零样本判断」从「必须生成长文」里拆出来。厂商自评四条决策流平均约 68% 准、约 $0.0004 / 0.4s（文称，独立样本仍小）。代价是**没有解释**；可全量用 Jev 盯，失败样本再丢给 LLM judge 要 why。95% 对但不知道另外 5% 在哪，仍无法自动化——要的是概率带来的门槛、升级、抽检。调用若花几千 output token 才吐 5 个标签，工具用错了。

## Boundaries

不是聊天模型，不写 briefing、不写代码、不解释推理。官方介绍未写图/音/视频输入。不是「更便宜的大模型」，也不会看图自动驾驶。不是实验室本体（那是 TypeSafe AI）。

## Related

- [TypeSafe AI](./typesafe-ai.md)
- [Jev Ultrafast](./jev-ultrafast.md)
- [Awesome Jev](./awesome-jev.md)
- [LLM-as-Judge Runtime](../concepts/llm-as-judge-runtime.md)
