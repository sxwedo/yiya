---
type: Entity
title: "Knowledge Work Plugins"
description: "Anthropic 开源岗位插件包：给 Cowork / Claude Code 打包 Skills、MCP、斜杠命令。库里只有入口。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-05T12:00:00Z }
related:
  - claude
  - agent-skills
  - mcp
  - role-first-agent
  - skills-sh
sources:
  - ../../../raw/bookmarks/github.md
---

# Identity

**Knowledge Work Plugins**（[anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)）：给知识岗位用的开源插件集，主打 [Claude](./claude.md) Cowork，也兼容 Claude Code。每个插件按职能打包 Skills、MCP 连接器、斜杠命令和子代理（sales / data / legal 等 11 个起步）。文件就是 markdown 和 JSON，宣称无构建步骤。官方说法：开箱是角色起点，换成公司自己的工具和术语才有用。`claude plugin marketplace add anthropics/knowledge-work-plugins`。

对照：[Agent Skills](./agent-skills.md) 是单份 SKILL.md 格式；本页是按岗位捆起来的 marketplace。[Role-first Agent](../concepts/role-first-agent.md) 是雇岗位的合同；这里是 Anthropic 做好的岗位插件包。发现/安装层仍见 [skills.sh](./skills-sh.md)。历史仓 [claude-plugins-official](https://github.com/anthropics/claude-plugins-official) 是另一份 Claude Code 插件目录，不是本页。

## Boundaries

库里只有 GitHub 入口。不是 Claude 产品总卡，不是 MCP 协议，不是把 11 个插件拆成 11 张 Entity。无成文，不编各插件技能清单。

## Related

- [Claude](./claude.md)
- [Agent Skills](./agent-skills.md)
- [MCP](./mcp.md)
- [Role-first Agent](../concepts/role-first-agent.md)
- [skills.sh](./skills-sh.md)
