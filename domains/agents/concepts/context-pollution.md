---
type: Concept
title: "上下文防污染"
description: "别让多智能体共享一份谁都能读的历史。MCP 管工具，A2A 管协作。写入、选取、压缩、隔离；主从比平等稳。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-11T00:00:00Z }
related:
  - multi-agent-architecture-selection
  - plan-mode-multiagent
  - mcp
  - history-vs-memory
  - four-layer-agent-memory
  - multi-agent-collaboration-patterns
sources:
  - ../../../raw/articles/算法狗/淘天三面：多智能体怎么通信、上下文如何管控.md
---

# Definition

**上下文防污染**（算法狗，淘天面试题拆）：答「消息队列 + 共享上下文谁需要谁读」，只碰到传输，没碰到协议分层，也踩了 2026 年反复要避开的坑。共享同一份历史看起来自然，谁都能往里加，出错难定位。

通信先分层，别把工具调用和 Agent 协作焊成一句「队列」：

- [MCP](../entities/mcp.md) 管模型怎么发现和调用工具/数据，不是 Agent 对 Agent。
- A2A 管不同框架的智能体互相发现（Agent Card）、交任务、收回结果、任务状态机。
- ANP 一类去中心身份还早。早期 ACP 已并进 A2A。

架构上，平等对话共享历史 vs 主从：子 Agent 独立窗口，只把结论交回，主上下文保持干净。数量过三五个、任务又强依赖时，讨论和投票的协调税往往吃掉并行省下的时间。一线说法：主从目前更稳。跨服务 A2A 的租户隔离见 [Plan 模式与主子 Agent](./plan-mode-multiagent.md)。

污染三种：早期错误前提纠正后仍带偏；工具原始 JSON 整段塞进窗口；系统提示和用户指令在多轮里语义漂移成冲突。四板斧：

1. **写入** — 重要事实落到窗口外（文件/库），别全堆对话史。
2. **选取** — 只检索当前任务相关的，不全量搬运。
3. **压缩** — 摘要，用更少 token 保密度。
4. **隔离** — 子任务各自干净窗口。这就是主从的底层。

落地常见：黑板只写对外关键信息，不是同步完整思考；按角色切片；更新打版本、能回滚；主 Agent 在节点上摘要子结果再决定往下传。有效与否看评估集：成功率 vs token、窗口利用率、检索精确/召回、延迟成本。改完要再跑，才知道是帮忙还是添乱。

交接只会丢信息，不会凭空创造。同样思考预算下，多跳推理单 Agent 常常不输多智能体。适合：可并行、大量阅读、子任务相对独立。强依赖、要共享大量上下文，硬拆是负担。先问该不该拆，再问选哪个协议。选型判据见 [多 Agent 架构选型](./multi-agent-architecture-selection.md)。历史整段塞进 Prompt 的问题见 [历史不等于记忆](./history-vs-memory.md)。

## Boundaries

不是 MCP 协议卡，不是 A2A 规范全文，不是记忆四层生命周期。不是「永远不要多智能体」。黑板不是把完整思考同步给所有人。

## Related

- [多 Agent 架构选型](./multi-agent-architecture-selection.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Model Context Protocol (MCP)](../entities/mcp.md)
- [历史不等于记忆](./history-vs-memory.md)
- [四层 Agent 记忆](./four-layer-agent-memory.md)
- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
