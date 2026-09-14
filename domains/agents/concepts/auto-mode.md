---
type: Concept
title: "Auto Mode"
description: "分类器替人批工具调用：安全的自动放行，破坏性/外泄/越权拦截或回退人工。比逐条 Approve 少打断，比跳过全部权限更有边界；文件系统与网络隔离要一起上。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - coding-agent-workflow
  - delivery-harness
  - evidence-gate
  - harness-runtime-layer
  - claude
sources:
  - ../../../raw/articles/Claude/Auto mode for Claude Code.md
  - ../../../raw/articles/Claude/Auto mode is now the default in Claude Code for Pro, Max, and Team plans.md
  - ../../../raw/articles/Claude/Running auto mode in production.md
  - ../../../raw/articles/Claude/Beyond permission prompts: making Claude Code more secure and autonomous.md
---

# Definition

**Auto Mode**（Claude Code）用分类器审每一轮工具调用，走在「每条 bash 都点 Approve」和 `--dangerously-skip-permissions` 中间。默认权限过保守，长任务走不起来；整段跳过权限会把破坏性操作一并放行，且不该在非隔离环境用。

分类器在调用前看：批量删文件、敏感数据外泄、恶意执行一类。它认为安全的自动跑；风险的拦截，让 Claude 改道。Claude 若坚持被拦的动作，最终仍会弹权限提示给人。分类器**减风险，不消风险**：意图含糊、环境上下文不够时仍可能放行危险动作，也可能误拦无害动作。对 token / 成本 / 延迟有小影响。内部评测称分类器拦住的危险动作比人手点 Approve 更多；全站用量上，两次打断之间的工作时长约 9 倍。

**权限规则先于分类器。** Nuro 在 settings 里直接 deny 递归删除；过宽的 `Bash(python:*)` 在 Auto Mode 下会被搁置。分类器是在这些护栏里做判断，不是替代护栏。

生产（Nuro / Gusto / Garner）：当日常默认，但对「代表我对外发信」、PR 代发、Terraform / AWS / 对活 API 的 POST 切回人工。Nuro 用它跑隔夜 hill-climb 评测（10pm–5am 出 3 个 PR），前提是任务有可测信号。Gusto 约 10% 会话转录含一次 deny；MCP 走带 tool guard 的代理，分类器之前权限已经收窄。Garner 把 SDLC 做成 skill 插件（探索 → 提交上下文 → 对抗性自检 → 实现），研究阶段以前没有 Auto Mode 跑不起来；对外通信同样不让自动批。企业侧：无遥测、每人自建工作流 = 危险。

更早一层是沙箱，不是分类器。文件系统隔离 + 网络隔离必须一起上：缺网络可外泄 SSH key；缺文件可逃出再上网。`claude --sandbox` 用 bubblewrap / seatbelt 罩住 bash 及子进程；出沙箱立刻提示。Web 版会话在云隔离里跑，git 凭据不进沙箱，由外侧代理贴 token。

与 [Evidence Gate](./evidence-gate.md) 不同：门禁管**交付跃迁要证据**；本页管**执行前的动作边界**。与 [Advisor](./advisor.md) / [TTSR](./ttsr.md) 也不同：那两页管智力和文本偏离；本页管工具批不批。

## Related

- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Delivery Harness](./delivery-harness.md)
- [Evidence Gate](./evidence-gate.md)
- [Harness 运行时层](./harness-runtime-layer.md)
- [Claude](../entities/claude.md)
