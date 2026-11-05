---
type: Entity
title: "Grok Bot"
description: "Cursor/xAI 侧长期驻场的工程多智能体产品：人做关键判断，Engineering Bot 带队，Cloud Agent 进仓执行。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T02:30:00Z }
related:
  - role-first-agent
  - grok-build
  - raft
  - puffo
  - mena
  - engineering-bot
  - playbook-feedback-loop
  - delivery-harness
  - oto-dock
  - pstack
sources:
  - ../references/jinchenma-grok-bot-guide.md
  - ../references/javaguide-grok-bot-engineering.md
  - ../references/usegrokbot-site.md
  - ../../../raw/articles/Codez/Every AI tool you have used so far waits for you. You open it, you ask, it answers, you.md
  - ../../../raw/articles/Miles Deutscher/Grok Bot－ The Ultimate Guide.md
  - ../../../raw/articles/Matt Van Horn/Every Grok Bot Hack I Know (Aug 2026).md
  - ../../../raw/articles/lifcc/Grok Bot 上线 17 天。有好多人问我这玩意到底能干啥？.md
  - ../../../raw/articles/Mai Yang/X 上最值得关注的 21 个 Grok Bot 探索者.md
  - ../../../raw/articles/小互/Grok Bot 内部实践指南：.md
  - ../../../raw/articles/Su/还在手搓bot？官方偷偷放出的 10 个 Bot 模板，导入就能用.md
  - ../../../raw/articles/lauren/how i create high quality bots and manage my team.md
---

# Identity

**Grok Bot** 是面向工程协作的多智能体产品形态（非「再开一个写代码窗口」）：人保留产品取舍与高影响决策；长期驻场的 [Engineering Bot](../concepts/engineering-bot.md) 接任务、跟进 Cloud Agent；Cloud Agent 进具体仓库改代码、测、开 PR。

## Mechanism

验收强调可复查证据（截图须体现需求变化、测试命令与 Diff）；共享看板接续任务；运营/元 Bot 复盘失误后写入 Playbook，供其他 Bot 加载（见 [Playbook 反馈闭环](../concepts/playbook-feedback-loop.md)）。

官方 Bot 市场（x.ai/bot/marketplace）把团队内部在用的模板开放出来（Su，2026-10）：帮造 bot 的 bot（dr eggbot）、盯云端智能体 PR 的（Lingxi's Engineer Bot，合并留给人）、真机走产品报 bug 的（Startup QA Bot）、Figma→开发规格、竞品盯梢、营销物料（花钱发帖前必批）、CRM 购买信号、SaaS 砍价邮件（起草给人审）。十个模板的共同模式：**一 bot 只干一件事，且写清人在哪一步把关**——合并代码、批剪辑方案、批花钱、审邮件这些不可逆动作全部留给人。为什么从模板起步而不是白纸：范围已被作者踩坑收窄（从零写最常犯的错是让一个 bot 什么都管）、审批线已画好、改比写容易（只改工具/语气/输出格式/保存位置）。Su 自己的团队是「主管+专员」：需求只发给主管，主管拆任务给专员并写清交付物与验收，对外发送/付款/删除一律先出草稿；配套开源 bot-team-playbook（8 身份 35 提示词）——但别 35 个全上，先一主管加两专员跑一周再增减。lauren（poteto，pstack 作者）的团队指南同向：**几个好 bot 好过一大队**；让 bot 在你教它做事时顺手给自己造 skill（可存私有仓长期保留）；接上 connectors 与 vault、把工作要用到的工具都给它，甚至让它自己设邮箱注册账号做隔离；按「怎么给实习生 onboard」反推：先自我介绍你的工作，再问它怎么帮你自动化；偏爱 voice 模式脑倒后让 bot「用自己的话复述一遍」确认理解。

对照本域 [Delivery Harness](../concepts/delivery-harness.md)：同属「仓外控制面」，Grok Bot 更强调角色分层与任务接续，Harness 更强调合同/边界/证据门禁/修复写回。社区怎么用见 UseGrokBot 站点（筛选公开帖与用例，不是产品本体）。

## Boundaries

不是再开一个写代码窗口，不是 [Grok Build](./grok-build.md) CLI，不是 [pstack](./pstack.md) 技能包。21 人探索者清单不在本页展开。第一份 Bot 怎么雇（岗位合同、试用、晋升）见 [Role-first Agent](../concepts/role-first-agent.md)，不在本页展开招聘手册。

## Related

- [Role-first Agent](../concepts/role-first-agent.md)
- [Grok Build](./grok-build.md)
- [Raft](./raft.md)
- [OtoDock](./oto-dock.md)
- [Puffo](./puffo.md)
- [mena](./mena.md)
- [Engineering Bot](../concepts/engineering-bot.md)
- [Playbook 反馈闭环](../concepts/playbook-feedback-loop.md)
- [pstack](./pstack.md)
- [Delivery Harness](../concepts/delivery-harness.md)
