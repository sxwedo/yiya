# yiya — Agent 手册（精简版）

三件事：
1. **LLM Wiki**：raw → 编纂 → 更新 log
2. **OKF v0.2**：概念 = Markdown + YAML；**必有 `type`**；路径即 id；保留名 `index.md` / `log.md`
3. **Domain**：写入 `domains/<id>/` 或 `shared/`，不要一锅炖

可调用流程在 [`.agents/skills/`](.agents/skills/)（ingest / lint / new-domain / promote-to-shared）。

---

## 路由

| 内容 | 写入 |
|---|---|
| 未分域剪藏 | `raw/_inbox/` |
| 跨域实体（人/公司/通用工具） | `shared/` |
| Agent / Grok Bot / harness | `domains/agents/` |
| 工程与可维护性 | `domains/engineering/` |
| 敏感 | `private/`（不进 git） |

域表：`config/domains.yaml`。新域用 skill `yiya-new-domain`。

---

## raw

- 书签：`raw/bookmarks/github.md` / `sites.md`（Markdown 表格追加行：项目、URL、作者、简介；不建 per-project stub）
- 成文：`raw/articles/<作者>/<人话标题>.md`（按作者分目录；无作者 `_unknown/`；无 YYYY/MM、无 slug 目录）
- 配图：`raw/articles/_media/<slug>/`（保持顶层，不进作者目录）；正文内相对链接 `../_media/<slug>/...`
- 认领：成文型改 `raw-manifest.yaml`（`domain` + `path`）；书签**不** per-link claim
- 禁止按域复制原件

---

## OKF 最小字段

```yaml
---
type: Concept          # Reference | Entity | Concept | Overview（先够用）
title: ""
description: ""
status: draft          # draft | stable | deprecated
domain: agents
generated: { by: agent:ori, at: 2026-09-04T00:00:00Z }
sources: []
---
```

同目录互链优先 `./foo.md`（GitHub 可点）；跨目录用相对路径如 `../entities/bar.md`。**不要**用以 `/` 开头的路径（GitHub 会当仓库根 → 404）。

---



## 两种入库入口

### 成文型（文章 / 长帖）
- `clix read` 或等价抓正文 → `raw/articles/<作者>/<人话标题>.md` + manifest claim
- 配图放入 `raw/articles/_media/<slug>/`，正文链接写成 `../_media/<slug>/...`
- **1 Reference**（可指 raw）+ **1～2** Concept/Entity（具名产品必须有 Entity）
- Reference → raw：**必须**可点。`resource:` 用相对路径（如 `../../../raw/articles/<作者>/<标题>.md`，**禁止**开头 `/`）；Notes 首条加 `[打开 raw](相对路径)`

### 书签型（网站 / GitHub 项目 / 工具主页）
- **不**默认灌整站进 raw；**不要** `clix read` 全站
- **追加**到 `raw/bookmarks/github.md` 或 `sites.md` 的**表格行**（列：项目/站点、URL、作者、简介；**不**建 per-project stub 目录）
- 书签**不**需要 per-link `raw-manifest.yaml` claim
- 建/更新 **Entity** + **1 条 Reference**：`resource:` 指向 `../../../raw/bookmarks/github.md` 或 `sites.md`（相对路径，禁开头 `/`）；Notes 加 `[打开 raw](...)`；正文写「为什么收藏、何时用」；`tags` 含 `bookmark`（GitHub 再加 `github`）
- 以后读到站内某篇，再按成文型单独 ingest
- 已有 Entity 时只补/更新 Reference 与书签条目，勿重复建实体

## Entity vs Concept

- **Entity**：具名、可指认的对象——产品、框架、公司、人、工具（例：Pi、oh-my-pi、Grok Bot）。
- **Concept**：可复用的模式、方法、术语（例：Delivery Harness、Evidence Gate）。
- 一文同时出现「产品 + 模式」时：产品建/链 **Entity**，模式建 **Concept**，二者 `Related` 互链。
- 盘点/问答列出知识时固定顺序：**Domain → Entity → Concept → Reference**（Entity 不可淹没在 Concept 长列表里）。
- 口语里的「派 / 阵营」对应 **Entity（及与之 Related 的 Concept）**，不要为此新开 Domain。

## 概念互链（双链）

- 相关 Concept/Entity **必须**在正文加 `## Related`，用**相对路径**互链：同目录 `./evidence-gate.md`；同 bundle 跨子目录 `../entities/pi.md`；跨域 `../../engineering/concepts/semantic-layer.md`。
- 可同步 frontmatter `related: [slug, ...]`（同域 slug）。
- **禁止** `[x](/concepts/...)` 这种仓库根绝对路径（GitHub 网页 404；Obsidian 也可用相对路径）。
- **不**单独建 backlinks 目录；反链交给 Obsidian / 图谱工具从出站链计算。
- 同一 Reference 拆出的概念彼此互链；主题相近的族（记忆 / harness / 语义层等）至少连成小团。

## Ingest 默认要瘦

入库请走 **`.agents/skills/yiya-ingest`**。默认：1 Reference + 1～2 Concept/Entity。禁止类型集邮。

常驻目录：`references/` `entities/` `concepts/`。其它类型目录按需再建。

---

## 红线

- 未认领 raw 不写正式概念
- 不删 raw 原件（除非人类明确授权）
- 不平行发明第二套元数据（用 OKF 的 `sources` / `generated` / `verified` / `status`）
