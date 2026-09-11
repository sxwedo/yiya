---
type: Entity
title: "DataFlow-Harness"
description: "北大 OpenDCAI：给 DataFlow 数据流水线加 Harness。Agent 用 MCP 改 DAG，Skills 管怎么连算子；输出可编辑平台原生 Pipeline。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T18:00:00Z }
related:
  - harness-runtime-layer
  - agent-skills
  - mcp
sources:
  - ../../../raw/articles/Datawhale/AI 数据最难搞的 Harness 工程，被北大开源了！.md
---

# Summary

**DataFlow-Harness**（论文 [HF 2607.16617](https://huggingface.co/papers/2607.16617)；入口仓 [OpenDCAI/DataFlow-WebUI](https://github.com/OpenDCAI/DataFlow-WebUI)，主库 [OpenDCAI/DataFlow](https://github.com/OpenDCAI/DataFlow)）针对 NL2Pipeline gap：口语工作流意图 vs 可检查、可编辑、可复用的平台原生流水线。Agent 不手搓一次性脚本，而是经 MCP typed mutations 改 DAG（Request-Validate-Commit）；DataFlow-Skills 编码算子组合与 Schema 依赖。对话与画布共享同一 Pipeline 状态。

对照 [Harness 运行时层](../concepts/harness-runtime-layer.md)：约束在平台边界内，幻觉调用不存在的算子会被校验拦住。Skills 层见 [Agent Skills](./agent-skills.md)。

## Related

- [Harness 运行时层](../concepts/harness-runtime-layer.md)
- [Agent Skills](./agent-skills.md)
- [MCP](./mcp.md)
