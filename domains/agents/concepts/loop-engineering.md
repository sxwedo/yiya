---
type: Concept
title: "Loop Engineering"
description: "把努力从「一手一手 prompt」转到设计可自己找活、分派、验收、记状态并再开下一轮的系统；停条件与上下文防腐是难点。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T10:50:00Z }
related:
  - software-factory-cost
  - coding-agent-workflow
  - claude
  - harness-self-improvement
  - playbook-feedback-loop
  - agent-self-evolution-flywheel
sources:
  - ../../../raw/articles/Addy Osmani/Loop Engineering.md
  - ../../../raw/articles/Akshay 🚀/Loop Engineering Clearly Explained.md
  - ../../../raw/articles/Akshay 🚀/the four pillars of loop engineering.md
  - ../../../raw/articles/Codez/Loop engineering－ the 14-step roadmap from prompter to loop designer.md
  - ../../../raw/articles/Codez/A senior Anthropic engineer just dropped 11-page PDF on －Loop Engineering－ for agentic.md
  - ../../../raw/articles/Andrew Ng/“Loop engineering” is a hot buzzphrase after mentions of it by Boris Cherny (Claude.md
  - ../../../raw/articles/Anatoli Kopadze/Loops explained－ Claude, GPT, Mira and what actually works.md
  - ../../../raw/articles/Matt Van Horn/WTF Is a Loop－ Peter Steinberger vs. Boris Cherny.md
  - ../../../raw/articles/Dan Farrelly/The Agent Loop Architecture.md
  - ../../../raw/articles/MIKE/How to Create Loops with Claude.md
  - ../../../raw/articles/rari/Loop Engineering－ The AI skill every builder needs in 2026.md
  - ../../../raw/articles/Raytar/Stop Being the Loop. Here's How to Make Claude Work While You Sleep.md
---

# Definition

**Loop Engineering**（循环工程）是 agent 用法层：不再一手一手写指令，而去设计能**自己找活 → 分派 → 验收 → 记状态 → 再开下一轮**的系统。Boris 等说法：工作是写 loop，不是写单次 prompt。

常见五件套：定时自动化 · worktree 并行 · Skills · 连接器/MCP · 子代理分写与审（常加盘外记忆）。难点：停条件（测过才算完）、上下文不腐、工具可重试、有人能说不。

与 [Coding Agent Workflow](./coding-agent-workflow.md) 互补：后者偏「规划→执行→部署」工作流；本页专讲「闭环自治」。产品侧入口仍见 [Claude](../entities/claude.md)。

## Related

- [Software Factory Cost Equation](./software-factory-cost.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Claude](../entities/claude.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [Agent 自进化飞轮](./agent-self-evolution-flywheel.md)
- [Loop Engineering](../../../raw/articles/Addy Osmani/Loop Engineering.md)
- [Loop Engineering Clearly Explained](../../../raw/articles/Akshay 🚀/Loop Engineering Clearly Explained.md)
- [the four pillars of loop engineering](../../../raw/articles/Akshay 🚀/the four pillars of loop engineering.md)
- [Loop engineering－ the 14-step roadmap from prompter to loop designer](../../../raw/articles/Codez/Loop engineering－ the 14-step roadmap from prompter to loop designer.md)
- [A senior Anthropic engineer just dropped 11-page PDF on －Loop Engineering－ for agentic](../../../raw/articles/Codez/A senior Anthropic engineer just dropped 11-page PDF on －Loop Engineering－ for agentic.md)
- [“Loop engineering” is a hot buzzphrase after mentions of it by Boris Cherny (Claude](../../../raw/articles/Andrew Ng/“Loop engineering” is a hot buzzphrase after mentions of it by Boris Cherny (Claude.md)
- [Loops explained－ Claude, GPT, Mira and what actually works](../../../raw/articles/Anatoli Kopadze/Loops explained－ Claude, GPT, Mira and what actually works.md)
- [WTF Is a Loop－ Peter Steinberger vs. Boris Cherny](../../../raw/articles/Matt Van Horn/WTF Is a Loop－ Peter Steinberger vs. Boris Cherny.md)
- [The Agent Loop Architecture](../../../raw/articles/Dan Farrelly/The Agent Loop Architecture.md)
- [How to Create Loops with Claude](../../../raw/articles/MIKE/How to Create Loops with Claude.md)
- [Loop Engineering－ The AI skill every builder needs in 2026](../../../raw/articles/rari/Loop Engineering－ The AI skill every builder needs in 2026.md)
- [Stop Being the Loop. Here's How to Make Claude Work While You Sleep](../../../raw/articles/Raytar/Stop Being the Loop. Here's How to Make Claude Work While You Sleep.md)
