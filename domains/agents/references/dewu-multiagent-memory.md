---
type: Reference
title: "企业级 MultiAgent 的记忆系统：短期上下文与四层记忆架构实现｜得物技术"
description: "得物技术：MultiAgent 平台四层记忆（Working/Session/User/Agent），短期 Redis+MySQL，长期 MemOS，并行加载与会话结束异步沉淀。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:20:00Z }
resource: /raw/library/2026/09/dewu-multiagent-memory/企业级 MultiAgent 的记忆系统：短期上下文与四层记忆架构实现｜得物技术.md
sources: []
---

# Notes

- 记忆是执行链路一部分，不是外挂拼 Prompt。
- 四层生命周期：Working（一步）/ Session（会话）/ User（跨 Agent 偏好事实）/ Agent（任务经验与协作约定）。
- 请求前并行加载短期+长期；会话结束 onSessionEndAsync 筛选去重沉淀。
- 预算：短期滑动窗口预留摘要；长期按 scope 分 Token Budget。
- 写入：会话锁 + 消息 hash 幂等；MemOS 先写后删（best-effort）。
