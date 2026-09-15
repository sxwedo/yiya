---
type: Entity
title: "Ghostty"
description: "Mitchell Hashimoto 的原生 GPU 终端模拟器（Zig）：macOS/Linux，key=value 配置，内置分屏与下拉终端。不是 shell，也不是编码代理。"
kind: product
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-15T00:20:00Z }
related:
  - starship
  - zoxide
sources:
  - ../references/ghostty-site.md
  - ../references/zerebos-ghostty-config-github.md
  - ../../../raw/articles/阿蔺A-Lin/Ghostty 终端入门指南：安装、配置、用起来.md
---

# Identity

<https://ghostty.org> 终端**模拟器**：Zig 核心、GPU 渲染，macOS / Linux 原生 UI（不是 Electron）。可嵌入（libghostty）。作者 Mitchell Hashimoto。阿蔺指南（2026-03）只到装好能用；当时 Windows 不支持。

## Mechanism

跑的是你的 shell，不是 harness。配置 `~/.config/ghostty/config` 纯 `key = value`，`Cmd+,` 打开，`Cmd+Shift+,` 热重载。内置 `+list-themes` / `+list-fonts` / `+show-config --default --docs`。主题可跟系统深色模式。首次启动会有主窗口和下拉 Quick Terminal（Esc 收起）。分屏/Tab/下拉不靠插件。`macos-titlebar-style = hidden` 时 `Cmd+T` 开新窗口不是 Tab。自带 Nerd Font 图标渲染。

## Boundaries

不是 shell、不是编码代理、「AI 终端」。提示符见 [Starship](./starship.md)，跳转见 [zoxide](./zoxide.md)。Agent 若跑在里面，是 Agent 的事。

## Related

- [Starship](./starship.md)
- [zoxide](./zoxide.md)
