---
type: Entity
title: "Open Knowledge Format"
description: "Google 开放规范：带 YAML frontmatter 的 Markdown 目录，人与 Agent 共读；本库 yiya bundle 形态同源。"
status: draft
domain: shared
generated: { by: agent:yiya-librarian, at: 2026-09-11T16:50:00Z }
related:
  - llm-wiki
  - yiya
  - obsidian
  - wikiskill-architecture
  - knowledge-skill-separation
  - agents-md
sources:
  - ../../raw/articles/飞叔慢谈/OKF 工程：一种新的语义表达范式正在形成.md
  - ../../raw/articles/AI大模型应用实践/深度解读｜从 LLM Wiki 到 Google OKF，如何重建企业 Agent 的可靠知识底座.md
---

# Summary

**Open Knowledge Format（OKF）**是 Google Cloud 2026 放出的开放知识包约定：一个目录里放 UTF-8 Markdown，每页 YAML 头（必填 `type`），用相对链接互指，保留 `index.md` / `log.md`。不规定运行时、数据库或 SDK；目标是人和 Agent 都能直接读写，无需定制工具。

相对 [LLM Wiki](../concepts/llm-wiki.md)：Wiki 是方法（raw 编译成可导航知识层），OKF 是互操作格式（知识包怎么表示、携带、交换）。本库 [yiya](./yiya.md) 的 Domain bundle（`type` + entities/concepts + 相对路径）即同一形态。与 [Agent Skills](../../domains/agents/entities/agent-skills.md) 分工：OKF 回答「知道什么」，Skills 回答「怎么做」。

## Related

- [LLM Wiki](../concepts/llm-wiki.md)
- [yiya](./yiya.md)
- [Obsidian](./obsidian.md)
- [WikiSkill 三层架构](../../domains/agents/concepts/wikiskill-architecture.md)
- [知识与技能分离](../../domains/agents/concepts/knowledge-skill-separation.md)
- [AGENTS.md](../../domains/agents/entities/agents-md.md)
