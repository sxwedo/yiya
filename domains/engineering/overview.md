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

**收**：业务 Ontology / 语义层与 Text2SQL、Embedding/排序评测、不可靠组件上的可靠系统、PM/组织效率与去瓶颈升档；工程运行时与仓库卫生参考（容器平台、官方 ignore 模板、终端模拟器、跨 shell 提示符、多地网络诊断、零配置 mesh VPN 等）。

**不收**：Agent 运行时 / harness / 编码代理产品（见 `agents`）；跨域权威实体升格后放 `shared/entities`。

## 本域实体

| Entity | 一句话 |
|--------|--------|
| [Docker](./entities/docker.md) | 容器平台；官方文档门户 docs.docker.com |
| [Ghostty](./entities/ghostty.md) | 原生 GPU 终端模拟器（Zig） |
| [github/gitignore](./entities/gitignore.md) | GitHub 官方 .gitignore 模板集（语言/框架/OS） |
| [ping.pe](./entities/ping-pe.md) | 多地 Ping / MTR / 端口 / BGP 诊断 |
| [Starship](./entities/starship.md) | 跨 shell 极简提示符（Rust） |
| [Tailscale](./entities/tailscale.md) | WireGuard mesh VPN：设备直连加密、NAT 穿透、ACL |
| [x-algorithm](./entities/x-algorithm.md) | xAI 开源 X 推荐栈：多动作预测 + 排序过滤 |
| [Mole](./entities/mole.md) | Mac 清理、卸载、分析 CLI 与原生 App |
| [awesome-mac](./entities/awesome-mac.md) | 优质 macOS 软件精选 |
| [public-apis](./entities/public-apis.md) | 免费公开 API 合集 |
| [Nix](./entities/nix.md) | 纯函数包管理器 |
| [witr](./entities/witr.md) | 把进程 / 端口 / 容器 / 文件追到启动者 |
| [FreeDomain](./entities/freedomain.md) | 免费域名注册与 DNS 学习 |
| [Kitty](./entities/kitty.md) | 跨平台 GPU 终端模拟器 |
| [openclaw-killer](./entities/openclaw-killer.md) | 一键卸载 OpenClaw |
| [awesome-database-learning](./entities/awesome-database-learning.md) | 数据库内核学习材料 |
| [Prefect](./entities/prefect.md) | Python 数据管道工作流编排 |
| [Buzz](./entities/buzz.md) | 本机离线语音转写（Whisper） |
| [awesome-java](./entities/awesome-java.md) | Java 框架 / 库精选 |
| [awesome-python](./entities/awesome-python.md) | Python 选型清单 |
| [Shadowrocket ADBlock Rules](./entities/shadowrocket-adblock.md) | Shadowrocket 广告过滤规则（每日重建） |
| [lazygit](./entities/lazygit.md) | Git 终端 UI |
| [awesome-technical-writing](./entities/awesome-technical-writing.md) | 技术写作资源精选 |
| [awesome-web-scraping](./entities/awesome-web-scraping.md) | 爬虫与数据处理工具精选 |
| [中国独立开发者项目列表](./entities/chinese-independent-developer.md) | 国内独立开发者在做什么 |
| [uvicorn](./entities/uvicorn.md) | Python ASGI 服务器 |
| [uv](./entities/uv.md) | Rust 写的 Python 包与项目管理器 |
| [db-tutorial](./entities/db-tutorial.md) | 后端数据库知识教程 |
| [system-design-primer](./entities/system-design-primer.md) | 大规模系统设计入门 |
| [cobalt](./entities/cobalt.md) | 媒体保存工具 |
| [极客时间电子书](./entities/geektime-books.md) | 极客时间电子书镜像 |
| [BigData-Notes](./entities/bigdata-notes.md) | 大数据入门笔记 |
| [Spring AI](./entities/spring-ai.md) | Spring 的 AI 应用框架 |
| [gmail-account-creator](./entities/gmail-account-creator.md) | 自动化 Gmail 账号创建工具（只收书签，不写用法） |
| [dbx](./entities/dbx.md) | 轻量跨平台数据库客户端 |
| [AI Engineering Field Guide](./entities/ai-engineering-field-guide.md) | AI 工程面试与 take-home 调研 |
| [The Book of Secret Knowledge](./entities/book-of-secret-knowledge.md) | 运维 / 安全 / CLI 手册与清单合集 |
| [微信视频号下载器](./entities/wx-channels-download.md) | 微信视频号下载 |
| [weixin-cli](./entities/weixin-cli.md) | 微信 CLI |
| [RSSHub](./entities/rsshub.md) | 万物皆可 RSS |
| [ntfy](./entities/ntfy.md) | PUT/POST 推送到手机或桌面 |
| [shadcn-admin](./entities/shadcn-admin.md) | Shadcn + Vite 后台 UI |
| [FDE 入门指南](./entities/fde-book.md) | 前沿部署工程师入门 |
| [Microsoft Activation Scripts](./entities/mas.md) | Windows / Office 激活脚本集（只收书签） |
| [System Design Academy](./entities/system-design-academy.md) | AI 工程与系统设计通讯 |
| [clix](./entities/clix.md) | 本地优先：RSS / GitHub / 内容工具集 |
| [微信公众号文章导出](./entities/wechat-article-exporter.md) | 公众号文章批量下载 |
| [muse](./entities/muse.md) | 提供商无关的 AI commit CLI |
| [developer-roadmap](./entities/developer-roadmap.md) | 交互式开发者路线图 |
| [use vim as IDE](./entities/use-vim-as-ide.md) | 把 Vim 配成 IDE |
| [二哥的 Java 进阶之路](./entities/tobebetterjavaer.md) | Java 学习指南 |
| [httpstat](./entities/httpstat.md) | 可视化 curl 统计 |
| [JDK](./entities/jdk.md) | OpenJDK 主线 |
| [Java 面试知识汇总](./entities/java-interview-collection.md) | Java 面试知识点 |
| [JavaGuide](./entities/javaguide.md) | Java 面试与后端指南 |
| [nginx](./entities/nginx.md) | 官方 NGINX 开源仓库 |
| [CodeGuide](./entities/codeguide.md) | 小傅哥 Java 核心教程 |
| [p3c](./entities/p3c.md) | 阿里 Java 规约 PMD 与 IDE 插件 |
| [java-design-patterns](./entities/java-design-patterns.md) | Java 实现的设计模式 |
| [RocketMQ](./entities/rocketmq.md) | 云原生消息与流平台 |
| [Spring Framework](./entities/spring-framework.md) | Spring 应用框架 |
| [Spring Cloud Alibaba](./entities/spring-cloud-alibaba.md) | 阿里分布式应用一站式方案 |

## 怎么逛

1. 先看 `entities/`（产品/仓库）与类型 `index.md`
2. 再看 `concepts/`（模式与层）与 `references/`（来源）
