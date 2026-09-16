---
type: Entity
title: "oh-my-pi"
description: "can1357 的 batteries-included 终端编码代理（omp.sh）：Rust 核心，原生 LSP/DAP/Advisor/TTSR/Hashline。要极简请用 Pi。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - pi
  - advisor
  - ttsr
  - grok-build
  - minimal-agent-harness
  - mena
  - pi-crew
sources:
  - ../references/pi-vs-oh-my-pi.md
  - ../references/oh-my-pi-setup.md
---

# Identity

**oh-my-pi**（omp，<https://omp.sh>，仓 [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)）定位「原生终端编码代理，内置 IDE」。MIT，用户自备模型。猿小猴子对照文（截至 2026-08）：在 Mario 的 [Pi](./pi.md) 极简哲学之上 **Rust 重写核心**（文称 100k+ 行），不是 Node 套壳。口号 *The Pi you love, with batteries included.*

开箱能力（对照文 / 配法文交叉）：LSP（文称 14 种操作、53 语言服务器，重构走 `workspace/willRenameFiles`）；DAP（28 种操作、14 适配器）；子代理（默认并发 32，0 表示不限）；浏览器；协作。两件独有机制见概念页：

- [Advisor](../concepts/advisor.md)：第二模型旁听，`WATCHDOG.yml`，1+1 够用
- [TTSR](../concepts/ttsr.md)：规则休眠，匹配才中止流注入

**Hashline**：按内容哈希锚点改文件，而不是 str_replace 抄旧文本。配法文：Grok 4 Fast 实测输出 token −61%；文件被别人改过则拒绝 patch，不静默写错位。对照文引评测：编辑首次成功率约 6.7% → 68.3%（评测口径，不是本库实测）。

默认无沙箱。配法文标配扩展：`pi-crew`（worktree 隔离，作者声明非 hardened）、`pi-hermes-memory`、`@aliou/pi-guardrails`。沙箱推荐 Gondolin（认证留宿主机，工具进 micro-VM）。`/review` 是事后 P0–P3 子代理，不替代 Advisor。Skills 兼容 Claude / Codex / Pi 目录，另有 `.omp/skills/`。

选型：要极简可控、自己装扩展 → Pi（[Minimal Agent Harness](../concepts/minimal-agent-harness.md)）；要开箱 IDE 工具链 → omp。同簇终端 harness 还有 [Grok Build](./grok-build.md)。本机多产品壳见 [mena](./mena.md)。

## Boundaries

本页无成文 raw，不编未灌实现。细节以仓或站点为准。

## Related

- [Pi](./pi.md)
- [Advisor](../concepts/advisor.md)
- [TTSR](../concepts/ttsr.md)
- [Minimal Agent Harness](../concepts/minimal-agent-harness.md)
- [Grok Build](./grok-build.md)
- [mena](./mena.md)
- [pi-crew](./pi-crew.md)
