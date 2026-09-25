---
type: Entity
title: "Repowise"
description: "本地索引代码/依赖/git/测试/文档，给人和 Agent 带出处的答案。图与健康分不靠 LLM。书签入口。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-25T00:50:00Z }
related:
  - mcp
  - codegraph
  - zread
sources:
  - ../../../raw/bookmarks/github.md
  - ../../../raw/bookmarks/sites.md
---

# Identity

**Repowise**（[repowise-dev/repowise](https://github.com/repowise-dev/repowise)，站 [repowise.dev](https://repowise.dev)）：代码库先编成一份本地索引，再给人/Agent 引用回答、改动影响、代码健康。README 称图、风险、健康、死代码、PR review **零 LLM**；生成散文可选。自托管，AGPL-3.0 或商用。MCP 名 `dev.repowise/repowise`。本页无成文，不抄其评测数字。

## Boundaries

库里只有入口。不是 [Zread](./zread.md) / [Code Wiki](./code-wiki.md) 那种仓→给人读的 Wiki，也不是 [CodeGraph](./codegraph.md) 另一份预索引图谱。

## Related

- [MCP](./mcp.md)
- [CodeGraph](./codegraph.md)
- [Zread](./zread.md)
