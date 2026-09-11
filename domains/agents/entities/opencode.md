---
type: Entity
title: "OpenCode"
description: "开源编码 Agent 运行时：Agent Profile 装身份，Session Events 留可重建轨迹；TUI / Web / 桌面 / SDK 共用同一服务。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T12:00:00Z }
related:
  - harness-runtime-layer
  - pi
  - codex
  - cc-switch
  - herdr
sources:
  - ../../../raw/articles/腾讯技术工程/从一次 LLM 调用到完整 Harness，Agent 到底经历了什么？.md
---

# Summary

**OpenCode**（<https://opencode.ai>，仓 [anomalyco/opencode](https://github.com/anomalyco/opencode)）是开源编码 Agent 运行时。腾讯技术工程把它写成「事件驱动的服务」：一轮助手回复在存储里不是整块文本，而是 Reasoning / Text / Tool / Step / Patch / Compaction 等 Part；过程可结构化记录，退出界面不等于丢现场。

**Agent Profile** 合并身份与权限；**Session Events** 驱动 Projector，把 Session / Message / Part 投影进 SQLite。长会话靠隐藏 Compaction Agent 做工作记忆，而不是外挂向量库。TUI、Web、桌面与 SDK 只提交请求、消费事件流，身份与进度仍由服务端 Session 管。

代价是状态工程重：配置合并、事件顺序、库投影、压缩边界。对照 [Harness 运行时层](../concepts/harness-runtime-layer.md)：Pi 收核心，OpenCode 换可恢复与多客户端，Codex 换审批与沙箱。切换器见 [cc-switch](./cc-switch.md)；终端持有会话见 [Herdr](./herdr.md)。

## Related

- [Harness 运行时层](../concepts/harness-runtime-layer.md)
- [Pi](./pi.md)
- [Codex](./codex.md)
- [cc-switch](./cc-switch.md)
- [Herdr](./herdr.md)
