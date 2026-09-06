---
name: yiya-ingest
description: >-
  Ingest a URL, article, or local clip into the yiya personal knowledge base
  (LLM Wiki + OKF + Domain). Use when the user asks to 入库, ingest, 抓取后写知识,
  claim raw, or process a link/file into yiya. Also when they say "按 ingest 跑"
  or mention clix read / download then generate knowledge.
argument-hint: "[url-or-path] [domain?]"
---

# yiya-ingest

把原料变成可维护的 OKF 知识。**先读仓库根 `AGENTS.md`**（路由、raw 命名、红线），本 Skill 只写步骤。

## 默认要瘦

一文默认只产出：

1. **一条** `type: Reference`
2. **1～2 个**高信号页：若文中有**具名产品/框架/公司/人**，其中至少 **1 个必须是 Entity**；模式/方法用 Concept。禁止只写 Concept、把产品名埋在正文里。

禁止 Comparison / Synthesis / Question / Decision「集邮」。有清晰洞见再另开页。

盘点时按 **Entity → Concept → Reference** 报，避免 Entity 被 Concept 列表淹没。

## 步骤

### 1. 捕捉正文

- 若用户给了 URL：可用其指定工具（如 `clix read <url>`）拉取；失败则停住报错，**不要编造正文**。
- 若已是本地文件：直接用。

### 2. 写入 raw

1. 先放 `raw/_inbox/`（或一步到位 library，但仍须写 manifest）。
2. 目录：`raw/library/YYYY/MM/<slug>/`（**只到月**；`<slug>` 短、稳定、偏 ASCII）。
3. 正文文件名 = **原文标题**（人话）；非法路径字符去掉或改全角；配图放同级 `media/`。
4. 更新根目录 `raw-manifest.yaml`：
   - `id`、`path`、`title`、`domain`、`status: claimed`、`url`（如有）、`added`

`domain` 不确定就问用户；常见：`agents` / `engineering`；跨域实体资料可 `shared`。

### 3. 建 Reference

在目标 bundle（`domains/<id>/` 或 `shared/`）的 `references/`：

- 复制 `templates/reference.md`
- `type: Reference`
- `resource` 指向 `/raw/library/YYYY/MM/<slug>/原文标题.md`（或原文 URL）
- `domain`、`generated`、`title`、`description` 填好
- 正文写极短要点 + 入库价值（几条即可）

### 4. 编纂 1～2 个概念/实体

- 用 `templates/concept.md` 或 `templates/entity.md`
- `sources` 指向刚建的 Reference（bundle 内路径，如 `/references/....md`）
- 只写以后还会被引用的稳定知识，不要复述全文
- **互链**：同文拆出的概念彼此加 `## Related` + `/concepts/...`；与库内已有近邻概念也补上（跨域用 `../../<domain>/concepts/...`）。可写 `related:` frontmatter。不要建 backlinks 目录。

### 5. 维护索引与 log

- 更新该 bundle `log.md`（新在前，日期 `YYYY-MM-DD`）
- 仅当有新页时，更新对应子目录 `index.md` 与必要时 `overview.md`

### 6. 回报

用简短列表告诉用户：raw 路径、manifest id、新建了哪些 OKF 页。不要贴长文。

## 完成标准

- [ ] raw 正文在 `library/YYYY/MM/<slug>/` 且文件名人话标题
- [ ] `raw-manifest.yaml` 已 claimed
- [ ] 恰好 1 条 Reference（除非用户明确要求更多来源）
- [ ] Concept/Entity ≤ 2（除非用户明确要求加页）
- [ ] `log.md` 已更新
