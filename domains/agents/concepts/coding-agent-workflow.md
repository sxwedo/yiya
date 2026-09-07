---
type: Concept
title: "Coding Agent Workflow"
description: "用 coding agents 构建软件的高层工作流：规划→执行→部署监控，配合引导、自主度、验收、环境定制与 harness 基础。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T06:40:00Z }
related:
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
  - ../../../raw/articles/Anatoli Kopadze/Loops explained－ Claude, GPT, Mira and what actually works.md
  - ../../../raw/articles/Codez/Loop engineering－ the 14-step roadmap from prompter to loop designer.md
  - ../../../raw/articles/Thariq/A Field Guide to Fable－ Finding Your Unknowns.md
  - ../../../raw/articles/Pure Nomad/这个网站，可收看全世界各国的电视台.md
  - ../../../raw/articles/Matt Van Horn/WTF Is a Loop－ Peter Steinberger vs. Boris Cherny.md
  - ../../../raw/articles/鱼总聊AI/2026最值得关注的AI－出海－创业－独立开发－副业博主大合集！共129个，分领域整理，建议收藏.md
  - ../../../raw/articles/Andrew Ng/“Loop engineering” is a hot buzzphrase after mentions of it by Boris Cherny (Claude.md
  - ../../../raw/articles/Lingxi Li/Grok Bot for Engineering.md
  - ../../../raw/articles/Ernesto Lopez/Vibe coding without sending this prompt first, is a waste of time.md
  - ../../../raw/articles/Khairallah AL-Awady/How To Become An AI Engineer in 2026 (Without a CS Degree).md
  - ../../../raw/articles/Matt Pocock/Steps to become a senior programmer－.md
  - ../../../raw/articles/花叔/98页的🦞OpenClaw橙皮书👉[my.feishu.cn－wiki－H27Iw9uss…](https－－－my.feishu.cn－wiki－H27Iw9ussiaYboky.md
  - ../../../raw/articles/Charly Wargnier ♨️/🚨 You need to see this.md
  - ../../../raw/articles/奶昔🥤/最近几天看到很多网友在说梯子崩了…….md
  - ../../../raw/articles/苍何/《OpenClaw 从入门到精通指南》正式发布，开源免费！.md
  - ../../../raw/articles/Akshay 🚀/Loop Engineering Clearly Explained.md
  - ../../../raw/articles/天策/《国行 iPhone → 开启满血 AI，全图文流程X平台首发版》——闲鱼小红书副业赚钱版.md
  - ../../../raw/articles/Mengke Wang/成就伟大之前，先学会卖东西.md
  - ../../../raw/articles/风清扬/马老板开始招聘了，可兼职可全职，感觉比全职工资都高，内容也很简单，帮助训练ai.md
  - ../../../raw/articles/歸藏(guizang.ai)/开源个 Skill｜彻底解决小红、小绿书配图难题.md
  - ../../../raw/articles/Aron厚玉/不用吃二手的屎.md
  - ../../../raw/articles/Hanako/You check every step your agents take. Not because you want to, but because nothing else.md
  - ../../../raw/articles/AI探路者Tim/停止对Gemini说'帮我写简历'。.md
---

# Definition

**Coding Agent Workflow** 把「会用 coding agent」落成可重复的三阶段循环，而不是单次聊天写代码：

1. **Planning** — 研究/摸清现有仓 + 写清需求与技术设计，再生成可执行计划；必要时审查安全、过度工程与关键假设。
2. **Execution** — 在自主度与人机监督之间校准：让 agent 构建，并用自动/人工检查验收。
3. **Deployment & monitoring** — 经 CI/CD 或人工门禁部署；用 agent 看日志、提问题、推动改进。

要在各阶段有效，还需五块能力：**引导工作流**（速度/成本/风险/人力权衡）、**赋能自主度**（交互 vs 委派、上下文与并行）、**评审产出**（行为/功能验证、agentic review）、**定制 agent 与环境**（Skills/MCP/hooks、[`AGENTS.md`](../entities/agents-md.md) 等常驻上下文）、**coding agent 基础**（检索、上下文、子代理、harness 包模型）。

与「长跑烧大量 token」叙事相对：多数有效用法是**高迭代 + 高判断力介入**。可与本域 [Minimal Agent Harness](./minimal-agent-harness.md)、[Delivery Harness](./delivery-harness.md) 对照——前者偏原语，后者偏交付控制面，本概念偏「人如何驾驭 agent 做软件」。

## Related

- [Model Context Protocol (MCP)](../entities/mcp.md)
- [AGENTS.md](../entities/agents-md.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [mena](../entities/mena.md)
- [Pi](../entities/pi.md)
- [skills.sh](../entities/skills-sh.md)
- [小山学堂](../entities/xiaoshan-xuetang.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Delivery Harness](./delivery-harness.md)
- [AI Engineering Skills Map: Using coding agents](../references/ng-coding-agents-skills.md)
- [Loops explained－ Claude, GPT, Mira and what actually works](../../../raw/articles/Anatoli Kopadze/Loops explained－ Claude, GPT, Mira and what actually works.md)
- [Loop engineering－ the 14-step roadmap from prompter to loop designer](../../../raw/articles/Codez/Loop engineering－ the 14-step roadmap from prompter to loop designer.md)
- [A Field Guide to Fable－ Finding Your Unknowns](../../../raw/articles/Thariq/A Field Guide to Fable－ Finding Your Unknowns.md)
- [这个网站，可收看全世界各国的电视台](../../../raw/articles/Pure Nomad/这个网站，可收看全世界各国的电视台.md)
- [WTF Is a Loop－ Peter Steinberger vs. Boris Cherny](../../../raw/articles/Matt Van Horn/WTF Is a Loop－ Peter Steinberger vs. Boris Cherny.md)
- [2026最值得关注的AI－出海－创业－独立开发－副业博主大合集！共129个，分领域整理，建议收藏](../../../raw/articles/鱼总聊AI/2026最值得关注的AI－出海－创业－独立开发－副业博主大合集！共129个，分领域整理，建议收藏.md)
- [“Loop engineering” is a hot buzzphrase after mentions of it by Boris Cherny (Claude](../../../raw/articles/Andrew Ng/“Loop engineering” is a hot buzzphrase after mentions of it by Boris Cherny (Claude.md)
- [Grok Bot for Engineering](../../../raw/articles/Lingxi Li/Grok Bot for Engineering.md)
- [Vibe coding without sending this prompt first, is a waste of time](../../../raw/articles/Ernesto Lopez/Vibe coding without sending this prompt first, is a waste of time.md)
- [How To Become An AI Engineer in 2026 (Without a CS Degree)](../../../raw/articles/Khairallah AL-Awady/How To Become An AI Engineer in 2026 (Without a CS Degree).md)
- [Steps to become a senior programmer－](../../../raw/articles/Matt Pocock/Steps to become a senior programmer－.md)
- [98页的🦞OpenClaw橙皮书👉[my.feishu.cn－wiki－H27Iw9uss…](https－－－my.feishu.cn－wiki－H27Iw9ussiaYboky](../../../raw/articles/花叔/98页的🦞OpenClaw橙皮书👉[my.feishu.cn－wiki－H27Iw9uss…](https－－－my.feishu.cn－wiki－H27Iw9ussiaYboky.md)
- [🚨 You need to see this](../../../raw/articles/Charly Wargnier ♨️/🚨 You need to see this.md)
- [最近几天看到很多网友在说梯子崩了……](../../../raw/articles/奶昔🥤/最近几天看到很多网友在说梯子崩了…….md)
- [《OpenClaw 从入门到精通指南》正式发布，开源免费！](../../../raw/articles/苍何/《OpenClaw 从入门到精通指南》正式发布，开源免费！.md)
- [Loop Engineering Clearly Explained](../../../raw/articles/Akshay 🚀/Loop Engineering Clearly Explained.md)
- [《国行 iPhone → 开启满血 AI，全图文流程X平台首发版》——闲鱼小红书副业赚钱版](../../../raw/articles/天策/《国行 iPhone → 开启满血 AI，全图文流程X平台首发版》——闲鱼小红书副业赚钱版.md)
- [成就伟大之前，先学会卖东西](../../../raw/articles/Mengke Wang/成就伟大之前，先学会卖东西.md)
- [马老板开始招聘了，可兼职可全职，感觉比全职工资都高，内容也很简单，帮助训练ai](../../../raw/articles/风清扬/马老板开始招聘了，可兼职可全职，感觉比全职工资都高，内容也很简单，帮助训练ai.md)
- [开源个 Skill｜彻底解决小红、小绿书配图难题](../../../raw/articles/歸藏(guizang.ai)/开源个 Skill｜彻底解决小红、小绿书配图难题.md)
- [不用吃二手的屎](../../../raw/articles/Aron厚玉/不用吃二手的屎.md)
- [You check every step your agents take. Not because you want to, but because nothing else](../../../raw/articles/Hanako/You check every step your agents take. Not because you want to, but because nothing else.md)
- [停止对Gemini说'帮我写简历'。](../../../raw/articles/AI探路者Tim/停止对Gemini说'帮我写简历'。.md)
