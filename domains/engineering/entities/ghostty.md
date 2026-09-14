---
type: Entity
title: "Ghostty"
description: "Mitchell Hashimoto 的原生 GPU 终端模拟器（Zig）：macOS/Linux，key=value 配置，内置分屏与下拉终端。不是 shell，也不是编码代理。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - starship
  - zoxide
sources:
  - ../references/ghostty-site.md
  - ../references/zerebos-ghostty-config-github.md
  - ../../../raw/articles/阿蔺A-Lin/Ghostty 终端入门指南：安装、配置、用起来.md
---

# Summary

**Ghostty**（<https://ghostty.org>）是终端**模拟器**：Zig 核心、GPU 渲染，macOS / Linux 用平台原生 UI（不是 Electron）。可嵌入（libghostty）。作者 Mitchell Hashimoto。阿蔺入门指南（2026-03）的范围只到「装好、配到能用」；Windows 当时不支持。

它跑的是你的 shell，不是 harness。提示符见 [Starship](./starship.md)；目录跳转见 [zoxide](./zoxide.md)。两者都活在终端里，不是终端本身。

配置是纯文本 `key = value`（`~/.config/ghostty/config`），`Cmd+,` 打开，`Cmd+Shift+,` 热重载，没有 JSON 嵌套。内置 `ghostty +list-themes` / `+list-fonts` / `+show-config --default --docs`。主题可 `light:…,dark:…` 跟系统深色模式。第一次启动会看到主窗口 **和** 从顶部滑下的 Quick Terminal（下拉终端），按 Esc 收起——这是产品行为，不是装坏了。

分屏、Tab、下拉终端不靠插件。注意：`macos-titlebar-style = hidden` 时 `Cmd+T` 开的是新窗口不是 Tab（原生 Tab 需要标题栏）；常用 Tab 应改 `tabs`。自带 Nerd Font 图标渲染，字体不必强上 NF 补丁版。指南推荐 Maple Mono NF CN 或 JetBrains Mono + `font-thicken`。

不要把它写成「AI 终端」或编码代理。它是窗口；Agent 如果跑在里面，那是 Agent 的事。

## Related

- [Starship](./starship.md)
- [zoxide](./zoxide.md)
