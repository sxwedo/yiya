---
type: Concept
title: "命名风格词"
description: "先知道要什么效果，再找能指向它的名字，对照测试后再写入任务级提示。不要把别人的词塞进常驻 AGENTS.md。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-03T09:10:00Z }
related:
  - discardable-understanding-artifacts
  - agents-md
  - vibe-coding-visual-lexicon
sources:
  - ../../../raw/articles/花叔/如何用好AI？从Andrej Karpathy的提示词策略讲起.md
---

# Definition

**命名风格词**（花叔，2026-10-03）：Karpathy 四个理解介质（ASD-STE100、图、HTML、讲解视频）能火，不是因为那四个词该写进全局配置，而是因为**一个具体名字已经压缩过一整套规则、作品和做法**。该抄的是找词、测试、验证；不是把别人的词贴进每次都会加载的 `AGENTS.md` / `CLAUDE.md`。

「写得简洁一点」「画得高级一点」太宽，模型只能挑一个它觉得对的。`ASD-STE100`、药品说明书、金字塔原理、3Blue1Brown、xkcd、J-cut 这类名字，在训练语料里对应的东西更集中，输出差得也更大。

## Mechanism

1. **先别写进常驻配置。** 根 `AGENTS.md` 每次会话都加载。把航空维修受控英语写进去，写代码、写周报、写公众号都会被往手册腔拽。Karpathy 拿 STE100 是为了读懂一段解释，而且他自己说规范太严时只做到八成。
2. **对照测试。** 同一任务只改一句话，每个条件开新 agent，关掉本机其它配置。名字越具体，两次结果之间的差越大；「简洁一点」可能几乎不变。
3. **名字会带进你不要的东西。** 用「王小波」两次都编了云南知青故事——履历是真的，故事是假的。不跟无要求版本并排看，看不出这份行李。
4. **从自己已经喜欢的东西里找词。** 贴一段喜欢的，让模型拆结构、节奏、技法，给出可核对出处的术语；没有现成名就直接描述做法。再用同一个小任务演示两个候选。
5. **核对再入库。** 先让模型讲这个名字具体要求什么，回原书/原作品核对，再跟基线各跑一两次。词表只存：名字、出处、适合哪类任务、一句具体要求。真要进 `AGENTS.md`，也只写自己测过的，并标任务类型。

剪辑同理：说「更有电影感」不如说 J-cut / L-cut / match cut / cut on action；同一技法提前半秒和三秒也不是一回事。

taste 在这里不是气质：看得多了才知道自己喜欢什么，也才说得出名字。

## Boundaries

不是 [可弃理解制品](./discardable-understanding-artifacts.md) 本身，不是 ASD-STE100 规范页。不是把四个办法做成 Skill 或 GitHub 模板。视觉结构词表见 [Vibe Coding 视觉词典](../../design/concepts/vibe-coding-visual-lexicon.md)；本页管的是**怎么找到并验证名字**，不收布局/组件词条。仓级约定怎么写见 [AGENTS.md](../entities/agents-md.md)。

## Related

- [可弃理解制品](./discardable-understanding-artifacts.md)
- [AGENTS.md](../entities/agents-md.md)
- [Vibe Coding 视觉词典](../../design/concepts/vibe-coding-visual-lexicon.md)
