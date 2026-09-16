---
type: Concept
title: "生产级垂类 Agent"
description: "Demo 易、生产过四关：稳定、可控、可审计、业务闭环。名词会换，追能力。先高频低风险短闭环；循环里跑工具的是外围代码。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-16T10:50:00Z }
related:
  - loop-engineering
  - evidence-gate
  - delivery-harness
  - llm-wiki
  - history-vs-memory
  - mcp
  - role-first-agent
sources:
  - ../../../raw/articles/阿里技术/垂类业务如何落地生产级 Agent.md
---

# Definition

**生产级垂类 Agent**（阿里技术）：模型 + 工具 + 循环已经能搭 Demo；进生产要过四关——**稳定**（第 9999 次与第 1 次同质）、**可控**（自然语言禁令挡不住工具调用）、**可审计**（看过什么、调过什么、哪版策略、谁放行）、**业务闭环**（写入真实系统并可验收，不是漂亮建议）。Vibe / 可视化几乎不降低这四关的成本。Klarna 先规模化常规问询，后又把复杂、高情绪、高价值交回人：能接管一部分，不能只按成本优化。

名词会换（Loop / Skills / Wiki / MCP），追它解决的工程问题。切入点同时满足：高频、低风险或可隔离、规则相对明确、闭环短。「做完了」要能定义。最小闭环五问：理解对了吗；知识和数据对了吗；只调了被允许的能力吗；结果进真实系统了吗；失败有降级、转人、追溯吗。

目标含糊会被后面所有层放大。可执行目标含对象、场景、基线、目标值、红线、测法。Prompt「不要乱退款」不够，要动作目录。责任写进运行时（scene / policy / tool_call / decision）。风险分档可叠加：先避免做错场景，再对写操作加审，红线场景做人闸。

知识走编译而不是每次提问再拼，见 [LLM Wiki](../../shared/concepts/llm-wiki.md)。循环里真正执行工具的是外围代码，模型只发 `tool_use`。循环要有触发、目标、**独立验收器**、停止条件，见 [Loop Engineering](./loop-engineering.md)。Context ≠ Memory ≠ State，见 [历史不等于记忆](./history-vs-memory.md)。MCP 解决怎么连，鉴权配额审计仍在协议外，见 [MCP](../entities/mcp.md)。

## Boundaries

不是通用大脑，不是把固定退货路径做成多轮发明。不是 [Delivery Harness](./delivery-harness.md) 那份得物交付合同专文，也不是编码 Agent 过夜训模型。本页是垂类业务从 Demo 到可运营生产能力。

## Related

- [Loop Engineering](./loop-engineering.md)
- [Evidence Gate](./evidence-gate.md)
- [Delivery Harness](./delivery-harness.md)
- [LLM Wiki](../../shared/concepts/llm-wiki.md)
- [历史不等于记忆](./history-vs-memory.md)
- [MCP](../entities/mcp.md)
- [Role-first Agent](./role-first-agent.md)
