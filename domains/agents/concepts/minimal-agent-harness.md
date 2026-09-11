---
type: Concept
title: "Minimal Agent Harness"
description: "极简代理框架哲学：核心只保留原语（Primitives, not features），高级能力由扩展/技能按需组装，以降低上下文税并保持可控。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:22:00Z }
related:
  - multi-harness-control-plane
  - coding-agent-workflow
  - advisor
  - delivery-harness
  - evidence-gate
  - harness-self-improvement
  - ttsr
  - pi-agent-book
  - harness-runtime-layer
sources:
  - ../references/pi-vs-oh-my-pi.md
  - ../../../raw/articles/腾讯技术工程/从一次 LLM 调用到完整 Harness，Agent 到底经历了什么？.md
  - ../../../raw/articles/得物技术/实战从零开始构建一个Coding Agent：Violin ｜得物技术.md
---

# Definition

**Minimal Agent Harness** 主张：框架层保持极小——最小系统提示、不内置大量「成品功能」——把子代理、计划模式、权限弹窗、后台任务等留给用户用扩展与技能自行构建。

收益：低上下文税、行为边界清晰、可无限扩展。代价：开箱能力弱，团队需投入扩展开发与维护。

对照面是 **Batteries Included**：原生装好 LSP/DAP/评审/协作等，换取上手速度与一致性，但核心更重、定制路径不同。选型应看「要不要自己造轮子」而非价格（两者常同为开源自备模型）。

腾讯技术工程把极简从审美写成成本：Pi 默认只暴露 `read` / `write` / `edit` / `bash`，Databricks 追踪同模型换到 Pi 后每轮上下文约少三倍、轮次更少；代价是不内置权限系统，高风险环境要外补沙箱。这是 [Harness 运行时层](./harness-runtime-layer.md) 上「收得尽可能小」的一端。

得物 Violin 按同一蓝本用 Zig 重写：模型适配 / 内核 Loop / 产品层分离，内置工具集与 Pi 对齐；验证「读懂 Pi 就能造别的 agent」，不为 Violin 另开 Entity。[Pi](../entities/pi.md) 的 `sources` 已满阈值，本篇不往产品页堆。

## Related

- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Pi](../entities/pi.md)
- [π-agent book](../references/pi-agent-book.md)
- [oh-my-pi](../entities/oh-my-pi.md)

- [Advisor](./advisor.md)
- [Delivery Harness](./delivery-harness.md)
- [Evidence Gate](./evidence-gate.md)
- [Harness 自改进](./harness-self-improvement.md)
- [TTSR](./ttsr.md)
- [Harness 运行时层](./harness-runtime-layer.md)
