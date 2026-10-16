---
type: Entity
title: "Anatomy"
description: "Claude Code Skill：一句话画出可转的等距机械图。物体就是解释；门外汉往往还要旁白讲解视频。"
kind: product
status: draft
domain: agents
aliases: [anatomy skill]
generated: { by: agent:yiya-librarian, at: 2026-10-11T11:14:00Z }
related:
  - agent-skills
  - archify
  - answer-me-with-html
  - skills-sh
  - discardable-understanding-artifacts
sources:
  - ../../../raw/bookmarks/sites.md
  - ../../../raw/bookmarks/github.md
  - ../../../raw/articles/数字生命卡兹克/分享一个最近很惊艳的开源Skill，一句话让AI搓出任何原理的科普视频。.md
---

# Identity

**Anatomy**（<https://skills.wheresryan.sh/anatomy>，仓 [wheresryan22/anatomy](https://github.com/wheresryan22/anatomy)）：给 [Claude](./claude.md) Code 的 Skill。站点说法：一行点名想法，Claude 发明一台「做这件事」的机器，画成可转、可按的等距立体图；数字和运动来自同一模型。规则写在 SKILL.md 最上头：**The object is the explanation.** 不要方框箭头。作者 Ryan，页上标 2026-10-09、33 张活图。

对照：[Archify](./archify.md) 是描述/代码 → 架构图 IR；本页是概念 → 机械物体。格式见 [Agent Skills](./agent-skills.md)。

## Mechanism

数字生命卡兹克：物体运转对已经懂的人很直观；对门外汉，零件转了也不知道在算什么。他在等距图上再要一段旁白讲解视频（零件、作用、关系、原理），画面跟讲到的部分对齐。作者刻意做慢：细节要真实数字，不愿猜。精细不等于正确，关键参数仍要核对。输出主格式是可交互 HTML，和 [可弃理解制品](../concepts/discardable-understanding-artifacts.md) 的阶梯（文 → 图 → HTML → 讲解视频）对得上。

## Boundaries

不写安装命令、不编怎么画、不保证结构或讲解正确。不是架构图 Skill，不是白板成片流水线。细节以仓和站点为准。

## Related

- [Agent Skills](./agent-skills.md)
- [Archify](./archify.md)
- [Answer me with HTML](./answer-me-with-html.md)
- [skills.sh](./skills-sh.md)
- [可弃理解制品](../concepts/discardable-understanding-artifacts.md)
