---
type: Concept
title: "自动化交易系统"
description: "量化不是猜牛股，是把决定写成可重复规则。真实系统=数据→信号→风控→OMS→券商 API→成交→日志报警。AI 可帮开发，不可绕过风控下单。"
status: draft
domain: trading
generated: { by: agent:yiya-librarian, at: 2026-09-15T15:00:00Z }
related:
  - unreliable-components-reliable-systems
  - eval-driven-development
  - coding-agent-workflow
sources:
  - ../../../raw/articles/Hardy Chen/AI 量化交易到底是什么？从回测到真实部署，一篇讲清楚.md
---

# Definition

**自动化交易系统**（Hardy Chen）：网上「量化」常被混成三种东西。读者要的是装在自己电脑上、能自动跑的系统。本质不是让 AI 猜下一只牛股，而是把「挺强」换成可重复条件（策略规则化），再给出买/卖/不动的信号。

先分清八个词：K 线（OHLCV）、均线（金叉死叉只是历史信号）、仓位、止损止盈、市价/限价、手续费与滑点、胜率≠收益率、流动性与冲击。回测不算滑点就像开店忘了房租。

一套真系统至少七段：**行情 → 策略引擎 → 交易前风控 → OMS → 券商 API（适配器）→ 成交回报 → 日志与报警**。策略说买，风控仍可否决。断线重连不能重复下单。教学回测（文中 Backtrader + ORCL 日线）显示：2000 年更好的规则，2001 年可能亏更多——数字不是收益承诺。

AI 分两层：① 开发/研究助手，不碰真钱账户（人机协同，人审核）；② 系统内模块处理规则不擅长的信息，输出须结构化再过固定规则。**AI 不可绕过风控直接下单。** 更不建议视觉模型去点交易软件鼠标。

MVP：本机历史回测通过 → 券商模拟盘 → 每日自动跑、仓位与亏损限制、写日志。AI 协助开发与解释异常。

## Boundaries

真实可运行 ≠ 能赚钱。回测 ≠ 模拟盘 ≠ 实盘。本文是工程介绍，不构成投资建议。技术降低开发门槛，不降低市场风险和责任。连模拟盘的断线、拒单、日志都没处理，回测再漂亮也只是研究代码。

## Related

- [用不可靠组件造可靠系统](../../engineering/concepts/unreliable-components-reliable-systems.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
- [Coding Agent Workflow](../../agents/concepts/coding-agent-workflow.md)
