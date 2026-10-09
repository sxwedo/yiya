---
type: Concept
title: "编码 agent 不会设计"
description: "有预言机（测试、fuzz、做成/没做成）它们总能磨完。架构是过程，不在训练数据里；agent 修 bug 几乎只会加代码。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-09T10:30:00Z }
related:
  - pi
  - pi-durable
  - coding-agent-workflow
  - plan-with-code
  - evidence-gate
sources:
  - ../../../raw/articles/yibie/编码 agent 为什么不会设计软件.md
---

# Definition

**编码 agent 不会设计**（yibie 译 0xSero：Mario Zechner / Armin Ronacher）：小 issue 可以交给 agent。一碰到设计或架构，它会**局部往仓库里堆**，把事情弄糟。Armin：它几乎总会把问题「修好」，但**几乎不可能在不加代码的情况下修好**。很多 issue 本该对代码库净零。全自动之后，每次修 bug 仓库都会胀一圈。

信任要分层。Armin 手写 TUI 的极简 API，然后让 agent 按 API 填 markdown/文本/编辑器组件，配一堆渲染测试；那些文件他到今天一行没看。他在乎的是性能掉下来的时候。agent 擅长给**那一个边缘用例**打补丁，不擅长看出让整体变慢的架构问题。

Mario：模型发布后自己干出来的架构，他越来越不满意——不是模型一定变弱了，是**给了它们更多控制权、自己更信任**，净结果更差。说话方式也更绕。二元任务相反：做成/没做成，它们最终总能搞定。有预言机（测试套件、fuzz、模拟器能否跑起来）基本就赢。安全/逆向也是：对错很硬。架构讨论它们口头还行，但权重里最可能的轨迹是另一条路。网站、已有系统、带预言机的活，训练数据好搭；**设计和架构一个东西的过程，通常不以文本存在**，所以学不到。Pi Durable 迭代了多轮，轨迹里哪一段才是发布版，标签极难。

分流也还是人：agent 帮不上「哪个 issue 值得修」。Durable 本可以更早，Mario 从二月忙到七月大部分时间在翻 issue。

对照：[用代码做计划](./plan-with-code.md) 是人监督更强执行器、用原型收集证据；本页说缺预言机时别把设计交给它。[Evidence Gate](./evidence-gate.md) 是交付要证据；这里的预言机是「对不对」的自动信号。[Coding Agent Workflow](./coding-agent-workflow.md) 是怎么驾驭 agent 做软件，不解释为什么架构交不出去。[Pi](../entities/pi.md) / [Pi Durable](../entities/pi-durable.md) 是说话的人维护的产品，不是这篇对象。

## Boundaries

不是 Pi 产品卡，不是 Durable 机制说明，不是人物访谈全集（原文标明三篇里的第一篇）。不是「模型永远不会架构」的预言；论点是过程不在语料里、修 bug 默认加代码。逆向/fuzz 例子只用来对照有预言机的活。

## Related

- [Pi](../entities/pi.md)
- [Pi Durable](../entities/pi-durable.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [用代码做计划](./plan-with-code.md)
- [Evidence Gate](./evidence-gate.md)
