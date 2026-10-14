---
type: Entity
title: "AGENTS.md"
description: "仓内给编码代理读的约定：对人 README，对 Agent AGENTS.md。常驻、宜短；规程进 Skills，硬约束进 hooks/rules，不是把全书塞进这一页。"
kind: work
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T13:50:00Z }
related:
  - pi
  - coding-agent-workflow
  - multi-harness-control-plane
  - skills-sh
  - agent-skills
  - llm-wiki
  - named-style-tokens
  - coding-agent-workflow
sources:
  - ../references/agents-md-site.md
  - ../../../raw/articles/雨哥向前冲/CLAUDE.md 终于有人把最全用法讲清楚了.md
  - ../../../raw/articles/Claude/Using CLAUDE.md files： Customizing Claude Code for your codebase.md
  - ../../../raw/articles/Claude/Steering Claude Code： when to use CLAUDE.md, skills, hooks, and subagents.md
  - ../../../raw/articles/Datawhale/重磅！OpenAI 官方 Prompt 指南升级.md
---

# Identity

**AGENTS.md**（规范站 <https://agents.md/）是仓库里给编码代理读的 Markdown：构建、测试、目录、团队规范，写在人读 README 之外。Claude Code 把同一角色叫做 **CLAUDE.md**；Codex / Pi 等找 `AGENTS.md`。本库根目录那份就是 yiya 的实例。

它解决的是「每次会话从零解释项目」。根文件在会话开始载入、整段常驻；compaction 后会再读。子目录 CLAUDE.md 只在摸到该目录时加载，省 token。Anthropic 建议根文件 **<200 行**、有人维护、当代码评审；写清为什么，附命令和例子，当索引而不是全书。

## Mechanism

放什么：bash 常用命令、目录地图、测试怎么跑、不可破的仓级约定。`/init` 可以扫仓生成草稿，仍要人改。

根文件每多一行，每个工程师的每次会话都付钱。变肥就把团队约定推进子目录或 Skills。组织级安全/合规可用 MDM 下发、个人设排不掉的那份。

OpenAI Codex 的 Eric Provencher（Datawhale 译，面向 GPT-6）：补旧模型短板的规矩，换代后可能帮倒忙——更慢、上下文更挤、路径被锁死。Anthropic 对 Fable 5.1 也说过度约束。该删的：无条件「改前通读全仓」；每次都强制全量测试（Astra 会自己跑相关测试）；「未经允许不得改未提及文件」让收尾停下来等人。边界划在不可逆/外系统风险，不是所有探索。任务开始写清 Definition of Done：核心逻辑 + 相关检查通过才算完，路径留给模型选。Skill 侧：名称和描述常驻，写清何时才触发，细节渐进披露；为某个模型补的步骤别焊死给全家用。

[Pi](./pi.md) 当上下文原语；[Multi-Harness Control Plane](../concepts/multi-harness-control-plane.md) 从一份事实源生成各家的 `AGENTS.md` / `CLAUDE.md`。[LLM Wiki](../../../shared/concepts/llm-wiki.md) 的 schema 层也常用这个文件名。

## Boundaries

不要放：可复用步骤 → [Agent Skills](./agent-skills.md)；必须发生的副作用 → hooks / rules；隔离长活 → subagents；口吻/篇幅 → 系统提示附加。别人测过的文风名（ASD-STE100 一类）也一样，根文件会把所有任务往那个方向拽；任务级风格见 [命名风格词](../concepts/named-style-tokens.md)。仓 → Agent 可读说明书，**不是** harness、不是 MCP、不是 wiki 词条本身。

## Related

- [Pi](./pi.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
- [Multi-Harness Control Plane](../concepts/multi-harness-control-plane.md)
- [skills.sh](./skills-sh.md)
- [Agent Skills](./agent-skills.md)
- [LLM Wiki](../../../shared/concepts/llm-wiki.md)
- [命名风格词](../concepts/named-style-tokens.md)
