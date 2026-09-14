---
type: Concept
title: "TTSR"
description: "Time-Traveling Stream Rules：规则默认休眠不占窗口；输出匹配偏离条件时中止当前流，注入系统提醒后从同一位置重试，压缩后仍保留。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T18:30:00Z }
related:
  - advisor
  - minimal-agent-harness
  - auto-mode
  - oh-my-pi
sources:
  - ../references/oh-my-pi-setup.md
---

# Definition

**TTSR**（Time-Traveling Stream Rules，oh-my-pi）把规则从「每轮常驻 system prompt」改成「偏离才出手」。规则越多，窗口里留给干活的越少；硬约束又往往一整场都用不上，直到模型真要踩线。

机制：

1. 规则默认**休眠**，不占 context。
2. 模型输出匹配你设的条件（文中是正则）时，运行时**中止当前输出流**。
3. 把该条规则当作**系统提醒**注入。
4. 从**同一个位置**重试——像巡视员，平时不在场，发现偏离才出现。
5. 注入的规则在 **compaction 之后仍保留**，不会被摘要压没。

适合不必每轮看见、一旦出现必须拦住的硬约束。原文例子：正式代码禁止 `Box::leak`、禁止 `rm -rf`、catch 不许吞错误。这些写进常驻 prompt 会挤工作上下文；写成 TTSR 则只在模型开始往那走时花钱和占位。

这不是第二模型。匹配是确定性的，意见也不是「你漏了边界检查」那种语义旁听。和 [Advisor](./advisor.md) 可并存：Advisor 每轮或按需读共享上下文，做计划/纠偏/停止；TTSR 不管智力档位，只拦已知反模式。和 [Auto Mode](./auto-mode.md) 也不同：Auto Mode 拦的是**工具批准**；TTSR 拦的是**已经开始生成的文本**。

产品落在 [oh-my-pi](../entities/oh-my-pi.md)（Pi 的 batteries-included fork）。Hashline、LSP、沙箱与本页无关，不要把「配好 omp」整包塞进 TTSR。极简侧对照 [Minimal Agent Harness](./minimal-agent-harness.md)：能按需加载的约束，就不要焊进每轮前缀。

## Related

- [oh-my-pi](../entities/oh-my-pi.md)
- [Advisor](./advisor.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Auto Mode](./auto-mode.md)
