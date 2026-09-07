---
type: Concept
title: "Coding Agent Workflow"
description: "用 coding agents 构建软件的高层工作流：规划→执行→部署监控，配合引导、自主度、验收、环境定制与 harness 基础。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T06:40:00Z }
related:
  - loop-engineering
  - mcp
  - agents-md
  - multi-harness-control-plane
  - mena
  - pi
  - skills-sh
  - xiaoshan-xuetang
  - minimal-agent-harness
  - delivery-harness
sources:
  - ../references/ng-coding-agents-skills.md
  - ../../../raw/articles/Lingxi Li/Grok Bot for Engineering.md
  - ../../../raw/articles/Ernesto Lopez/Vibe coding without sending this prompt first, is a waste of time.md
  - ../../../raw/articles/Khairallah AL-Awady/How To Become An AI Engineer in 2026 (Without a CS Degree).md
  - ../../../raw/articles/Matt Pocock/Steps to become a senior programmer－.md
  - ../../../raw/articles/Hanako/You check every step your agents take. Not because you want to, but because nothing else.md
  - ../../../raw/articles/Rahul/Most developers learn AI by copying tutorials.md
  - ../../../raw/articles/宝玉/别把整个 GitHub 装进 Skills，Skills 的正确用法.md
  - ../../../raw/articles/kabikabi/程序员就没几个是健康的，所以我最近做了一些点。.md
  - ../../../raw/articles/h100envy/Deep mechanics plus working code. Stateless iteration, idempotent checks, isolation.md
  - ../../../raw/articles/铁锤人/分享我半年筛选下来的AI newsletter：.md
  - ../../../raw/articles/向阳乔木/如果你每周时间有限，但又想获得前沿AI信息？.md
  - ../../../raw/articles/-Zho-/终于把我的 Nano-Banana 创意玩法大全 Github 库 写好了！！！.md
  - ../../../raw/articles/烟花老师/Loop Engineering 精华文章汇总!.md
  - ../../../raw/articles/实践哥 Li/今天给我司嵌入式算法工程师推荐了 autoresearch，跑了 7 轮就把他的祖传算法提升了近 20%，他睡不着了，晚上要盯着跑通宵。.md
  - ../../../raw/articles/Huan/每当人生低谷的时候，都会反复听这段话.md
  - ../../../raw/articles/NerdC/推友里大多是码农，在这推荐两个知名程序员健康手册：.md
  - ../../../raw/articles/Adrian Punk/当我开始揣摩Less Is More.md
  - ../../../raw/articles/鸟哥 － 蓝鸟会🕊️/兄弟们，付费语音工具可以卸载了.md
  - ../../../raw/articles/MZ 🍒/血常规报告解读.md
  - ../../../raw/articles/老白（每日 AI 干货✊）/牛 x 啊，一个印度独立开发者，.md
  - ../../../raw/articles/UNICORN⚡️🦄/互联网妈的还是很有意思.md
  - ../../../raw/articles/RelaxView/开源TTS直接卷疯了！园区诈骗又有新武器？.md
---

# Definition

**Coding Agent Workflow** 把「会用 coding agent」落成可重复的三阶段循环，而不是单次聊天写代码：

1. **Planning** — 研究/摸清现有仓 + 写清需求与技术设计，再生成可执行计划；必要时审查安全、过度工程与关键假设。
2. **Execution** — 在自主度与人机监督之间校准：让 agent 构建，并用自动/人工检查验收。
3. **Deployment & monitoring** — 经 CI/CD 或人工门禁部署；用 agent 看日志、提问题、推动改进。

要在各阶段有效，还需五块能力：**引导工作流**（速度/成本/风险/人力权衡）、**赋能自主度**（交互 vs 委派、上下文与并行）、**评审产出**（行为/功能验证、agentic review）、**定制 agent 与环境**（Skills/MCP/hooks、[`AGENTS.md`](../entities/agents-md.md) 等常驻上下文）、**coding agent 基础**（检索、上下文、子代理、harness 包模型）。

与「长跑烧大量 token」叙事相对：多数有效用法是**高迭代 + 高判断力介入**。可与本域 [Minimal Agent Harness](./minimal-agent-harness.md)、[Delivery Harness](./delivery-harness.md) 对照——前者偏原语，后者偏交付控制面，本概念偏「人如何驾驭 agent 做软件」。

## Related

- [Loop Engineering](./loop-engineering.md)
- [Model Context Protocol (MCP)](../entities/mcp.md)
- [AGENTS.md](../entities/agents-md.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [mena](../entities/mena.md)
- [Pi](../entities/pi.md)
- [skills.sh](../entities/skills-sh.md)
- [小山学堂](../entities/xiaoshan-xuetang.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Delivery Harness](./delivery-harness.md)
- [ng-coding-agents-skills](../references/ng-coding-agents-skills.md)
- [Grok Bot for Engineering](../../../raw/articles/Lingxi Li/Grok Bot for Engineering.md)
- [Vibe coding without sending this prompt first, is a waste of time](../../../raw/articles/Ernesto Lopez/Vibe coding without sending this prompt first, is a waste of time.md)
- [How To Become An AI Engineer in 2026 (Without a CS Degree)](../../../raw/articles/Khairallah AL-Awady/How To Become An AI Engineer in 2026 (Without a CS Degree).md)
- [Steps to become a senior programmer－](../../../raw/articles/Matt Pocock/Steps to become a senior programmer－.md)
- [You check every step your agents take. Not because you want to, but because nothing else](../../../raw/articles/Hanako/You check every step your agents take. Not because you want to, but because nothing else.md)
- [Most developers learn AI by copying tutorials](../../../raw/articles/Rahul/Most developers learn AI by copying tutorials.md)
- [别把整个 GitHub 装进 Skills，Skills 的正确用法](../../../raw/articles/宝玉/别把整个 GitHub 装进 Skills，Skills 的正确用法.md)
- [程序员就没几个是健康的，所以我最近做了一些点。](../../../raw/articles/kabikabi/程序员就没几个是健康的，所以我最近做了一些点。.md)
- [Deep mechanics plus working code. Stateless iteration, idempotent checks, isolation](../../../raw/articles/h100envy/Deep mechanics plus working code. Stateless iteration, idempotent checks, isolation.md)
- [分享我半年筛选下来的AI newsletter：](../../../raw/articles/铁锤人/分享我半年筛选下来的AI newsletter：.md)
- [如果你每周时间有限，但又想获得前沿AI信息？](../../../raw/articles/向阳乔木/如果你每周时间有限，但又想获得前沿AI信息？.md)
- [终于把我的 Nano-Banana 创意玩法大全 Github 库 写好了！！！](../../../raw/articles/-Zho-/终于把我的 Nano-Banana 创意玩法大全 Github 库 写好了！！！.md)
- [Loop Engineering 精华文章汇总!](../../../raw/articles/烟花老师/Loop Engineering 精华文章汇总!.md)
- [今天给我司嵌入式算法工程师推荐了 autoresearch，跑了 7 轮就把他的祖传算法提升了近 20%，他睡不着了，晚上要盯着跑通宵。](../../../raw/articles/实践哥 Li/今天给我司嵌入式算法工程师推荐了 autoresearch，跑了 7 轮就把他的祖传算法提升了近 20%，他睡不着了，晚上要盯着跑通宵。.md)
- [每当人生低谷的时候，都会反复听这段话](../../../raw/articles/Huan/每当人生低谷的时候，都会反复听这段话.md)
- [推友里大多是码农，在这推荐两个知名程序员健康手册：](../../../raw/articles/NerdC/推友里大多是码农，在这推荐两个知名程序员健康手册：.md)
- [当我开始揣摩Less Is More](../../../raw/articles/Adrian Punk/当我开始揣摩Less Is More.md)
- [兄弟们，付费语音工具可以卸载了](../../../raw/articles/鸟哥 － 蓝鸟会🕊️/兄弟们，付费语音工具可以卸载了.md)
- [血常规报告解读](../../../raw/articles/MZ 🍒/血常规报告解读.md)
- [牛 x 啊，一个印度独立开发者，](../../../raw/articles/老白（每日 AI 干货✊）/牛 x 啊，一个印度独立开发者，.md)
- [互联网妈的还是很有意思](../../../raw/articles/UNICORN⚡️🦄/互联网妈的还是很有意思.md)
- [开源TTS直接卷疯了！园区诈骗又有新武器？](../../../raw/articles/RelaxView/开源TTS直接卷疯了！园区诈骗又有新武器？.md)
