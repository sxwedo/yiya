# yiya

个人知识库：**LLM Wiki 流程 + OKF 文件契约 + Domain 分域**。

三层：`raw/` 原料 → `domains/` + `shared/` 知识 → `AGENTS.md` + skills 约定。细则见根 `AGENTS.md`。

| 路径 | 作用 |
|---|---|
| `raw/articles/<作者>/<标题>.md` | 成文（frontmatter 须有 `url:`） |
| `raw/articles/_media/<slug>/` | 配图（不进作者目录） |
| `raw/bookmarks/github.md` · `sites.md` | 书签表 |
| `raw/_inbox/` | 未分域 |
| `domains/<id>/` | 领域 OKF bundle（entities / concepts / references） |
| `shared/` | 跨域实体与纲领 |
| `AGENTS.md` | Agent 常驻规则与问答协议（无独立 query skill） |
| `.agents/skills/` | ingest / lint / new-domain / promote-to-shared |
| `templates/` | Entity / Concept / Reference |
| `config/domains.yaml` | 域路由 |
| `config/types.yaml` | OKF 常用 type |

起步域：`agents`、`engineering`。先养一个域即可。

对 Agent：`按 .agents/skills/yiya-ingest 处理 <URL>`。提问先读 `shared/map.md` 与域 overview。
