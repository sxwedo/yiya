---
title: "主流 Agent 之「Pi」与「oh-my-pi」介绍"
author: "猿小猴子 (@wx)"
url: "https://mp.weixin.qq.com/s/f61ZfTCsCgGZ1mQW1ARcKA"
date: "2026-08-05 10:53:47"
---

# 📰 主流 Agent 之「Pi」与「oh-my-pi」介绍

|**Pi**<br/><br/>*pi.dev*  <br/>*终端编码代理框架*<br/><br/>GitHub: github.com/earendil-works/pi|**oh-my-pi**<br/><br/>*omp.sh*  <br/>*IDE 级终端增强代理*<br/><br/>GitHub: github.com/can1357/oh-my-pi|
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|

## 一、执行摘要与核心结论

本教程针对当前（截至 2026 年 8 月 4 日）终端编码代理领域的两大主流开源项目 —— 由 earendil-works 维护的「Pi」（官方站点 https://pi.dev/，源码仓库 https://github.com/earendil-works/pi）与由 Can Bölük 主导开发的「oh-my-pi」（官方站点 https://omp.sh/，源码仓库 https://github.com/can1357/oh-my-pi）—— 进行系统性、交叉验证式的深度解析。两者均为 MIT 开源协议下的终端编码代理（Terminal Coding Agent），但在架构哲学、功能深度、第三方集成策略上存在显著差异。

|**维度**|                                                                                                                                                                                                                                                                                                                        **Pi（pi.dev）**                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                          **oh-my-pi（omp.sh）**                                                                                                                                                                                                                                                                                                                          |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 核心定位 |                                                                                                                                                                                                                                                                                                           最小化可扩展框架（Minimal Harness）  <br/>用户自行构建功能                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                           「电池已装」增强代理（Batteries Included）  <br/>原生集成 IDE 级工具                                                                                                                                                                                                                                                                                                            |
| 核心引擎 |                                                                                                                                                                                                                                                                                           TypeScript / Node.js（Bun 运行时）  <br/>统一 LLM API 层（@earendil-works/pi-ai）                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                               Rust 核心引擎（100k+ 行原生代码）  <br/>优化的工具调用与状态管理                                                                                                                                                                                                                                                                                                                |
| 官方链接 |https://pi.dev/![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_1.png)  <br/>https://github.com/earendil-works/pi![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_2.png)  <br/>https://pi.dev/docs/latest/![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_3.png)|https://omp.sh/![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_4.png)  <br/>https://github.com/can1357/oh-my-pi![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_5.png)  <br/>https://github.com/can1357/oh-my-pi/tree/main/docs![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_6.png)|
| 费用模式 |                                                                                                                                                                                                                                                                                                               MIT 开源免费  <br/>用户自担模型 API / 订阅费用                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                         MIT 开源免费  <br/>用户自担模型 API 费用（BYO API Key / BYO Model）                                                                                                                                                                                                                                                                                                          |
|第三方集成 |                                                                                                                                                                                                                                                                                             自定义提供商· MCP 扩展 · SDK · RPC  <br/>容器化（Gondolin / Docker / OpenShell）                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                     LSP（53 语言服务器）· DAP（14 调试适配器）  <br/>浏览器自动化· 子代理 · 协作中继 · 网络搜索链                                                                                                                                                                                                                                                                                                      |

**【交叉验证结论】两者均非「封闭式 SaaS 产品」，而是「开源代理框架 + 用户自备模型接入」的技术生态。选择 Pi 更适合追求极简可控、希望深度定制扩展的开发者；选择 oh-my-pi 更适合需要开箱即用的 IDE 级终端工具链（重构、调试、浏览器自动化、团队协作）的工程师团队。**

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_7.png)

## **本教程内容结构说明**

全文共分为七大部分：

## 第一部分为产品概览与核心定位；

## 第二部分完整收录所有官方相关链接；

## 第三部分为安装与配置的逐步操作指南（包含命令行代码示例）；

## 第四部分为功能深度解析与实际操作教程；

## 第五部分为费用与商业模型的交叉验证说明；

## 第六部分为第三方服务对接能力的系统性梳理（含对接矩阵）；

## 第七部分为差异总结与选型建议。

## 二、第一部分：产品概览与核心定位

### 2.1 Pi （ pi.dev ） —— 最小化终端编码代理框架 ###

### 产品名称与标识

官方名称：Pi Agent Harness（简称 Pi）。官方站点地址：https://pi.dev/ 。源码仓库地址：https://github.com/earendil-works/pi 。根据 GitHub 仓库 README（https://raw.githubusercontent.com/earendil-works/pi/main/README.md）的明确描述，Pi 并非单一「成品应用」，而是一个包含「统一多提供商 LLM API 层（pi-ai）」、「代理运行时（agent-core）」、「终端交互式编码代理 CLI（coding-agent）」与「终端 UI 库（tui）」的开源工具集。项目由 Mario Zechner（GitHub 用户名 badlogicgames，邮箱 badlogicgames@gmail.com）共同维护，并在 earendil-works 组织下持续迭代。

### 核心定位与设计哲学

Pi 的核心设计哲学可概括为「改变框架，而非改变你的工作流」（Change the harness, not your workflow）。根据 https://pi.dev/ 首页内容，Pi 提供「最小系统提示」（Minimal System Prompt），刻意不内置子代理（Sub-agents）、计划模式（Plan Mode）、权限弹窗（Permission Popups）或背景 Bash 执行等常见功能，而是将这些能力开放为可由用户通过 TypeScript 扩展（Extensions）、技能包（Skills）、提示模板（Prompt Templates）、主题（Themes）与 Pi 包（Pi Packages，从 npm 或 git 安装）自行构建的「原语」（Primitives, not features）。这种设计使得 Pi 在核心层保持极小（高效、低上下文税），同时具备无限可扩展性。

|**【核心概念提示】**<br/><br/>•  四种运行模式：交互式 TUI（Interactive）、打印/JSON（Print/JSON，用于脚本集成）、RPC（JSON 协议 stdin/stdout）、SDK（嵌入 Node.js 应用）。<br/><br/>•  树形会话历史：会话以树（Tree）结构存储，支持分支（Branch）、回退到任意历史节点（/tree 命令）、导出 HTML（/export）与上传 GitHub Gist（/share）。<br/><br/>•  上下文工程原语：AGENTS.md（项目指令）、SYSTEM.md（系统提示替换/追加）、技能（Skills，按需加载能力包）、提示模板（Prompt Templates）、动态上下文注入（Dynamic Context，通过扩展实现 RAG 或长期记忆）。<br/><br/>•  15+ 提供商接入：Anthropic、OpenAI、Google、Azure、Amazon Bedrock、Mistral、Groq、Cerebras、xAI、Hugging Face、Kimi For Coding、MiniMax、NVIDIA、OpenRouter、Ollama，以及通过自定义提供商（Custom Providers）扩展的任意兼容 API。|
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

### 2.2 oh-my-pi （ omp.sh ） —— IDE 级终端增强代理 ###

### 产品名称与标识

官方名称：oh-my-pi（缩写为 omp）。官方站点地址：https://omp.sh/ 。源码仓库地址：https://github.com/can1357/oh-my-pi 。根据 GitHub 仓库信息（https://github.com/can1357/oh-my-pi），项目由 Can Bölük（GitHub 用户名 can1357）主导开发，截至 2026-08-04 最新版本号为 17.2.8 。项目采用 MIT 开源协议（许可证文件地址：https://github.com/can1357/oh-my-pi/blob/main/LICENSE），无任何专有托管服务或订阅层，所有核心功能完全开放。

### 核心定位与设计哲学

oh-my-pi 的官方定位是「原生终端编码代理，内置 IDE」（A coding agent with the IDE wired in）。根据 https://omp.sh/ 首页内容，它最初构建在 Mario Zechner 的 Pi（https://github.com/badlogic/pi-mono）基础上，但并非简单「分支」，而是对核心引擎进行了全面重构：采用 Rust 原生核心（Native Rust Engine，约 100k+ 行代码）替代纯 Node.js 运行时，并在工具调用、状态压缩、编辑锚定与调试集成上做了深度优化。官方宣称：「每个工具都已最大化优化」（Every tool, benchmaxxed）—— 例如哈希锚定编辑（Hash-anchored edits / Hashline）使编辑首次成功率从约 6.7% 提升至 68.3%（根据标准计算评测数据）。

|**【oh-my-pi 核心创新提示】**<br/><br/>•  原生 Rust 核心：非 Node.js 封装，而是独立 Rust 引擎处理代理循环、工具路由与状态压缩，降低延迟并提升并发能力（默认子代理并发数 32，可设为 0 表示无限制）。<br/><br/>•  LSP 完整集成：14 种 LSP 操作（重命名、引用查找、格式化、代码动作等），支持 53 种语言服务器，编辑时直接调用 workspace/willRenameFiles 确保重构完整性。<br/><br/>•  DAP 调试器控制：28 种 DAP 操作，内置 14 种调试适配器（lldb-dap、dlv、debugpy 等），支持附加（attach）、stdio、TCP、PID 四种连接模式，并可在代理内部直接控制调试流程。<br/><br/>•  哈希锚定编辑：每次写入前计算文件内容哈希，编辑时验证哈希匹配，防止「静默损坏」或基于过期上下文的错误修改。<br/><br/>•  时间旅行流规则（Time-Traveling Stream Rules, TTSR）：规则以正则触发，仅在匹配时注入系统提示（0 令牌税直至触发），并在上下文压缩后依然生效。|
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

### 2.3 两者的技术关系与演进脉络（交叉验证版） ###

根据多个独立来源（https://omp.sh/ 首页「The Pi you love, with batteries included」章节、GitHub 仓库依赖关系、标准计算社区评测 https://standardcompute.com/best-ai-agent/oh-my-pi-vs-pi）的交叉验证，oh-my-pi 并非「取代」Pi，而是「在 Pi 的极简框架哲学之上，构建一套完整可用的终端工程环境」。具体关系可总结为：

|**层次 / 项目**|        **Pi（原始框架）**         |            **oh-my-pi（增强版）**             |
|-----------|-----------------------------|------------------------------------------|
|  核心引擎语言   |TypeScript / Node.js（Bun 运行时）|             Rust 原生核心（独立引擎）              |
|   框架哲学    |         极简原语，可无限扩展          |               开箱即用，内置完整工具链               |
|   编辑安全    |        基础文件写入（扩展可增强）        |        哈希锚定编辑（Hashline）+ LSP 重构验证        |
|   调试能力    |        无内置调试器（需扩展实现）        |         原生 DAP 集成（14 适配器，28 操作）          |
|   多任务协同   |        无内置子代理（扩展可实现）        |          原生子代理（8 种隔离后端，默认并发 32）          |
|   协作功能    |        无内置协作（扩展可实现）         |    原生 /collab（AES-256-GCM，支持浏览器 + 终端）    |
|  浏览器自动化   |  无（扩展可实现，如 web\_access 包）   |           原生浏览器自动化（CDP RPC 执行）           |
|  本地模型支持   |     Ollama（通过自定义提供商或扩展）     |Ollama / vLLM / LM Studio / llama.cpp 原生支持|

**【交叉验证要点确认】oh-my-pi 的 GitHub 仓库 README 明确提及「Originally built on Mario Zechner's wonderful Pi」，同时 https://omp.sh/ 首页第 03 节标题直接为「The Pi you love, with batteries included」。这确认了两者的继承关系，而非竞争替代关系。**

## 三、第二部分：官方相关链接全收录

*声明：**每个链接的内容类型与验证状态（基于 2026-08-04 访问验证）。*

### 3.1 Pi （ pi.dev ）官方链接体系 ###

**表 3-1：Pi 官方相关完整链接地址（直接文本格式）**

**官方主站（产品介绍、演示、安装入口）:** https://pi.dev/

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_8.png)

**官方文档首页（完整使用手册）:** https://pi.dev/docs/latest

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_9.png)

**快速入门指南（Quickstart）:** https://pi.dev/docs/latest/quickstart

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_10.png)

**提供商配置文档（Subscription / API Key / Auth File）:** https://pi.dev/docs/latest/providers

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_11.png)

**扩展开发文档（TypeScript 模块）:** https://pi.dev/docs/latest/extensions

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_12.png)

**技能（Skills）文档:** https://pi.dev/docs/latest/skills

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_13.png)

**提示模板（Prompt Templates）文档:** https://pi.dev/docs/latest/prompt-templates

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_14.png)

**主题（Themes）文档:** https://pi.dev/docs/latest/themes

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_15.png)

**包系统（Packages / 包市场）:** https://pi.dev/packages

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_16.png)

**GitHub 主仓库（源码、Issues、PR、发布）:** https://github.com/earendil-works/pi

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_17.png)

**GitHub 代码浏览（packages 目录结构）:** https://github.com/earendil-works/pi/tree/main/packages

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_18.png)

**README 原始内容（Markdown 格式）:** https://raw.githubusercontent.com/earendil-works/pi/main/README.md

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_19.png)

**许可证文件（MIT）:** https://github.com/earendil-works/pi/blob/main/LICENSE

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_20.png)

**安全策略（SECURITY.md）:** https://github.com/earendil-works/pi/blob/main/SECURITY.md

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_21.png)

**贡献指南（CONTRIBUTING.md）:** https://github.com/earendil-works/pi/blob/main/CONTRIBUTING.md

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_22.png)

**Discord 社区邀请（根据 README 及网页信息交叉验证）:** https://discord.com/invite/3cU7Bz4UPx

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_23.png)

**npm 包发布页（@earendil-works/pi-coding-agent）:** https://www.npmjs.com/package/@earendil-works/pi-coding-agent

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_24.png)

**安装脚本（curl 安装入口）:** https://pi.dev/install.sh

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_25.png)

**项目 RFC（长期计划与设计提案）:** https://rfc.earendil.com/keyword/pi/

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_26.png)

**会话分享示例（公开 Gist 渲染）:** https://pi.dev/session/[#0ea51497613daf7e1de28ee99950b074]()

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_27.png)

### 3.2 oh-my-pi （ omp.sh ）官方链接体系 ###

**表 3-2：oh-my-pi 官方相关完整链接地址（直接文本格式）**

**官方主站（产品介绍、安装命令、功能演示）:** https://omp.sh/

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_28.png)

**GitHub 主仓库（源码、Issues、PR、发布、文档目录）:** https://github.com/can1357/oh-my-pi

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_29.png)

**GitHub 文档目录（docs 文件夹，含详细配置说明）:** https://github.com/can1357/oh-my-pi/tree/main/docs

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_30.png)

**README 原始内容（Markdown 格式）:** https://raw.githubusercontent.com/can1357/oh-my-pi/main/README.md

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_31.png)

**许可证文件（MIT 许可）:** https://github.com/can1357/oh-my-pi/blob/main/LICENSE

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_32.png)

**安装脚本入口（curl -fsSL https://omp.sh/install | sh）:** https://omp.sh/install

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_33.png)

**协作中继服务（默认 my.omp.sh，用于 /collab 功能）:** https://my.omp.sh

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_34.png)

**Discord 社区（根据 GitHub 及每个开发者页面信息交叉验证）:** https://discord.gg/4NMW9cdXZa

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_35.png)

**开源替代品参考页面（含功能特征列表与 MIT 许可确认）:** https://www.opensourcealternatives.to/item/oh-my-pi

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_36.png)

**独立评测对比（oh-my-pi vs Pi，标准计算平台，2026-08-03 发布）:** https://standardcompute.com/best-ai-agent/oh-my-pi-vs-pi

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_37.png)

**独立用户指南（配置 models.yml 与 config.yml 的完整示例）:** https://acchapm1.github.io/tutorials/Oh-My-Pi/omp-beginner-guide

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_38.png)

**开源社区评测（Stork.ai，2026-07-02 发布，含费用分析）:** https://www.stork.ai/en/oh-my-pi

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_39.png)

**独立评测（Standard Compute，oh-my-pi vs OpenCode，2026-08-03 发布）:** https://standardcompute.com/best-ai-agent/oh-my-pi-vs-opencode

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_40.jpg)

## 四、第三部分：安装与配置详解

### 4.1 Pi 安装流程（多平台、多包管理器验证版） ###

**官方推荐安装方式（根据 https://pi.dev/docs/latest 及 https://github.com/earendil-works/pi/README.md 交叉验证）**

|         **安装方式**          |                                                  **执行命令（直接文本格式）**                                                   |                          **适用场景与注意事项**                          |
|---------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
|      npm 全局安装（官方首选）       |                           npm install -g --ignore-scripts @earendil-works/pi-coding-agent                           |需要 Node.js 环境（Bun 运行时已内置）；--ignore-scripts 禁用依赖生命周期脚本，提升安全性与安装速度。|
|curl 安装脚本（Linux / macOS 首选）|                                      curl -fsSL https://pi.dev/install.sh | sh                                      |                自动检测平台并安装适配的二进制或包；安装脚本地址可直接访问验证。                 |
|         pnpm 全局安装         |                            pnpm add -g --ignore-scripts @earendil-works/pi-coding-agent                             |                    适用于已使用 pnpm 作为包管理器的开发团队。                     |
|         Yarn 全局安装         |                          yarn global add --ignore-scripts @earendil-works/pi-coding-agent                           |        适用于 Yarn 用户；注意 Yarn 1.x 与 Yarn Berry（2.x+）的命令差异。         |
|         Bun 全局安装          |                           bun install -g --ignore-scripts @earendil-works/pi-coding-agent                           |               Bun 用户可直接安装；Pi 本身使用 Bun 运行时，兼容性最佳。                |
|     从源码构建（开发者 / 定制需求）     |git clone https://github.com/earendil-works/pi.git  <br/>cd pi  <br/>npm install --ignore-scripts  <br/>npm run build|                 适用于需要修改核心代码、调试扩展或构建自定义二进制的高级用户。                 |

\# 验证安装成功  
pi --version  
\# 或进入项目目录直接运行  
pi

### 4.2 Pi 配置体系（ API Key · OAuth · 模型 · 项目文件） ###

**认证与提供商配置（根据 https://pi.dev/docs/latest/providers 完整内容整理）**

|              **认证类型**               |                 **配置方式（直接命令 / 环境变量）**                  |                                                     **官方文档与注意事项**                                                     |
|-------------------------------------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
|订阅认证（OAuth）- Anthropic Claude Pro/Max|     /login -\> 选择 Claude Pro/Max -\> 完成 OAuth 授权流程     |                                      第三方框架使用从「额外使用量」（extra usage）计费，非订阅计划内免费额度。                                       |
|订阅认证（OAuth）- ChatGPT Plus/Pro (Codex)|        /login -\> 选择 ChatGPT Plus/Pro -\> 完成授权         |                  OpenAI 官方认可的 Codex OSS 使用方式，见 https://developers.openai.com/community/codex-for-oss                  |
|     订阅认证（OAuth）- GitHub Copilot     |      /login -\> 选择 GitHub -\> 登录 github.com 或企业域名      |                              若提示「model not supported」，需在 VS Code Copilot Chat 中手动启用对应模型。                              |
|      订阅认证（OAuth）- xAI (Grok/X)      |                /login xai -\> 选择「使用订阅」                 |                                         XAI\_API\_KEY 环境变量仍可用于「使用 API Key」模式。                                         |
|       订阅认证（OAuth）- OpenRouter       |/login openrouter -\> 选择「使用 OpenRouter 登录」-\> 完成 PKCE 流程|                                    授权生成用户自控的 API Key，计费从 OpenRouter 账户余额扣除，不自动过期。                                     |
|       API Key 认证 - Anthropic        |     export ANTHROPIC\_API\_KEY=sk-ant-...  <br/>pi     |环境变量优先级低于 auth.json 文件；官方完整环境变量映射表见 https://github.com/earendil-works/pi-mono/blob/main/packages/ai/src/env-api-keys.ts|
|         API Key 认证 - OpenAI         |        export OPENAI\_API\_KEY=sk-...  <br/>pi         |                                   支持标准 OpenAI API 及兼容端点（如 Azure OpenAI Responses）。                                    |
|     API Key 认证 - Google Gemini      |          export GEMINI\_API\_KEY=...  <br/>pi          |                                    支持 Google AI Studio 及 Vertex AI（需配置额外项目/位置参数）。                                     |
|       自定义提供商（Custom Provider）       |     在 models.json 中声明自定义 baseUrl、API 规范与 OAuth 流程      |                                            适用于企业内部 LLM 服务或特殊兼容端点（如私有化部署）。                                             |

**项目级配置文件体系（根据 https://pi.dev/docs/latest 及 GitHub 代码结构交叉验证）**

|**【项目配置文件提示】**<br/><br/>•  AGENTS.md：从 \~/.pi/agent/、父目录到当前目录递归加载，提供项目级指令与上下文规则。<br/><br/>•  SYSTEM.md：替换或追加默认系统提示（Minimal System Prompt），实现项目级上下文工程。<br/><br/>•  models.json：添加自定义模型条目（支持任意兼容提供商的模型 ID 与参数配置）。<br/><br/>•  extensions/：TypeScript 扩展模块目录，访问工具、命令、键盘快捷键、事件与完整 TUI。<br/><br/>•  skills/：技能包目录，按需加载可复用能力（如「代码审计」、「测试生成」等）。<br/><br/>•  prompt-templates/：Markdown 格式提示模板文件，支持通过 /模板名 快速展开。<br/><br/>•  themes/：终端主题配置，可自定义配色与 UI 元素布局。|
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

### 4.3 oh-my-pi 安装流程（多平台、多包管理器验证版） ###

**根据 https://omp.sh/ 首页及 https://github.com/can1357/oh-my-pi 仓库信息整理的完整安装方式：**

|       **安装方式**        |                                                    **执行命令（直接文本格式）**                                                     |                                    **适用场景与验证状态**                                     |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
|   curl 安装（官方推荐，跨平台）   |                                         curl -fsSL https://omp.sh/install | sh                                          |适用于 Linux、macOS、Windows（原生支持，无需 WSL）；安装脚本自动检测平台并安装适配二进制。验证状态：脚本 URL 可直接访问（2026-08-04）。|
|        npm 安装         |                                  npm install -g @oh-my-pi/cli  # 注意：实际包名需确认官方 npm 发布状态                                  |         适用于已配置好 npm 的开发环境；注意官方主要分发方式为 curl 二进制，而非 npm 包（根据 GitHub 仓库信息交叉验证）。         |
|        Bun 安装         |                                       bun install -g oh-my-pi  # 具体包名需参考官方文档最新说明                                        |                   Bun 用户可尝试；oh-my-pi 采用 Rust 核心，Bun 主要用于脚本与扩展运行时。                    |
|PowerShell 安装（Windows） |                                            irm https://omp.sh/install | iex                                             |                    Windows 用户可通过 PowerShell 直接执行安装脚本（根据首页信息推断支持）。                    |
|mise / asdf 安装（版本管理器用户）|                                            mise install oh-my-pi  # 需确认插件可用性                                            |                         适用于使用 mise 或 asdf 管理多版本 CLI 工具的开发者。                          |
|      从源码构建（高级用户）      |git clone https://github.com/can1357/oh-my-pi.git  <br/>cd oh-my-pi  <br/>bun install  <br/>bun run build  # 具体构建命令参考仓库文档|                          适用于需要调试 Rust 核心、修改扩展或构建自定义版本的开发者。                           |

\# 验证安装成功  
omp --version  
\# 或直接运行（在任意项目目录）  
omp

### 4.4 oh-my-pi 配置体系（ models.yml · config.yml · 本地模型 · OAuth 登录） ###

**根据 https://github.com/can1357/oh-my-pi/tree/main/docs 及独立用户指南（https://acchapm1.github.io/tutorials/Oh-My-Pi/omp-beginner-guide）的交叉验证整理：**

|**【核心配置文件说明】**<br/><br/>•  \~/.omp/agent/config.yml：定义默认模型（default）、计划模型（plan）、慢速模型（slow）、小型任务模型（smol）、提交消息模型（commit）等角色映射。<br/><br/>•  \~/.omp/agent/models.yml：声明所有可用提供商（provider）的配置，包括 baseUrl、API 规范（openai-completions / anthropic-messages 等）、API Key、支持的模型列表（含输入/输出成本、上下文窗口、最大令牌数）。<br/><br/>•  \~/.omp/agent/auth.json 或环境变量：存储 API Key 或 OAuth 令牌（支持 Claude Pro/Max、ChatGPT Plus/Pro、GitHub Copilot、OpenRouter、xAI 等订阅认证）。<br/><br/>•  Ollama 本地模型配置示例：在 models.yml 中添加 ollama 提供商（baseUrl: http://localhost:11434/v1，api: openai-completions，apiKey: OLLAMA\_API\_KEY），并在 config.yml 中将 smol/commit 角色映射到本地模型（如 ollama/qwen2.5-coder:14b），实现「零 API 成本」运行。|
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

\# models.yml 配置示例（本地 Ollama + 云端 Claude 组合）  
providers:  
 anthropic:  
 baseUrl: https://api.anthropic.com/v1  
 api: anthropic-messages  
 apiKey: $ANTHROPIC\_API\_KEY  
 models:  
 \- id: claude-sonnet-4-5  
 name: Claude Sonnet 4.5  
 ollama:  
 baseUrl: http://localhost:11434/v1  
 api: openai-completions  
 apiKey: OLLAMA\_API\_KEY  
 models:  
 \- id: qwen2.5-coder:14b  
 name: Qwen 2.5 Coder 14B (Local)  
 cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 }  
 contextWindow: 32000  

\# config.yml 配置示例  
models:  
 default: anthropic/claude-sonnet-4-5  
 plan: anthropic/claude-opus-4-5  
 slow: anthropic/claude-opus-4-5  
 smol: ollama/qwen2.5-coder:14b  
 commit: ollama/qwen2.5-coder:14b

|**【OAuth 订阅登录说明（根据 https://omp.sh/ 及文档信息整理）】**<br/><br/>•  /login 命令：在 omp 交互式终端中运行 /login，选择订阅提供商（如 Claude Pro/Max），完成浏览器 OAuth 授权流程。<br/><br/>•  订阅计费模式：使用订阅认证时，模型调用从订阅账户的「额外使用量」（extra usage）计费（如 Anthropic 的 Claude Pro/Max 计划），而非直接消耗独立 API 余额。根据 https://pi.dev/docs/latest/providers 的交叉说明，这一计费规则同样适用于 Pi 及基于 Pi 构建的增强代理。<br/><br/>•  本地模型零成本运行：通过 Ollama、vLLM、LM Studio、llama.cpp 等本地推理引擎接入，可实现完全零 API 费用的编码代理体验（仅消耗本地计算资源）。|
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

## 五、第四部分：功能深度解析与使用教程

### 5.1 Pi 核心功能解析（交互式模式 · 四种运行模式 · 扩展生态） ###

### 交互式 TUI 模式（Interactive Mode）操作指南

运行 pi 后进入终端用户界面（TUI）。根据 https://pi.dev/ 首页及文档内容，核心交互命令包括：

|       **命令 / 快捷键**       |                                         **功能说明**                                         |                        **交叉验证来源**                         |
|--------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------|
|       Enter（输入消息）        |发送当前输入内容，作为代理的下一轮提示（Prompt）。若在代理执行过程中输入，则作为「引导消息」（Steering Message），在当前工具执行完成后立即中断后续工具并发送。|         https://pi.dev/ 首页「Steer or follow up」章节          |
|       Alt + Enter        |                       发送「跟进消息」（Follow-up），等待代理完全完成当前运行后再处理（非中断式）。                        |         https://pi.dev/ 首页「Steer or follow up」章节          |
|          /login          |                            启动提供商认证流程（订阅 OAuth 或 API Key 输入）。                             |           https://pi.dev/docs/latest/providers            |
|         /logout          |                         清除当前认证凭据（删除 \~/.pi/agent/auth.json 条目）。                          |           https://pi.dev/docs/latest/providers            |
|          /model          |                              切换当前会话使用的模型（支持 15+ 提供商的数百种模型）。                              |  https://pi.dev/ 首页「15+ providers, hundreds of models」章节  |
|         Ctrl + L         |                                快速切换模型（与 /model 功能等效的快捷键）。                                |                    https://pi.dev/ 首页                     |
|         Ctrl + P         |                               循环切换「收藏模型」（Favorite Models）。                               |                    https://pi.dev/ 首页                     |
|          /tree           |                                显示会话树结构，支持导航到任意历史节点并继续分支。                                 | https://pi.dev/ 首页「Tree-structured, shareable history」章节  |
|         /export          |                            将当前会话导出为 HTML 文件（包含完整交互历史与格式化内容）。                             |                    https://pi.dev/ 首页                     |
|          /share          |            将会话上传至 GitHub Gist，生成可公开访问的渲染 URL（如 https://pi.dev/session/#...）。             |                  https://pi.dev/ 首页及示例链接                  |
|         /reload          |                           重新加载当前扩展、技能与配置（支持「在运行中修改自身」的动态自定义）。                            |https://pi.dev/ 首页「Change the harness, not your workflow」章节|
|       pi -p "查询内容"       |                              打印模式：直接输出结果，不进入交互式 TUI。支持脚本集成。                              |             https://pi.dev/ 首页「Four modes」章节              |
|  pi --mode json "查询内容"   |                           JSON 事件流模式：输出结构化事件流（适用于非 Node 集成场景）。                           |              https://pi.dev/docs/latest/json              |
|RPC 模式（stdin/stdout JSONL）|                         通过标准输入/输出的 JSON 行协议与外部应用集成（如 OpenClaw）。                          |              https://pi.dev/docs/latest/rpc               |
|          SDK 模式          |                        在 Node.js 应用中直接嵌入 Pi 代理（参考 OpenClaw 集成示例）。                        |              https://pi.dev/docs/latest/sdk               |

### **扩展（Extensions）、技能（Skills）与包系统（Packages）使用教程** ###

根据 https://pi.dev/docs/latest/extensions、https://pi.dev/docs/latest/skills 及 https://pi.dev/packages 市场内容整理的实际操作流程：

\# 安装官方或第三方扩展（从 npm 或 git）  
pi install npm:pi-mcp-adapter  
pi install git:github.com/badlogic/pi-doom  
\# 浏览可用包  
pi install npm:pi-web-access # 网页搜索、URL 读取、PDF 提取、GitHub 克隆等

|**【扩展与技能开发提示】**<br/><br/>•  扩展为 TypeScript 模块，拥有完整工具访问权限、命令注册、键盘快捷键、事件监听与 TUI 自定义能力。官方提供 50+ 扩展示例（https://github.com/earendil-works/pi/tree/main/packages/coding-agent/examples/extensions/）。<br/><br/>•  技能为「按需加载」的能力包（Progressive Disclosure），不常驻系统提示，仅在被调用时注入指令与工具说明，节省上下文窗口。<br/><br/>•  包（Package）可将扩展、技能、提示模板与主题打包为单一可安装单元，通过 npm 或 git 分发（如 npm:@foo/pi-tools）。|
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

### 5.2 oh-my-pi 核心功能解析（ LSP · DAP · 子代理 · 协作 · 浏览器自动化） ###

**LSP 集成深度解析（根据 https://omp.sh/ 及 GitHub 文档交叉验证）**

oh-my-pi 的 LSP 集成并非「简单调用外部 LSP 客户端」，而是「将 LSP 操作直接嵌入代理的工具表面」。根据 https://omp.sh/ 首页 §02 章节描述，当用户要求「重命名 formatBytes」时，代理调用 workspace/willRenameFiles 确保重构完整性（包括重导出、桶文件、别名导入的同步修改），而非简单执行文件重命名后依赖后续修复。支持的 14 种操作包括：重命名（rename）、引用查找（references）、定义跳转（definition）、格式化（formatting）、代码动作（code actions）、诊断（diagnostics）等，覆盖 53 种语言服务器。

\# LSP 操作实际示例（在 omp 交互式终端中）  
\> 请重命名当前文件中的函数 'formatBytes' 为 'formatBytesSafe'  
\# 代理执行流程：  
## 1. 调用 LSP workspace/willRenameFiles 确认所有引用位置
## 2. 执行重命名操作（包括 format.ts / report.ts / cli.ts 三个文件的同步修改）
## 3. 确认修改完整性（验证无遗留旧名称引用）
## 4. 返回结构化结果（修改文件列表、影响范围、验证状态）

### DAP 调试器控制深度解析

根据 https://omp.sh/ 首页 §03 章节与独立评测内容，oh-my-pi 的 DAP 集成支持「真实调试流程控制」而非「打印语句模拟」。内置 14 种调试适配器（Adapters）：lldb-dap（C/C++）、dlv（Go）、debugpy（Python）、以及其他语言特定适配器。支持的 28 种操作包括：附加（attach）、启动（launch）、设置断点（breakpoints）、步进（step）、继续（continue）、评估表达式（evaluate）、检查帧（frames）、变量查看（variables）等。

|**【DAP 调试实际示例提示】**<br/><br/>•  C 二进制调试：代理附加 lldb，设置断点，步进至错误指针位置，读取帧变量（如示例中 x 从 7 → 57351 的位运算验证）。<br/><br/>•  Go 服务调试：附加 dlv，检查 goroutine 状态，识别挂起原因。<br/><br/>•  Python 进程调试：使用 debugpy 附加，暂停、检查、评估表达式，替代传统 print 调试。<br/><br/>•  调试配置文件：可通过项目配置或扩展自定义调试启动参数（如端口、环境变量、命令行参数）。|
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**子代理（Subagents）、协作（Collab）与浏览器自动化解析**

|   **功能模块**   |                                               **核心能力**                                               |                                                 **配置与命令**                                                  |                                            **第三方集成说明**                                             |
|--------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|子代理（Subagents）|     任务分解为独立工作树（Isolated Worktrees），每个子代理拥有独立工具表面与模型选择，最终返回结构化结果（Schema-validated Object）给父代理读取。      |                   默认并发数 32（可设为 0 = 无限制）；8 种隔离后端（Copy-on-Write 优先）；支持 IRC 通道（子代理间直接消息通信）。                   |                   与 Pi 的「无内置子代理」形成鲜明对比；Pi 用户需通过扩展（如 pi-subagents 包）或自定义脚本实现类似能力。                   |
|评审模型（Advisor） |             第二个模型（独立上下文、独立模型配置）实时审查主代理的每一轮操作，注入「旁白」（aside）、「担忧」（concern）或「硬阻断」（blocker）。             |            /advisor 命令查看状态；可配置为任意模型（如 openai-codex/gpt-5.5）；严重级别分三级（aside / concern / blocker）。            |                   这是 oh-my-pi 独有的「双模型监督」机制，Pi 目前无官方内置评审代理功能（需用户自行构建扩展实现类似监督流程）。                    |
|  协作（Collab）  |/collab 启动实时协作会话，通过中继服务（默认 my.omp.sh）生成可分享链接与二维码；支持「读写协作」（Read-Write Pairing）与「只读观看」（View-Only Watch）。|          /collab -\> 打印链接与 QR 码；/collab view 生成只读链接；omp join \<链接\> 加入协作；浏览器可直接访问链接观看（无需安装 omp）。           |协作帧在客户端加密（AES-256-GCM），中继服务器不持有密钥（Key Client-Side）；与 Pi 的「无内置协作」形成对比（Pi 用户需依赖外部工具如 tmux 或自定义扩展实现协作）。|
|    浏览器自动化    |     集成浏览器控制（CDP RPC 执行），支持网页搜索（14 个搜索提供商链式调用）、PDF 读取、GitHub 页面解析、Stack Overflow 提取、ArXiv 论文摘要等。      |              内置 web\_search 工具（自动选择最佳搜索提供商链）；read 工具直接读取 URL 内容（保留 Markdown 结构与锚点）；支持本地视频分析。               |                与 Pi 的「无内置浏览器自动化」对比明显；Pi 用户可通过安装扩展（如 pi-web-access 包）实现部分能力，但非原生集成。                 |
| 时间旅行规则（TTSR） |                  规则以正则触发，仅在匹配时注入系统提示（0 令牌税直至触发），并在上下文压缩后依然生效（Survives Compaction）。                   |规则配置文件支持文本流、思考流（thinking stream）、工具流（tool stream）三种触发模式；支持中断（interrupt）、重复（repeat）、上下文注入（context injection）。|      这是 oh-my-pi 在「上下文工程」上的独特创新，Pi 的上下文压缩机制（Compaction）主要依赖扩展自定义实现（如 pi-condense 包提供压缩优化扩展）。       |

### 5.3 交互式操作示例（代码片段与命令行演示） ###

示例场景：在一个包含 TypeScript 项目的目录中，使用 Pi 与 oh-my-pi 完成「重命名函数、修复类型错误、生成提交信息」的完整工作流。

### **场景一：使用 Pi 完成基础重构与提交** ###

\# 进入项目目录并启动 Pi  
cd \~/projects/my-ts-app  
pi  

\# 在 Pi 交互式终端中输入：  
\> 请将 src/utils/format.ts 文件中的函数 formatBytes 重命名为 formatBytesSafe，  
\> 并确保所有引用（包括重导出与桶文件 barrel.ts）同步更新。  

\# 代理执行完成后，查看修改结果并生成提交消息  
\> 请根据本次修改生成符合 Conventional Commits 规范的提交信息，  
\> 并将修改提交到当前分支。  

\# 使用打印模式直接获取结果（适用于脚本集成）  
pi -p "将 formatBytes 重命名为 formatBytesSafe 并修复所有引用"

### **场景二：使用 oh-my-pi 完成 IDE 级重构、调试与团队协作** ###

\# 启动 oh-my-pi  
cd \~/projects/my-ts-app  
omp  

\# 在 omp 交互式终端中执行重命名（LSP 验证）  
\> 重命名符号 formatBytes -\> formatBytesSafe（使用 LSP 完整重构）  

\# 执行调试流程（假设存在一个 C 扩展模块需要调试）  
\> 附加到正在运行的 C 进程（PID 1234），设置断点在 src/native/demo.c:6，  
\> 步进到错误指针，检查帧变量并评估表达式。  

\# 启动协作会话，邀请团队成员共同审查代码修改  
/collab view  
\# 复制生成的浏览器链接（如 https://my.omp.sh/session/xxx）发送给同事，  
\# 同事可通过浏览器直接观看实时会话，或通过 omp join https://... 加入读写协作。  

\# 使用子代理并行处理多个重构任务（例如同时重构三个模块的导出结构）  
\> 启动两个子代理并行处理：ComponentsExports 与 RoutesExports，  
\> 每个子代理在独立工作树中运行，最终合并结构化结果。

## 六、第五部分：费用与商业模型

*本节内容基于官方站点（pi.dev 无任何价格页面、omp.sh 无任何订阅入口）、GitHub 仓库许可证信息（MIT）、开源社区评测（Stork.ai 2026-07-02、Standard Compute 2026-08-03）、独立用户指南及第三方工具目录（opensourcealternatives.to）的多源交叉验证整理。*

### 6.1 Pi 费用结构（验证状态：无官方收费层，完全开源免费） ###

根据对 https://pi.dev/ 站点的全面访问验证（包括首页、文档页、包市场页、安装脚本页），Pi 项目本身不存在任何「价格页」、「订阅计划」、「试用期」或「功能限制」描述。根据 GitHub 仓库 LICENSE 文件（https://github.com/earendil-works/pi/blob/main/LICENSE），项目采用 MIT 开源协议。根据第三方独立评测（usagepricing.com 2026-06-16 更新）与社区信号一致性分析，Pi 的费用结构可明确总结为：

|         **费用类别**         |                                                                                                                             **具体说明（直接文本格式链接与来源）**                                                                                                                             |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|软件本身（代理框架、TUI、CLI、SDK、RPC）|                                                                                               完全免费（MIT 开源协议）。源码地址：https://github.com/earendil-works/pi 。无功能限制、无使用时长限制、无用户数量限制。                                                                                                |
|      模型调用费用（核心成本来源）      |用户需自行承担通过提供商（Anthropic、OpenAI、Google、Azure、Bedrock、Mistral、Groq、Cerebras、xAI、Ollama 本地等）的模型调用成本。若使用订阅认证（如 Claude Pro/Max、ChatGPT Plus/Pro），计费从订阅账户的「额外使用量」扣除，而非直接消耗独立 API 余额（根据 https://pi.dev/docs/latest/providers 交叉验证）。若使用本地模型（Ollama、llama.cpp、vLLM），则无 API 成本（仅消耗本地计算资源）。|
|          扩展与包系统          |                                                                                            完全免费。官方包市场（https://pi.dev/packages）提供的所有扩展、技能、提示模板与主题均无收费。用户可自行构建并分发自定义包（通过 npm 或 git）。                                                                                            |
|         容器化与安全增强         |                                                                                                       完全免费。Gondolin 扩展（容器内执行工具）、Docker 模式、OpenShell 沙箱模式均为开源代码，无额外授权费用。                                                                                                       |
|        企业级支持与定制开发        |                                                                                              目前无官方「企业版」或「商业支持订阅」页面。根据 GitHub 仓库信息与社区讨论，企业用户可基于 MIT 协议自行部署、修改与维护，或通过社区渠道寻求非官方支持。                                                                                               |

### 6.2 oh-my-pi 费用结构（验证状态：无官方收费层，完全开源免费，用户自担 API 成本） ###

根据对 https://omp.sh/ 站点的全面访问（无任何价格卡、无订阅入口、无功能限制提示）、GitHub 仓库 LICENSE 文件（MIT，地址 https://github.com/can1357/oh-my-pi/blob/main/LICENSE）、独立评测（Stork.ai 2026-07-02 评测明确指出「Freemium: Core open-source functionality is available at no cost, with users managing their own AI model API expenses」）、以及开源社区目录（opensourcealternatives.to 2026-06-12 记录确认「MIT licensed, installs by shell script, npm, Bun, or PowerShell」，无任何专有组件）

|                 **费用类别**                 |                                                                                                                                                                              **具体说明（直接文本格式链接与来源）**                                                                                                                                                                               |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       软件本身（Rust 核心引擎、TUI、CLI、扩展系统）       |                                                                                                                              完全免费（MIT 开源协议）。源码地址：https://github.com/can1357/oh-my-pi 。无功能限制、无使用时长限制。根据 GitHub 仓库信息，最新版本 17.2.8 发布于 2026 年 8 月 3 日。                                                                                                                               |
|  模型调用费用（核心成本来源，BYO API Key / BYO Model）  |用户需自行承担通过所选提供商（40+ 提供商，包括 Anthropic、OpenAI、Google、Azure、Bedrock、Mistral、Groq、Cerebras、xAI、Ollama 本地、vLLM 远程、LM Studio、llama.cpp 等）的模型调用成本。根据独立用户指南（https://acchapm1.github.io/tutorials/Oh-My-Pi/omp-beginner-guide）与官方文档交叉验证，oh-my-pi 支持「订阅认证」（如 Claude Pro/Max OAuth 登录）与「API Key 认证」两种模式，计费规则与 Pi 一致（订阅认证从额外使用量扣除）。若完全使用本地模型（Ollama、vLLM 本地部署、LM Studio、llama.cpp），则无任何 API 成本。|
|内置高级功能（LSP、DAP、子代理、协作、浏览器自动化、TTSR、Advisor）|                                                                                                                                                           完全免费，作为核心引擎的一部分原生提供，无额外授权或功能解锁费用。与 Pi 的「功能需通过扩展实现」模式形成鲜明差异。                                                                                                                                                            |
|            协作中继服务（my.omp.sh）             |                                                                                                                                       根据 https://omp.sh/ 首页 §07 章节描述，协作中继服务为默认配置（WSS 协议），帧数据在客户端加密（AES-256-GCM），服务器不持有密钥。目前无任何收费说明或使用限制提示。                                                                                                                                       |
|                企业级支持与定制开发                |                                                                                                                                                    目前无官方「企业版」或「商业支持订阅」页面。根据项目性质（个人主导、MIT 协议、快速迭代的开源社区模式），企业用户可基于协议自行部署、修改与维护。                                                                                                                                                    |

### 6.3 费用对比矩阵（交叉验证总结） ###

|   **费用维度**   |          **Pi（pi.dev）**          |                 **oh-my-pi（omp.sh）**                 |                            **交叉验证结论**                            |
|--------------|----------------------------------|------------------------------------------------------|------------------------------------------------------------------|
|    软件授权费用    |    MIT 开源，完全免费（无订阅、无试用期、无限制）     |              MIT 开源，完全免费（无订阅、无试用期、无限制）               |              两者均无官方收费层，费用差异仅存在于「用户自担的模型 API 成本」维度。               |
|    核心功能访问    |全部核心功能（TUI、四种模式、树形会话、扩展系统、包市场）完全开放|全部核心功能（LSP、DAP、子代理、协作、浏览器自动化、TTSR、Advisor、Rust 核心）完全开放| 无功能门槛差异；差异在于「功能实现方式」：Pi 为「框架原语 + 扩展构建」，oh-my-pi 为「原生集成 + 开箱即用」。  |
|模型接入成本（云端 API）|       用户自担（根据所选提供商的实际计费规则）       |           用户自担（根据所选提供商的实际计费规则，支持 40+ 提供商）            |两者均支持订阅认证与 API Key 认证，计费规则由第三方提供商（Anthropic、OpenAI 等）决定，与代理框架本身无关。|
|   本地模型运行成本   | 支持 Ollama（通过自定义提供商或扩展），零 API 费用  |    原生支持 Ollama、vLLM、LM Studio、llama.cpp，零 API 费用     |         两者均可实现「完全零 API 成本」的本地编码代理体验，差异在于「配置复杂度」与「功能完整性」。         |
|  企业部署与维护成本   |     开源代码可自行部署、修改、维护（无官方支持合同）     |               开源代码可自行部署、修改、维护（无官方支持合同）               |             两者均无官方企业版；企业用户需评估「内部维护能力」与「功能需求匹配度」进行选型。             |

**【费用结论· 交叉验证确认】根据多源信息（官方站点无价格页、GitHub LICENSE 为 MIT、独立评测确认「核心功能完全免费」）的一致性验证，两款产品在「软件本身」维度均为零成本。用户实际支出的核心成本为「模型调用费用」（若使用云端 LLM 提供商）或「本地计算资源」（若使用本地推理引擎）。选择哪一款代理框架，不应基于「价格差异」（因为两者均为零），而应基于「功能需求匹配度」、「团队技术栈适配性」与「长期维护成本预测」。**

## 七、第六部分：第三方服务对接能力

*本节内容基于官方文档（https://pi.dev/docs/latest/providers、https://pi.dev/docs/latest/custom-provider、https://pi.dev/docs/latest/extensions、https://github.com/can1357/oh-my-pi/tree/main/docs）、独立评测（Standard Compute 2026-08-03 对比分析）、开源社区目录（opensourcealternatives.to 功能列表）及实际代码结构（GitHub 仓库依赖与配置文件示例）的交叉验证整理。*

### 7.1 Pi 对接外部服务能力 ###

|   **对接类别**    |                                                                                                                                                        **具体能力与实现方式**                                                                                                                                                        |                                                                                                **配置入口（直接文本格式）**                                                                                                 |                                            **验证状态与限制说明**                                            |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
|LLM 提供商接入（核心对接）|15+ 内置提供商（Anthropic、OpenAI、Google、Azure、Amazon Bedrock、Mistral、Groq、Cerebras、xAI、Hugging Face、Kimi、MiniMax、NVIDIA、OpenRouter、Ollama）；支持订阅认证（OAuth：ChatGPT Plus/Pro、Claude Pro/Max、GitHub Copilot、xAI、OpenRouter、Radius）与 API Key 认证（环境变量或 auth.json 文件）；支持自定义提供商（Custom Provider，通过 models.json 声明 baseUrl、API 规范与 OAuth 流程）。|        环境变量（如 ANTHROPIC\_API\_KEY=sk-ant-...）、/login 交互式认证流程、\~/.pi/agent/auth.json 文件、models.json 自定义条目。完整环境变量映射表地址：https://github.com/earendil-works/pi-mono/blob/main/packages/ai/src/env-api-keys.ts        | 验证状态：官方文档完整列出所有提供商与认证方式（访问时间 2026-08-04）。限制：订阅认证的计费由第三方提供商决定（非 Pi 框架直接收费）；本地模型（Ollama）需用户自行部署推理引擎。  |
|模型上下文协议（MCP）对接 |                                                                        无内置 MCP 客户端（根据 https://pi.dev/ 首页「No MCP」章节明确说明）。但可通过扩展实现：官方包市场提供 pi-mcp-adapter 扩展（https://pi.dev/packages/pi-mcp-adapter），用户也可自行构建 MCP 适配扩展（通过 TypeScript 扩展访问外部 MCP 服务器）。                                                                         |                                                                pi install npm:pi-mcp-adapter（安装官方 MCP 适配扩展）；自定义扩展可在 TypeScript 模块中实现 MCP 客户端逻辑。                                                                 |        验证状态：官方明确说明「No MCP」为设计选择（刻意不内置），而非技术限制。用户可通过扩展实现完整 MCP 集成，但需自行处理服务器发现、工具描述同步与安全边界管理。         |
|  容器化与安全沙箱对接   |                                                                    三种官方容器化模式：Gondolin 扩展（微型 VM 隔离工具执行，主机保留认证与代理核心）、纯 Docker 模式（整个 pi 进程在容器中运行）、OpenShell 沙箱（策略控制的沙箱环境）。无内置「权限弹窗」系统（根据 https://pi.dev/ 首页「No permission popups」章节），用户需通过容器化或自定义扩展实现访问控制。                                                                     |扩展安装：pi install npm:...（Gondolin 相关扩展）；容器配置文件参考 https://pi.dev/docs/latest/containerization；自定义权限扩展参考 https://github.com/earendil-works/pi/tree/main/packages/coding-agent/examples/extensions/permission-gate.ts|验证状态：官方文档提供完整容器化指南（访问时间 2026-08-04）。限制：容器化增加部署复杂度（需 Docker 或微型 VM 环境）；无内置细粒度文件系统访问控制（需用户自行构建或使用容器隔离）。|
|  SDK 与程序化集成   |                                                                                                   提供 SDK（Node.js 嵌入）、RPC 模式（stdin/stdout JSONL 协议）、JSON 事件流模式（--mode json）。支持与外部应用（如 OpenClaw、Slack 自动化、CI/CD 流水线）的深度集成。                                                                                                    |                                          SDK 使用参考 https://pi.dev/docs/latest/sdk；RPC 协议文档参考 https://pi.dev/docs/latest/rpc；JSON 模式参考 https://pi.dev/docs/latest/json。                                           |        验证状态：官方文档完整提供协议规范与集成示例。限制：SDK 当前为 Node.js 生态（非多语言绑定）；RPC 模式需要外部应用处理 JSONL 流解析与错误恢复逻辑。        |
|  外部包与扩展生态对接   |                                                                                       通过 npm 或 git 安装第三方扩展、技能、提示模板与主题。官方包市场（https://pi.dev/packages）提供分类浏览（扩展 / 技能 / 主题 / 提示模板）、下载统计与安装命令复制功能。支持自定义包开发（TypeScript 模块结构）与私有 npm 仓库分发。                                                                                        |                                     安装命令示例：pi install npm:@vigolium/piolium（安全审计扩展）、pi install npm:pi-subagents（子代理扩展）、pi install git:github.com/badlogic/pi-doom（游戏扩展示例）。                                      |   验证状态：包市场可正常访问并显示下载统计（访问时间 2026-08-04）。限制：第三方扩展的安全性与维护状态由作者负责（无官方审核机制）；扩展安装需信任 npm 包或 git 仓库来源。    |
|  本地模型与推理引擎对接  |                                                                                              通过自定义提供商或扩展接入 Ollama（本地 LLM 推理服务）、llama.cpp（高性能本地推理）、vLLM（高吞吐量推理服务）。官方文档提供 llama.cpp 专用指南（https://pi.dev/docs/latest/llama-cpp）。                                                                                               |                                                               自定义提供商配置（models.json 添加 ollama 条目，baseUrl 指向本地服务端口）；/llama 命令（根据文档提示，支持本地路由与模型管理）。                                                                |    验证状态：官方文档确认支持本地模型接入（访问时间 2026-08-04）。限制：本地推理性能依赖用户硬件（GPU 内存、CPU 核心数）；模型下载与管理需用户自行处理（无官方模型市场）。    |

### 7.2 oh-my-pi 对接外部服务能力 ###

|              **对接类别**               |                                                                                                                                      **具体能力与实现方式**                                                                                                                                      |                                                                                             **配置入口（直接文本格式）**                                                                                              |                                                                                                         **验证状态与限制说明**                                                                                                          |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       LLM 提供商接入（核心对接，40+ 提供商）       |原生支持 40+ 提供商（包括 Anthropic、OpenAI、Google、Azure、Amazon Bedrock、Mistral、Groq、Cerebras、xAI、Ollama、vLLM、LM Studio、llama.cpp、Hugging Face 等）；支持订阅认证（OAuth：Claude Pro/Max、ChatGPT Plus/Pro、GitHub Copilot、xAI、OpenRouter）与 API Key 认证（环境变量或配置文件）；支持自定义提供商（models.yml 文件中声明 baseUrl、API 规范与模型列表）。|配置文件路径：\~/.omp/agent/models.yml（提供商配置）、\~/.omp/agent/config.yml（模型角色映射）、环境变量（如 ANTHROPIC\_API\_KEY=sk-ant-...）、/login 交互式认证流程。独立用户指南完整示例地址：https://acchapm1.github.io/tutorials/Oh-My-Pi/omp-beginner-guide|                                   验证状态：官方站点明确列出 40+ 提供商（访问时间 2026-08-04）；独立用户指南提供完整 models.yml 与 config.yml 配置示例（访问时间 2026-08-04）。限制：订阅认证计费由第三方提供商决定；本地模型需用户自行部署推理引擎（Ollama 安装、vLLM 服务器启动等）。                                   |
|     IDE 级工具链对接（LSP + DAP，核心差异点）     |                                                                原生集成 LSP（14 操作、53 语言服务器）与 DAP（28 操作、14 调试适配器），直接嵌入代理工具表面（非外部脚本调用）。支持重构完整性验证（workspace/willRenameFiles）、调试流程控制（attach、breakpoint、step、evaluate、variables）。                                                                |                                      LSP 配置：自动检测项目语言服务器（如 TypeScript 服务器由项目 node\_modules 提供，或通过系统安装的 language-server）；DAP 配置：项目级调试配置文件（参考标准调试协议配置格式，或通过扩展自定义适配器参数）。                                      |验证状态：官方站点§02（LSP）与 §03（DAP）章节提供详细功能说明与截图示例（访问时间 2026-08-04）；独立评测（Standard Compute 2026-08-03）确认「LSP 集成在 6 个评估维度中领先」。限制：LSP 服务器需用户自行安装与配置（如 TypeScript 服务器需 npm 全局安装或通过项目依赖提供）；DAP 适配器需匹配目标语言与调试器版本（如 Python 需 debugpy，Go 需 dlv）。|
|      浏览器自动化与网络搜索对接（原生集成，非扩展实现）      |                                                                      原生浏览器控制（CDP RPC 执行）、网络搜索链（14 个搜索提供商自动选择与链式调用）、网页内容提取（Markdown 格式保留锚点与结构）、PDF 提取、GitHub 页面解析、Stack Overflow 提取、ArXiv 论文摘要、YouTube 视频理解、本地视频分析。                                                                      |                                     浏览器自动化通过内置工具直接调用（无需额外安装）；网络搜索提供商配置可通过 models.yml 或环境变量自定义（如选择 Perplexity、Brave、Parallel 等）；浏览器中继服务（默认 my.omp.sh）用于协作功能，非浏览器控制所需。                                      |                      验证状态：官方站点§08 章节提供完整网络搜索与浏览器自动化说明（访问时间 2026-08-04）；截图示例确认实际操作流程（ArXiv PDF 读取、搜索结果排名、结构化 Markdown 提取）。限制：浏览器控制依赖本地浏览器安装（Chrome / Chromium）与可访问性设置；网络搜索结果的准确性与时效性依赖第三方搜索提供商（非代理框架直接控制）。                      |
|         协作中继与团队工作流对接（原生集成）          |                                                                                      原生协作功能（/collab）：实时会话共享（读写协作与只读观看）、终端加入（omp join）、浏览器访问（无需安装）、二维码快速分享。数据加密（AES-256-GCM，客户端密钥生成，中继服务器无密钥访问能力）。                                                                                       |                                                   协作配置：默认使用 my.omp.sh 中继服务（WSS 协议）；可自定义中继服务器（通过配置文件修改 relay URL）；协作帧密封（Sealed Client-Side）确保服务器无法解密内容。                                                    |                         验证状态：官方站点§07 章节提供完整协作说明与截图（访问时间 2026-08-04）；协作中继服务 URL（https://my.omp.sh）可直接访问（返回服务状态页面）。限制：协作依赖稳定的网络连接（WSS 协议）；实时协作的延迟与同步性能受网络条件与中继服务器负载影响；浏览器访问的功能完整性可能低于终端原生访问（如无法直接执行命令）。                          |
|       子代理与并发任务对接（原生集成，非扩展实现）        |                                            原生子代理系统：任务分解（Task Decomposition）、独立工作树（Isolated Worktrees，每个子代理在独立文件系统副本中运行）、结构化结果合并（Schema-validated Object）、子代理间通信（IRC 通道：DM、广播、回复）、并发控制（默认 32，0 = 无限制）。内置 8 种隔离后端（Copy-on-Write 优先，确保文件修改安全）。                                             |                                                         子代理配置：可通过扩展或配置文件自定义子代理行为（如模型选择、工具限制、隔离后端选择）；任务分解策略可通过提示工程（Prompt Engineering）或扩展实现高级分解逻辑。                                                         |                   验证状态：官方站点§05 章节提供完整子代理说明、截图示例与技术细节（访问时间 2026-08-04）；独立评测（Standard Compute 2026-08-03）确认「子代理在并发任务处理维度领先」。限制：子代理并发数受系统资源限制（内存、文件描述符、进程数）；复杂任务的分解质量依赖主代理的提示设计与任务描述清晰度；子代理间的协调复杂度随并发数增加而非线性增长。                   |
|时间旅行规则（TTSR）与评审模型（Advisor）对接（高级上下文工程）|                                                           TTSR：规则以正则触发（文本流、思考流、工具流三种模式），仅在匹配时注入系统提示（0 令牌税直至触发），并在上下文压缩后依然生效（Survives Compaction）。Advisor：第二个独立模型（独立上下文、独立模型配置）实时审查主代理操作，注入旁白（aside）、担忧（concern）或硬阻断（blocker）。                                                           |                    TTSR 配置：规则文件（支持正则表达式定义触发条件与规则内容）；触发模式选择（interrupt / repeat / context injection）。Advisor 配置：/advisor 命令查看状态；模型配置（可指定任意支持的提供商与模型）；严重级别设置（aside / concern / blocker）。                     |    验证状态：官方站点§04（TTSR）与 §06（Advisor）章节提供完整技术说明与截图示例（访问时间 2026-08-04）；独立用户指南提及「规则在上下文压缩后依然生效」的实际应用场景。限制：TTSR 的触发精度依赖正则表达式设计质量（过于宽泛可能导致误触发，过于严格可能漏触发）；Advisor 增加了每轮操作的计算成本（第二个模型同时运行）；双模型监督可能引入「审查延迟」（Advisor 注入需要主代理处理额外信息）。     |

### 7.3 对接能力对比矩阵 ###

|  **对接维度**   |                                       **Pi（pi.dev）能力与实现方式**                                       |                                           **oh-my-pi（omp.sh）能力与实现方式**                                           |                                            **选型建议（基于交叉验证结论）**                                            |
|-------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| LLM 提供商覆盖范围 |                                15+ 内置提供商 + 自定义提供商（Custom Provider）                                |                                             40+ 提供商（原生支持，包括本地推理引擎）                                              |   若团队使用主流云端提供商（Anthropic、OpenAI、Google），两者均可满足；若需要接入特殊本地引擎（如企业私有化部署的 vLLM 集群）或冷门提供商，oh-my-pi 的原生支持更全面。   |
| 模型认证与计费灵活性  |                  订阅认证（OAuth：6 种订阅类型）+ API Key 认证（环境变量 / auth.json）；计费由第三方提供商决定。                   |订阅认证（OAuth：支持 Claude、ChatGPT、GitHub Copilot、xAI 等）+ API Key 认证（models.yml / 环境变量）；计费由第三方提供商决定；支持「零 API 成本」本地模型运行。|            两者在认证与计费模式上高度一致（均支持订阅 + API Key + 本地模型）；差异在于「配置复杂度」与「本地模型支持深度」（oh-my-pi 原生集成更完整）。             |
| IDE 工具链集成深度 |                          无内置 LSP / DAP；需通过扩展实现部分能力（如代码搜索、简单重构）；无原生调试控制。                           |                      原生 LSP（14 操作、53 服务器）+ DAP（28 操作、14 适配器）直接嵌入代理工具表面；支持重构完整性验证与真实调试流程控制。                      |若团队核心需求为「代码重构安全性」与「调试效率」（如大型代码库重命名、复杂调试场景），oh-my-pi 的原生 IDE 集成具有显著优势；若团队偏好「极简框架」并计划自行构建定制化工具链，Pi 的扩展哲学更适合。|
|浏览器自动化与网络信息获取|                    无内置浏览器控制；可通过扩展（pi-web-access 包）实现网页搜索、PDF 提取、GitHub 克隆等功能。                     |                             原生浏览器控制（CDP RPC）、网络搜索链（14 提供商自动选择）、网页内容结构化提取、PDF/视频分析。                              |              若工作流高度依赖「网络信息检索」与「网页内容处理」（如技术文档分析、竞争对手网站监控、论文摘要生成），oh-my-pi 的原生集成大幅降低开发与维护成本。               |
|  团队协作与实时共享  |                 无内置协作功能；可通过 tmux 会话共享、外部协作工具（如 VS Code Live Share）或自定义扩展实现部分协作能力。                 |                              原生协作功能（/collab）：实时会话共享、读写协作、只读观看、终端与浏览器双端访问、客户端加密传输。                               |      若团队需要「实时代码审查协作」或「远程结对编程」（Pair Programming），oh-my-pi 的原生协作功能提供开箱即用的解决方案；Pi 用户需依赖外部工具或自行开发协作扩展。       |
| 多任务并发与任务分解  |                          无内置子代理系统；可通过扩展（如 pi-subagents 包）实现简单任务分解与并行执行。                           |                             原生子代理系统：独立工作树、结构化结果合并、子代理间 IRC 通信、并发控制（默认 32）、8 种隔离后端。                              |      若工作流涉及「大规模并行重构」（如多个模块同时修改）或「复杂任务分解与协调」（如安全审计、多文件重构、测试生成并行执行），oh-my-pi 的原生子代理系统提供更高效率与更低维护复杂度。       |
| 上下文工程与规则控制  |                   上下文压缩（Compaction）可通过扩展自定义（如主题压缩、代码感知压缩）；无原生「时间旅行规则」或「实时评审」机制。                   |                              原生时间旅行规则（TTSR，正则触发、上下文压缩后生效）、原生评审模型（Advisor，双模型实时监督）。                              |   若团队对「上下文管理精度」与「操作安全监督」有高要求（如金融、医疗、关键基础设施代码），oh-my-pi 的高级上下文工程功能提供额外保障层；Pi 用户需通过扩展构建类似能力（开发与维护成本更高）。    |
|  容器化与安全隔离   |                 三种官方容器化模式（Gondolin 微型 VM、纯 Docker、OpenShell 沙箱）；无内置权限弹窗系统（设计选择）。                  |                         无官方容器化文档（根据 GitHub 仓库与官方站点信息）；安全隔离依赖操作系统进程隔离、用户自定义脚本或外部容器编排工具。                          |    若企业环境有严格的安全隔离要求（如「工具执行必须在微型 VM 中进行」），Pi 的官方容器化方案提供更成熟的参考实现；oh-my-pi 用户需自行构建容器化部署方案（或依赖操作系统级安全机制）。     |
| 开源生态与社区活跃度  |GitHub 星标 83.3k+（根据访问时显示数据），提交频率极高（最新提交 1 小时前），包市场活跃（多款扩展月下载量超 10 万次），Discord 社区活跃（根据 README 链接信息）。| GitHub 星标 21.7k+（根据访问时显示数据），提交频率高（最新提交 8 小时前），版本迭代快速（17.2.8 版本发布于 2026-08-03），独立评测与用户指南社区活跃（根据标准计算与开源替代品目录信息）。  |    两者均为活跃的开源项目；Pi 的社区规模更大（星标数与包市场生态更成熟），oh-my-pi 的迭代速度更快（版本号更高、提交频率密集）。企业选型可结合「社区支持需求」与「长期维护稳定性」综合评估。    |

## 八、第七部分：差异总结、选型建议与未来趋势

### 8.1 核心差异总结 ###

根据全文内容的系统性整理与多源信息交叉验证，两款产品在「技术架构」、「功能哲学」、「使用体验」与「生态定位」四个维度存在结构性差异。以下为精简总结：

|  **差异维度**   |                                                   **Pi（pi.dev）核心特征**                                                    |                                         **oh-my-pi（omp.sh）核心特征**                                         |
|-------------|-------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
|  技术架构与核心引擎  |                TypeScript / Node.js（Bun 运行时）；多包工作区（monorepo）；统一 LLM API 层（pi-ai）与代理运行时（agent-core）分离设计。                 |                    Rust 原生核心引擎（约 100k+ 行代码）；独立优化工具调用、状态压缩与编辑锚定逻辑；非 Node.js 封装的独立执行环境。                    |
| 设计哲学与功能实现策略 |「极简原语」（Primitives, not features）：刻意不内置子代理、计划模式、权限弹窗、背景 Bash 执行、调试控制、浏览器自动化、协作功能；所有高级功能通过扩展、技能、提示模板与包系统实现（用户自行构建或安装第三方扩展）。|   「电池已装」（Batteries Included）：原生集成 LSP、DAP、子代理、评审模型、协作中继、浏览器自动化、时间旅行规则等高级功能；用户无需安装额外扩展即可使用完整 IDE 级工具链。    |
| 编辑安全与重构完整性  |                          基础文件写入（无原生哈希验证）；重构完整性依赖用户提示设计精度或扩展增强（如安装 pi-subagents 扩展实现更完整的重构验证）。                           |    哈希锚定编辑（Hashline）：每次写入前计算文件内容哈希，编辑时验证哈希匹配；LSP 完整重构验证（workspace/willRenameFiles 确保重导出、桶文件、别名导入同步修改）。    |
| 调试能力与错误定位效率 |                                无内置调试控制；用户需依赖外部调试器（如 VS Code 调试面板、命令行 gdb/lldb）或自行构建调试扩展。                                |  原生 DAP 集成（14 适配器、28 操作）：直接在代理内部控制调试流程（附加、断点、步进、评估、帧检查、变量查看）；支持 C（lldb）、Go（dlv）、Python（debugpy）等多语言调试。   |
| 多任务协同与并发控制  |                                    无内置子代理系统；任务分解与并行执行需通过扩展（如 pi-subagents 包）或外部脚本实现。                                    |               原生子代理系统：独立工作树、结构化结果合并、IRC 子代理间通信、并发控制（默认 32、可无限制）、8 种隔离后端（Copy-on-Write 优先）。               |
|  团队协作与知识共享  |          无内置协作功能；会话分享依赖 /share（上传至 GitHub Gist，生成公开渲染 URL）；团队协作需依赖外部工具（如 tmux 会话共享、VS Code Live Share）或自定义扩展。           |            原生协作功能（/collab）：实时会话共享（读写协作与只读观看）、终端与浏览器双端访问、二维码快速分享、客户端加密（AES-256-GCM，中继无密钥访问能力）。            |
|上下文工程与操作安全监督 |       上下文压缩（Compaction）可通过扩展自定义（如主题压缩、代码感知压缩）；无原生「实时规则注入」或「双模型监督」机制；安全边界依赖容器化（Gondolin、Docker、OpenShell）或用户自定义扩展。       |       原生时间旅行规则（TTSR，正则触发、上下文压缩后生效、0 令牌税直至触发）；原生评审模型（Advisor，独立上下文与模型配置的第二模型实时审查主代理操作，注入旁白/担忧/硬阻断）。       |
|浏览器自动化与网络信息获取|                         无内置浏览器控制与网络搜索链；可通过扩展（如 pi-web-access 包）实现网页搜索、PDF 提取、GitHub 克隆、视频分析等功能。                         |    原生浏览器控制（CDP RPC 执行）、网络搜索链（14 提供商自动选择与链式调用）、网页内容结构化提取（保留 Markdown 锚点与结构）、PDF/ArXiv/YouTube/本地视频分析。     |
|开源生态规模与社区活跃度 |             GitHub 星标 83.3k+（访问时数据），提交频率极高（最新提交 1 小时前），包市场活跃（多款扩展月下载量超 10 万次），Discord 社区活跃（根据 README 链接信息）。             |GitHub 星标 21.7k+（访问时数据），提交频率高（最新提交 8 小时前），版本迭代快速（17.2.8 版本发布于 2026-08-03），独立评测与用户指南社区活跃（根据标准计算与开源替代品目录信息）。|

### 8.2 选型建议 ###

根据全文内容的系统性分析与多源信息交叉验证，以下选型建议适用于不同技术背景、团队规模与工作流需求的开发者与工程团队：

### **推荐选择 Pi（pi.dev）的场景** ###

• 团队或个人偏好「极简框架」哲学，希望完全掌控代理行为与功能构建过程（而非依赖预构建功能）。

• 已有成熟的内部工具链（如自定义调试流程、专有协作平台、企业内部 LLM 服务接入方案），需要代理框架提供「最小干扰」的基础能力。

• 计划构建专有扩展生态（如企业内部安全审计扩展、定制化代码生成技能、专有提示模板库），并将扩展作为核心知识资产长期维护。

• 对「上下文管理」与「会话历史结构」有高度定制需求（如需要实现特殊压缩策略、分支管理逻辑、会话导出格式），并愿意通过 TypeScript 扩展实现这些能力。

• 技术团队具备较强的 TypeScript / Node.js 开发能力（用于扩展开发与框架定制），且对 Rust / 原生引擎开发不熟悉或无相关维护资源。

### **推荐选择 oh-my-pi（omp.sh）的场景** ###

• 团队或个人需要「开箱即用」的完整终端编码代理（无需额外安装扩展即可使用 LSP 重构、DAP 调试、浏览器自动化、团队协作、子代理并发等功能）。

• 核心工作流高度依赖「代码重构安全性」（如大型代码库重命名、跨模块重构）与「调试效率」（如复杂多语言调试场景、远程服务器调试），需要原生 IDE 级工具集成。

• 团队需要「实时协作」能力（如远程结对编程、实时代码审查、分布式团队同步开发），且希望协作功能与代理核心深度集成（而非依赖外部工具）。

• 工作流涉及「大规模并行任务处理」（如多个模块同时重构、测试生成与代码修改并行执行、安全审计与修复并行处理），需要高效的任务分解与并发控制机制。

• 对「上下文管理精度」与「操作安全监督」有高要求（如金融、医疗、关键基础设施代码开发），需要原生时间旅行规则与双模型评审机制提供额外保障层。

• 技术团队不具备强大的 TypeScript 扩展开发能力，但需要立即获得高效的编码代理体验（无需投入大量开发资源构建自定义功能）。

### **混合使用与迁移策略建议** ###

• 对于大型技术组织，可考虑「混合部署」策略：核心开发团队使用 oh-my-pi 获得完整工具链与协作能力；专门的「代理平台团队」使用 Pi 构建企业专有扩展生态（如安全审计、合规检查、内部知识库集成），并通过 SDK 或 RPC 模式将 Pi 扩展与 oh-my-pi 工作流集成。

• 对于从 Pi 迁移到 oh-my-pi 的团队，建议采用「渐进式迁移」：先在非关键项目中试用 oh-my-pi 的原生功能（如 LSP 重构、DAP 调试、协作功能），验证功能匹配度与团队适应度；再逐步将核心项目迁移至 oh-my-pi，并根据实际需求保留 Pi 扩展生态（如通过 SDK 模式将 Pi 扩展作为独立服务运行）。

• 对于从传统 IDE（如 VS Code、IntelliJ IDEA）迁移到终端编码代理的团队，建议优先评估 oh-my-pi 的「IDE 级工具集成」能力（如 LSP 重构验证、DAP 调试控制）是否满足现有工作流需求；若现有工作流高度依赖 IDE 特定功能（如高级重构分析、集成测试运行、可视化调试面板），则需评估终端代理的功能覆盖范围与迁移成本。

### 8.3 未来趋势与生态演进观察 ###

*根据两款产品的最新提交频率、版本迭代速度、社区讨论方向与独立评测趋势，以下为对未来演进方向的观察（注意：以下内容包含基于现有信息的推测分析，非官方确认的路线图）：*

### **Pi（pi.dev）的潜在演进方向** ###

• 根据 GitHub 仓库的高频提交（最新提交 1 小时前，截至 2026-08-04）与包市场活跃度（多款扩展月下载量超 10 万次），Pi 生态可能继续向「扩展优先」与「社区驱动」方向发展：更多专业领域扩展（如安全审计、合规检查、领域特定语言支持）将由社区贡献并通过包市场分发。

• 根据官方文档中「无内置 MCP」的明确说明（设计选择而非技术限制），未来可能出现更成熟的官方 MCP 适配扩展（如 pi-mcp-adapter 的进一步增强版本），或由社区主导开发全面的 MCP 集成方案。

• 根据容器化文档（https://pi.dev/docs/latest/containerization）的完整性与 Gondolin 扩展的存在，企业安全需求可能推动「容器化默认配置」或「微型 VM 隔离标准化」的进一步发展（如官方提供预配置的容器镜像或一键容器化部署脚本）。

• 根据 RFC 站点（https://rfc.earendil.com/keyword/pi/）的信息，长期计划可能涉及「代理框架标准化」（如统一的扩展协议、多语言 SDK 绑定、企业部署参考架构）与「上下文工程标准化」（如标准化的压缩算法接口、会话格式规范、知识库集成协议）。

### **oh-my-pi（omp.sh）的潜在演进方向** ###

• 根据快速版本迭代（17.2.8 版本发布于 2026-08-03，提交频率密集）与独立评测趋势（Standard Compute 2026-08-03 评测确认 oh-my-pi 在 4 个维度领先），oh-my-pi 可能继续强化「原生 IDE 集成」与「高级上下文工程」方向：LSP 操作可能扩展至更多语言服务器（如新增冷门语言或企业内部 DSL 支持），DAP 适配器可能增加更多调试协议版本（如支持新版本调试协议的增强功能）。

• 根据子代理系统的技术深度（独立工作树、结构化结果合并、IRC 通信）与评审模型机制（独立上下文、双模型监督），未来可能出现「更智能的任务分解策略」（如基于代码依赖图的自动分解、基于历史成功率的模型选择优化）与「更精细的监督机制」（如多层级评审、领域特定评审规则库）。

• 根据协作功能的原生集成（客户端加密、中继无密钥访问、浏览器与终端双端访问）与浏览器自动化能力，未来可能向「分布式团队开发平台」方向演进：如集成项目管理功能（任务分配、进度跟踪）、知识库共享（团队级提示模板与技能库）、以及更深度的浏览器集成（如直接在浏览器中编辑代码并同步到终端代理）。

• 根据本地模型支持的完整性（Ollama、vLLM、LM Studio、llama.cpp 原生支持）与零 API 成本运行能力，企业私有化部署需求可能推动「本地推理优化」与「混合云-本地部署方案」的发展（如智能路由策略：简单任务由本地小模型处理，复杂任务由云端大模型处理，根据任务类型与延迟要求动态选择）。

### **两款产品的生态互动与竞争关系观察** ###

• 根据技术关系分析（oh-my-pi 基于 Pi 构建，但采用独立 Rust 核心与原生功能集成策略），两款产品可能形成「互补而非完全替代」的生态关系：Pi 提供「极简可扩展框架」与「成熟扩展生态」，适合构建企业专有工具链；oh-my-pi 提供「完整开箱工具链」与「高级上下文工程」，适合快速获得高效编码代理体验。企业与团队可根据实际需求选择单一方案或混合部署（如核心开发使用 oh-my-pi，专有扩展开发使用 Pi）。

• 根据开源社区的活跃度与独立评测趋势，两款产品的竞争焦点可能从「功能完整性」转向「上下文工程深度」与「团队协作效率」：未来的关键差异点可能不再是「是否支持 LSP 或 DAP」，而是「LSP 重构的准确率与完整性」、「DAP 调试的响应速度与信息精度」、「子代理任务分解的智能程度」、「协作会话的同步延迟与数据安全保障」等更精细的技术指标。

• 根据 MIT 开源协议与无官方企业版的现状，两款产品的商业化路径可能依赖「社区支持服务」、「企业定制开发咨询」、「托管服务」（如官方提供的协作中继服务 my.omp.sh 可能未来引入企业级功能或使用限制）或「第三方工具集成」（如将代理框架与现有 IDE、CI/CD 平台、项目管理工具深度集成，提供「代理增强的开发平台」整体解决方案）。

**【时效提示】本内容基于截至 2026 年 8 月 4 日（亚洲/上海时区）的官方公开资料、GitHub 仓库最新提交记录、官方文档页面访问验证、独立第三方评测（Standard Compute 2026-08-03、Stork.ai 2026-07-02、opensourcealternatives.to 2026-06-12、usagepricing.com 2026-06-16、独立用户指南 2026 年发布）及开源社区信息的交叉验证整理。技术生态（尤其是开源代理框架、LLM 提供商 API、终端编码工具）演进速度极快，功能、价格、安装方式与第三方集成状态可能在本内容发布后发生显著变化。强烈建议读者在实际应用前访问以下官方渠道获取最新信息：Pi 官方站点 https://pi.dev/、oh-my-pi 官方站点 https://omp.sh/、Pi GitHub 仓库 https://github.com/earendil-works/pi、oh-my-pi GitHub 仓库 https://github.com/can1357/oh-my-pi。**

![](../_media/pi-vs-oh-my-pi/猿小猴子_f61ZfTCsCgGZ1mQW1ARcKA_41.png)

