---
type: Concept
title: "Role-first Agent"
description: "雇岗位不雇任务：一句话所有权、可检查的完成条件、可逆才放手。权限按能否撤回划；三次试用再晋升，不是一次 demo。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - ai-job-search
  - multi-agent-collaboration-patterns
  - grok-bot
  - engineering-bot
  - playbook-feedback-loop
  - auto-mode
  - delivery-harness
sources:
  - ../../../raw/articles/Codez/How to Build a team of AI Agents that actually work together in 8 Steps (Full-course).md
  - ../references/jinchenma-grok-bot-guide.md
  - ../../../raw/articles/distort/Grok Bot: How to Hire Your First AI Employee (Full Guide).md
---

# Definition

**Role-first Agent** 从「这份工作长期归谁」出发，而不是从一轮聊天或一个代码仓出发。岗位说明保存长期职责、数据源、判断标准与交付物；单次消息只带当天任务。

distort（2026-09-30）把这件事写成雇人：聊天机器人给答案；Bot 登录工具、在持久电脑里多步干完活。你在做的不是写 prompt，是**给一个岗位编制**。问的不是模型够不够聪明，是**它已经挣到多少权限**。

适合结果反复出现、工具相对稳定、方法可逐步说清、可验收、可划审批边界的工作。反例：先挂「营销总监」却没有可检查的产出。应写成「每周五交付带出处的竞品变动报告」。没有验收形状的角色，只是换皮聊天窗。

## Mechanism

1. **雇岗位，不雇任务。** 「总结这五篇文章」十分钟结束、什么也测不到。「你负责竞品监测」才能评估、改进、最终信任。一句话所有权：超过六个不相干动词，就是一个人干四份工，失败无法归因。
2. **五字段。** Owns / Inputs / May / Must ask before / Done when。六周后还该成立。角色、历史、安全政策、重试不要塞进同一块会无限变肥的指令；忘了偏好是状态问题，开错工具是路由，发出了该停在草稿的东西是权限，同一条死路重试六次是 loop。
3. **第一份工要无聊。** 用来产证据，不是产价值。频率给信号，可逆给容错。好：去重昨日客服、带日期出处的竞品变动、复现 bug。坏：发送、发布、购买、删除、对客。先要文本预演：不准执行，按顺序列工具和拿不准的判断。
4. **完成条件可自检。** 别写 useful / thorough。写「90 天内 10 条不重复来源，各带日期、作者、URL、支撑的原句」。再加一句：不确定就停下来问。默认「自行判断」会在发件箱里迟到三周才被发现。
5. **一把钥匙，不是钥匙串。** 权限按**能否撤回**划，不按重不重要。搜索/草稿/预演不问；发送/发布/删改/动生产/动钱必问。「起草 40 封」和「发出去」必须拆开。可逆的 90% 先做完，不可逆的停在 staged。同一账号上的 Bot **共享**文件、浏览器会话和登录：名字是视觉边界，不是安全边界。不同信任级就分账号。登录墙只交会话，不交密码。
6. **试用三次。** 一次成功是事件，可靠是模式。Run1 全程看；Run2 换同类任务，不靠口头提醒昨天的错，测的是角色/完成条件/权限的修复是否站住；Run3 不插手，只批不可逆。量完成率、干预次数、返工、到验收的时间、每次验收成本。修规则不修那一份报告。Loop 要有成功定义、检查方式、失败是什么、重试次数、用尽后怎么办。
7. **晋升是闸门，可降级。** L0 观察 → L1 准备可逆工作 → L2 跑完停在不可逆前 → L3 定时/触发自跑并交回执 → L4 调度其他 Bot。门：连续五次干净、验证每次过、无未处理副作用、回滚测过、审批真的拦住过一次。质量掉、集成变、连续两周手改，就降一级。自主权是运行时特权，不是八月 demo 发的终身人格。
8. **每周回执。** 按时跑了没有、输出对不对（不只是有没有）、明天消失我会不会发现。第三个是否，删掉。第二份 Bot 只在真瓶颈出现时雇：研究/写作、建造/检查、权限分叉。交接传目标、产物、已做决定、约束、未决问题和下一闸，不传整段聊天。

五种常见死法：万能工；没有 Done when；默认自行判断；建造者兼检查者；把第一次成功直接挂上定时。

与 [Engineering Bot](./engineering-bot.md) 同属仓外长期角色：Engineering Bot 专指带队 Cloud Agent 做工程交付；本页更泛。产品组合见 [Grok Bot](../entities/grok-bot.md)。失误写回岗位默认见 [Playbook 反馈闭环](./playbook-feedback-loop.md)。工具调用分类放行见 [Auto Mode](./auto-mode.md)，本页管的是岗位合同，不是分类器。

组队时不要理解成「克隆 20 个相同角色」。多执行体的从众和冲突见 [多智能体治理](./multi-agent-governance.md)。一个岗位一份合同才能放进图里当节点，见 [Graph Engineering](./graph-engineering.md)。

## Boundaries

不是一轮聊天或一个代码仓，不是空头衔，不是克隆 20 个相同角色。没有验收形状就只是换皮聊天窗。不是 [Grok Bot](../entities/grok-bot.md) 产品卡，不是 [Engineering Bot](./engineering-bot.md) 的 Cloud Agent 带队说明书。不是把第一次成功挂成永远在跑的定时任务。

## Related

- [AI Job Search](../entities/ai-job-search.md)
- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
- [Grok Bot](../entities/grok-bot.md)
- [Engineering Bot](./engineering-bot.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [Auto Mode](./auto-mode.md)
- [Delivery Harness](./delivery-harness.md)
