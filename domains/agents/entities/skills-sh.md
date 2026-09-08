---
type: Entity
title: "skills.sh"
description: "Vercel 的 Agent Skills 开放目录与 CLI：按安装量浏览技能包，用 npx skills 装进多家编码代理。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T17:00:00Z }
related:
  - coding-agent-workflow
  - loop-engineering
  - pi
  - mena
  - agents-md
  - knowledge-skill-separation
sources:
  - ../references/skills-sh-site.md
  - ../references/mattpocock-skills-github.md
  - ../references/jimliu-baoyu-skills-github.md
  - ../references/multica-ai-andrej-karpathy-skills-github.md
  - ../references/builderio-skills-github.md
  - ../references/anthropics-skills-github.md
  - ../../../raw/articles/小麦搞钱计划/A2A：当 Agent 开始自己找人干活.md
  - ../../../raw/articles/Emil Kowalski/New skill－ －apple-design.md
  - ../../../raw/articles/花叔/你的下一个员工，何必是同事。.md
  - ../../../raw/articles/nash_su - e－acc/类 同事.skills 整理，欢迎补充：.md
---

# Summary

**skills.sh**（https://skills.sh/）是 Vercel 做的开放 Agent Skills 目录：按排行榜发现可复用技能包（`SKILL.md` + 可选脚本/参考），再用 CLI `npx skills add <owner/repo>` 写进本机已装的编码代理（Claude Code、Cursor、Codex、Pi 等）。发布不走单独上架：技能放进 git 仓，有人 `npx skills add` 后靠安装遥测出现在目录里。CLI 源码：[vercel-labs/skills](https://github.com/vercel-labs/skills)。

定位：技能包的**发现与安装层**，不是某一家 harness。仓内常驻约定见 [`AGENTS.md`](./agents-md.md)；Pi 把 Skills 当原语；mena 巡检本机已装 Skills。知识层 vs 可执行技能见 [知识与技能分离](../concepts/knowledge-skill-separation.md)。

## Related

- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
- [Loop Engineering](../concepts/loop-engineering.md)
- [Pi](./pi.md)
- [mena](./mena.md)
- [AGENTS.md](./agents-md.md)
- [知识与技能分离](../concepts/knowledge-skill-separation.md)
- [skills-sh-site](../references/skills-sh-site.md)
- [mattpocock-skills-github](../references/mattpocock-skills-github.md)
- [jimliu-baoyu-skills-github](../references/jimliu-baoyu-skills-github.md)
- [multica-ai-andrej-karpathy-skills-github](../references/multica-ai-andrej-karpathy-skills-github.md)
- [builderio-skills-github](../references/builderio-skills-github.md)
- [anthropics-skills-github](../references/anthropics-skills-github.md)
- [A2A：当 Agent 开始自己找人干活](../../../raw/articles/小麦搞钱计划/A2A：当 Agent 开始自己找人干活.md)
- [New skill: /apple-design](../../../raw/articles/Emil Kowalski/New skill－ －apple-design.md)
- [你的下一个员工，何必是同事。](../../../raw/articles/花叔/你的下一个员工，何必是同事。.md)
- [类 同事.skills 整理，欢迎补充：](../../../raw/articles/nash_su - e－acc/类 同事.skills 整理，欢迎补充：.md)
