---
type: Entity
title: "Code Wiki"
description: "Google 的 GitHub 仓 Wiki：Gemini 生成架构说明与图，提交后更新；对话以该 wiki 为上下文。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T22:00:00Z }
related:
  - code-wiki-site
  - zread
  - gitmcp
  - llm-wiki
sources:
  - ../references/code-wiki-site.md
---

# Summary

**Code Wiki**（https://codewiki.google/）是 Google 用 Gemini 给公开 GitHub 仓编的交互文档：自然语言摘要、架构图、链回源码，以及「问这个仓」的对话（上下文是这份 wiki，不是泛聊天）。公开预览免费。直达：`codewiki.google/github.com/owner/repo`。私有仓/Gemini CLI 扩展另开，本库先收站点。

定位：仓 → **持续更新的代码 Wiki**，不是 harness。同簇 [Zread](./zread.md) 也是仓 → 项目 Wiki（智谱；地址栏换域）；[GitMCP](./gitmcp.md) 是仓 → MCP。个人知识编译见 [LLM Wiki](../../../shared/concepts/llm-wiki.md)。

## Related

- [Code Wiki（站点书签）](../references/code-wiki-site.md)
- [Zread](./zread.md)
- [GitMCP](./gitmcp.md)
- [LLM Wiki](../../../shared/concepts/llm-wiki.md)
