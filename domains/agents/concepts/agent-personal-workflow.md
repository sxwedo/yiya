---
type: Concept
title: "Agent 个人工作法"
description: "一线个人驾驭 agents 的姿态（Thorsten Ball / Addy Osmani / Karpathy / 等实践者）：prompt What 不 How、全 SDLC 可见、要不可反驳的证据；新模型少写提示词；守住批判性思维不滑向认知投降；只审高爆炸半径。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-26T13:30:00Z }
related:
  - amp
  - coding-agent-workflow
  - risk-scaled-code-review
  - evidence-gate
  - model-ambition
  - plan-with-code
  - loop-engineering
  - gnhf
sources:
  - ../../../raw/articles/Thorsten Ball/How I work with Agents.md
  - ../../../raw/articles/Addy Osmani/You're probably overprompting Claude.md
  - ../../../raw/articles/Addy Osmani/Critical thinking when agents do the work.md
  - ../../../raw/articles/fanxing321/Argon & Opus & Astra 的区别（个人观点）.md
  - ../../../raw/articles/Andrej Karpathy/HackerTube.md
---

# Definition

**Agent 个人工作法**（多位一线实践者的个人姿态）：一线个人怎么跟 agent 干活，而不是团队流程怎么设计。核心姿态一句话：**人守 What 和验收，agent 包掉整个 How 与迭代；人花在陪跑上的每一秒都是设计错了。**

对照：[Coding Agent Workflow](./coding-agent-workflow.md) 是团队三阶段循环（sources 已满，本页是其个人侧支）；[风险分层代码评审](./risk-scaled-code-review.md) 是团队合入路径，本页「只审爆炸半径」是同一个人的极简版；[Evidence Gate](./evidence-gate.md) 是交付状态门禁，本页把「要证据」下沉为 AGENTS.md 常驻句；[模型野心四型](./model-ambition.md) 讲把任务抬到哪一层，本页讲抬上去之后每天怎么活。

## Mechanism

1. **用最强模型，别为省钱用笨的。** 错 10% 你不知道是哪 10%，多轮重试比差价贵；「便宜 50% 但随机笨 20% 的通才」不值得雇。slop 焦虑也过时了：现在的产出他不认为会让仓不可维护。
2. **Prompt 写 What，不写 How。** 「让字节码编译器和 VM 能多快做多快，不到 2x 不许停」「最终形态是这样」。描述终态，路径交给 agent。
3. **全 SDLC 可见性治幻觉。** 看不到就编：让 agent 端到端跑自己 build 的东西、读产线日志、部署、盯 rollout、发版、切旗标、triage bug 报告、回客户邮件；配 SDLC 工具插件（bug 报告、群发邮件、「系统健康吗」、发旗标）。副作用：本机开发反而别扭（多 agent 资源冲突），远程机器顺。
4. **不陪 agent 迭代，让它造迭代工具。** 不是「试试这个……不对换那个」，而是「生成 20 个变体 + 一个能组合测试的小页」。问题空间同理：「给 4 个慢的假说，然后四个全查」。
5. **要不可反驳的证据。** 端到端走查、demo 视频、前后数字；把 "this is not evidence" 写进 AGENTS.md，逼自己对证据形状长出直觉。仓里堆的 agentic knowledge（AGENTS.md、skills、脚本、文档）要评测 agent 到底用不用：盲开五个 agent，control vs treatment。
6. **异步大任务，让 agent 等人。** 还在担心 TTFT 就说明用法错了；给更大的任务、批量交代，不来回。schedule / wake-up / heartbeat 是杀手锏：「2 小时后看日志」「上线了叫我」「每天 9 点查一遍」（对照 [gnhf](../entities/gnhf.md) 过夜跑）。
7. **不手管上下文。** 盯「300k 还是 380k」是浪费脑子；compaction 够好。一线程一任务，短则 46 条长则 3714 条消息都行。线程即公司记忆（Amp 里线程连 git commit）：「当初为什么这么做」查线程，避免重复劳动。
8. **只审高爆炸半径代码。** 全仓 <5 个核心文件和 DB migration 才人审；闭包还是类、类型、命名、甚至重复都不管。四个替代问题：能用吗？图上能看懂吗？agent 端到端测过吗？一个月后还能改吗？

Karpathy（HackerTube，2026-10-31）把同一姿态推到极致：周六上午被 YouTube 的 slop 惹恼，交给 Opus 5.5，两小时后 hackertube.org 上线（HN 评论文→Sonnet workflow 过滤→6454 个视频 150 主题）。他自己已不做任何传统工程（不读写代码、不进终端），只跟 Claude 说话，自己只做盯页面挑 UI 毛病的活——这类反馈说出口极容易、手动改极繁琐，正是该外包的那一类。

Addy Osmani 补了姿态的另一面：**别过度提示**。新模型需要的提示比多数人还在写的少：Opus 5.5 一个目标加验证方式就开工（/effort medium 起步）；不知道要什么就让 Claude 面试你直到能写出 spec，再开新会话拿 spec 干活；Opus 5 / Fable 5 的 Claude Code 系统提示词删掉 80% 无可测退化——定期删自己的旧指令，只加回模型确实会漏的那几条。子代理默认不更聪明：Claude 会自己委派，只有大型独立工作（审计/迁移）才值得点名；小活上子代理只加成本与延迟。Projects 用一条长会话管并行线程，Parallel sessions 只在单个会话能不靠你跑完时才划算。**同时守住批判性思维**：卸载（offloading，保留结果所有权）→ 推迟（deferral，输出变成新输入）→ 认知投降（cognitive surrender，AI 的输出悄悄变成你的，你不再检查）是一条不知不觉滑下去的谱系；认知债平时不可见——代码库干净、测试全绿，直到要改系统才发现没人懂它。解法是习惯：跑非平凡任务前先写下自己的假设（错了没关系，读完好答案就再也想不出别的可能了）；绿了要问这个 check 证明了什么、没证明什么（和 feature 同一个错误的测试照样绿）；收工前问 "Did I miss anything"——前沿模型常能再吐两三条。

fanxing321（个人体感，非官方）补了**多模型搭配**：GPT 最悲观（细节都想、代码过度防御）、Gemini 最乐观（happy path 跑通就觉得完了、爱遗忘）、Claude 居中。他的 loop：讨论需求与架构用「会说话」的模型出 spec 拆 issue → 执行层用高 TPS 的模型跑（20–30 分钟一个任务保心流）→ 另一家 review PR → 再让第一家仲裁 review 出的是真问题还是无伤大雅。review 异步，多需求并发挂后台，别卡在等待里刷手机。

## Boundaries

多位实践者的个人清单，不是团队评审流程（见 [风险分层代码评审](./risk-scaled-code-review.md)）。不是 Amp / Claude Code 产品功能介绍（只引用与姿态相关的部分）。没有模型选型表，只有「用最新最强」一条铁律；模型气质差异（悲观/乐观）是个人体感，非官方结论。

## Related

- [Amp](../entities/amp.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [风险分层代码评审](./risk-scaled-code-review.md)
- [Evidence Gate](./evidence-gate.md)
- [模型野心四型](./model-ambition.md)
- [用代码做计划](./plan-with-code.md)
- [Loop Engineering](./loop-engineering.md)
- [gnhf](../entities/gnhf.md)
