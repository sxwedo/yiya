---
type: Entity
title: "Answer me with HTML"
description: "Skill：模型只写内容草稿，CLI 出一页可读 HTML。比让模型手写整页少输出 token。库里只有入口。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-04T02:00:00Z }
related:
  - agent-skills
  - skills-sh
  - discardable-understanding-artifacts
  - archify
sources:
  - ../../../raw/bookmarks/github.md
---

# Identity

**Answer me with HTML**（[QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html)）：问复杂问题，Agent 先写短 Markdown，再把草稿交给技能自带的 CLI，约 50ms 出一页可读 HTML（图、对照表、时间线），不是一面墙文字。一句能答完的问题不出页。`npx skills add QingYunA/answer-me-with-html`。仓还写可要 3Blue1Brown 风讲解视频。

对照：[可弃理解制品](../concepts/discardable-understanding-artifacts.md) 是 Karpathy 的介质阶梯；本页是把其中 HTML 这一级做成 Skill+CLI，让模型少打 CSS/SVG。[Archify](./archify.md) 出架构图 IR；本页是通用解释页。发现/安装见 [skills.sh](./skills-sh.md)。

## Boundaries

库里只有 GitHub 入口。不是 [Agent Skills](./agent-skills.md) 格式本身，不是把 STE100 写进常驻 `AGENTS.md`。无成文，不编基准数字和视频流水线。

## Related

- [Agent Skills](./agent-skills.md)
- [skills.sh](./skills-sh.md)
- [可弃理解制品](../concepts/discardable-understanding-artifacts.md)
- [Archify](./archify.md)
