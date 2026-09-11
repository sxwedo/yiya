---
type: Entity
title: "Agent Skills"
description: "开放标准：用 SKILL.md 文件夹把规程、脚本与资源按需加载给 Agent；Anthropic 提出，跨多家 harness。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T12:00:00Z }
related:
  - skills-sh
  - knowledge-skill-separation
  - agents-md
  - mcp
  - claude
  - anthropics-skills-github
sources:
  - ../references/anthropics-skills-github.md
  - ../../../raw/articles/Claude/Introducing Agent Skills.md
  - ../../../raw/articles/Claude/Building agents with Skills: Equipping agents for specialized work.md
  - ../../../raw/articles/Claude/A complete guide to building skills for Claude.md
  - ../../../raw/articles/Claude/Extending Claude’s capabilities with skills and MCP servers.md
  - ../../../raw/articles/Claude/Lessons from building Claude Code： How we use skills.md
  - ../../../raw/articles/Claude/Skills explained： How Skills compares to prompts, Projects, MCP, and subagents.md
  - ../../../raw/articles/腾讯云开发者/一文讲透Agent三件套：MCP、Skill、Hook如何给大模型装上护栏.md
---

# Summary

**Agent Skills**（<https://agentskills.io>）是给 Agent 用的开放技能格式：一个文件夹，核心是 `SKILL.md`（YAML 头说明何时触发 + 正文写怎么做），可附脚本与参考文件。Claude 先扫短描述（约百 token），命中后再读全文与附件——渐进披露，不把全部规程焊进 system prompt。

与相邻层分开：

- **本页**：格式与加载模型（可组合、可移植、可含可执行代码）。
- **[skills.sh](./skills-sh.md)**：发现与 `npx skills` 安装，不是规范本体。
- **[AGENTS.md](./agents-md.md)**：仓内常驻说明书，每会话都读；Skills 按任务加载。
- **[MCP](./mcp.md)**：连上外部系统；Skills 教怎么用这些连接。
- **[知识与技能分离](../concepts/knowledge-skill-separation.md)**：Wiki 是「我们知道什么」，Skill 是「该怎么做」。

官方示例仓：[anthropics/skills](https://github.com/anthropics/skills)。

## Related

- [skills.sh](./skills-sh.md)
- [知识与技能分离](../concepts/knowledge-skill-separation.md)
- [AGENTS.md](./agents-md.md)
- [MCP](./mcp.md)
- [Claude](./claude.md)
- [anthropics/skills（GitHub）](../references/anthropics-skills-github.md)
