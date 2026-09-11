---
type: Entity
title: "Claude"
description: "Anthropic 的助手与编码产品线（Claude.ai / Claude Code 等）；官方博客 claude.com/blog。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-08T10:15:00Z }
related:
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
---

# Summary

**Claude** 是 Anthropic 的大模型助手与终端编码产品线，核心包含对话端（Claude.ai）、API 以及终端自治编码代理（Claude Code，简称 CC）。

在智能体工程与 Harness 范式中，Claude Code 具备代表性：

- **常驻上下文**：通过项目根目录的 [`CLAUDE.md / AGENTS.md`](./agents-md.md) 注入约束与规范；
- **扩展与机制**：深度集成 Skills、MCP 工具扩展与 Hooks 自动化流程；
- **工作流范式**：支持交互式配对编程、子代理委派与长程自治循环（[Loop Engineering](../concepts/loop-engineering.md)）。

官方博客：<https://claude.com/blog/> ；Claude Code 文档：<https://code.claude.com/docs> ；官方学习体系见 [Claude Academy](./claude-academy.md)。

## Related

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
- [Claude Blog](../references/claude-blog.md)
- [Claude Code Docs](../references/claude-code-docs.md)
- [anthropics/claude-code（GitHub）](../references/anthropics-claude-code-github.md)
- [anthropics/claude-cookbooks（GitHub）](../references/anthropics-claude-cookbooks-github.md)
- [anthropics/claude-plugins-official（GitHub）](../references/anthropics-claude-plugins-official-github.md)
- [anthropics/skills（GitHub）](../references/anthropics-skills-github.md)
