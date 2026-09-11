---
type: Concept
title: "Advisor"
description: "给主 Agent 配第二模型旁听：读每一轮输出，在同一条流里注入提醒或硬拦截，用于实时纠偏。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:11:00Z }
related:
  - minimal-agent-harness
  - ttsr
sources:
  - ../references/oh-my-pi-setup.md
  - ../../../raw/articles/Claude/The advisor strategy： Give agents an intelligence boost.md
---

# Definition

**Advisor** 是主 Agent 之外的审稿人角色：配置独立模型，阅读主 Agent 每一轮输出，并在同一条流中注入意见（提醒或硬性拦截）。主 Agent 可据此修正，或说明为何不改。

实践要点：

- 配置放项目侧（如 `WATCHDOG.yml`），模型用 `provider/model`；密钥走环境变量，不硬编码。
- **1 coder + 1 reviewer 通常够用**；挂太多 Advisor 会抢上下文、拖慢主流程。
- 与事后 `/review` 互补：Advisor 是写代码时的实时旁听；review 是写完后的结构化审查。

适用：需要降低主模型漏边界检查、漏安全约束、跑偏不自知的场景，又不想把全部规则每轮塞进 system prompt。

Anthropic 把同一形反过来用：**小模型当执行器，大模型当 Advisor**。Sonnet/Haiku 跑全程工具循环，卡决策时才问 Opus；Advisor 不调工具、不对用户说话，只回计划/纠偏/停止。这是「大编排器拆给小工人」的倒置，贵推理只打在需要处。API 里 `advisor` 工具一次请求内交接，用 `max_uses` 封顶。

## Related

- [oh-my-pi](../entities/oh-my-pi.md)

- [Minimal Agent Harness](./minimal-agent-harness.md)
- [TTSR](./ttsr.md)
