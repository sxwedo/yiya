# shared — Log

## 2026-09-07
* **2026-09-07 ingest** | X 书签 (516–566/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (466–515/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (416–465/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (366–415/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (316–365/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (266–315/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (159–208/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (109–158/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (58–108/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (1–57/584) 成功 56 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | sxwedo GitHub 星标 148 仓 → `raw/bookmarks/github.md`；本域新建 Entity 7、挂已有 5（各一条 GitHub Reference）。
* **2026-09-07 ingest** | [Discovery Loop](https://www.discoveryloop.com/) → Entity [Discovery Loop](./entities/discovery-loop.md) + Reference [站点](./references/discovery-loop-site.md)；链 [Google DeepMind](./entities/deepmind.md)、[评测驱动开发](../domains/engineering/concepts/eval-driven-development.md)。实验室放 shared，不是新域。
* **2026-09-07 ingest** | [Hacker News](https://news.ycombinator.com/) → Entity [Hacker News](./entities/hacker-news.md) + Reference [站点](./references/hacker-news-site.md)；链 [Trendshift](../domains/agents/entities/trendshift.md)。跨域外探源放 shared，不开新闻域。
* **2026-09-07 ingest** | 链 [Obsidian](./entities/obsidian.md) 到 [Proof](../domains/agents/entities/proof.md)（本地 vault vs 人机共写文档面）。
* **2026-09-07 schema** | 书签加 `tools.md`：打开即用的检测/查询。产品站仍 `sites.md`。
* **2026-09-07 schema** | 书签拆三表：`github.md` 仓库 · `sites.md` 产品站 · `docs.md` 文档门户。文档 URL 不再进 sites.md。
* **2026-09-07 ingest** | [Grokipedia](https://grokipedia.com/) → Entity [Grokipedia](./entities/grokipedia.md) + Reference [站点](./references/grokipedia-site.md)；改 [LLM Wiki](./concepts/llm-wiki.md)，链 Self-growing KB。结构体检：公开百科放 shared，不挂 Grok Bot。
* **2026-09-07 ingest** | 链 [AGENTS.md](../domains/agents/entities/agents-md.md) 到 [LLM Wiki](./concepts/llm-wiki.md)（schema 文件名即该规范）。
* **2026-09-07 ingest** | 链 [Code Wiki](../domains/agents/entities/code-wiki.md) 到 [LLM Wiki](./concepts/llm-wiki.md)（Google 代码仓 Wiki vs 个人知识 Wiki）。
* **2026-09-07 ingest** | 链 [Zread](../domains/agents/entities/zread.md) 到 [LLM Wiki](./concepts/llm-wiki.md)（代码仓 Wiki vs 个人知识 Wiki）。
* **2026-09-07 ingest** | [Obsidian](https://obsidian.md/) → Entity [Obsidian](./entities/obsidian.md) + Reference [站点](./references/obsidian-site.md)；改 [LLM Wiki](./concepts/llm-wiki.md)、[Karpathy](./entities/karpathy.md)，链 Self-growing KB。结构体检：人读 IDE 放 shared。
* **2026-09-07 schema** | 全量整改：ingest 新建≤2、改旧页不限；问答停在作答；overview/map 拓宽；WikiSkill↔LLM Wiki。未开新域、未增 skill。
* **2026-09-07 ingest** | schema：官方文档入口——docs 根当书签挂产品 Entity；单篇指南当成文先续写；整棵文档树只收入口。写入根 AGENTS + yiya-ingest。
* **2026-09-07 ingest** | [Google DeepMind](https://deepmind.google/) → Entity [Google DeepMind](./entities/deepmind.md) + Reference [站点](./references/deepmind-site.md)。结构体检：实验室放 shared，不是新域。
* **2026-09-07 ingest** | schema：LLM Wiki 集成优先 + 问答纪律；契约对齐（README / map / 相对路径 sources）；类型 index 补一句话。未开新域、未增 skill。

## 2026-09-04
* **Initialization**: Slim shared bundle.
* **Ingest**: [LLM Wiki](./references/karpathy-llm-wiki.md) → Entity [Karpathy](./entities/karpathy.md) + Concept [LLM Wiki](./concepts/llm-wiki.md) (2026-09-06).
* **Ingest**: [Self-growing KB](./concepts/self-growing-kb.md) ← 金尘马 raw（直链，无 Reference）(2026-09-06).
