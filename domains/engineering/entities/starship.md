---
type: Entity
title: "Starship"
description: "跨 shell 的极简提示符（Rust）：一份配置驱动 bash/zsh/fish 等；不是编码代理，也不是容器运行时。"
kind: product
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-07T20:00:00Z }
related:
  - ghostty
sources:
  - ../references/starship-site.md
---

# Identity

**Starship**（https://starship.rs/）是跨 shell 提示符：用 Rust 写成，bash / zsh / fish / PowerShell 等共用 `starship.toml`。显示 git、语言版本、云上下文等模块，默认开箱即用、可关可配。

定位：终端外观与状态条，不是 harness、不是 Docker。跑在终端模拟器里，模拟器见 [Ghostty](./ghostty.md)。

## Boundaries

本页无成文 raw，不编未灌实现。细节以仓或站点为准。

## Related

- [Ghostty](./ghostty.md)
