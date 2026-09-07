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
  - ../../../raw/articles/向阳乔木/这个Github库真不错，任何视频号视频，在微信内置浏览器打开。.md
  - ../../../raw/articles/Tw93/想从产品工程师视角和大伙聊聊，在代码全部由AI生成的时代，如何保证产品的代码可以持续迭代、好维护、不腐化。.md
  - ../../../raw/articles/宝玉/手绘风信息图提示词.md
  - ../../../raw/articles/Rey｜英语自由与判断/使用AI 10倍速学习的提示词.md
  - ../../../raw/articles/Akshay 🚀/about loop engineering.md
  - ../../../raw/articles/M./EDU 教育邮箱系统，.md
  - ../../../raw/articles/猫小姐学AI/108个世界顶级认知.md
  - ../../../raw/articles/Vincent/终于有人把Hermes+Gemma 4讲透了！UP主讲得非常细致，逻辑清晰，15分钟就能学会的保姆级教程，建议收藏！.md
  - ../../../raw/articles/Ian (伊恩)/又发现一个赛博善人：Inspora，专门收集优质作品.md
  - ../../../raw/articles/流氓兔🐰/狂刷这70本书，脑子真的会变快🔥q.md
  - ../../../raw/articles/Xudong Han/分享一下智谱创始人唐杰老师 @jietang 昨天刚在WB上发的文章吧.md
  - ../../../raw/articles/kaize/Loop Engineering - From Prompting to Looping.md
  - ../../../raw/articles/Jason Zhu/太强了 小耳.md
  - ../../../raw/articles/Bitturing/🔥马斯克：五步工作法 = 提效核心！.md
  - ../../../raw/articles/Mmina_Globalization/🧳 2025 独立开发“穷鬼全家桶” 能白嫖绝不花钱！.md
  - ../../../raw/articles/Roland.W/全文没有一处在教你做IP.md
  - ../../../raw/articles/退役星灵艺术鉴赏家/Google 开源了 distribute agent runtime 框架 [github.com－google－ax](http－－－github.com－google－ax).md
  - ../../../raw/articles/傅盛/黄仁勋：创新不是从精英里挑出来的，是从试错里长出来的；末位淘汰不是激励，是扼杀活力。.md
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
- [这个Github库真不错，任何视频号视频，在微信内置浏览器打开。](../../../raw/articles/向阳乔木/这个Github库真不错，任何视频号视频，在微信内置浏览器打开。.md)
- [想从产品工程师视角和大伙聊聊，在代码全部由AI生成的时代，如何保证产品的代码可以持续迭代、好维护、不腐化。](../../../raw/articles/Tw93/想从产品工程师视角和大伙聊聊，在代码全部由AI生成的时代，如何保证产品的代码可以持续迭代、好维护、不腐化。.md)
- [手绘风信息图提示词](../../../raw/articles/宝玉/手绘风信息图提示词.md)
- [使用AI 10倍速学习的提示词](../../../raw/articles/Rey｜英语自由与判断/使用AI 10倍速学习的提示词.md)
- [about loop engineering](../../../raw/articles/Akshay 🚀/about loop engineering.md)
- [EDU 教育邮箱系统，](../../../raw/articles/M./EDU 教育邮箱系统，.md)
- [108个世界顶级认知](../../../raw/articles/猫小姐学AI/108个世界顶级认知.md)
- [终于有人把Hermes+Gemma 4讲透了！UP主讲得非常细致，逻辑清晰，15分钟就能学会的保姆级教程，建议收藏！](../../../raw/articles/Vincent/终于有人把Hermes+Gemma 4讲透了！UP主讲得非常细致，逻辑清晰，15分钟就能学会的保姆级教程，建议收藏！.md)
- [又发现一个赛博善人：Inspora，专门收集优质作品](../../../raw/articles/Ian (伊恩)/又发现一个赛博善人：Inspora，专门收集优质作品.md)
- [狂刷这70本书，脑子真的会变快🔥q](../../../raw/articles/流氓兔🐰/狂刷这70本书，脑子真的会变快🔥q.md)
- [分享一下智谱创始人唐杰老师 @jietang 昨天刚在WB上发的文章吧](../../../raw/articles/Xudong Han/分享一下智谱创始人唐杰老师 @jietang 昨天刚在WB上发的文章吧.md)
- [Loop Engineering - From Prompting to Looping](../../../raw/articles/kaize/Loop Engineering - From Prompting to Looping.md)
- [太强了 小耳](../../../raw/articles/Jason Zhu/太强了 小耳.md)
- [🔥马斯克：五步工作法 = 提效核心！](../../../raw/articles/Bitturing/🔥马斯克：五步工作法 = 提效核心！.md)
- [🧳 2025 独立开发“穷鬼全家桶” 能白嫖绝不花钱！](../../../raw/articles/Mmina_Globalization/🧳 2025 独立开发“穷鬼全家桶” 能白嫖绝不花钱！.md)
- [全文没有一处在教你做IP](../../../raw/articles/Roland.W/全文没有一处在教你做IP.md)
- [Google 开源了 distribute agent runtime 框架 [github.com－google－ax](http－－－github.com－google－ax)](../../../raw/articles/退役星灵艺术鉴赏家/Google 开源了 distribute agent runtime 框架 [github.com－google－ax](http－－－github.com－google－ax).md)
- [黄仁勋：创新不是从精英里挑出来的，是从试错里长出来的；末位淘汰不是激励，是扼杀活力。](../../../raw/articles/傅盛/黄仁勋：创新不是从精英里挑出来的，是从试错里长出来的；末位淘汰不是激励，是扼杀活力。.md)
