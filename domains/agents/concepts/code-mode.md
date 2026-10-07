---
type: Concept
title: "Code Mode"
description: "别把 MCP 工具直接喂给模型。客户端写 TS 调 typed SDK；服务端只暴露 search/execute，整份 API 压到约 1000 token。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-08T00:00:00Z }
related:
  - mcp
  - software-factory-cost
  - cloudflare
  - gitmcp
sources:
  - ../../../raw/articles/Cloudflare/Code Mode: the better way to use MCP.md
  - ../../../raw/articles/Cloudflare/Code Mode: give agents an entire API in 1,000 tokens.md
---

# Definition

**Code Mode**（Cloudflare，Kenton Varda / Sunil Pai）：多数 agent 把 MCP **tools 直接暴露给 LLM**。他们改成：把 MCP 工具转成 TypeScript API，再让模型**写代码去调**。结果是能扛更多、更复杂的工具；多步调用不必把每一步输出再灌进模型，只读回真正需要的终结果。一句话：LLM 写代码调 MCP，比直接 tool-call 更像样。

直接 tool-call 靠训练里很少见的特殊 token，夹一段 JSON。模型见过的真实 TS 远多于这种合成调用。Shakespeare 上完一个月中文课再写戏——不是他最好的活。所以 MCP server 才被鼓励把 API 削薄。写成代码就不必削那么狠。

MCP 仍然有用，但用的是另一面：统一的连通、授权、文档，client 和 server 不必互相认识。不必让模型自己上网搜文档。沙箱里只给这些接口，不给整网。

做法（Cloudflare Agents SDK 的 `codemode` helper）：

1. 拉 MCP schema，生成带 doc comment 的 TS 定义，放进上下文（目前整份 API；以后可以像编码助手那样浏览）。
2. 模型面前只剩一个工具：执行一段 TypeScript。
3. 代码跑在隔离沙箱里，出网只有这些 TS API；API 经 RPC 回到 agent loop，再派到对应 MCP。
4. 脚本用 `console.log()` 把结果交回。

沙箱他们用 **V8 isolate**，不是容器：毫秒级起来、几 MB，每段代码新建再扔掉。Workers 的 `env` 是 live object binding，不是「先有网再带 API key」。Code Mode 里 `fetch()` / `connect()` 直接抛错；MCP 以 binding 进来，token 留在 supervisor，模型代码漏不了钥匙。配套是 Worker Loader API：agent 所在处按需加载 isolate。

**服务端 Code Mode**（Matt Carey，2026-02）：上一篇要 agent 自带沙箱。这一篇把沙箱收到 MCP server 里，agent 不用改。Cloudflare API 2500+ 端点若逐个当 tool 约 117 万 token；改成两个工具 `search()` / `execute()`，上下文约 1000 token，他们测少 99.9%。新增产品走同一对工具，不必再开一只 MCP server。入口 `https://mcp.cloudflare.com/mcp`，OAuth 2.1 按用户勾的权限降权。

- `search`：模型写 JS 查已经把 `$ref` 展开的 OpenAPI `spec`，按产品/路径/tag 过滤。整份 spec 不进模型窗口。
- `execute`：模型写 JS，用沙箱里的 `cloudflare.request()` 调 API，分页、校验、串联都在一次执行里做完。

对照另外三条减上下文的路：CLI（要 shell，攻击面更大）；动态搜工具（命中的 tool 定义仍占 token）；客户端 Code Mode（Goose / Claude Programmatic Tool Calling 同类，但要沙箱）。服务端这套：token 与 API 规模脱钩，agent 侧零改动。

[Software Factory Cost Equation](./software-factory-cost.md) 把同一杠杆写成压 Requests/Turn。那页讲规模化成本，本页讲调用形态。CLI 换 MCP 是另一条路，见 [MCP](../entities/mcp.md) 上的去 MCP 化成文，不要焊死。

## Boundaries

不是 MCP 协议本身，不是 [Cloudflare](../../engineering/entities/cloudflare.md) 账单/Worker 入门。不是「用 CLI 换掉 MCP」。Worker Loader / isolate 是他们的沙箱实现，模式不绑死必须跑在 Workers 上。生产 beta 条款以原文为准。

## Related

- [Model Context Protocol (MCP)](../entities/mcp.md)
- [Software Factory Cost Equation](./software-factory-cost.md)
- [Cloudflare](../../engineering/entities/cloudflare.md)
- [GitMCP](../entities/gitmcp.md)
