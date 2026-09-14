---
type: Entity
title: "yiya"
description: "本库：raw 不可改，domains/shared 一次编译成 wiki，AGENTS/skills 管流程。LLM Wiki 的落地，不是每次 RAG 重挖。"
status: draft
domain: shared
generated: { by: agent:yiya-librarian, at: 2026-09-14T13:35:00Z }
related:
  - karpathy
  - obsidian
  - llm-wiki
  - open-knowledge-format
  - llmwiki
  - self-growing-kb
sources:
  - ../references/sxwedo-yiya-github.md
---

# Summary

**yiya** 是 [sxwedo/yiya](https://github.com/sxwedo/yiya) 这一座个人知识库，不是云笔记、也不是检索时现场拼碎片的 RAG 盘。方法来自 [Karpathy](./karpathy.md) 的 [LLM Wiki](../concepts/llm-wiki.md)；页格式跟 [Open Knowledge Format](./open-knowledge-format.md) 同源（YAML `type`、相对链接、`index.md` / `log.md`）；人读面用 git 上的 Markdown，可 [Obsidian](./obsidian.md) 或 `./web.sh` 打开。

三层只做一件事——**知识一次编译，交叉引用复利**：

1. **raw**：成文进 `raw/articles/`，书签进 `github.md` / `sites.md` / `docs.md` / `tools.md`。正文不改。
2. **wiki**：`domains/<id>/`（agents / engineering / design）与 `shared/` 里的 Entity / Concept；Reference 极少，只给需要评注的专著。
3. **schema**：根 `AGENTS.md` 加 `.agents/skills/`（ingest / rewrite / lint / dream / explore / …）。

## 怎么做

查询：`shared/map.md` → 域 `overview.md` + 类型 `index.md` → 已有页。用编译结果作答；**默认停，不改 wiki**。要落盘须说「回写」，走 ingest 回写分支。

入库：先定 Domain，再在本域和 `shared` 找同指称。能改旧页就改（补 `sources`、修机制、加对照）。新建 Entity/Concept/Reference 合计日常 ≤2。成文必须挂到主旨就是该对象的页；清单/屠榜顺带点名不进 `sources`。书签直接记在产品 Entity 上，**不建空心 Reference**。

元数据分工：`sources:` 只溯源 raw 或深度 Reference；`## Related` 只链 Entity / Concept / Overview。路径一律相对，禁仓库根 `/`。

维护：页太薄 → `yiya-rewrite` 按已有 `sources` 精读，不抓新 URL；结构问题 → `yiya-lint` 先报告；点名删除 raw → `yiya-delete-raw`。梦境/探索只出候选，用户说「入」才 ingest。

## 何时不用

- 当聊天记录或云同步盘：不分类、不续写旧页，就还是仓库。
- 当每次提问的向量检索层：本库要的是已编译页，不是当场重挖 raw。
- 给纯书签 Entity 注水、为 URL 建跳转卡、把 Related 抄成 raw 清单。
- 把敏感内容写进 git：进 `private/`。
- 把 yiya 当成编码 Agent 的 [Harness 运行时](../../domains/agents/concepts/harness-runtime-layer.md)：Harness 管一步在什么约束下发生；yiya 是 Agent **读完再说话** 的知识编译结果。

开源对照 [llmwiki](./llmwiki.md) 是 Karpathy 流程的另一份实现，不是本库。普通人「人留原料、AI 接旧主题」见 [Self-growing Knowledge Base](../concepts/self-growing-kb.md)。公开百科对照 [Grokipedia](./grokipedia.md)；代码仓 Wiki 对照 [Zread](../../domains/agents/entities/zread.md) / [Code Wiki](../../domains/agents/entities/code-wiki.md)。

## Related

- [LLM Wiki](../concepts/llm-wiki.md)
- [Open Knowledge Format](./open-knowledge-format.md)
- [Andrej Karpathy](./karpathy.md)
- [Obsidian](./obsidian.md)
- [llmwiki](./llmwiki.md)
- [Self-growing Knowledge Base](../concepts/self-growing-kb.md)
- [AGENTS.md](../../domains/agents/entities/agents-md.md)
- [Harness 运行时层](../../domains/agents/concepts/harness-runtime-layer.md)
