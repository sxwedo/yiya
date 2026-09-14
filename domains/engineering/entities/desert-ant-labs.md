---
type: Entity
title: "Desert Ant Labs"
description: "欧洲端侧小模型实验室：一任务一模型，毫秒级、无 token 费，SDK 进 App；数据默认不出设备。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - buzz
  - eval-driven-development
sources:
  - ../../../raw/articles/Paul Veugen/Introducing Desert Ant Labs.md
---

# Summary

**Desert Ant Labs**（<https://desertant.com>，Paul Veugen 2026-09-08 介绍文）做意见化**端侧**小模型：音频 / 视觉 / 文本，一个任务一个模型，毫秒级、不按 token 计费。Swift / Kotlin / JS 一套 SDK。首发约 18 个模型。例：Voz 端侧转录（文称快于 Whisper）；Clear 约 9MB 音频增强；Redact 端侧 PII；Tongue 约 2MB 语种识别。

动机不是再做一个云 API。自家视频应用 Detail 上云账单；Hugging Face 上找不到能直接装进产品的端侧模型，于是自训。主张数据默认不出设备；免费额度到 10 万月活设备（介绍文口径，不是 SLA）。

对照：[Buzz](./buzz.md) 是本机 Whisper 转写产品；Desert Ant 是多任务端侧模型实验室，不是编码代理，也不走 [评测驱动开发](../concepts/eval-driven-development.md) 那套云端 Agent 评测飞轮——评测若做，对象是设备上的专用小模型，不是 LLM 轨迹。

## Related

- [Buzz](./buzz.md)
- [评测驱动开发](../concepts/eval-driven-development.md)
