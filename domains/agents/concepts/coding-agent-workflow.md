---
type: Concept
title: "Coding Agent Workflow"
description: "用 coding agents 构建软件的高层工作流：规划→执行→部署监控，配合引导、自主度、验收、环境定制与 harness 基础。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-08T10:00:00Z }
related:
  - ai-design-deslop
  - termany
  - graph-engineering
  - software-factory-cost
  - loop-engineering
  - minimal-agent-harness
  - delivery-harness
  - multi-harness-control-plane
  - mcp
  - agents-md
  - pi
  - mena
  - skills-sh
  - agent-skills
  - auto-mode
sources:
  - ../references/ng-coding-agents-skills.md
  - ../../../raw/articles/Hanako/You check every step your agents take. Not because you want to, but because nothing else.md
  - ../../../raw/articles/dunik/259 pull requests in 30 days, and a human typed exactly zero of them.md
  - ../../../raw/articles/DataDan｜AI Consultant + Builder/我们一直以为 AI 只会写代码，判断力还在人手里，这次不一样了.md
  - ../../../raw/articles/Tw93/想从产品工程师视角和大伙聊聊，在代码全部由AI生成的时代，如何保证产品的代码可以持续迭代、好维护、不腐化。.md
  - ../../../raw/articles/h100envy/Deep mechanics plus working code. Stateless iteration, idempotent checks, isolation.md
  - ../../../raw/articles/Claude/Building verification loops in Claude Code with skills.md
  - ../../../raw/articles/Claude/How Claude Code works in large codebases： Best practices and where to start.md
  - ../../../raw/articles/Claude/Onboarding Claude Code like a new developer： Lessons from 17 years of development.md
  - ../../../raw/articles/Claude/Running an AI-native engineering org.md
  - ../../../raw/articles/Claude/The AI-Native SDLC playbook.md
---

# Definition

**Coding Agent Workflow** 把「会用 coding agent」落成可重复的三阶段循环，而不是单次聊天写代码：

1. **Planning** — 研究/摸清现有仓 + 写清需求与技术设计，再生成可执行计划；必要时审查安全、过度工程与关键假设。
2. **Execution** — 在自主度与人机监督之间校准：让 agent 构建，并用自动/人工检查验收。
3. **Deployment & monitoring** — 经 CI/CD 或人工门禁部署；用 agent 看日志、提问题、推动改进。

要在各阶段有效，还需五块能力：

- **引导工作流**（速度/成本/风险/人力权衡）；
- **赋能自主度**（交互 vs 委派、上下文与并行）；
- **评审产出**（行为/功能验证、agentic review）；
- **定制 agent 与环境**（Skills/MCP/hooks、[`AGENTS.md`](../entities/agents-md.md) 等常驻上下文）；
- **coding agent 基础**（检索、上下文、子代理、harness 包模型）。

大仓部署：agentic search（现场 grep / 读文件）比 RAG 索引更跟得上活跃仓；质量取决于起步上下文。Harness 五件套按层叠：**CLAUDE.md / AGENTS.md**（每会话、保持瘦）→ hooks（确定性检查与会话学习）→ Skills（按需披露）→ plugins（把有效配置分发）→ MCP / LSP / 子代理。根文件只放指针与致命坑；测试命令按子目录写；`.ignore` 与 deny 规则进仓。模型升级后要复审这些补丁，过期指令会反过来约束新模型。

把 Agent 当新同事带：先给有界任务，把上下文做成可版本化的独立层（MacCoss 的 `pwiz-ai`），Skill 指向文档而不是复制进 prompt。组织侧：规划改 JIT（原型代替半年 roadmap）；问 Claude 而不是找作者；人只审法律/安全/品味；角色模糊，招创造者与系统专家，不招纯吞吐量。

AI-native SDLC 把同一循环写成可提交产物：`intent.md` → `spec.md` → `plan.md` → diff/测试 → PR 评审 → 生产触发下一份 intent。人守闸门（接受 intent、批 spec、批生产），agent 跑阶段之间。治理用 hooks / 托管权限，而不是会签会。

与「长跑烧大量 token」叙事相对：多数有效用法是**高迭代 + 高判断力介入**。可与本域 [Minimal Agent Harness](./minimal-agent-harness.md)、[Delivery Harness](./delivery-harness.md) 对照——前者偏原语，后者偏交付控制面，本概念偏「人如何驾驭 agent 做软件」。

## Related

- [AI Design De-slop](../../design/concepts/ai-design-deslop.md)
- [Termany](../entities/termany.md)
- [Graph Engineering](./graph-engineering.md)
- [Software Factory Cost Equation](./software-factory-cost.md)
- [Loop Engineering](./loop-engineering.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Delivery Harness](./delivery-harness.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Model Context Protocol (MCP)](../entities/mcp.md)
- [AGENTS.md](../entities/agents-md.md)
- [Pi](../entities/pi.md)
- [mena](../entities/mena.md)
- [skills.sh](../entities/skills-sh.md)
- [Agent Skills](../entities/agent-skills.md)
- [Auto Mode](./auto-mode.md)
- [ng-coding-agents-skills](../references/ng-coding-agents-skills.md)
