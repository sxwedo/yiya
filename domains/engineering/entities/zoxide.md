---
type: Entity
title: "zoxide"
description: "更聪明的 cd：按使用频率记目录，几个键就能跳；灵感来自 z / autojump，跨主流 shell。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T05:25:10Z }
related:
  - starship
  - ghostty
  - kitty
sources:
  - ../../../raw/bookmarks/github.md
---

# Summary

**zoxide**（[ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide)）是更聪明的 `cd`：记住常去的目录，用很少按键跳过去。灵感来自 z 和 autojump，主流 shell 都能用。

常用：`z foo` 进匹配分最高的目录；`z foo bar` 同时匹配两段；`zi` 用 fzf 交互选。也能当普通 `cd`（绝对路径、`..`、`-`）。

定位：终端目录跳转，不是提示符、不是终端模拟器。提示符见 [Starship](./starship.md)；模拟器见 [Ghostty](./ghostty.md) / [Kitty](./kitty.md)。

## Related

- [Starship](./starship.md)
- [Ghostty](./ghostty.md)
- [Kitty](./kitty.md)
