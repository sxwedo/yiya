---
type: Concept
title: "TTSR"
description: "Time-Traveling Stream Rules：规则平时休眠不占上下文，输出匹配偏离条件时中止流并注入提醒后重试。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:11:00Z }
sources:
  - /references/oh-my-pi-setup.md
---

# Definition

**TTSR**（Time-Traveling Stream Rules）把规则从“每轮常驻 system prompt”改成“偏离才出手”。

机制：规则默认休眠，不占 context；当模型输出匹配设定条件（如正则）时，运行时中止当前输出流，把规则作为系统提醒注入，并从同一位置重试。注入的规则在上下文压缩（compaction）后仍应保留。

适合硬约束、不必每轮看见的规则：禁止危险命令、禁止吞异常、禁止特定反模式等。目标是省上下文，同时在真正要犯错时拦住。

与 Advisor 的差别：TTSR 是确定性规则触发；Advisor 是第二模型语义旁听。可并存。
