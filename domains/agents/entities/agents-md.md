---
type: Entity
title: "AGENTS.md"
description: "仓内给编码代理读的约定文件：对人用 README，对 Agent 用 AGENTS.md；规范站点 agents.md。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T23:30:00Z }
related:
  - agents-md-site
  - pi
  - coding-agent-workflow
  - multi-harness-control-plane
  - skills-sh
  - llm-wiki
sources:
  - ../references/agents-md-site.md
  - ../../../raw/articles/超级个体｜柿子/openclaw保姆级教学（中级篇）.md
  - ../../../raw/articles/Leo｜LeoLabs.me/昨天分享了 Claude－Codex－Gemini 共享 Skills，有人问：装了几十个 skill，菜单全是英文记不住怎么办？.md
  - ../../../raw/articles/MateMatt/Agent 的数据面概念扫盲-建立技术侧(Context Memory RAG) 认知体系(上).md
---

# Summary

**AGENTS.md**（https://agents.md/）是放在仓库里、给编码代理读的 Markdown 约定：项目怎么构建、测、改，写进人读的 README 之外。各家 harness（Claude Code、Codex、Pi 等）启动时会找这份文件当常驻上下文。本库根目录的 `AGENTS.md` 就是这份约定在 yiya 的实例。

定位：仓 → **Agent 可读的项目说明书**，不是 harness、不是 MCP。Pi 把它当上下文原语；多 Harness 控制面从一份事实源生成各平台的 `AGENTS.md` / `CLAUDE.md`。LLM Wiki 的 schema 层也常用同一文件名。

## Related

- [AGENTS.md（站点书签）](../references/agents-md-site.md)
- [Pi](./pi.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
- [Multi-Harness Control Plane](../concepts/multi-harness-control-plane.md)
- [skills.sh](./skills-sh.md)
- [LLM Wiki](../../../shared/concepts/llm-wiki.md)
- [openclaw保姆级教学（中级篇）](../../../raw/articles/超级个体｜柿子/openclaw保姆级教学（中级篇）.md)
- [昨天分享了 Claude－Codex－Gemini 共享 Skills，有人问：装了几十个 skill，菜单全是英文记不住怎么办？](../../../raw/articles/Leo｜LeoLabs.me/昨天分享了 Claude－Codex－Gemini 共享 Skills，有人问：装了几十个 skill，菜单全是英文记不住怎么办？.md)
- [Agent 的数据面概念扫盲-建立技术侧(Context Memory RAG) 认知体系(上)](../../../raw/articles/MateMatt/Agent 的数据面概念扫盲-建立技术侧(Context Memory RAG) 认知体系(上).md)
