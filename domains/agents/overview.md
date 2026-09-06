---
type: Overview
title: "Agent 与 Grok Bot"
description: "Agent 与 Grok Bot 鸟瞰：收 Agent / harness / 编码代理工具与相关模式；具名产品见 entities。"
status: draft
domain: agents
generated: { by: agent:ori, at: 2026-09-04T11:20:00Z }
sources: []
---

# Scope

**收**：Agent 运行时与 harness、记忆/评测/检索模式、具名编码代理产品（如 Pi、oh-my-pi）、多智能体协作与治理。

**不收**：纯数仓口径/Ontology 建设细节（见 `engineering`）；跨域权威实体升格后放 `shared/entities`。

## 本域实体

| Entity | 一句话 |
|--------|--------|
| [Pi](./entities/pi.md) | earendil-works 极简终端编码代理框架（pi.dev） |
| [oh-my-pi](./entities/oh-my-pi.md) | batteries-included 终端编码代理（omp.sh），Rust 核心 |

（具名产品/框架入库时在此追加；跨域权威可升 `shared/entities`。）

## 怎么逛

1. 先看 `entities/`（产品/框架）
2. 再看 `concepts/`（模式）与 `references/`（来源）
