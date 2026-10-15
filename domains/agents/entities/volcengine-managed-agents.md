---
type: Entity
title: "火山引擎 Managed Agents"
description: "托管 AaaS：长时间 Loop、关 App 不中断的会话、隔离云端电脑、记忆和工具。企业调 Agent API，不自建底座。"
kind: product
status: draft
domain: agents
aliases: [Managed Agents, MA]
generated: { by: agent:yiya-librarian, at: 2026-10-16T00:00:00Z }
related:
  - open-muse
  - tls-agentloop
  - pi-durable
  - herdr
sources:
  - ../../../raw/articles/字节跳动技术团队/基于火山引擎 Managed Agents 搭建你的第一个主动式个人 Agent.md
  - ../../../raw/bookmarks/sites.md
---

# Identity

**火山引擎 Managed Agents**（控制台 [quickstart](https://console.volcengine.com/ark/region:cn-beijing/managed-agents/quickstart)）：Agent as a Service。文称个人 Agent 要的底座——长 Loop、关 App 后续跑、隔离云电脑、长期记忆、工具与技能——都托管。企业调统一 Agent API，把工程力气留在业务。

对照：[Pi Durable](./pi-durable.md) 是可崩溃恢复的 harness 包，要自己跑；[Herdr](./herdr.md) 持有本机终端。本页是云托管运行时。案例应用见 [Open Muse](./open-muse.md)。观测产品 [TLS AgentLoop](./tls-agentloop.md) 是日志里看图，不是这套 AaaS。

## Mechanism

文中底座能力：Trace 定位与全状态重放；上下文持久化、断点续跑、异常重试；按 Session 隔离 Runtime / 状态 / 文件空间，忙时扩、闲时放；File API 与 TOS 走长任务文件。审批机制也在托管范围内。Open Muse 只补设备、主动性、账号和体验。

## Boundaries

不是 TLS 观测、不是阿里云 AgentLoop。不是个人助手产品本身。控制台与配额以站点为准。本页不写接入步骤。

## Related

- [Open Muse](./open-muse.md)
- [TLS AgentLoop](./tls-agentloop.md)
- [Pi Durable](./pi-durable.md)
- [Herdr](./herdr.md)
