---
type: Concept
title: "Loop Engineering"
description: "把努力从「一手一手 prompt」转到设计可自己找活、分派、验收、记状态并再开下一轮的系统；停条件与上下文防腐是难点。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T10:50:00Z }
related:
  - agent-oncall
  - graph-driven-agent-workflow
  - llm-as-judge-runtime
  - plan-mode-multiagent
  - graph-engineering
  - software-factory-cost
  - coding-agent-workflow
  - claude
  - harness-self-improvement
  - playbook-feedback-loop
  - agent-self-evolution-flywheel
  - production-vertical-agent
  - discardable-understanding-artifacts
  - inner-outer-agent-loop
  - model-ambition
sources:
  - ../../../raw/articles/Addy Osmani/Loop Engineering.md
  - ../../../raw/articles/Matt Van Horn/WTF Is a Loop－ Peter Steinberger vs. Boris Cherny.md
  - ../../../raw/articles/Dan Farrelly/The Agent Loop Architecture.md
  - ../../../raw/articles/Hanako/You check every step your agents take. Not because you want to, but because nothing else.md
  - ../../../raw/articles/Claude/Loop engineering： Getting started with loops.md
  - ../../../raw/articles/数字生命卡兹克/折腾了整整1年，毫无保留地分享一下我这套Agent自动化系统.md
  - ../../../raw/articles/数字生命卡兹克/开源我这折腾了1年的「Agent自动化系统」，愿所有人都能感受Agent的魅力.md
  - ../../../raw/articles/夕小瑶科技说/同时管好多个Agent，我总结了3个办法.md
---

# Definition

**Loop Engineering**（循环工程）是 agent 用法层：不再一手一手写指令，而去设计能**自己找活 → 分派 → 验收 → 记状态 → 再开下一轮**的系统。Boris 等说法：工作是写 loop，不是写单次 prompt。

常见五件套：定时自动化 · worktree 并行 · Skills · 连接器/MCP · 子代理分写与审（常加盘外记忆）。
难点与精髓：

- **停条件必须是「可以客观失败的检查」**（如测试退出码 0、来源行对齐，严禁拿另一个模型主观 review 的“无报错”当正确证据）；
- **Loop 与 Graph 的分工**：Loop 负责单一工作单元的自愈（produce → check → correct → repeat），拓扑 Graph 则在 Loop 之上决定哪些工作单元存在与并行依赖。

Anthropic 把 loop 收成「重复干活直到停条件」：按触发/停止/原语/任务选型，从回合制走到目标制、时间制、主动制；先用最简形。拓扑并行与假边见 [Graph Engineering](./graph-engineering.md)，值班闭环见 [Agent On-call](./agent-oncall.md)——不在本页堆。

与 [Coding Agent Workflow](./coding-agent-workflow.md) 互补：后者偏「规划→执行→部署」工作流；本页专讲「闭环自治」。产品侧入口仍见 [Claude](../entities/claude.md)。

数字生命卡兹克的 Agent-Autoloop（折腾一年，2026-11 开源 github.com/KKKKhazix/agent-autoloop）是个人版落地样本：出发点与 DeepSeek Super-agent 同一句话——人多只能同时跟 3–5 个活跃会话，**多任务的上限是人的注意力**；解法是把任务起点从人身上拿掉，用信号触发而不是等命令（朱元璋批奏折类比：大臣能自处理的自行处理，拿不准的才上奏）。架构极简：事件（定时/Issue/业务报错）→ 统一格式进内核 → rules.json 规则派活（哪个 Agent、哪个目录、哪个 Skill）→ 短时同事件合并成轮防一窝蜂 → Agent 干完把结果放最后一条回复 → 通知通道。借鉴 Pi 的极简内核 + Extensions 与 DSH「一切皆插件」：除内核外事件、Agent、通知、CI 流水线全是插件，可热插拔魔改。人收敛到两件事：Loop 维护与关键决策——他管这叫领导力。

夕小瑶给「同时管几个」算了笔账：**Fan-out 公式 FO ≈ 1 + AT/IT**（AT = Agent 两次找你之间的独立运行时长，IT = 每次接手要花的处理时长）——自己跑 10 分钟、接手花 5 分钟，可监管数就是 3，开 10 个窗口也只有 3 个在真干活。突破法只有两个方向：**拉长分子**（让 Agent 独立跑更久、防死循环防卡死）与**压短分母**（把看日志、验收等最耗神的接手动作外包出去）；OpenAI 客户案例 Third Moment Research 的万级并发、单任务 36–48 小时，就是把这两个方向推到极限的产物。

## Boundaries

不是一手一手 prompt。不是 [Graph Engineering](./graph-engineering.md)（图上的边与门）。不是编译器里的 loop 向量化。停条件与上下文防腐没设计好，就不要开成「自己找活」。

## Related

- [Agent On-call](./agent-oncall.md)
- [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
- [自主性分层](./autonomy-layering.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Graph Engineering](./graph-engineering.md)
- [Software Factory Cost Equation](./software-factory-cost.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Claude](../entities/claude.md)
- [生产级垂类 Agent](./production-vertical-agent.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [Agent 自进化飞轮](./agent-self-evolution-flywheel.md)
- [可弃理解制品](./discardable-understanding-artifacts.md)
- [内外两层循环](./inner-outer-agent-loop.md)
- [模型野心四型](./model-ambition.md)
