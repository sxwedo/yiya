---
type: Overview
title: yiya domain map
description: 域入口与查询地图：先读本页，再进目标域 overview 与类型 index。
status: draft
domain: shared
generated: { by: agent:yiya-librarian, at: 2026-09-07T18:00:00Z }
sources: []
---

查询先读本页 → 目标域 `overview.md` + 类型 `index.md`。域根 `index.md` 只是文件夹封面。

| id | bundle |
|---|---|
| agents | [domains/agents](../domains/agents/) |
| engineering | [domains/engineering](../domains/engineering/) |

## 怎么找「派 / 产品」

口语中的阵营/产品 → 看各域 `entities/`（及 `shared/entities/`），不是新开 Domain。具名产品表见该域 `overview.md`。

跨域实体：

- [Andrej Karpathy](./entities/karpathy.md)
- [Google DeepMind](./entities/deepmind.md)
- [Grokipedia](./entities/grokipedia.md)
- [Obsidian](./entities/obsidian.md)

## 跨域纲领

- [LLM Wiki](./concepts/llm-wiki.md)（[Karpathy](./entities/karpathy.md)）
- [Self-growing Knowledge Base](./concepts/self-growing-kb.md)

## 簇入口

- **知识库三层**：[LLM Wiki](./concepts/llm-wiki.md) · [WikiSkill](../domains/agents/concepts/wikiskill-architecture.md) · 人读 IDE [Obsidian](./entities/obsidian.md) · 公开对照 [Grokipedia](./entities/grokipedia.md)
- **Harness**：[domains/agents/overview.md](../domains/agents/overview.md)（Pi / oh-my-pi / Grok Bot）
- **记忆**：[四层 Agent 记忆](../domains/agents/concepts/four-layer-agent-memory.md)
- **语义层**：[语义层](../domains/engineering/concepts/semantic-layer.md)
- **检索 / 排序**：[复合检索 Agent](../domains/agents/concepts/compound-retrieval-agent.md) · [LLM 排序语义表征](../domains/engineering/concepts/llm-semantic-ranking-embedding.md)
