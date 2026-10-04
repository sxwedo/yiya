---
type: Concept
title: "可弃理解制品"
description: "模型越能干，人的工作越往监督和理解上移。智力与代码变便宜时，专门生成用完可扔的图、HTML、讲解视频，而不是硬啃长文。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-02T05:00:00Z }
related:
  - karpathy
  - plan-with-code
  - skill-whiteboard-video
  - loop-engineering
  - ai-design-deslop
  - named-style-tokens
  - answer-me-with-html
sources:
  - ../../../raw/articles/Andrej Karpathy/We'll be spending a lot more time trying to understand the outputs of language models.md
---

# Definition

**可弃理解制品**（Karpathy，2026-10-02）：模型会把越来越多的活自己干完，人剩下的主业是**监督和理解输出**。智力与代码变便宜之后，不要再默认用长文当理解介质；可以专门生成**大、定制、用完可扔**的软件制品——网页、讲解视频、图——这些在软件昂贵时根本不值得做。

理解介质有阶梯，后一级通常比前一级更好消化：

1. **受控写作。** 让模型用 ASD-STE100（航空维修用的受控英语）解释。约束重，句子干净。规格太严就降到「八成 STE100」。这不是文风品味课，是给监督者减解析成本。
2. **图。** 文字换成图，更容易扫结构和关系。
3. **HTML 页。** 要交互、动画、可点的体验，而不是再贴一段 Markdown。前端已经够好，一次性页面可以当理解工具。
4. **讲解视频。** 他最看好的形态：任意主题的定制 explainer（例：3Blue1Brown 风格 + 语音）。语音可用 ElevenLabs，也可用本机替代。开始能跑了，不等于产线。

两句机制不要拆开：上移到监督，是劳动分工变了；可弃制品，是因为生成成本塌了，才养得起「只为看懂这一次」的软件。没有后者，监督仍会卡在读不动的长文上。

对照：[Loop Engineering](./loop-engineering.md) 设计自治闭环，本页管闭环之上人怎么看懂产物。[用代码做计划](./plan-with-code.md) 的 throwaway 原型是为了决定建什么；这里的制品是为了看懂已经生成的东西。[字幕驱动白板手绘成片](./skill-whiteboard-video.md) 是一条带确认门的成片流水线；本页不规定分幕、TTS、合成。[AI Design De-slop](../../design/concepts/ai-design-deslop.md) 管产品 UI 去糊；一次性理解页可以丑、可以扔，不必进真仓。

## Boundaries

不是 [LLM Wiki](../../../shared/concepts/llm-wiki.md)，不是人物百科。不是 ASD-STE100 规范本身，不是 ElevenLabs 产品卡。不是把理解制品当验收：看懂 ≠ 证据门过了。不是设计纪律、不是白板成片 SOP。把四个办法抄进常驻 `AGENTS.md` 也不是本页，那是 [命名风格词](./named-style-tokens.md)。

## Related

- [Andrej Karpathy](../../../shared/entities/karpathy.md)
- [用代码做计划](./plan-with-code.md)
- [字幕驱动白板手绘成片](./skill-whiteboard-video.md)
- [Loop Engineering](./loop-engineering.md)
- [AI Design De-slop](../../design/concepts/ai-design-deslop.md)
- [命名风格词](./named-style-tokens.md)
- [Answer me with HTML](../entities/answer-me-with-html.md)
