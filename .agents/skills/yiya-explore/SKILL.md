---
name: yiya-explore
description: >-
  Scan subscribed hot sources (HN, Trendshift) for agents/engineering
  candidates not seeded from the current wiki graph. Use when the user says
  探索, explore, 跑探索, or asks for a detached source sweep. Does not ingest.
  Not dream (that grows from existing pages).
argument-hint: "[agents|engineering]"
---

# yiya-explore

按订阅主题扫热源。先读根 `AGENTS.md`。本 skill 只出候选短表，不写正式知识。

发现不从 Entity/Concept 缺口出发。梦境不走这里。

旧称「外探 / scout」即本流程。

## 步骤

### 1. 拉源

在仓库根执行：

```bash
python3 .agents/skills/yiya-explore/fetch.py --md
python3 .agents/skills/yiya-dream/scan.py --known-urls
```

阈值在 `config/explore.yaml`。再用网页检索补 Trendshift（GitHub 动量榜）；脚本拉不到就记缺口，不整站爬。

用户点了域则只留该主题。默认 `agents` 与 `engineering`。

完成：有 HN 表（或记失败）；已知 URL 已收成集合。

### 2. 过滤成行

默认挂点 **未绑图**。只有标题/产品名和某 Entity **字面同指** 才填建议挂点（相对路径，含空格/`()` 时用 `<>`）。不把 Related 稀、sources 旧当查询。

一行一条：标题 · URL · 成文/书签 · 建议挂点或未绑图 · 为何相关（一句） · explore。

丢掉：库内已有同 `url:`；纯营销；与现有页重复且无新洞见；一次性八卦；想整站抓的；首页已被书签的同一产品。

全文最多 `max_candidates` 条。宁缺。GitHub 仓热度条目多为书签；长文/论文为成文。

完成：每条 URL 不在已知集合里；挂点不是从图上长出来的。

### 3. 落盘

写入 `raw/_inbox/research/explore/<YYYY-MM-DD>.md`（同日已有则加 `-2`）。本文件不进 Concept，不改 `domains/` / `shared/`，不跑 ingest。

完成：候选文件已写，含短表 + 本轮源。

### 4. 停

列出路径，请用户「入」或「丢」。入 → `yiya-ingest`；丢 → 把该文件挪到 `raw/_inbox/research/explore/archive/`。

## 完成标准

- [ ] 已跑 `fetch.py`（失败则在候选里注明）
- [ ] 已查重 `url:`；默认未绑图
- [ ] 只写了 `raw/_inbox/research/explore/<日期>.md`
- [ ] 未写 wiki、未写 `raw/articles`、未改书签表
