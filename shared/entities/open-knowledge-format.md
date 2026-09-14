---
type: Entity
title: "Open Knowledge Format"
description: "Google Cloud 开放规范：带 YAML 头的 Markdown 目录，人与 Agent 共读。Wiki 是方法，OKF 是互操作格式；yiya bundle 同源。"
status: draft
domain: shared
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
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

**Open Knowledge Format（OKF）**是 Google Cloud 2026-06-12 放出的 v0.1 开放知识包约定（博客 + GitHub，无发布会）：一个目录里放 UTF-8 Markdown，每页 YAML 头（必填 `type`，推荐 `title` / `description` / `resource` / `tags`），相对链接互指，保留 `index.md` / `log.md`。不规定运行时、数据库或 SDK。飞叔的判断：这不是发明文件夹，是给已经散落的 `AGENTS.md` / Obsidian / [LLM Wiki](../concepts/llm-wiki.md) 写一部通用语法。

对模型最友好的知识形态是写得好的 Markdown，不是库表行或 embedding。RAG 是事后把「为人写的文档」打碎再拼；OKF 从源头按人机共读组织。三个工程红利：文件夹即可读（无云、无 SDK）；知识即代码（Git 分支/评审/diff/回滚，`log.md` 审计）；生产者与消费者解耦。规范要求容错消费：未知 `type`、缺可选字段、断链，一个文件坏了不影响其余。

**渐进式披露：** Agent 先读 `index.md` 看地图，用标题和一句描述判断相关性，只打开需要的页，再顺着链接走。回应上下文有限和 Lost in the Middle。与 Agent Skills 同构：先发现名字和描述，按需加载。分工：OKF 回答知道什么，Skills 回答怎么做，见 [知识与技能分离](../../domains/agents/concepts/knowledge-skill-separation.md)。关联写在 Markdown 链接里，顺着读就是推理路径，不是先建模再灌图数据库。

本库 [yiya](./yiya.md) 的 Domain bundle（`type` + entities/concepts + 相对路径）即同一形态。约定文件见 [AGENTS.md](../../domains/agents/entities/agents-md.md)。人读面 [Obsidian](./obsidian.md)。Agent 技能从知识生长见 [WikiSkill 三层架构](../../domains/agents/concepts/wikiskill-architecture.md)。

## Related

- [LLM Wiki](../concepts/llm-wiki.md)
- [yiya](./yiya.md)
- [Obsidian](./obsidian.md)
- [WikiSkill 三层架构](../../domains/agents/concepts/wikiskill-architecture.md)
- [知识与技能分离](../../domains/agents/concepts/knowledge-skill-separation.md)
- [AGENTS.md](../../domains/agents/entities/agents-md.md)
