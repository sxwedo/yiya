---
type: Overview
title: "工程与可维护性"
description: "Ontology/语义层、评测、工程效率，以及容器与仓库卫生等工程运行时参考；具名产品见 entities。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-07T18:00:00Z }
sources: []
---

# Scope

**收**：业务 Ontology / 语义层与 Text2SQL、Embedding/排序评测、不可靠组件上的可靠系统、PM/组织效率与去瓶颈升档；工程运行时与仓库卫生参考（容器平台、官方 ignore 模板、跨 shell 提示符等）。

**不收**：Agent 运行时 / harness / 编码代理产品（见 `agents`）；跨域权威实体升格后放 `shared/entities`。

## 本域实体

| Entity | 一句话 |
|--------|--------|
| [Docker](./entities/docker.md) | 容器平台；官方文档门户 docs.docker.com |
| [github/gitignore](./entities/gitignore.md) | GitHub 官方 .gitignore 模板集（语言/框架/OS） |
| [Starship](./entities/starship.md) | 跨 shell 极简提示符（Rust） |
| [x-algorithm](./entities/x-algorithm.md) | xAI 开源 X 推荐栈：多动作预测 + 排序过滤 |

## 怎么逛

1. 先看 `entities/`（产品/仓库）与类型 `index.md`
2. 再看 `concepts/`（模式与层）与 `references/`（来源）
