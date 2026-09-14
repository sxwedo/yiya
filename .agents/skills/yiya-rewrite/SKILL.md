---
name: yiya-rewrite
description: >-
  Deep-read existing yiya sources and rewrite Entity/Concept pages into
  mechanisms and boundaries, not one-line summaries. Use when the user says
  精读, 重写, 按簇写, 不要只写摘要, or asks to deepen wiki pages from raw.
  Does not ingest new URLs. Not lint (that only reports).
argument-hint: "[cluster or page paths]"
---

# yiya-rewrite

把**已有** wiki 页按原料精读重写成可脱离 raw 复述的机制页。先读根 `AGENTS.md`。不抓新 URL（那是 `yiya-ingest`）；不扫结构（那是 `yiya-lint`）。

## 何时用

用户要「精读原文再写」「实体/概念太薄」「按簇重写」。日常入库仍走 ingest 深度条；本 skill 管**整簇旧页**。

## 不要做

- 不给纯书签 Entity 注水（只有 github/sites 行、没有专文 → 保持短卡）
- 不把清单/顺带文写进 `sources`（主旨判定同 ingest）
- 不在 `## Related` 堆 `raw/`
- 不假装读过未灌库的全书
- 一次不灌全库：按簇写，用户没说「都完成再停」则每簇停一下

## 步骤

### 1. 定范围

用户点名页或簇（如「记忆相关概念」「专文薄 Entity」）。未点名则先列出候选：有成文 `sources`、正文明显短、且主旨匹配的页。书签卡剔除。

### 2. 精读

打开该页全部 `sources`（raw 或 Reference 的 `resource`）。读机制、数字、边界、对照，不读目录当已读。

### 3. 重写

保留 YAML `type` / `title` / `domain` / `sources`（可剥弱挂）。正文写：它是什么、怎么做、何时不用、和谁对照。深度对照 `domains/agents/concepts/harness-runtime-layer.md`。Related 只链 wiki。

### 4. 索引与 log

改了 `description` 则更新类型 `index.md`。`log.md` 前缀：`* **YYYY-MM-DD rewrite** | …`

### 5. 停

列出改了哪些页、故意没动哪些（书签/未灌全书）。用户说继续再下一簇。

## 完成标准

- [ ] 范围内每页都打开了对应 raw/Reference，不是凭记忆扩写
- [ ] 专文对象有机制与边界；书签卡未注水
- [ ] Related 无 `raw/`；弱挂已从 `sources` 拿掉
- [ ] `index.md` / `log.md` 已更新
