---
type: Entity
title: "skills.sh"
description: "Vercel 的 Agent Skills 开放目录与 CLI：按安装量浏览技能包，用 npx skills 装进多家编码代理。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T17:00:00Z }
related:
  - skills-sh-site
  - pi
  - mena
  - agents-md
  - knowledge-skill-separation
  - proof
  - pilot-protocol
  - coding-agent-workflow
  - mattpocock-skills-github
  - alchaincyf-nuwa-skill-github
  - markdown-viewer-skills-github
  - op7418-guizang-ppt-skill-github
  - coreyhaines31-marketingskills-github
  - jimliu-baoyu-skills-github
  - multica-ai-andrej-karpathy-skills-github
  - tjboudreaux-cc-thinking-skills-github
  - voltagent-awesome-openclaw-skills-github
  - github-awesome-copilot-github
  - builderio-skills-github
  - dietrichgebert-ponytail-github
  - yaojingang-yao-meta-skill-github
  - tw93-kami-github
sources:
  - ../references/skills-sh-site.md
  - ../references/mattpocock-skills-github.md
  - ../references/alchaincyf-nuwa-skill-github.md
  - ../references/markdown-viewer-skills-github.md
  - ../references/op7418-guizang-ppt-skill-github.md
  - ../references/coreyhaines31-marketingskills-github.md
  - ../references/jimliu-baoyu-skills-github.md
  - ../references/multica-ai-andrej-karpathy-skills-github.md
  - ../references/tjboudreaux-cc-thinking-skills-github.md
  - ../references/voltagent-awesome-openclaw-skills-github.md
  - ../references/github-awesome-copilot-github.md
  - ../references/builderio-skills-github.md
  - ../references/dietrichgebert-ponytail-github.md
  - ../references/yaojingang-yao-meta-skill-github.md
  - ../references/tw93-kami-github.md
---

# Summary

**skills.sh**（https://skills.sh/）是 Vercel 做的开放 Agent Skills 目录：按排行榜发现可复用技能包（`SKILL.md` + 可选脚本/参考），再用 CLI `npx skills add <owner/repo>` 写进本机已装的编码代理（Claude Code、Cursor、Codex、Pi 等）。发布不走单独上架：技能放进 git 仓，有人 `npx skills add` 后靠安装遥测出现在目录里。CLI 源码：[vercel-labs/skills](https://github.com/vercel-labs/skills)。

定位：技能包的**发现与安装层**，不是某一家 harness。仓内常驻约定见 [`AGENTS.md`](./agents-md.md)；Pi 把 Skills 当原语；mena 巡检本机已装 Skills。知识层 vs 可执行技能见 [知识与技能分离](../concepts/knowledge-skill-separation.md)。

## Related

- [skills.sh（站点）](../references/skills-sh-site.md)
- [Pi](./pi.md)
- [mena](./mena.md)
- [AGENTS.md](./agents-md.md)
- [知识与技能分离](../concepts/knowledge-skill-separation.md)
- [Proof](./proof.md)
- [Pilot Protocol](./pilot-protocol.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
- [mattpocock/skills（GitHub）](../references/mattpocock-skills-github.md)
- [alchaincyf/nuwa-skill（GitHub）](../references/alchaincyf-nuwa-skill-github.md)
- [markdown-viewer/skills（GitHub）](../references/markdown-viewer-skills-github.md)
- [op7418/guizang-ppt-skill（GitHub）](../references/op7418-guizang-ppt-skill-github.md)
- [coreyhaines31/marketingskills（GitHub）](../references/coreyhaines31-marketingskills-github.md)
- [JimLiu/baoyu-skills（GitHub）](../references/jimliu-baoyu-skills-github.md)
- [multica-ai/andrej-karpathy-skills（GitHub）](../references/multica-ai-andrej-karpathy-skills-github.md)
- [tjboudreaux/cc-thinking-skills（GitHub）](../references/tjboudreaux-cc-thinking-skills-github.md)
- [VoltAgent/awesome-openclaw-skills（GitHub）](../references/voltagent-awesome-openclaw-skills-github.md)
- [github/awesome-copilot（GitHub）](../references/github-awesome-copilot-github.md)
- [BuilderIO/skills（GitHub）](../references/builderio-skills-github.md)
- [DietrichGebert/ponytail（GitHub）](../references/dietrichgebert-ponytail-github.md)
- [yaojingang/yao-meta-skill（GitHub）](../references/yaojingang-yao-meta-skill-github.md)
- [tw93/Kami（GitHub）](../references/tw93-kami-github.md)
