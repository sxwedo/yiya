---
type: Entity
title: "Lieflat Less AI Tone"
description: "283 万字对照实验做出来的中文去 AI 味 Skill：频率≥2×才算特征；不存在统一 AI 文风。场景是媒体/深度自媒体，不是 UI destlop。"
kind: product
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-09-15T14:40:00Z }
related:
  - lieflat-charts
  - ai-design-deslop
  - agent-skills
sources:
  - ../../../raw/articles/躺在废墟里 Lieflat/做了一个可能有最多数据支撑的去 AI 味 skill.md
---

# Identity

[larashero3-dotcom/lieflat-less-ai-tone](https://github.com/larashero3-dotcom/lieflat-less-ai-tone)（Lieflat / @Zhiyu333，Moxt 上做）。用语言学对照实验量化中文「AI 味」，再写成可执行 Skill。同作者图表 skill 见 [Lieflat Charts](./lieflat-charts.md)。

## Mechanism

语料：人类 329 篇 / 164.8 万字；AI 300 篇（Claude Opus 4.6、DeepSeek V4-Pro、Gemini 3.1 Pro、GPT 5.6 Sol、Kimi K3 各 60，同题同体裁、不联网、不给风格指令）。合计 629 篇、283 万字。

规则：候选特征 AI 频率 ≥ 人类 2× 才算显著；0.8–1.25 视为无差异；&lt;0.8 说明人类用得更多，按「减这条」改只会更不像人。26 项假设里 11 项通过，多在篇章结构，不在词汇标点总量。

通过的方向包括：段首零回指评论（约 4.4×，补「这」一类回指）；拟人化喻体（「不知疲倦的助手」类，比喻**数量** AI 并不更高）；冒号空转句 / 提示语冒号；部分翻译腔（过长前置定语、「当…时」、话题壳、句首连接词、「这意味着」复述）。AI 数字密度约人类 0.35×，不要凭空补数据。

流行认知里未过检验：正文设问（人类约 17×）；句长均匀度曾是假阳性（切句 bug）。模型之间可差到四十倍（破折号 DeepSeek 5.16/千字 vs GPT 0.11），**没有统一 AI 文风**。改规则前先抽样 20 条命中再看频率。

## Boundaries

针对媒体/深度自媒体中文，不是小说或论文专用。不是 [AI Design De-slop](../concepts/ai-design-deslop.md)（那是 UI 去糊）。280 万字不够代表「人类」或「AI」；作者认为贴切比喻最终可能要预训练解决。个案语感规则会覆盖不全或误伤自己的习惯。

## Related

- [Lieflat Charts](./lieflat-charts.md)
- [AI Design De-slop](../concepts/ai-design-deslop.md)
- [Agent Skills](../../agents/entities/agent-skills.md)
