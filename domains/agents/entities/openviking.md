---
type: Entity
title: "OpenViking"
description: "字节开源的 Agent 上下文库。经验记忆把「做过」炼成「会做」：Session → Trajectory → Experience。不改模型，只加载相关经验。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-16T13:00:00Z }
related:
  - four-layer-agent-memory
  - history-vs-memory
  - agentloop
  - mcp
  - agent-self-evolution-flywheel
sources:
  - ../../../raw/articles/字节跳动技术团队/从“做过”到“会做”：用 OpenViking 经验记忆构建 Agent 的进化闭环.md
  - ../../../raw/bookmarks/github.md
---

# Identity

**OpenViking**（仓 [volcengine/OpenViking](https://github.com/volcengine/OpenViking)，云服务 [openviking-service](https://www.volcengine.com/product/openviking-service)）：给 Agent 的上下文数据库。模型当大脑，它管可维护的上下文——知识、用户事实、跨会话经验。经验记忆回答的是「这一类任务怎么做成」，不是用户偏好。

## Mechanism

三个对象：**Session**（一次任务的消息与工具结果）→ **Trajectory**（目标、路径、结局）→ **Experience**（可迁移的方法、检查项、风险边界）。完整任务片段才炼：目标、过程、结果对得上，才能分有效方法和偶然成功。

闭环：执行 → 记录 → 提炼 → 相似任务召回 → 核对适用条件再应用 → 新结果再更新。在线侧先检索少量原文，核对环境与前置条件，不把数字从旧任务抄到新任务。

文称 τ²-bench：Retail 70.94%→77.81%，Airline 54.38%→66.25%。单题换货 8 次里 2→8。接入：自研走 MCP + Experience Skill；Codex / Claude Code 等用官方 Plugin 抓生命周期。不替代更强模型、更长窗口、SOP。

## Boundaries

不是把聊天记录塞回窗口。不是 [AgentLoop](./agentloop.md)（阿里云 Trace→经验，不改权重）。分层作用域见 [四层 Agent 记忆](../concepts/four-layer-agent-memory.md)；「历史≠记忆」见 [历史不等于记忆](../concepts/history-vs-memory.md)。

## Related

- [四层 Agent 记忆](../concepts/four-layer-agent-memory.md)
- [历史不等于记忆](../concepts/history-vs-memory.md)
- [AgentLoop](./agentloop.md)
- [MCP](./mcp.md)
- [Agent 自进化飞轮](../concepts/agent-self-evolution-flywheel.md)
