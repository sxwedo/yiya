---
type: Entity
title: "Model Context Protocol (MCP)"
description: "连接 AI 应用与外部系统（数据源、工具、工作流）的开放标准；客户端/服务端生态广泛。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T00:00:00Z }
related:
  - software-factory-cost
  - fastmcp
  - gitmcp
  - langchain
  - mineru
  - proof
  - pilot-protocol
  - mena
  - pi
  - oh-my-pi
  - coding-agent-workflow
  - punkpeye-awesome-mcp-servers-github
sources:
  - ../references/mcp-site.md
  - ../references/punkpeye-awesome-mcp-servers-github.md
  - ../../../raw/articles/Developers/Announcing the hosted X MCP.md
  - ../../../raw/articles/ClaudeDevs/MCP 2026-07-28 is live and it's the largest update to the protocol since launch.md
  - ../../../raw/articles/Khairallah AL-Awady/Every solo founder hits the same wall.md
  - ../../../raw/articles/宝玉/来自 Codex 官方团队的分享：如何把 Codex 用到极致.md
  - ../../../raw/articles/Suryansh Tiwari/Claude Code feels completely different once you install this.md
  - ../../../raw/articles/Jason Zhu/Anthropic于2026年3月12日推出“Claude Certified.md
  - ../../../raw/articles/Ren/如何写出工业级 Skill.md
  - ../../../raw/articles/AI Will/Google 近日发布了一门从零开始讲 Agentic Engineering 的 1 小时课程：.md
  - ../../../raw/articles/Orange AI/最近跟藏师傅聊天，都感觉到深深的共鸣。.md
  - ../../../raw/articles/Mr Panda/HERMES AGENT：NOUS RESEARCH 打造的开源自主 AI 智能体.md
  - ../../../raw/articles/宝玉/智能体工程的 8 个等级【译】.md
  - ../../../raw/articles/Ethan － Builder/什么是 Eval？为什么它决定了 AI 项目能不能真正落地.md
  - ../../../raw/articles/Vincent/一文彻底打通AI底层逻辑：从LLM到Agent，所有核心概念拆解透彻.md
  - ../../../raw/articles/Geek Lite/把公司文档自动整理成知识 Wiki，通过 MCP 让每个员工的 AI 客户端拿到对口的上下文，不用再手动粘贴。.md
  - ../../../raw/articles/宝玉/注册地址：[rsvp.withgoogle.com－events－google-…](https－－－rsvp.withgoogle.com－events－google-ai-ag.md
  - ../../../raw/articles/比特币橙子Trader/Codex App － CLI 也可以直接接入股票、财报、SEC 文件和金融新闻数据了。.md
  - ../../../raw/articles/汉松/Harness 工程实践：如何让 Agent 完成自主迭代.md
  - ../../../raw/articles/Smartpig/为什么 AI Agent 正在逐步“去 MCP 化”，重新拥抱 CLI？.md
---

# Summary

**Model Context Protocol（MCP）**（https://modelcontextprotocol.io/）是把 AI 应用接到外部系统的开放标准：暴露/消费数据源、工具与工作流，降低各家 agent 重复集成成本。生态侧常见 Claude / ChatGPT / Cursor / VS Code 等客户端与大量 MCP server。

定位：协议与接口层，不是某一款 coding agent；本机巡检 MCP 注册见 [mena](./mena.md)，工作流里「定制环境」见 [Coding Agent Workflow](../concepts/coding-agent-workflow.md)。

## Related

- [Software Factory Cost Equation](../concepts/software-factory-cost.md)
- [FastMCP](./fastmcp.md)
- [GitMCP](./gitmcp.md)
- [LangChain](./langchain.md)
- [MinerU](./mineru.md)
- [Proof](./proof.md)
- [Pilot Protocol](./pilot-protocol.md)
- [MCP（站点书签）](../references/mcp-site.md)
- [mena](./mena.md)
- [Pi](./pi.md)
- [oh-my-pi](./oh-my-pi.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
- [punkpeye/awesome-mcp-servers（GitHub）](../references/punkpeye-awesome-mcp-servers-github.md)
- [Announcing the hosted X MCP](../../../raw/articles/Developers/Announcing the hosted X MCP.md)
- [MCP 2026-07-28 is live and it's the largest update to the protocol since launch](../../../raw/articles/ClaudeDevs/MCP 2026-07-28 is live and it's the largest update to the protocol since launch.md)
- [Every solo founder hits the same wall](../../../raw/articles/Khairallah AL-Awady/Every solo founder hits the same wall.md)
- [来自 Codex 官方团队的分享：如何把 Codex 用到极致](../../../raw/articles/宝玉/来自 Codex 官方团队的分享：如何把 Codex 用到极致.md)
- [Claude Code feels completely different once you install this](../../../raw/articles/Suryansh Tiwari/Claude Code feels completely different once you install this.md)
- [Anthropic于2026年3月12日推出“Claude Certified](../../../raw/articles/Jason Zhu/Anthropic于2026年3月12日推出“Claude Certified.md)
- [如何写出工业级 Skill](../../../raw/articles/Ren/如何写出工业级 Skill.md)
- [Google 近日发布了一门从零开始讲 Agentic Engineering 的 1 小时课程：](../../../raw/articles/AI Will/Google 近日发布了一门从零开始讲 Agentic Engineering 的 1 小时课程：.md)
- [最近跟藏师傅聊天，都感觉到深深的共鸣。](../../../raw/articles/Orange AI/最近跟藏师傅聊天，都感觉到深深的共鸣。.md)
- [HERMES AGENT：NOUS RESEARCH 打造的开源自主 AI 智能体](../../../raw/articles/Mr Panda/HERMES AGENT：NOUS RESEARCH 打造的开源自主 AI 智能体.md)
- [智能体工程的 8 个等级【译】](../../../raw/articles/宝玉/智能体工程的 8 个等级【译】.md)
- [什么是 Eval？为什么它决定了 AI 项目能不能真正落地](../../../raw/articles/Ethan － Builder/什么是 Eval？为什么它决定了 AI 项目能不能真正落地.md)
- [一文彻底打通AI底层逻辑：从LLM到Agent，所有核心概念拆解透彻](../../../raw/articles/Vincent/一文彻底打通AI底层逻辑：从LLM到Agent，所有核心概念拆解透彻.md)
- [把公司文档自动整理成知识 Wiki，通过 MCP 让每个员工的 AI 客户端拿到对口的上下文，不用再手动粘贴。](../../../raw/articles/Geek Lite/把公司文档自动整理成知识 Wiki，通过 MCP 让每个员工的 AI 客户端拿到对口的上下文，不用再手动粘贴。.md)
- [注册地址：[rsvp.withgoogle.com－events－google-…](https－－－rsvp.withgoogle.com－events－google-ai-ag](../../../raw/articles/宝玉/注册地址：[rsvp.withgoogle.com－events－google-…](https－－－rsvp.withgoogle.com－events－google-ai-ag.md)
- [Codex App － CLI 也可以直接接入股票、财报、SEC 文件和金融新闻数据了。](../../../raw/articles/比特币橙子Trader/Codex App － CLI 也可以直接接入股票、财报、SEC 文件和金融新闻数据了。.md)
- [Harness 工程实践：如何让 Agent 完成自主迭代](../../../raw/articles/汉松/Harness 工程实践：如何让 Agent 完成自主迭代.md)
- [为什么 AI Agent 正在逐步“去 MCP 化”，重新拥抱 CLI？](../../../raw/articles/Smartpig/为什么 AI Agent 正在逐步“去 MCP 化”，重新拥抱 CLI？.md)
