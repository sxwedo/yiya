---
type: Entity
title: "pi-crew"
description: "Pi 扩展：非阻塞并行子代理。当前会话继续交互，结果自动回传。worktree 隔离，作者声明非 hardened。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-16T13:20:00Z }
related:
  - pi
  - oh-my-pi
  - advisor
sources:
  - ../../../raw/bookmarks/github.md
---

# Identity

**pi-crew**（[melihmucuk/pi-crew](https://github.com/melihmucuk/pi-crew)）：给 [Pi](./pi.md) 的非阻塞子代理编排。`pi install npm:@melihmucuk/pi-crew`（要 Pi ≥0.84.3）。主会话继续干活；子代理在隔离环境跑，结果回传。工具：`crew_spawn` / `status` / `respond` / `done` / `abort`。`/pi-crew-review` 并行审当前改动。oh-my-pi 配法把它当 worktree 隔离扩展，作者声明**不是** hardened 沙箱。

## Boundaries

库里只有 GitHub 入口。不是 Pi 本体，不替代 [Advisor](../concepts/advisor.md)。不是 hardened 隔离。

## Related

- [Pi](./pi.md)
- [oh-my-pi](./oh-my-pi.md)
- [Advisor](../concepts/advisor.md)
