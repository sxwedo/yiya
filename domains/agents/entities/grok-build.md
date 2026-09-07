---
type: Entity
title: "Grok Build"
description: "xAI 的终端编码代理：开源 harness 与 TUI（Rust，Apache-2.0）；可指向自备推理。不是 Grok Bot。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T18:20:00Z }
related:
  - grok-build-site
  - grok-bot
  - pi
  - oh-my-pi
  - mena
  - xiaoshan-xuetang
sources:
  - ../references/grok-build-site.md
---

# Summary

**Grok Build**（https://x.ai/open-source）是 xAI（现 SpaceXAI）的终端编码代理：全屏 TUI，读仓、改文件、跑命令，也支持无头/CI。2026-07 开源 harness 与界面（Rust，Apache-2.0），仓库 [xai-org/grok-build](https://github.com/xai-org/grok-build)；发布二进制命令是 `grok`。开的是客户端循环、工具、TUI 和扩展（Skills / MCP / 子代理），不是当前对话模型权重。可自编译、把推理指到本地或自备端点。

定位：终端 **harness**，与 [Pi](./pi.md) / [oh-my-pi](./oh-my-pi.md) 同簇。同公司的 [Grok Bot](./grok-bot.md) 是工程多智能体（Engineering Bot + Cloud Agent），不是这一份 CLI。本机巡检见 [mena](./mena.md)。

## Related

- [Grok Build（站点）](../references/grok-build-site.md)
- [Grok Bot](./grok-bot.md)
- [Pi](./pi.md)
- [oh-my-pi](./oh-my-pi.md)
- [mena](./mena.md)
- [小山学堂](./xiaoshan-xuetang.md)
