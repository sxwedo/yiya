---
type: Entity
title: "Cloudflare"
description: "边缘开发平台：Worker 是应用，其余是 binding。静态资源不计费。没有硬花费上限，循环写 D1 能把账单打穿。"
kind: product
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-17T12:40:00Z }
related:
  - docker
  - tailscale
sources:
  - ../../../raw/articles/Elia/The Ultimate Cloudflare Guide.md
  - ../../../raw/bookmarks/sites.md
---

# Identity

**Cloudflare** 开发者平台（Elia《The Ultimate Cloudflare Guide》）：Worker 是你的应用，数据库、桶、队列都是 **binding**——一份通常不到三十行的配置声明谁能碰到谁，没有 VPC、没有连接串塞进环境变量。新项目用 Workers 不要用 Pages（静态资源和 SSR 已并进 Workers）。

## Mechanism

Compute：V8 isolate，冷启动接近零。同 Worker 上的静态资源请求免费且不计次。Durable Objects：按名寻址的单线程强一致实例。Workflows：多步且崩溃从断点续。Queues：把慢活移出请求路径。Cron 免费。Containers 给真不适合 Worker 的活。

存：关系/查询 → D1（每库 10GB、同时一条查询、账户可很多小库）；文件 → R2（无 egress）；常读少写 → KV（最终一致，刚写立刻读会错）；已有 Postgres → Hyperdrive（加速不替换）；向量 → Vectorize。

免费半边：Tunnel、Zero Trust Access（≤50 人）、Turnstile、DNS/CDN/WAF/DDoS。Workers Paid 账户最低 $5/月，按 CPU 不按墙钟；等慢 API 不花钱。带宽不另计。

不适合：要真 Postgres、长 CPU、假设进程内存里长期持有状态。Next.js 走 OpenNext 适配层。本地 ≠ 生产，binding 要在真网上试。

**没有硬花费上限。** 循环写 D1 有人接到 $4,868。先设 CPU 限额、账单告警、审查写路径、模型调用走 AI Gateway。

## Boundaries

不是 [Docker](./docker.md) 手册，不是 [Tailscale](./tailscale.md)（Tunnel 是「零开放端口出网」，mesh VPN 是另一件事）。本页不是 Cloudflare 营销站全文。

## Related

- [Docker](./docker.md)
- [Tailscale](./tailscale.md)
