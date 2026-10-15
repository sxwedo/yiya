---
type: Entity
title: "AgentLoop"
description: "阿里云 Agent 可观测、经验自进化与审计：Trace→Trajectory→经验库；成功日志之外查过宽取数和越权工具。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - agent-self-evolution-flywheel
  - agent-otel-probe
  - agent-telemetry-ingress
  - harness-self-improvement
  - eval-driven-development
  - openviking
  - tls-agentloop
  - multi-agent-collaboration-patterns
sources:
  - ../references/agentloop-data-ingress.md
  - ../../../raw/articles/阿里云云原生/让 Agent 越用越准、成本越来越低：AgentLoop 的 Agent 经验自进化闭环.md
  - ../../../raw/articles/阿里云云原生/15 个 Agent 组成研发小队：多智能体协作的端到端研发体系.md
  - ../../../raw/articles/阿里云云原生/AgentLoop 审计：如何让企业级 Dify 应用的风险看得见、查得清.md
---

# Identity

**AgentLoop**（[agentloop.console.aliyun.com](https://agentloop.console.aliyun.com)）是阿里云给 Agent 用的可观测与持续优化平台。企业问的不是「能不能做出 Agent」，而是上线后准不准、问题怎么定位、优化怎么验证、成本能不能接受。Agent 不确定：同样问题可走不同工具路径；一次评测过不代表下次过。

## Mechanism

产品把高噪音 Trace 洗成 Trajectory，从成败轨迹里挖有效路径、失败模式、工具约束、参数规则、恢复策略，写成结构化经验。再次面对相似任务时，Recall Skill / CLI 按当前目标、对象、工具、进度、错误状态召回**少量**适用经验，注入运行时。不改模型权重；经验可下线、可按库隔离。模型推理、工具执行、知识库给事实，经验库判断优先做什么、哪条路易失败、如何恢复。

衡量的是**单位成功任务成本**（Token、时间、工具、人工介入），不是单次最低 Token。上线前评测集覆盖不了真实新表达；人工看 Trace 会先成为瓶颈。

接入见 [Agent OTel 探针](../concepts/agent-otel-probe.md)、[Agent 遥测接入形态](../concepts/agent-telemetry-ingress.md)（一键 / 框架 SDK / 注解 / eBPF；Claude Code 走 webhook → LoongSuite Pilot 旁路）。闭环对照 [Agent 自进化飞轮](../concepts/agent-self-evolution-flywheel.md)：观测 → 评估 → 经验落地 → 再验证。改配套系统见 [Harness 自改进](../concepts/harness-self-improvement.md)。评测当方向盘见 [评测驱动开发](../../engineering/concepts/eval-driven-development.md)。

研发小队实践把 AgentCore 当运行面、本产品当优化面：Trace / Session / Trajectory 进 Pipeline → Dataset → Evaluation → Experiment。三挡：手动挡由专家定 Rubric 和 Bad Case；半自动挡出 Token/步骤/工具报错报告；自动挡按 RAC 从轨迹抽经验再注入。Coding 调优两手：20 个专家 Commit 生成需求做离线对照；在线沉淀 SOP、好路径和工具反模式。改 Skill 要回归，避免修好一个、弄坏另一个。小队怎么拆见 [多 Agent 协作模式](../concepts/multi-agent-collaboration-patterns.md)。

审计面（Dify 企业应用）：工作流成功、最终回答脱敏，仍可能中间过宽取数或把资料里的指令当成行动。检查不能停在终答。风险审计找该先看的线索，意图审计看用户想干什么（危险请求 ≠ 已经做成），实体调查把密钥/用户/工具串起来，自定义规则补业务口径。落到节点：HTTP 取数是否过宽、Code 是否继续传敏感字段、LLM 是否把内部资料写进对客内容。整改后用同类请求复核。不替代 Dify 运行日志，是同一段记录上的调查视角。接入步骤不在本页。

## Boundaries

不改模型权重。不是通用编码 harness，不是「单次最低 Token」优化器。单位是成功任务成本。不是 Dify 产品页。审计不替代运行日志。不写接入点击。

## Related

- [Agent 自进化飞轮](../concepts/agent-self-evolution-flywheel.md)
- [Agent OTel 探针](../concepts/agent-otel-probe.md)
- [Agent 遥测接入形态](../concepts/agent-telemetry-ingress.md)
- [Harness 自改进](../concepts/harness-self-improvement.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
- [OpenViking](./openviking.md)
- [TLS AgentLoop](./tls-agentloop.md)
- [多 Agent 协作模式](../concepts/multi-agent-collaboration-patterns.md)
