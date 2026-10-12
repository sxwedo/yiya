---
type: Concept
title: "老系统接入 AI"
description: "Model 想、Agent 干、Skill 会、MCP 接、CLI 说。老系统先体检：有 API 薄封 MCP，没 API 包 CLI，只剩网页才 RPA。鉴权一案一议。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-12T10:00:00Z }
related:
  - mcp
  - agent-skills
  - knowledge-skill-separation
  - production-vertical-agent
  - opencli
  - cli-anything
  - code-mode
sources:
  - ../../../raw/articles/腾讯技术工程/Agent、MCP、Skill、Cli、Model 一次讲透：老系统接入 AI 的概念地图与三条路径.md
---

# Definition

**老系统接入 AI**（腾讯技术工程 / robinji）：课题是「让 AI 深入老业务系统」，不是再买一套新系统。先把五个词收成一支团队，别背黑话：

| 概念 | 角色 | 干什么 |
| --- | --- | --- |
| Model | 大脑 | 想。碰不到你库里的一行数据。 |
| Agent | 数字员工 | 干。目标驱动的规划–工具–观察闭环。Agent 是系统，Model 是部件。 |
| Skill | 岗位手册 | 会。触发条件 + 流程 + 领域知识 + 工具清单。Prompt 是随口叮嘱，Skill 是可版本管理的 SOP。 |
| MCP | 万能转接头 | 接。Agent 与任意系统的开放接口。 |
| CLI | 对讲机 | 说。对人是高效操作，对 Agent 是结构化调用。 |

MCP 和 CLI 可嵌套：MCP Server 里面常常就是封装 CLI。CLI 管怎么执行，MCP 管怎么标准地暴露给 AI。对照传统图：微服务→Agent，OpenAPI→MCP，Wiki/SOP→Skill，SDK/命令行→CLI。

一次调用接力：「查上周请假」→ Agent 接目标 → Model 规划 → 加载 Skill → MCP 调请假 Server → Server 调老 REST → 原路返回人话。

老系统没有银弹。体检四维：API 开放、文档、鉴权、变更风险。三条路从上到下，改造变浅、脆弱变高：

1. **API 封 MCP（首选）**：前面加薄 Server，只做协议转换，不碰业务逻辑。可灰度。
2. **CLI 包装（次选）**：没 API 但有脚本，先结构化输出（最好 JSON），再包 MCP。
3. **浏览器/RPA（兜底）**：只剩网页。能用但脆，页面改版即死，过渡别当终态。

鉴权一案一议：身份从用户到 Agent 再到系统、最小权限、审计、敏感动作要不要人确认，没有通用打包票。排序用「使用频次 × 业务价值」，先打高频、低风险、有 API 的。第一场必须赢、还得赢得便宜。同向切入见 [生产级垂类 Agent](./production-vertical-agent.md)。

MCP 传输：官方只有 **stdio** 和 **Streamable HTTP**。SSE 自 2025-03 起是历史方案，只迁不新建。Gateway/Proxy/托管是部署形态，不是新协议。本地 stdio；企业共享 Streamable HTTP + OAuth；WebSocket 留给实时和浏览器桥。

案例：车企请假（BS，REST 前加 MCP，老系统一行没动）；欧洲商用车 PLM（CS，客户端 API 包成本地服务再 MCP，沿用已有登录态）。封装越薄，项目死得越慢。

Skill 与知识分工见 [知识与技能分离](./knowledge-skill-separation.md)；协议本体见 [MCP](../entities/mcp.md)。CLI 替代 MCP 膨胀是另一条路，见 [Code Mode](./code-mode.md)，不要和「没 API 才包 CLI」焊死。

## Boundaries

不是 MCP 规范全文，不是 Skill 格式卡，不是 RPA 产品手册。不是腾讯出行销售页。没有银弹，鉴权不能抄作业。

## Related

- [Model Context Protocol (MCP)](../entities/mcp.md)
- [Agent Skills](../entities/agent-skills.md)
- [知识与技能分离](./knowledge-skill-separation.md)
- [生产级垂类 Agent](./production-vertical-agent.md)
- [OpenCLI](../entities/opencli.md)
- [CLI-Anything](../entities/cli-anything.md)
- [Code Mode](./code-mode.md)
