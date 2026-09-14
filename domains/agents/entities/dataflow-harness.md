---
type: Entity
title: "DataFlow-Harness"
description: "北大 OpenDCAI：给 DataFlow 加 Harness。Agent 用 MCP 改 DAG（Request-Validate-Commit），Skills 管算子怎么连；输出可编辑的平台原生 Pipeline。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - harness-runtime-layer
  - agent-skills
  - mcp
sources:
  - ../../../raw/articles/Datawhale/AI 数据最难搞的 Harness 工程，被北大开源了！.md
---

# Summary

**DataFlow-Harness**（论文 [HF 2607.16617](https://huggingface.co/papers/2607.16617)；入口 [OpenDCAI/DataFlow-WebUI](https://github.com/OpenDCAI/DataFlow-WebUI)，主库 [OpenDCAI/DataFlow](https://github.com/OpenDCAI/DataFlow)）针对 **NL2Pipeline gap**：口语是工作流意图，生产要可检查、可编辑、可复用的平台原生流水线。手搓脚本和 Code Agent 一次性脚本都难进平台生命周期。模型还容易调用不存在的算子。

四件套：Backend 把 pipeline 写成 `P = (D, O, E, S, R)`（数据源、算子实例、有向边、字段 Schema、运行状态）；MCP 层只接受 typed mutations（加/删算子、改参、连边），每次 **Request-Validate-Commit**——无环、相邻 Schema 兼容才写入；[DataFlow-Skills](./agent-skills.md) 编码组合顺序，不是工具清单；WebUI 对话和 DAG 画布共享同一状态，WebSocket 同步。

评测（文中 12 个数据工程任务，各 120 次）：端到端通过率 93.3%，接近 Context-Aware Claude Code 的 94.2%；相对 Vanilla Claude Code 成本 $0.950 → $0.261（−72.5%），延迟 190.7s → 95.5s（−49.9%）。产物是 Native DAG，不是一段脚本。数字是论文观察值，不是本库复现。

对照 [Harness 运行时层](../concepts/harness-runtime-layer.md)：约束在平台边界内。工具协议见 [MCP](./mcp.md)。

## Related

- [Harness 运行时层](../concepts/harness-runtime-layer.md)
- [Agent Skills](./agent-skills.md)
- [MCP](./mcp.md)
