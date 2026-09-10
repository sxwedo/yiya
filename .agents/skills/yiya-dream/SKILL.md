---
name: yiya-dream
description: >-
  Grow the yiya wiki outward from existing Entity/Concept gaps: scan thin
  pages, web-search complementary sources, write a candidate table. Use when
  the user says 梦境, dream, 跑梦境, 周更梦境, or asks to grow the graph from
  current pages. Does not ingest. Not explore (that starts from hot sources).
argument-hint: "[agents|engineering|shared]"
---

# yiya-dream

从现有图向外长。先读根 `AGENTS.md`。本 skill 只出候选短表，不写正式知识。

探索（explore）不走这里。

## 步骤

### 1. 扫描缺口

在仓库根执行：

```bash
python3 .agents/skills/yiya-dream/scan.py --md --limit 24
python3 .agents/skills/yiya-dream/scan.py --known-urls
```

阈值在 `config/dream.yaml`。用户点了域则加 `--domain`。

完成：stdout 有缺口表；已知 URL 已收成集合。

### 2. 选种子

从扫描结果里最多取 `max_gaps`（默认 8）页：

1. 先 Concept，再 agents 域 Entity
2. 跳过集邮列表、教程合集仓、激活/账号工具（无稳定知识）
3. 每页读 title / description / 现有 `sources` 一句，当作外搜约束

完成：种子列表每条都有 wiki 路径。

### 3. 外搜

每条种子 1–3 个查询（标题 + 描述里的稳定对象）。要能补上该页的成文或官方深链，不要再收已经书签过的首页。

完成：每条种子至少搜过一次，或记「无新源」。

### 4. 过滤成行

一行一条。字段：标题 · URL · 成文/书签 · 建议挂点 · 为何相关（一句） · dream。

挂点必须是本轮种子页（相对路径，含空格/`()` 时用 `<>`）。梦境不标「未绑图」。

丢掉：库内已有同 `url:`；纯营销；与现有页重复且无新洞见；一次性八卦；想整站抓的；该种子已经有的同一篇。

每页最多 `max_per_gap` 条；全文最多 `max_candidates` 条。宁缺。

完成：每条候选都能指回一种子页，且 URL 不在已知集合里。

### 5. 落盘

写入 `raw/_inbox/research/dream/<YYYY-MM-DD>.md`（同日已有则加 `-2`）。本文件不进 Concept，不改 `domains/` / `shared/`，不跑 ingest。

完成：候选文件已写，含短表 + 本轮种子。

### 6. 停

列出路径，请用户「入」或「丢」。入 → `yiya-ingest`；丢 → 把该文件挪到 `raw/_inbox/research/dream/archive/`。

## 完成标准

- [ ] 已跑 `scan.py`（有 `--domain` 则带上）
- [ ] 种子 ≤ `max_gaps`，且都是现有 Entity/Concept
- [ ] 候选已查重 `url:`，挂点都是种子页
- [ ] 只写了 `raw/_inbox/research/dream/<日期>.md`
- [ ] 未写 wiki、未写 `raw/articles`、未改书签表
