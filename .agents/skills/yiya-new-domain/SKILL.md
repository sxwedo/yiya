---
name: yiya-new-domain
description: >-
  Create a new lean yiya domain OKF bundle and register it in config/domains.yaml.
  Use when the user asks to 新域, add domain, new domain, or open a topic area
  in the knowledge base.
argument-hint: "<domain-id> [title]"
---

# yiya-new-domain

新建瘦身域：只预置 `references/` `entities/` `concepts/`。

## 步骤

1. 确定 `id`（短、小写、kebab 或单段英文，如 `reading`）与中文 `title`。
2. 若 `domains/<id>/` 已存在 → 停止并说明。
3. 在 `config/domains.yaml` 追加：
   ```yaml
   - id: <id>
     title: <title>
     path: domains/<id>
     active: true   # 或不确定时先 false
   ```
4. 创建目录与文件（照抄 `domains/agents` 的瘦结构）：
   - `domains/<id>/index.md`（含 `okf_version: "0.2"`）
   - `log.md` `overview.md` `README.md` `AGENTS.md`
   - `references/index.md` `entities/index.md` `concepts/index.md`
5. 更新 `shared/map.md` 表格加一行。
6. 根 `AGENTS.md` 路由表补一行（若有显式表格）。

## 完成标准

- [ ] `config/domains.yaml` 已登记
- [ ] 瘦 bundle 可打开，`overview` 写了「收什么/不收什么」占位或实写
- [ ] `shared/map.md` 已链到新域

**不要**预创建 comparisons / syntheses / questions / decisions / scripts。
