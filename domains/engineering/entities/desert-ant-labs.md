---
type: Entity
title: "Desert Ant Labs"
description: "欧洲端侧小模型实验室：一任务一模型，毫秒级、无 token 费，SDK 进 App；数据默认不出设备。"
kind: org
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-15T00:20:00Z }
related:
  - buzz
  - eval-driven-development
sources:
  - ../../../raw/articles/Paul Veugen/Introducing Desert Ant Labs.md
---

# Identity

<https://desertant.com> 欧洲端侧小模型实验室（Paul Veugen 2026-09-08 介绍文）。音频/视觉/文本，一任务一模型，毫秒级、不按 token 计费。Swift / Kotlin / JS SDK。

## Mechanism

介绍文口径：首发约 18 个模型。Voz 端侧转录（文称快于 Whisper）；Clear 约 9MB 音频增强；Redact 端侧 PII；Tongue 约 2MB 语种识别。动机：自家视频应用 Detail 的云账单；HF 上找不到能直接装进产品的端侧模型。数据默认不出设备；免费额度到 10 万月活（不是 SLA）。

## Boundaries

不是云 API，不是编码代理，不是 [评测驱动开发](../concepts/eval-driven-development.md) 那套 LLM 轨迹评测。对照 [Buzz](./buzz.md)（本机 Whisper 转写产品）。原料只是介绍文，不编未灌训练细节。

## Related

- [Buzz](./buzz.md)
- [评测驱动开发](../concepts/eval-driven-development.md)
