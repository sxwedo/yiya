---
type: Concept
title: "异步记忆沉淀"
description: "请求路径并行加载记忆；会话结束后异步筛选、去重并写入长期层，避免把沉淀成本放进热路径。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:20:00Z }
sources:
  - /references/dewu-multiagent-memory.md
---

# Definition

**异步记忆沉淀**把记忆处理拆成两条链路：

- **读路径（请求前）**：短期历史与长期记忆并行加载，主流程 join 后注入；用 Token Budget 防止撑爆上下文。
- **写路径（会话后）**：异步任务做新增标记、LLM 判断、去重/冲突处理与持久化；可用会话锁与消息 hash 做幂等。

配套策略包括：摘要低频触发（非每轮）、长期记忆「先写新再尽力删旧」。目标是热路径低延迟，沉淀失败不阻断本轮对话，但需观测补偿与重复写入风险。
