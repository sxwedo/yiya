---
type: Concept
title: "异步记忆沉淀"
description: "请求路径并行加载短期历史与长期记忆；会话结束后异步筛选、去重并写入长期层，沉淀失败不阻断本轮。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T12:00:00Z }
related:
  - four-layer-agent-memory
  - history-vs-memory
  - online-memory-pipeline
sources:
  - ../references/dewu-multiagent-memory.md
---

# Definition

**异步记忆沉淀**（得物 MultiAgent 平台）把记忆拆成两条互不等待的链路，避免把 LLM 判断和外部存储写进热路径。

**读路径（请求前）。** `AgentExecutor` 在专用线程池 `memoryLoadExecutor` 上并行拉短期历史和长期记忆，主流程 `join` 后再注入 `AgentContext`。`openLongMemory` 默认关；未绑模型、查询异常都返回空，主对话继续。长期检索词是本轮 `originalMessage`，**不会**等短期历史拼好再增强 query——并行是执行重叠，不是「先读完会话再检索」。MemOS Search 一次覆盖 `user_profile` 与 `agent_{id}`，`relativity=0.45`、`dedup=mmr`、偏好 `prefTopK=6`；低于 0.3 分或单条超 1000 字丢掉。长期预算默认 4000 token：用户画像最多 60%，余量给 Agent 记忆，按行截断以免拆碎一条。

短期 Session 走 Redis 热点 + MySQL 兜底。Token 窗口预留摘要预算；超窗才注入会话摘要。摘要**不是每轮**：未覆盖消息满 20 条才生成，摘要约 2000 token，Redis 缓存 1 小时。子 Agent 的非 Chat 消息不写回主会话，避免虚拟会话污染。

**写路径（会话后）。** `onSessionEndAsync` 拿 10 分钟会话锁；`MD5(role:content)` 记已处理 hash（TTL 7 天），挡住重复结束事件。hash 在 LLM 判断之前就写——Redis 失败时当前实现会把整段当新增，属 best-effort，要同时盯「重复写」和「没写完」。LLM judge 用 `[[NEW]]` 标本轮新消息，产出类别 / scope / importance；失败则降级规则判断，单条截到 200 字。同批先 exact / contains / Jaccard 0.7 / 短文本 Levenshtein 0.8 预去重；跨历史冲突再逐条检测。持久化 **先写新再尽力删旧**：MemOS 是 HTTP，没有本地事务；删失败只打 warning，旧条可能暂时留着。

观测：记忆类型分布、Top Agents、Cube 明细、搜索趋势。沉淀失败不阻断本轮，所以补偿和重复写入是运行问题，不是「异步」三个字能消掉的。

与货拉拉在线四步分工：此处管**何时读、何时写、预算与幂等**；提取写成什么事实见 [在线记忆流水线](./online-memory-pipeline.md)。作用域分层见 [四层 Agent 记忆](./four-layer-agent-memory.md)。

## Related

- [四层 Agent 记忆](./four-layer-agent-memory.md)
- [历史不等于记忆](./history-vs-memory.md)
- [在线记忆流水线](./online-memory-pipeline.md)
