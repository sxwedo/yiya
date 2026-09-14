---
type: Entity
title: "Grok Build"
description: "xAI 终端编码代理：开源的是 harness 与 TUI（Rust，Apache-2.0），不是对话模型权重。可自备推理。不是 Grok Bot。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - grok-bot
  - pi
  - oh-my-pi
  - mena
sources:
  - ../references/grok-build-site.md
  - ../../../raw/articles/SpaceXAI/We've open-sourced Grok Build and have reset usage limits for all users.md
---

# Summary

**Grok Build**（<https://x.ai/open-source>）是 xAI（公告账号 SpaceXAI）的终端编码代理：全屏 TUI，读仓、改文件、跑命令，也支持无头/CI。2026-07 开源 harness 与界面（Rust，Apache-2.0），仓 [xai-org/grok-build](https://github.com/xai-org/grok-build)；命令是 `grok`。开的是客户端循环、工具、TUI 和扩展（Skills / MCP / 子代理），**不是**当前对话模型权重。可自编译，把推理指到本地或自备端点。

同期公告还重置用量，并改隐私默认：宣称上线起尊重 ZDR；早期 beta 对非 ZDR 用户默认留存，反馈后关掉。2026-07-12 起全体默认不留存，并删除此前留存的编码数据。CLI 里可关上传。开源 harness + 自备推理被写成「可以完全本地优先」。问题走 X 或 HackerOne。

定位：终端 **harness**，与 [Pi](./pi.md) / [oh-my-pi](./oh-my-pi.md) 同簇。同公司的 [Grok Bot](./grok-bot.md) 是工程多智能体（Engineering Bot + Cloud Agent），不是这一份 CLI。本机巡检见 [mena](./mena.md)。

## Related

- [Grok Bot](./grok-bot.md)
- [Pi](./pi.md)
- [oh-my-pi](./oh-my-pi.md)
- [mena](./mena.md)
