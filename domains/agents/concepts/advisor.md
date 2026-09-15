---
type: Concept
title: "Advisor"
description: "主循环外的第二模型：读共享上下文，只给计划/纠偏/停止，不调工具、不对用户说话。可每轮旁听，也可由执行器按需升级。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T18:30:00Z }
related:
  - minimal-agent-harness
  - ttsr
  - auto-mode
  - oh-my-pi
sources:
  - ../references/oh-my-pi-setup.md
  - ../../../raw/articles/Claude/The advisor strategy： Give agents an intelligence boost.md
---

# Definition

**Advisor** 是主 Agent 之外的审稿角色：独立模型读共享上下文，把意见注入执行器，自己**不调工具、不对用户说话**。两种落法共用这个角色，触发节奏不同。

**oh-my-pi：每轮旁听。** 配审稿人模型，读主 agent 每一轮输出，在同一条流里注入——可以是「漏了边界检查」，也可以硬拦截。主 agent 据此修正，或说明为何不改。配置在项目根 `WATCHDOG.yml`（`name` + `provider/model` + `enabled`），`/advisor configure` 打开 TUI 并校验格式。密钥走 `.env` 的 `${VAR}`，禁止写进 yaml。原则：**1 coder + 1 reviewer 通常够用**；挂太多会抢上下文、拖慢主循环。与 `/review` 互补：Advisor 写代码时就在；`/review` 是事后子代理，按 P0–P3 + 置信度出 verdict，可审 branch / commit / 未提交改动，并行不卡主流程。产品见 [oh-my-pi](../entities/oh-my-pi.md)。

**Anthropic：按需升级，且把常见编排倒过来。** 常见子代理是大模型当编排器、拆活给小工人。Advisor 策略是 **Sonnet/Haiku 当执行器跑完全程**（工具、读结果、迭代），卡在自己解不了的决策时才问 Opus。Advisor 只回计划、纠偏或停止信号，执行器接着干。没有分解、工人池、编排逻辑；贵推理只打在需要处，其余停在执行器单价。

平台用服务端工具 `advisor_20260301`：写进同一条 Messages 请求，交接发生在一次 `/v1/messages` 内，无额外往返、无自管上下文。执行器决定何时调用；平台把整理过的上下文路由给 advisor 模型。`max_uses` 封顶每次请求的顾问次数。Advisor token 按顾问模型计价，执行器 token 按执行器计价；顾问通常只吐 400–700 字计划，总价远低于全程跑 Opus。usage 里顾问 token 单独报，便于分档盯花费。Advisor 只是 tools 数组里的一项，可与 web search、code execution 同环。

评测（文中数字，不是 SLA）：Sonnet + Opus 顾问相对单 Sonnet，SWE-bench Multilingual +2.7 个百分点，单任务成本 −11.9%。BrowseComp / Terminal-Bench 2.0 同样「分更高、单任务更便宜」。Haiku + Opus 顾问在 BrowseComp 从单 Haiku 19.7% 到 41.2%，比单 Sonnet 低 29% 分、便宜 85%——顾问相对纯 Haiku 更贵，但仍是高流量、要一点智力的档。

和 [TTSR](./ttsr.md) 的分工：Advisor 是第二模型的语义判断；TTSR 是确定性规则，匹配才中止流。和 [Auto Mode](./auto-mode.md) 的分工：Auto Mode 分类的是**工具批不批**；Advisor 分类的是**这一步要不要升级智力**。

不要把全部约束每轮塞进 system prompt，也不要为了「再审一层」叠一串顾问。


## Boundaries

不是执行器：不调工具、不对用户说话。不要叠一串顾问，也不要把全部约束每轮塞进 system prompt。工具批不批见 Auto Mode；规则中止流见 TTSR。

## Related

- [oh-my-pi](../entities/oh-my-pi.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [TTSR](./ttsr.md)
- [Auto Mode](./auto-mode.md)
