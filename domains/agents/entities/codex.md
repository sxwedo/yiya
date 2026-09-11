---
type: Entity
title: "Codex"
description: "OpenAI 终端轻量编码代理"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T21:30:00Z }
related:
  - openai-codex-github
  - openai-openai-cookbook-github
  - openai-codex-plugin-cc-github
  - claude
  - pi
  - grok-build
  - opencode
  - harness-runtime-layer
sources:
  - ../references/openai-codex-github.md
  - ../references/openai-openai-cookbook-github.md
  - ../references/openai-codex-plugin-cc-github.md
  - ../../../raw/articles/OpenAI/Codex now works directly in Chrome on macOS and Windows.md
  - ../../../raw/articles/腾讯技术工程/从一次 LLM 调用到完整 Harness，Agent 到底经历了什么？.md
---

# Summary

**Codex** 的上游仓库是 [openai/codex](https://github.com/openai/codex)。OpenAI 终端轻量编码代理。同仓相关书签：[openai/openai-cookbook](../references/openai-openai-cookbook-github.md)、[openai/codex-plugin-cc](../references/openai-codex-plugin-cc-github.md)。

腾讯技术工程拆其运行时：Approval 与 Sandbox 两道边界（点允许 ≠ 拿到整机）；Thread / Turn / Item 加 Thread Manager，长任务可监督、中断、恢复，子 Agent 是独立子 Thread 而非挤进同一上下文。对照见 [Harness 运行时层](../concepts/harness-runtime-layer.md)。

## Related

- [openai/codex（GitHub）](../references/openai-codex-github.md)
- [openai/openai-cookbook（GitHub）](../references/openai-openai-cookbook-github.md)
- [openai/codex-plugin-cc（GitHub）](../references/openai-codex-plugin-cc-github.md)
- [Claude](./claude.md)
- [Pi](./pi.md)
- [Grok Build](./grok-build.md)
- [OpenCode](./opencode.md)
- [Harness 运行时层](../concepts/harness-runtime-layer.md)
