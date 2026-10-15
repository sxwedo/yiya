---
type: Entity
title: "Open Muse"
description: "搭在火山引擎 Managed Agents 上的主动式个人 Agent：关 App 还干活，敏感操作先征求同意。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-16T00:00:00Z }
related:
  - volcengine-managed-agents
  - today-ai
  - auto-mode
sources:
  - ../../../raw/articles/字节跳动技术团队/基于火山引擎 Managed Agents 搭建你的第一个主动式个人 Agent.md
---

# Identity

**Open Muse**（字节跳动技术团队实践）：主动式个人 Agent。底座用 [火山引擎 Managed Agents](./volcengine-managed-agents.md) 跑 Loop、会话、云电脑和记忆。Open Muse 补 iPhone / Mac / 飞书、按时间和目标主动找你，并把读取和操作做成看得见的授权。

对照：[Today AI](./today-ai.md) 是另一家个人 AI 入口卡。本页是 MA 之上的产品实践。

## Mechanism

主动性：安静后按目标问候（白天最多一次）；到点提醒，账号模式关 App 也能投递；每天按记忆和目标出动态；进行中的目标会追问。长任务在云端继续，回来结果已在对话里。

分工：MA 让它跑起来、记得住、能动手；Open Muse 管设备、主动触达、账号。飞书用云端 CLI，应用凭据留在 Open Muse 服务，云电脑只拿短期令牌。敏感操作先批准卡片。日历只看忙闲不读内容。没有现成工具时，可在对话里当场写分析，不把密码证件交给它填。

## Boundaries

不是 MA 底座本身。不写连接器逐步点击。实测缺口（会议室、跨设备对答等）以原文为准。

## Related

- [火山引擎 Managed Agents](./volcengine-managed-agents.md)
- [Today AI](./today-ai.md)
- [Auto Mode](../concepts/auto-mode.md)
