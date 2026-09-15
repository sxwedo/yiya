---
type: Entity
title: "Open Knowledge Format"
description: "Google Cloud 开放规范：带 YAML 头的 Markdown 目录，人与 Agent 共读。Wiki 是方法，OKF 是互操作格式；yiya bundle 同源。"
kind: work
status: draft
domain: shared
aliases: [OKF]
generated: { by: agent:yiya-librarian, at: 2026-09-15T00:05:00Z }
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

# Identity

**OKF** 是知识包怎么表示与交换，不是 wiki 方法本身。一个目录、UTF-8 Markdown、YAML 头、相对链接。

## Timeline

- 2026-06-12 Google Cloud 放出 v0.1（博客 + GitHub，无发布会）。

## Mechanism

必填 `type`；推荐 `title` / `description` / `resource` / `tags`。保留 `index.md` / `log.md`。不规定运行时、数据库、SDK。容错：未知 type、缺可选字段、断链，一页坏了不影响其余。

渐进披露：先读 index 的标题和一句描述，再打开需要的页。与 Agent Skills 同构（先名字后正文）。OKF 回答知道什么，Skills 回答怎么做，见 [知识与技能分离](../../domains/agents/concepts/knowledge-skill-separation.md)。关联写在 Markdown 链接里。

[yiya](./yiya.md) bundle 同源。人读面 [Obsidian](./obsidian.md)。方法页 [LLM Wiki](../concepts/llm-wiki.md)。

## Boundaries

不是 embedding 规范，不是图数据库 schema，不是 [AGENTS.md](../../domains/agents/entities/agents-md.md) 文件格式本身。

## Related

- [LLM Wiki](../concepts/llm-wiki.md)
- [yiya](./yiya.md)
- [Obsidian](./obsidian.md)
- [WikiSkill 三层架构](../../domains/agents/concepts/wikiskill-architecture.md)
- [知识与技能分离](../../domains/agents/concepts/knowledge-skill-separation.md)
- [AGENTS.md](../../domains/agents/entities/agents-md.md)
