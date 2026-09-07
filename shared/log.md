# shared — Log

## 2026-09-07
* **2026-09-07 schema** | 书签拆三表：`github.md` 仓库 · `sites.md` 产品站 · `docs.md` 文档门户。文档 URL 不再进 sites.md。
* **2026-09-07 ingest** | [Grokipedia](https://grokipedia.com/) → Entity [Grokipedia](./entities/grokipedia.md) + Reference [站点](./references/grokipedia-site.md)（书签，未灌百科）；改 [LLM Wiki](./concepts/llm-wiki.md)，链 Self-growing KB。结构体检：公开百科放 shared，不挂 Grok Bot。
* **2026-09-07 ingest** | 链 [AGENTS.md](../domains/agents/entities/agents-md.md) 到 [LLM Wiki](./concepts/llm-wiki.md)（schema 文件名即该规范）。
* **2026-09-07 ingest** | 链 [Code Wiki](../domains/agents/entities/code-wiki.md) 到 [LLM Wiki](./concepts/llm-wiki.md)（Google 代码仓 Wiki vs 个人知识 Wiki）。
* **2026-09-07 ingest** | 链 [Zread](../domains/agents/entities/zread.md) 到 [LLM Wiki](./concepts/llm-wiki.md)（代码仓 Wiki vs 个人知识 Wiki）。
* **2026-09-07 ingest** | [Obsidian](https://obsidian.md/) → Entity [Obsidian](./entities/obsidian.md) + Reference [站点](./references/obsidian-site.md)（书签，未灌站）；改 [LLM Wiki](./concepts/llm-wiki.md)、[Karpathy](./entities/karpathy.md)，链 Self-growing KB。结构体检：人读 IDE 放 shared。
* **2026-09-07 schema** | 全量整改：ingest 新建≤2、改旧页不限；问答停在作答；overview/map 拓宽；WikiSkill↔LLM Wiki。未开新域、未增 skill。
* **2026-09-07 ingest** | schema：官方文档入口——docs 根当书签挂产品 Entity；单篇指南当成文先续写；整棵文档树只收入口。写入根 AGENTS + yiya-ingest。
* **2026-09-07 ingest** | [Google DeepMind](https://deepmind.google/) → Entity [Google DeepMind](./entities/deepmind.md) + Reference [站点](./references/deepmind-site.md)（书签，未灌站）。结构体检：实验室放 shared，不是新域。
* **2026-09-07 ingest** | schema：LLM Wiki 集成优先 + 问答纪律；契约对齐（README / map / 相对路径 sources）；类型 index 补一句话。未开新域、未增 skill。

## 2026-09-04
* **Initialization**: Slim shared bundle.
* **Ingest**: [LLM Wiki](./references/karpathy-llm-wiki.md) → Entity [Karpathy](./entities/karpathy.md) + Concept [LLM Wiki](./concepts/llm-wiki.md) (2026-09-06).
* **Ingest**: [Self-growing KB](./concepts/self-growing-kb.md) ← 金尘马 raw（直链，无 Reference）(2026-09-06). 结构体检：无新 Domain/约定改动。
