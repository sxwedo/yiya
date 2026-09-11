---
type: Concept
title: "Auto Mode"
description: "用分类器替人批工具调用：安全的自动放行，破坏性/越权的拦截或回退人工。比逐条 Approve 少打断，比 --dangerously-skip-permissions 更有边界。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T09:00:00Z }
related:
  - coding-agent-workflow
  - delivery-harness
  - evidence-gate
  - harness-runtime-layer
  - claude
sources:
  - ../../../raw/articles/Claude/Auto mode for Claude Code.md
  - ../../../raw/articles/Claude/Auto mode is now the default in Claude Code for Pro, Max, and Team plans.md
  - ../../../raw/articles/Claude/Running auto mode in production.md
  - ../../../raw/articles/Claude/Beyond permission prompts: making Claude Code more secure and autonomous.md
---

# Definition

**Auto Mode**（Claude Code）用分类器审每一轮工具调用，代替「每条 bash 都点 Approve」或「整段跳过权限」。

默认权限过保守，长任务走不起来；`--dangerously-skip-permissions` 又把破坏性操作一并放行。中间路是：分类器认为安全的自动执行，不可逆 / 外泄 / 越权的拦截，Claude 改道或回退人工。文件系统隔离 + 网络隔离要一起上，缺一可逃逸。

生产侧：Nuro / Gusto / Garner 把 Auto Mode 当日常默认，但仍对「代表我对外发信」或生产基础设施切回人工。权限规则仍先于分类器，过宽的 `Bash(python:*)` 在 Auto Mode 下会被搁置。

与 [Evidence Gate](./evidence-gate.md) 不同：后者管交付跃迁要证据，本页管**执行前**的动作边界。

## Related

- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Delivery Harness](./delivery-harness.md)
- [Evidence Gate](./evidence-gate.md)
- [Harness 运行时层](./harness-runtime-layer.md)
- [Claude](../entities/claude.md)
