---
type: Entity
title: "Claude"
description: "Anthropic 的助手与编码产品线（Claude.ai / Claude Code 等）；官方博客 claude.com/blog。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-08T10:15:00Z }
related:
  - ai-job-search
  - agent-oncall
  - claude-tag
  - loop-engineering
  - claude-academy
  - coding-agent-workflow
  - agents-md
  - pi
  - codex
  - grok-bot
  - skills-sh
  - risk-scaled-code-review
  - knowledge-work-plugins
sources:
  - ../references/claude-blog.md
  - ../references/claude-code-docs.md
  - ../references/anthropics-claude-code-github.md
  - ../references/anthropics-claude-cookbooks-github.md
  - ../references/anthropics-claude-plugins-official-github.md
  - ../references/anthropics-skills-github.md
  - ../../../raw/articles/Boris Cherny/I wanted to share a bunch of my favorite hidden and under-utilized features in C.md
  - ../../../raw/articles/Boris Cherny/Mistakes happen. As a team, the important thing is to recognize it’s never an.md
  - ../../../raw/articles/Thariq/Lessons from Building Claude Code－ How We Use Skills.md
  - ../../../raw/articles/Tw93/你不知道的 Claude Code：架构、治理与工程实践.md
  - ../../../raw/articles/Vince 聊开发/写好 CLAUDE.md 的 8 条经验：让 Claude Code 更懂你的项目.md
  - ../../../raw/articles/宝玉/构建 Claude Code 的经验：我们如何使用 Skills【译】.md
  - ../../../raw/articles/实践哥 Li/Claude Code 动态工作流： 每个任务都可以有自己的 Harness【译】.md
  - ../../../raw/articles/Xiao Tan/ClaudeCode 你想知道的所有秘密，源码深度研究报告.md
  - ../../../raw/articles/ismael/CLAUDE CODE de 0 a experto： La guía completa.md
---

# Identity

**Claude** 是 Anthropic 的大模型助手与终端编码产品线，核心包含对话端（Claude.ai）、API 以及终端自治编码代理（Claude Code，简称 CC）。

## Mechanism

在智能体工程与 Harness 范式中，Claude Code 具备代表性：

- **常驻上下文**：通过项目根目录的 [`CLAUDE.md / AGENTS.md`](./agents-md.md) 注入约束与规范；
- **扩展与机制**：深度集成 Skills、MCP 工具扩展与 Hooks 自动化流程；
- **工作流范式**：支持交互式配对编程、子代理委派与长程自治循环（[Loop Engineering](../concepts/loop-engineering.md)）。

官方博客：<https://claude.com/blog/> ；Claude Code 文档：<https://code.claude.com/docs> ；官方学习体系见 [Claude Academy](./claude-academy.md)。

西语完整入门指南（ismael，2026-10，从装到多代理团队共 10 部分）把核心心智收成「工作台」（mesa de trabajo）：上下文是有限桌面，/clear、子代理与插件都是在管理这张桌面。十条新手错含金量最高：一话跑多任务不 /clear；只说做什么不说为什么；超 10 分钟的活不先 plan；不让它「证明能跑」；CLAUDE.md 写三页（一屏放不下就该砍）；什么都用 Opus（日常 Sonnet、机械活 Haiku）；见插件就装（每个都占桌面且有机器权限）；跑偏了还等它跑完（Esc 立刻拦）；闭眼批权限（真要全批不如开 Auto Mode——它审得比赶时间的人细）；同一解释每周重复（变成 Skill）。安全五则：最小权限、生产动作必审、不贴秘密、信任要有证据、桌面要常清。

## Boundaries

产品线总入口，不是 [Claude Tag](./claude-tag.md) 频道身份、不是 [Claude Academy](./claude-academy.md) 教程、不是某一篇 Skills 指南。博客成文主旨是 Claude Code 实践才挂 `sources`，产品公告不堆。

## Related

- [AI Job Search](./ai-job-search.md)
- [Agent On-call](../concepts/agent-oncall.md)
- [Claude Tag](./claude-tag.md)
- [Loop Engineering](../concepts/loop-engineering.md)
- [Claude Academy](./claude-academy.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
- [AGENTS.md](./agents-md.md)
- [Pi](./pi.md)
- [Codex](./codex.md)
- [Grok Bot](./grok-bot.md)
- [skills.sh](./skills-sh.md)
- [Knowledge Work Plugins](./knowledge-work-plugins.md)
- [风险分层代码评审](../concepts/risk-scaled-code-review.md)
