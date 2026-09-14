---
type: Concept
title: "人像角色设定"
description: "先说气质方向，再展开成可生图的中文提示词：骨相、妆、发、衣、场景分开改。默认先写词，明确说「生成」才出图。"
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-09-14T23:20:00Z }
related:
  - ai-portrait-posing
  - candid-character-photography
sources:
  - ../../../raw/articles/南鸢/想要什么气质，直接说：我的人像角色设定 Skill 公开了.md
---

# Definition

**人像角色设定**（南鸢「人像角色设定师」Skill）：对付生图模型的「底膜脸」。用户只会说清冷、明媚、青涩，写不出脸型、眼、腮红、唇色。Skill 把感觉翻成一份能直接拿去生图的中文提示词。

公开仓：[nuyoah-ai-works/nuyoah-portrait-character-designer](https://github.com/nuyoah-ai-works/nuyoah-portrait-character-designer)（文称 v0.2.1）。要用旁边的规则和词表，不能只拷 `SKILL.md`。

怎么用：先给方向（「明媚唐风」），它起角色名并展开五官骨相、妆、发髻、衣饰、场景。你检查两件事——脸是不是想要的、妆有没有抓住重点——再改局部（只换口红、只借参考图的妆、不要把参考脸带过去）。**默认先出提示词**；你明确说「生成图片」才调用平台生图。没有生图能力就把词拷走。

和 [AI 人像美姿提示词](./ai-portrait-posing.md) 分工：美姿管转/弯/顺/露；本页管**这张脸是谁、妆往哪走**。美姿文里的收放气质只是姿势松紧，不是这套骨相妆发。

## 何时不用

- 当证件照/统一底模脸就是目标。
- 当只要机位和抓拍感：见 [抓拍感角色摄影](./candid-character-photography.md)。
- 当把参考图整张垫进去换脸：规则是借妆留五官。

## Related

- [AI 人像美姿提示词](./ai-portrait-posing.md)
- [抓拍感角色摄影](./candid-character-photography.md)
