---
type: Entity
title: "Ghostty"
description: "Mitchell Hashimoto 的原生 GPU 终端模拟器（Zig）：快、平台原生 UI；不是 shell 提示符，也不是编码代理。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-07T23:00:00Z }
related:
  - ghostty-site
  - starship
sources:
  - ../references/ghostty-site.md
---

# Summary

**Ghostty**（https://ghostty.org/）是终端**模拟器**：Zig 核心、GPU 渲染，macOS/Linux 用平台原生 UI（不是 Electron）。可嵌入（libghostty）。

定位：跑 shell 的窗口，不是 harness。提示符层见 [Starship](./starship.md)（跨 shell 状态条，跑在终端里）。

## Related

- [Ghostty（站点书签）](../references/ghostty-site.md)
- [Starship](./starship.md)
