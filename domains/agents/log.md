# Agent 与 harness — Log

## 2026-09-11

* **Ingest**: [多 Agent 架构选型](./concepts/multi-agent-architecture-selection.md) ← Datawhale 梳理 Google/DeepMind/MIT 多智能体最佳实践（arxiv 2512.08296；直链 raw）(2026-09-11). 结构体检：无新 Domain/约定改动。
* **Ingest**: 微信 8 篇 → 新建 [AgentLoop](./entities/agentloop.md)、[DataFlow-Harness](./entities/dataflow-harness.md)；续写飞轮 / OTel / 遥测 / Harness 运行时层。无新 Reference。
* **Refactor**: [Loop Engineering](./concepts/loop-engineering.md) 15→5（剥 buzz 与 Graph 对照文，后者只留 [Graph Engineering](./concepts/graph-engineering.md)）；[MCP](./entities/mcp.md) 14→11（剥 X MCP 公告 / 教程弱挂）。新建 [SearchCLI](./entities/searchcli.md)（github.md 一行，无新 Reference）。
* **Ingest**: 微信 14 篇 + 书签 [Artificial Analysis](https://artificialanalysis.ai) → 新建 Entity [Artificial Analysis](./entities/artificial-analysis.md)；跨域新建 [Open Knowledge Format](../../shared/entities/open-knowledge-format.md)。成文挂 [Multi-Harness Control Plane](./concepts/multi-harness-control-plane.md)、[Graph Engineering](./concepts/graph-engineering.md)、[Loop Engineering](./concepts/loop-engineering.md)、[MCP](./entities/mcp.md)、[Agent Skills](./entities/agent-skills.md)、[Coding Agent Workflow](./concepts/coding-agent-workflow.md)、[Evidence Gate](./concepts/evidence-gate.md)、[Agent 自进化飞轮](./concepts/agent-self-evolution-flywheel.md)、[Harness 自改进](./concepts/harness-self-improvement.md)、[检索质量 Pipeline](./concepts/retrieval-quality-pipeline.md)。无新 Reference。
* **Refactor**: [skills.sh](./entities/skills-sh.md) 剥 Anthropic Skills 成文 → 新建 [Agent Skills](./entities/agent-skills.md)；[Loop Engineering](./concepts/loop-engineering.md) 剥 Graph/On-call 杂质并挂官方 loops 文；[Coding Agent Workflow](./concepts/coding-agent-workflow.md) 剥弱挂并收 AI-Native SDLC；[Codex](./entities/codex.md) sources 14→5。新建 [OpenCode](./entities/opencode.md)（github.md / sites.md 各一行，无新 Reference）。
* **Ingest**: Claude blog 列表 236 URL：缺的 224 全部成文进 `raw/articles/Claude/`（失败 0）。高信号挂 [Auto Mode](./concepts/auto-mode.md)、[多 Agent 协作模式](./concepts/multi-agent-collaboration-patterns.md)、[MCP](./entities/mcp.md)、[skills.sh](./entities/skills-sh.md)、[Coding Agent Workflow](./concepts/coding-agent-workflow.md)、[LLM-as-Judge Runtime](./concepts/llm-as-judge-runtime.md)、[Harness 运行时层](./concepts/harness-runtime-layer.md)、[Minimal Agent Harness](./concepts/minimal-agent-harness.md)、[Harness 自改进](./concepts/harness-self-improvement.md)、[Advisor](./concepts/advisor.md)、[AGENTS.md](./entities/agents-md.md)；跨域 [AI Design De-slop](../design/concepts/ai-design-deslop.md)。产品公告/黑客松/垂直行业/客户故事仅留 raw。不往 [Claude](./entities/claude.md) 堆 sources。
* **Ingest**: 得物《Violin》→ 续写 [Harness 运行时层](./concepts/harness-runtime-layer.md)、[Minimal Agent Harness](./concepts/minimal-agent-harness.md)。不建 Violin Entity；不往 [Pi](./entities/pi.md) 堆 sources（已满 15）。
* **Ingest**: 腾讯技术工程《从一次 LLM 调用到完整 Harness…》→ 新建 [Harness 运行时层](./concepts/harness-runtime-layer.md)；续写 [Minimal Agent Harness](./concepts/minimal-agent-harness.md)、[Harness 自改进](./concepts/harness-self-improvement.md)、[Pi](./entities/pi.md)、[Codex](./entities/codex.md)、[Hermes Agent](./entities/hermes-agent.md)。无新 Reference。结构体检：OpenCode 暂不建 Entity。
* **Migrate**: [AI Design De-slop](../design/concepts/ai-design-deslop.md)、[Open Design](../design/entities/open-design.md)、[Ian 小黑配图](../design/entities/ian-xiaohei-illustrations.md)、[Holo Card Studio](../design/entities/holo-card-studio.md) 及对应 GitHub Reference → `design`。Related 改为跨域相对路径。
* **Ingest**: [多 Agent 协作模式](./concepts/multi-agent-collaboration-patterns.md) ← 叶小钗微信长文（直链 raw，无 Reference）(2026-09-11). 结构体检：无新 Domain/约定改动。
* **Ingest**: [Agent On-call](./concepts/agent-oncall.md) + Entity [Claude Tag](./entities/claude-tag.md) ← Sachin Malhotra Claude on-call 博文（直链 raw，无 Reference）(2026-09-11). 结构体检：无新 Domain/约定改动。

## 2026-09-10

* **2026-09-10 ingest** | 探索候选：书签 OtoDock / agent-orchestrator / i-have-adhd / archify → 新建 Entity [OtoDock](./entities/oto-dock.md)、[Agent Orchestrator](./entities/agent-orchestrator.md)、[i-have-adhd](./entities/i-have-adhd.md)、[Archify](./entities/archify.md)。无新 Reference。

## 2026-09-08

* **2026-09-08 refine** | 基于 Uber Engineering 长文深度充实 [Software Factory Cost Equation](./concepts/software-factory-cost.md)：梳理 4 层用量金字塔与成本拆解三主战场（Pareto 选模、Code-Mode 去 MCP 膨胀、AI Context Graph 准确定位）。
* **2026-09-08 claim** | Hanako X 长文《Loops and Graphs》补挂至 [Loop Engineering](./concepts/loop-engineering.md) sources 并扩充关于「可以失败的检查」与「Loop vs Graph 拓扑分工」的定义。
* **2026-09-08 refactor** | [Claude](./entities/claude.md) 与 [Model Context Protocol (MCP)](./entities/mcp.md) 深度精炼：移除 190+ 篇弱相关/泛杂挂靠，聚焦官方与权威架构文献；全库完成 `## Related` 与 raw 链接解耦（DRY 单一事实来源）。
* **2026-09-08 refactor** | [Coding Agent Workflow](./concepts/coding-agent-workflow.md) 瘦身与解耦：剔除 50+ 篇弱相关/杂质 raw 挂靠，Related 回归纯维基页面互链，sources 聚焦 10 篇核心文献。
* **2026-09-08 lint** | domains/agents → Related 括号链加 `<>`；mcp 嵌套链；11 篇成文补 sources
* **2026-09-08 delete** | 灌水/域外 raw 8 篇 → 摘对应 wiki 链；无专属页
* **2026-09-08 delete** | 灌水/空壳/域外合集 raw 18 篇 → 摘 Claude / Coding Agent Workflow / Codex 链；无专属页
* **2026-09-08 delete** | 灌水/灰产 raw 26 篇 → 摘 Claude / Coding Agent Workflow / Codex 等链；无专属页
* **2026-09-08 delete** | 灌水/空壳/灰产 raw 53 篇 → 摘 Claude / Coding Agent Workflow / Codex / Paseo / Composio / cc-switch 链；无专属页
* **2026-09-08 delete** | 低质量 raw 32 篇（订阅灰产/域外合集/空壳）→ 摘 [Coding Agent Workflow](./concepts/coding-agent-workflow.md) / [Claude](./entities/claude.md) / [OpenCLI](./entities/opencli.md) / [Loop Engineering](./concepts/loop-engineering.md) 链；无专属页
* **2026-09-08 delete** | 低质量 raw 63 篇 → 摘 [Coding Agent Workflow](./concepts/coding-agent-workflow.md) / [Claude](./entities/claude.md) / [Codex](./entities/codex.md) / [Grok Bot](./entities/grok-bot.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/别开枪自己人/B超、X光、CT、核磁的适应症与优缺点对比，你分的清吗？.md` → 摘 [Coding Agent Workflow](./concepts/coding-agent-workflow.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/别开枪自己人/记住，能救命.md` → 摘 [Coding Agent Workflow](./concepts/coding-agent-workflow.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/比特币橙子Trader/Codex App － CLI 也可以直接接入股票、财报、SEC 文件和金融新闻数据了。.md` → 摘 [MCP](./entities/mcp.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/比特币橙子Trader/卧槽！真心强烈推荐所有人，不管你懂不懂技术，只要你想在AI时代做商业、搞投资或者抓住时代红利，都去狠狠刷一遍Anthropic官方的这场超神分享！.md` → 摘 [Claude](./entities/claude.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/白骏知识分享/刘震云67岁谈40岁感悟.md` → 摘 [Coding Agent Workflow](./concepts/coding-agent-workflow.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/阿川 － AI thinking/这个非常实用！用claudecode的建议都看看.md` → 摘 [Claude](./entities/claude.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/1024/今天找到了一个超级好用的AI提示词工具——PromptFill，开源免费。.md` → 摘 [Herdr](./entities/herdr.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/0x小师妹/3 个白嫖 GPT-5.5 － Claude 4.7 模型的渠道+ 避坑指南.md` → 摘 [Claude](./entities/claude.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/0x鸣人/有人问黄仁勋：AI会取代人类的工作吗？.md` → 摘 [Coding Agent Workflow](./concepts/coding-agent-workflow.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/🌹MIDNIGHT🌹ROSE🌹/有趣的科学小实验.md` → 摘 [Coding Agent Workflow](./concepts/coding-agent-workflow.md) 链；无专属页
* **2026-09-08 delete** | `raw/articles/-Zho-/终于把我的 Nano-Banana 创意玩法大全 Github 库 写好了！！！.md` → 摘 [Coding Agent Workflow](./concepts/coding-agent-workflow.md) 链；无专属页

## 2026-09-07

* **2026-09-07 ingest** | X 书签 (567–584/584) 成功 17 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (516–566/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (466–515/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (416–465/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (366–415/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (316–365/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (266–315/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (216–265/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (209–584/584) 成功 7 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (159–208/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (109–158/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (58–108/584) 成功 50 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | X 书签 (1–57/584) 成功 56 篇成文 → `raw/articles/`；各挂 1 个已有 Entity/Concept。
* **2026-09-07 ingest** | sxwedo GitHub 星标 148 仓 → `raw/bookmarks/github.md`；本域新建 Entity 45、挂已有 31（各一条 GitHub Reference）。
* **2026-09-07 ingest** | [UseGrokBot](https://usegrokbot.com/zh-cn) → 已有 Entity [Grok Bot](./entities/grok-bot.md) + Reference [站点](./references/usegrokbot-site.md)；链 [Role-first Agent](./concepts/role-first-agent.md)。不开第二张产品卡。
* **2026-09-07 ingest** | 链 [Pilot Protocol](./entities/pilot-protocol.md) 到 [Tailscale](../engineering/entities/tailscale.md)（Agent overlay vs 设备 mesh VPN）。
* **2026-09-07 ingest** | [Puffo](https://beta.puffo.ai/) → Entity [Puffo](./entities/puffo.md) + Reference [站点](./references/puffo-site.md)；链 [Raft](./entities/raft.md)、[Grok Bot](./entities/grok-bot.md)、[Herdr](./entities/herdr.md)。
* **2026-09-07 ingest** | [π-agent book](https://books.antinomie.org/pi/) → 已有 Entity [Pi](./entities/pi.md) + Reference [π-agent book](./references/pi-agent-book.md)（`docs.md`）；链 [Minimal Agent Harness](./concepts/minimal-agent-harness.md)。不开第二张产品卡。
* **2026-09-07 ingest** | [小山学堂](https://xueai.miyang.cn/) → Entity [小山学堂](./entities/xiaoshan-xuetang.md) + Reference [站点](./references/xiaoshan-xuetang-site.md)；链 [Claude Academy](./entities/claude-academy.md)、[Grok Build](./entities/grok-build.md)、[Coding Agent Workflow](./concepts/coding-agent-workflow.md)。overview 收补学院与培训课程。
* **2026-09-07 ingest** | [Pilot Protocol](https://pilotprotocol.network/) → Entity [Pilot Protocol](./entities/pilot-protocol.md) + Reference [站点](./references/pilot-protocol-site.md)；链 [MCP](./entities/mcp.md)、[skills.sh](./entities/skills-sh.md)、[Raft](./entities/raft.md)。overview 收补 Agent 组网 overlay。
* **2026-09-07 ingest** | [Raft](https://raft.build/zh-cn/) → Entity [Raft](./entities/raft.md) + Reference [站点](./references/raft-site.md)；链 [Grok Bot](./entities/grok-bot.md)、[Proof](./entities/proof.md)、[Herdr](./entities/herdr.md)、[多智能体治理](./concepts/multi-agent-governance.md)。overview 收补人机频道工作空间。
* **2026-09-07 ingest** | [Grok Build](https://x.ai/open-source) → Entity [Grok Build](./entities/grok-build.md) + Reference [站点](./references/grok-build-site.md)；链 [Grok Bot](./entities/grok-bot.md)、[Pi](./entities/pi.md)、[oh-my-pi](./entities/oh-my-pi.md)、[mena](./entities/mena.md)。不开第二张 xAI 机构卡。
* **2026-09-07 ingest** | 链 [Trendshift](./entities/trendshift.md) 到 [Hacker News](../../shared/entities/hacker-news.md)（GitHub 动量榜 vs HN 讨论板）。
* **2026-09-07 ingest** | [Proof](https://proofeditor.ai/) → Entity [Proof](./entities/proof.md) + Reference [站点](./references/proof-site.md)；链 [skills.sh](./entities/skills-sh.md)、[MCP](./entities/mcp.md)、[Obsidian](../../shared/entities/obsidian.md)。overview 收补人与 Agent 共写文档编辑器。
* **2026-09-07 ingest** | [Herdr](https://herdr.dev/) → Entity [Herdr](./entities/herdr.md) + Reference [站点](./references/herdr-site.md)；链 [mena](./entities/mena.md)、[Omarchy](./entities/omarchy.md)、[Pi](./entities/pi.md)、[Multi-Harness Control Plane](./concepts/multi-harness-control-plane.md)。overview 收补终端会话运行时。
* **2026-09-07 ingest** | [skills.sh](https://skills.sh/) → Entity [skills.sh](./entities/skills-sh.md) + Reference [站点](./references/skills-sh-site.md)；链 [Pi](./entities/pi.md)、[mena](./entities/mena.md)、[AGENTS.md](./entities/agents-md.md)、[知识与技能分离](./concepts/knowledge-skill-separation.md)、[Coding Agent Workflow](./concepts/coding-agent-workflow.md)。overview 收补 Agent Skills 目录与安装 CLI。
* **2026-09-07 ingest** | [MinerU](https://mineru.net/) → Entity [MinerU](./entities/mineru.md) + Reference [站点](./references/mineru-site.md)；链 [LangChain](./entities/langchain.md)、[MCP](./entities/mcp.md)。overview 收补面向 Agent/RAG 的文档解析。
* **2026-09-07 ingest** | [Claude Code Docs](https://code.claude.com/docs) → 已有 Entity [Claude](./entities/claude.md) + Reference [Claude Code Docs](./references/claude-code-docs.md)（`docs.md`）。
* **2026-09-07 ingest** | [Claude Blog](https://claude.com/blog/) → Entity [Claude](./entities/claude.md) + Reference [Claude Blog](./references/claude-blog.md)；改 [Claude Academy](./entities/claude-academy.md)。
* **2026-09-07 schema** | 文档书签迁 `raw/bookmarks/docs.md`；[LangChain Docs](./references/langchain-docs.md) 单独 Reference，产品站仍 [langchain-site](./references/langchain-site.md)。
* **2026-09-07 ingest** | [LangChain Docs](https://docs.langchain.com/) → 已有 Entity [LangChain](./entities/langchain.md)，只补书签行与 [站点](./references/langchain-site.md) 深链。
* **2026-09-07 ingest** | [AGENTS.md](https://agents.md/) → Entity [AGENTS.md](./entities/agents-md.md) + Reference [站点](./references/agents-md-site.md)；改 [Pi](./entities/pi.md)、[Coding Agent Workflow](./concepts/coding-agent-workflow.md)、[Multi-Harness Control Plane](./concepts/multi-harness-control-plane.md)，链 [LLM Wiki](../../shared/concepts/llm-wiki.md)。
* **2026-09-07 ingest** | [Code Wiki](https://codewiki.google/) → Entity [Code Wiki](./entities/code-wiki.md) + Reference [站点](./references/code-wiki-site.md)；改 [Zread](./entities/zread.md)、[GitMCP](./entities/gitmcp.md)，链 [LLM Wiki](../../shared/concepts/llm-wiki.md)。
* **2026-09-07 ingest** | [Zread](https://zread.ai/) → Entity [Zread](./entities/zread.md) + Reference [站点](./references/zread-site.md)；改 [GitMCP](./entities/gitmcp.md)，链 [LLM Wiki](../../shared/concepts/llm-wiki.md)。
* **2026-09-07 schema** | overview 拓宽（MCP/运行面/学院）；Trendshift 标外探源；WikiSkill↔LLM Wiki；LangChain↔MCP；检索质量↔排序表征；记忆簇互补 sources。标题改为 Agent 与 harness。
* **2026-09-07 ingest** | schema：sources 改为相对路径；concepts/entities/references `index.md` 补一句话；overview 实体表与目录对齐（11 个 Entity）。

## 2026-09-06

* 2026-09-07：记录自主调研 TODO（梦境 + 外探），见 `raw/_inbox/research/TODO.md`；未实现
* 2026-09-06：废除 `raw-manifest.yaml`；查重靠 raw `url:`，认领靠知识页链 raw

* **Update**: raw 成文按作者分目录 `articles/<作者>/<人话标题>.md`；`_media/` 保持顶层；正文链接改为 `../_media/`；同步 manifest / Reference resource / AGENTS / ingest skill。
* **Update**: raw 层改为扁平 `articles/<人话标题>.md` + `bookmarks/` 列表；去掉 `library/YYYY/MM` 与 per-bookmark stub。
* **Update**: 书签型必须写 raw 链接 stub + claimed；回填 [earendil-works/pi](./references/earendil-pi-github.md) stub。
* **Update**: AGENTS + yiya-ingest 增加书签型入口（Entity + URL Reference，不灌整站）。
* **Entity**: 新建 [oh-my-pi](./entities/oh-my-pi.md)；更新 [Pi](./entities/pi.md) 与 overview 实体表；Advisor/TTSR/Minimal Harness 互链产品实体。
* **Decision**: 明确 Entity=具名产品/人；盘点顺序 Domain→Entity→Concept→Reference；修复「Pi 派」误解的根因（展示+词表+overview 空）。
* **Update**: 存量 Concept/Entity 补 `## Related` 互链与 `related:`；规则写入根 AGENTS.md / yiya-ingest。
* **Ingest**: [得物复合检索 Agent](./references/dewu-compound-retrieval-agent.md) → concepts [复合检索 Agent](./concepts/compound-retrieval-agent.md), [检索质量 Pipeline](./concepts/retrieval-quality-pipeline.md).
* **Ingest**: [货拉拉记忆在线侧](./references/huolala-llm-memory-online.md) → concepts [历史不等于记忆](./concepts/history-vs-memory.md), [在线记忆流水线](./concepts/online-memory-pipeline.md).

## 2026-09-05

* **Ingest**: [Agent 自进化飞轮](./references/agent-self-evolution-flywheel.md) → concepts [Agent 自进化飞轮](./concepts/agent-self-evolution-flywheel.md), [Harness 自改进](./concepts/harness-self-improvement.md).
* **Ingest**: [得物 MultiAgent 记忆](./references/dewu-multiagent-memory.md) → concepts [四层 Agent 记忆](./concepts/four-layer-agent-memory.md), [异步记忆沉淀](./concepts/async-memory-precipitation.md).
* **Ingest**: [Anthropic 多智能体失效](./references/anthropic-multiagent-failures.md) → concepts [多智能体失效模式](./concepts/multi-agent-failure-modes.md), [多智能体治理](./concepts/multi-agent-governance.md).
* **Ingest**: [WikiSkill](./references/wikiskill-three-layer.md) → concepts [WikiSkill 三层架构](./concepts/wikiskill-architecture.md), [知识与技能分离](./concepts/knowledge-skill-separation.md).
* **Ingest**: [Pi vs oh-my-pi](./references/pi-vs-oh-my-pi.md) → entity [Pi](./entities/pi.md), concept [Minimal Agent Harness](./concepts/minimal-agent-harness.md).
* **Ingest**: [AgentLoop 数据接入](./references/agentloop-data-ingress.md) → concepts [Agent OTel 探针](./concepts/agent-otel-probe.md), [Agent 遥测接入形态](./concepts/agent-telemetry-ingress.md).
* **Ingest**: [oh-my-pi 配置实操](./references/oh-my-pi-setup.md) → concepts [Advisor](./concepts/advisor.md), [TTSR](./concepts/ttsr.md).
* **Ingest**: [JavaGuide · Grok Bot 工程玩法](./references/javaguide-grok-bot-engineering.md) → concepts [Engineering Bot](./concepts/engineering-bot.md), [Playbook 反馈闭环](./concepts/playbook-feedback-loop.md).
* **Ingest**: [得物小摊 AI Native 演进实录](./references/dewu-delivery-harness.md) → concepts [Delivery Harness](./concepts/delivery-harness.md), [Evidence Gate](./concepts/evidence-gate.md).

## 2026-09-04

* **Initialization**: Slim scaffold (references / entities / concepts only).
* **Ingest**: [AI Engineering Skills Map: Using coding agents](./references/ng-coding-agents-skills.md) → [Coding Agent Workflow](./concepts/coding-agent-workflow.md) (2026-09-06).
* **Bookmark**: [mena](./entities/mena.md) ← [sxwedo/mena](./references/sxwedo-mena-github.md) (2026-09-06).
* 2026-09-06：Related 互链改相对路径约定（禁 `/concepts/...`，以免 GitHub 404）
* 2026-09-06：书签 `github.md`/`sites.md` 改为表格（URL / 作者 / 简介）

* **Bookmark**: [Claude Academy](./entities/claude-academy.md) ← sites.md (2026-09-06).
* **Ingest**: [万字长文｜Grok Bot 从入门到精通](./references/jinchenma-grok-bot-guide.md) → [Role-first Agent](./concepts/role-first-agent.md) + Entity Grok Bot (2026-09-06).
* **Bookmark**: [Pi（官网）](./references/pi-dev-site.md) → sites.md / Entity Pi (2026-09-06).
* **Ingest**: [Multi-Harness Control Plane](./concepts/multi-harness-control-plane.md) ← Smartpig raw（直链，无 Reference）(2026-09-06).
* **Bookmark**: [Omarchy](./entities/omarchy.md) + [站点 Ref](./references/omarchy-site.md) ← `raw/bookmarks/sites.md`(2026-09-07).
* **Bookmark**: [MCP](./entities/mcp.md) + [站点 Ref](./references/mcp-site.md) ← `raw/bookmarks/sites.md`(2026-09-07).
* **Bookmark**: [GitMCP](./entities/gitmcp.md) + [站点 Ref](./references/gitmcp-site.md) ← `raw/bookmarks/sites.md`(2026-09-07).
* **Bookmark**: [FastMCP](./entities/fastmcp.md) + [站点 Ref](./references/fastmcp-site.md) ← `raw/bookmarks/sites.md`(2026-09-07).
* **Bookmark**: [LangChain](./entities/langchain.md) + [站点 Ref](./references/langchain-site.md) ← `raw/bookmarks/sites.md`(2026-09-07).
* **Bookmark**: [Trendshift](./entities/trendshift.md) + [站点 Ref](./references/trendshift-site.md) ← `raw/bookmarks/sites.md`(2026-09-07).
* **Lint fix**: 新建 [Loop Engineering](./concepts/loop-engineering.md)；瘦 [Claude](./entities/claude.md) / [Coding Agent Workflow](./concepts/coding-agent-workflow.md) / [skills.sh](./entities/skills-sh.md) sources (2026-09-07).
* **Ingest**: [Software Factory Cost Equation](./concepts/software-factory-cost.md) ← Uber Engineering raw（直链，无 Reference）(2026-09-08). 结构体检：无新 Domain/约定改动。
* **Bookmark**: [Holo Card Studio](../design/entities/holo-card-studio.md) + [GitHub Ref](../design/references/everettfish-holo-card-studio-github.md) ← `raw/bookmarks/github.md`（未灌仓）(2026-09-08). 结构体检：无新 Domain/约定改动。
* **Bookmark**: [LerSent001/holo-card](../design/references/lersent001-holo-card-github.md) ← `raw/bookmarks/github.md`，挂 [Holo Card Studio](../design/entities/holo-card-studio.md)（未灌仓）(2026-09-08). 结构体检：无新 Domain/约定改动。
* **Ingest**: [Graph Engineering](./concepts/graph-engineering.md) ← Mahax raw（直链，无 Reference）(2026-09-09). 结构体检：无新 Domain/约定改动。
* **Ingest**: Mahax《Agents, Loops, Graphs…》→ raw，挂 [Graph Engineering](./concepts/graph-engineering.md) / [Loop Engineering](./concepts/loop-engineering.md)（无新页）(2026-09-09). 结构体检：无约定改动。
* **Bookmark**: [Termany](./entities/termany.md) + [站点 Ref](./references/termany-site.md) ← `raw/bookmarks/sites.md`（未灌站）(2026-09-09). 结构体检：无新 Domain/约定改动。
* **Ingest**: [Plan 模式与主子 Agent](./concepts/plan-mode-multiagent.md) ← 得物技术 raw（直链，无 Reference）(2026-09-09). 结构体检：无新 Domain/约定改动。
* **Ingest**: [LLM-as-Judge Runtime](./concepts/llm-as-judge-runtime.md) ← Josh Rosen raw（直链，无 Reference）(2026-09-09). 结构体检：无新 Domain；跨链 engineering eval-driven-development。
* **Ingest**: Anatoli《Graph Engineering explained…》→ raw，挂 [Graph Engineering](./concepts/graph-engineering.md) / [Loop Engineering](./concepts/loop-engineering.md)（无新页）(2026-09-09). 结构体检：无约定改动。
* **Ingest**: [Graph-Driven Agent Workflow](./concepts/graph-driven-agent-workflow.md) ← Mr. Buzzoni raw（直链，无 Reference）(2026-09-09). 结构体检：无新 Domain/约定改动。
* **Ingest**: wast3《Graph Engineering: How to Run 1,000 AI Agents…》→ raw，挂 [Graph Engineering](./concepts/graph-engineering.md) / [Loop Engineering](./concepts/loop-engineering.md) / [Graph-Driven Agent Workflow](./concepts/graph-driven-agent-workflow.md)（无新页）(2026-09-10). 结构体检：无约定改动。
* **Ingest**: Codez《Build a team of AI Agents… 8 Steps》→ raw，挂 [Raft](./entities/raft.md) / multi-agent-governance / role-first-agent / llm-as-judge-runtime（无新页）(2026-09-10). 结构体检：无约定改动。
* **Ingest**: [AI Design De-slop](../design/concepts/ai-design-deslop.md) ← Matt Dailey raw（直链，无 Reference）(2026-09-10). 结构体检：无新 Domain/约定改动。
* **Bookmark**: [深入理解 AI Agent（书站）](./references/bojieli-ai-agent-book-docs.md) ← `raw/bookmarks/docs.md`，挂既有 Entity（未灌站/未整本）(2026-09-10). 结构体检：无新 Domain。
* **Bookmark**: [Ian 小黑配图](../design/entities/ian-xiaohei-illustrations.md) + [GitHub Ref](../design/references/helloianneo-ian-xiaohei-illustrations-github.md) ← `raw/bookmarks/github.md`（未灌仓）(2026-09-10). 结构体检：无新 Domain/约定改动。
* **Ingest**: Rahul《10 Ways… GPT-6 Astra》→ raw，挂 role-first / multi-agent-governance / graph-driven-agent-workflow（无新页；作案例素材，非收益背书）(2026-09-10). 结构体检：无约定改动。
