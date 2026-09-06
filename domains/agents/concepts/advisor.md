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
  - /references/oh-my-pi-setup.md
---

# Definition

**Advisor** 是主 Agent 之外的审稿人角色：配置独立模型，阅读主 Agent 每一轮输出，并在同一条流中注入意见（提醒或硬性拦截）。主 Agent 可据此修正，或说明为何不改。

实践要点：

- 配置放项目侧（如 `WATCHDOG.yml`），模型用 `provider/model`；密钥走环境变量，不硬编码。
- **1 coder + 1 reviewer 通常够用**；挂太多 Advisor 会抢上下文、拖慢主流程。
- 与事后 `/review` 互补：Advisor 是写代码时的实时旁听；review 是写完后的结构化审查。

适用：需要降低主模型漏边界检查、漏安全约束、跑偏不自知的场景，又不想把全部规则每轮塞进 system prompt。

## Related

- [Minimal Agent Harness](/concepts/minimal-agent-harness.md)
- [TTSR](/concepts/ttsr.md)
