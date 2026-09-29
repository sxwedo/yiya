---
type: Entity
title: "Dream-RSI"
description: "锁死底座模型与评测，只演化探索策略代码：发现树当零 Token 回放模拟器，离线做梦筛下一轮调度。"
kind: work
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-29T18:20:00Z }
aliases:
  - Dream RSI
  - Recursive Self-Improvement through Evolving Worlds
related:
  - harness-self-improvement
  - agent-self-evolution-flywheel
sources:
  - ../../../raw/articles/Datawhale/谷歌重磅发布Dream-RSI，最新RSI研究！.md
---

# Identity

**Dream-RSI**（论文 *Dream-RSI: Recursive Self-Improvement through Evolving Worlds*）来自 Google DeepMind、弗吉尼亚大学与马里兰大学。代码：[zhengkid/Dream-RSI](https://github.com/zhengkid/Dream-RSI)。本库成文是 Datawhale 对该论文的转述。

它把 RSI 的对象从「把底座模型做得更会解题」换成「把长程探索策略写成可演化的程序」。硬约束：底层大模型、评价函数、测试环境锁死，只更新探索策略代码，性能才能归因。

## Mechanism

三阶段闭环：

1. **在线探索**：当前策略指挥 Coding Agent 进评测沙箱，沉淀一棵发现树（代码快照、报错、耗时、得分）。
2. **世界演化**：新节点无损并入历史模拟器。
3. **离线做梦**：候选策略在已有树上高速重跑，不调真实 API、不烧 Token；按解质量与计算效率选出下一轮策略。

一次真实探索换上万次零 Token 回放。策略每个决策轮只做四件事：选父节点、定并发、设深度、下止损（空批次结题）。

工程避坑（附录 Prompt）：实现级报错（维度/显存/编译）不是算法方向失败；分支看整条轨迹，可赦免重开；收益走平要掺异构候选；探索强度随突破/平台期加减；**不要把历史教训写进 Prompt**——对照实验里显式方向引导会压多样性，经验应留给回放环境。

适用边界：必须有客观可自动打分的沙箱；回放不能发明未走过的路径，新知识仍靠周期性在线探索；策略代码本身有复杂度上限。

## Boundaries

不是微调模型，也不是在线边探索边学元策略（评估一套搜索规则要跑完整棵树，成本沉没）。没有确定性评测器的开放域创意/模糊业务，整套回放不成立。

## Related

- [Harness 自改进](../concepts/harness-self-improvement.md)
- [Agent 自进化飞轮](../concepts/agent-self-evolution-flywheel.md)
