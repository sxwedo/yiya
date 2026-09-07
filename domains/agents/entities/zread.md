---
type: Entity
title: "Zread"
description: "把 GitHub 仓编译成结构化项目 Wiki：架构图、模块说明、文档内问答；地址栏 github.com 换成 zread.ai 即开。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T21:00:00Z }
related:
  - zread-site
  - gitmcp
  - code-wiki
  - llm-wiki
sources:
  - ../references/zread-site.md
---

# Summary

**Zread**（https://zread.ai/）用 LLM 读公开 GitHub 仓，生成可浏览、可问答的项目 Wiki（架构、模块、依赖）。快捷方式：把 `github.com` 换成 `zread.ai`。另有本地 CLI（`zread generate`，文档落在 `.zread/wiki/`）。

定位：仓 → **给人/Agent 读的代码 Wiki**，不是 harness。同簇还有 Google [Code Wiki](./code-wiki.md)（Gemini，提交后更新；`codewiki.google/github.com/…`）。「给仓加可读上下文」另见 [GitMCP](./gitmcp.md)（仓 → MCP）。个人知识编译见 [LLM Wiki](../../../shared/concepts/llm-wiki.md)。

## Related

- [Zread（站点书签）](../references/zread-site.md)
- [Code Wiki](./code-wiki.md)
- [GitMCP](./gitmcp.md)
- [LLM Wiki](../../../shared/concepts/llm-wiki.md)
