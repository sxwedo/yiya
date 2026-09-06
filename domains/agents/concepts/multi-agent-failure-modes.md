---
type: Concept
title: "多智能体失效模式"
description: "多 Agent 协作中的系统性失效：协调成本膨胀、低方差从众同错、独有信息被淹没，以及目标冲突时的对抗升级。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:27:00Z }
related:
  - multi-agent-governance
sources:
  - /references/anthropic-multiagent-failures.md
---

# Definition

**多智能体失效模式**指多个 Agent 相互作用时出现的全局风险，不只是单个 Agent 各自出错：

1. **协调税** — 协作可发现更多，但 token、冲突与同步成本急升；合并率可能极低。
2. **低方差从众** — 相同环境下 Agent 倾向做相同选择，容错骤降。
3. **信息淹没** — 讨论收敛到共享信息，独有关键事实易被多数意见压住。
4. **冲突升级** — 目标不兼容时，可从各自为战滑向相互对抗。

设计含义：扩容 Agent 数量不能自动带来协调；需要显式治理（信任、冲突协议、多样性保护）。

## Related

- [多智能体治理](./multi-agent-governance.md)
