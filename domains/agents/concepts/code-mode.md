---
type: Concept
title: "Code Mode"
description: "别把 MCP 工具直接喂给模型。把 schema 转成 TypeScript API，让模型写代码在沙箱里调；中间结果不进神经网络。"
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

沙箱他们用 **V8 isolate**，不是容器：毫秒级起来、几 MB，每段代码新建再扔掉。Workers 的 `env` 是 live object binding，不是「先有网再带 API key」。Code Mode 里 `fetch()` / `connect()` 直接抛错；MCP 以 binding 进来，token 留在 supervisor，模型代码漏不了钥匙。配套是 Worker Loader API：agent 所在处按需加载 isolate（本地 Wrangler 已能玩，生产曾是 closed beta）。

[Software Factory Cost Equation](./software-factory-cost.md) 后来把同一杠杆写成压 Requests/Turn：MCP 直喂会膨胀上下文，改 Code-Mode 或精简 CLI。那页讲规模化成本，本页讲调用形态为什么该换。CLI 替代 MCP 是另一条路，见 [MCP](../entities/mcp.md) 上的去 MCP 化成文，不要和 Code Mode 焊死。

## Boundaries

不是 MCP 协议本身，不是 [Cloudflare](../../engineering/entities/cloudflare.md) 账单/Worker 入门。不是「用 CLI 换掉 MCP」。Worker Loader / isolate 是他们的沙箱实现，模式不绑死必须跑在 Workers 上。生产 beta 条款以原文为准。

## Related

- [Model Context Protocol (MCP)](../entities/mcp.md)
- [Software Factory Cost Equation](./software-factory-cost.md)
- [Cloudflare](../../engineering/entities/cloudflare.md)
- [GitMCP](../entities/gitmcp.md)
