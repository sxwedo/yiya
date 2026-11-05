---
type: Entity
title: "Karpathy"
description: "Andrej Karpathy：前 Tesla/OpenAI；教育向项目（nanochat 等）与「可弃理解制品」论；2026-10 用 Opus 5.5 两小时做出 HackerTube。"
kind: person
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-11-05T09:00:00Z }
related:
  - discardable-understanding-artifacts
  - agent-personal-workflow
sources:
  - ../../../raw/articles/Andrej Karpathy/HackerTube.md
---

# Identity

**Andrej Karpathy**（前 OpenAI 创始成员、前 Tesla Autopilot 负责人）持续做教育与个人工具向项目，并把「模型能干之后人该干什么」当成公开实验场。库里他的成文分两条线：

- **理解制品论**（2026-10）：模型把活干完后，人的主业移向监督与理解输出；专门生成用完可扔的定制制品（网页、讲解视频、图）当理解介质——机制展开见 [可弃理解制品](../concepts/discardable-understanding-artifacts.md)。
- **HackerTube**（2026-10-31，hackertube.org）：周六早上被 YouTube 的 slop 惹恼，把「做个基于 HN 推荐视频的 YouTube 克隆」交给 Opus 5.5，约两小时上线：抓全量 HN 评论文 → Sonnet 在 Claude Code Workflow 里过滤去 spam → 6454 个被 HN 推荐过的视频、150 个主题；免账号推荐（状态存本地）、50% 缩略图、键盘快捷键、站点数据可导出给自己的 agent 再造一份。

## Notes

他的自述工作法已极端 agent-first：Claude Code 桌面版 + Opus 5.5 Medium effort 默认；**不再做任何传统工程**（不读写代码、不进终端），只跟 Claude 说话；人只做盯页面挑 UI 毛病的活——反馈说出口极容易、手动改极繁琐的那一类。个人姿态同源详展见 [Agent 个人工作法](../concepts/agent-personal-workflow.md)。

## Boundaries

人物页只收与 agent 工作方式相关的线（理解制品、HackerTube、个人姿态）；模型教学线（nanoGPT/nanochat 类）未展开。HackerTube 的内容质量判断留给读者，本页不背书。

## Related

- [可弃理解制品](../concepts/discardable-understanding-artifacts.md)
- [Agent 个人工作法](../concepts/agent-personal-workflow.md)
