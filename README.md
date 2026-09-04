# yiya

个人知识库（精简）：**LLM Wiki 流程 + OKF 文件契约 + Domain 分域**。

| 路径 | 作用 |
|---|---|
| `raw/` | 原件（按月 `YYYY/MM/<slug>/`，正文用人话标题） |
| `raw-manifest.yaml` | 认领表 |
| `domains/<id>/` | 领域 OKF bundle |
| `shared/` | 跨域实体 |
| `AGENTS.md` | 常驻规则 |
| `.agents/skills/` | 可调用流程（ingest / lint / …） |
| `templates/` | Reference / Entity / Concept |

起步域：`agents`、`engineering`。先养一个域即可。

对 Agent：`按 .agents/skills/yiya-ingest 处理 <URL>`。
