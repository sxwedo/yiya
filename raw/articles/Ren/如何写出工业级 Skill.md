---
title: "如何写出工业级 Skill "
author: "Ren (@Ryrenz)"
url: "https://x.com/Ryrenz/status/2051111166416396713"
ingested: "2026-09-07"
date: "Mon May 04 01:26:24 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 如何写出工业级 Skill 

很多人第一次写 Skill，会下意识地写成一个更长的 Prompt。

把背景、规则、注意事项、示例、参考资料，全都塞进一个 SKILL.md。看起来很完整，但实际并不好用。

Skill 真正的价值在于：

当用户提出某类需求时，Agent 能自动识别场景，加载对应流程，使用合适工具，并按固定方法完成任务。并且保证以后遇到类似任务，Agent 能够按照流程去稳定地完成。

Prompt 是一次性的指令。

Skill 是可复用、自主触发、可维护、可进化的工作流。

---

# 1\. 什么是 Skill

## 1.1 Skill 和 MCP 是什么关系？

理解 Skill 之前先理解一下 MCP。

MCP 全称 Model Context Protocol，是 Anthropic 设计的一个标准协议，让 Claude 可以接外部工具和数据（接 Notion、接 Asana、接你的内部系统都靠它）。

Skill 跟 MCP 是搭档关系。

Anthropic 官方文档里用过一个厨房比喻。

MCP 给你提供"专业厨房"——通向某个服务的工具、数据、调用接口（比如 Notion、飞书、滴答清单、微信公众号、小红书的 MCP server）。

Skill 给你提供"食谱"——告诉 Claude 一步步怎么用这些工具做出有价值的东西。

只有 MCP 没有 Skill：用户接上你的 MCP server，但不知道接下来该做什么。每次对话都要从头说一遍流程。结果不稳定。

只有 Skill 没有 MCP：Skill 也能单独跑，比如生成文档、做图、整理资料。Anthropic 自己的 docx / pptx / xlsx skill 就属于这种。

两个一起：用户上来就能完成完整任务。MCP 决定 Claude 能做什么，Skill 决定 Claude 该怎么做。

## 1.2 做 Skill 前先确认需求

着手开始之前，先回答四个问题：

- 用户想完成什么？

- 这需要哪些多步流程？

- 需要哪些工具（Claude 内置的，还是 MCP 提供的）？

- 应该嵌入哪些领域知识或最佳实践？

Anthropic 官方建议每个 skill 起步时定 2-3 个具体用例。每个用例写清楚四件事：

\`\`\`
用例: 每周公众号选题规划
触发: 用户说 "帮我定下周公众号选题" 或 "这周写什么"
步骤:
  1\. 拉最近 7 天我关注的几个微信群、X 收藏、小红书爆款笔记
  2\. 按我的账号定位（比如"AI 工具 + 职场"）筛掉无关话题
  3\. 给出 5 个候选选题，每个带建议标题和切角
  4\. 标记哪个最容易爆、哪个最容易写、哪个我之前没碰过
结果: 5 个候选选题清单，可以直接挑一个开写
\`\`\`

再举一个白领工作日常的例子：

\`\`\`
用例: 每周周报整理
触发: 用户说 "帮我写本周周报" 或 "整理这周做了什么"
步骤:
  1\. 读本周的日历、Notion 任务记录、邮件草稿箱
  2\. 按"已完成 / 进行中 / 下周计划"三块分类
  3\. 把每项翻译成上级关心的语言（结果导向，不堆动作)
  4\. 输出 300 字以内的周报草稿，附 3 个本周亮点
结果: 一份可以直接发给领导的周报草稿
\`\`\`

定不出 2-3 个具体用例，说明你想做的可能是一段一次性的 Prompt，不是 Skill。

## 1.3 判断你的 Skill 属于哪一类 

Anthropic 把所有 Skill 归成三大类。判断你的 Skill 属于哪类，决定写的时候重点不同。

类别 1：文档与资源创建。

用来生成格式缜密、高质量的输出——文档、PPT、Excel、网页、设计稿、代码。

典型例子是官方的 docx / pptx / xlsx 生成 skill，还有 frontend-design skill。

写这类 Skill 的重点：内嵌风格指南、用模板结构保证一致、最终交付前过质量检查清单。通常不需要外部工具，靠 Claude 自带能力就够。

类别 2：工作流自动化。

用来跑那种"步骤固定、要按方法论走"的多步流程，常常跨多个 MCP 服务器。

典型例子是 skill-creator skill（一步步带用户做用例定义、frontmatter 生成、指令编写、验证）。

写这类 Skill 的重点：每一步都设关卡验证、给常见结构提供模板、写好"这一步失败该怎么回滚"。

类别 3：MCP 增强。

用来给已经接好的 MCP 服务器配上"怎么用"的说明书。这一类主要是 MCP 服务提供方写给自家用户的——

比如做问卷工具的公司，给自家 MCP 配一个"自动分析问卷结果并生成图表报告"的 skill；

做 CRM 的公司，配一个"每周拉客户数据生成销售简报"的 skill。如果你不是 MCP 服务的提供方，这一类基本跟你无关——文档生成（类别 1）和工作流自动化（类别 2）才是大部分人会做的两类。

文档生成类重点在"质量检查"，工作流类重点在"步骤间衔接"，MCP 增强类重点在"领域知识嵌入"。开工前先想清楚自己在哪一类。

> 搞清楚 Skill 的定义之后我们就可开始做自己的 Skill 了！

---

# 2\. 遵守 Skill 的定义：按需加载

Skill 和 CLAUDE.md / 系统提示词不一样。

CLAUDE.md 更像常驻上下文。只要你在这个项目里工作，它就会一直存在，持续影响模型行为。

Slash command 更像手动命令。用户必须明确输入某个命令，Agent 才知道要执行对应流程。

Skill 介于两者之间。

它的特点是 on-demand loading：按需加载。

平时它不会把整个 SKILL.md 都塞进上下文。只有当用户输入和 Skill 的 description 匹配时，它才会被加载。

这有两个好处：

1. 节省 context。

1. 减少无关规则对当前任务的干扰。

但有一个细节很重要：

Skill 的完整内容不是常驻的，但 Skill 的 description 会长期参与匹配。

所以 description 写得好不好，直接决定 Skill 会不会被正确触发。

## 2.1 description 的标准结构

Anthropic 官方给了一个三段公式：

\[这个 skill 做什么\] + \[什么时候用它\] + \[关键能力\]

硬性要求三条：

- 字符数不超过 1024

- 必须同时包含"做什么"和"什么时候用"

- 必须用第三人称写

\`\`\`
✅ 处理 Excel 文件并生成报告
✅ 拆解小红书爆款笔记，输出可复用模板
❌ 我可以帮你处理 Excel 文件
❌ 你可以用这个来拆解小红书爆款
\`\`\`

举个对比。

[❌](https://abs.twimg.com/emoji/v2/svg/274c.svg) 太泛的描述：

\`\`\`yaml
description: 处理选题
\`\`\`

这种 description 几乎不可能被正确触发——Claude 看到这句话，不知道用户说什么时候应该加载它。

[❌](https://abs.twimg.com/emoji/v2/svg/274c.svg) 缺触发短语的描述：

\`\`\`yaml
description: 生成结构完整的多页公众号文章
\`\`\`

讲了做什么，没讲什么时候用。

[✅](https://abs.twimg.com/emoji/v2/svg/2705.svg) 好描述的样子：

\`\`\`yaml
description: 拆解小红书爆款笔记的封面、标题、开头、结构、关键词，输出可复用的模板。当用户说"拆解一下这条笔记"、"分析这个爆款"、"小红书拆解"，或贴一条小红书链接让 Claude 学习的时候，使用这个 skill。
\`\`\`

讲清了做什么（拆解爆款笔记 → 输出模板）+ 什么时候用（用户说拆解 / 分析 / 直接贴小红书链接的时候）。

## 2.2 Skill 太多怎么办

如果你装了很多 Skill，或者某个 Skill 很长很专业但用得不多，可以选择性关闭它的自动加载。

Claude Code 提供了一个专门的 frontmatter 字段（Claude Code 专属）：

\`\`\`yaml
\---
name: publish-post
description: 把当前草稿一键发布到公众号、知乎、小红书
disable-model-invocation: true
\---
\`\`\`

加上 disable-model-invocation: true 之后，Claude 不会自动加载这个 skill，只有用户手动打 /publish-post 才会触发。

为什么发布这种动作要手动触发？因为它有副作用——一旦执行就发出去了，不能反悔。你不希望 Claude 看你写了篇草稿，自己觉得"差不多了"，就帮你按发布键。

适合手动关闭的 Skill：

- 年终总结 Skill：一年用几次

- 简历重写 Skill：找工作阶段才用

- 封面图生成 Skill：只有做内容发布时才用

- 课程讲义整理 Skill：只有学习某门课时才用

- 部署 / 提交 / 发消息这类有副作用的操作（不希望 Claude 自己决定什么时候触发）

为什么要关掉自动加载：所有 Skill 的 description 在启动时就会被预加载到 Claude 系统提示里，参与匹配。Skill 越多、description 越多，常驻的匹配成本就越高。Anthropic 自己的建议是：如果你同时启用了超过 20-50 个 Skill，先评估是不是该关掉一批。

关掉的代价是用户必须记得主动叫它。

跟 disable-model-invocation 对称的还有一个 user-invocable: false——意思是反过来，禁止用户手动从 / 菜单调用，只让 Claude 自动用。适合那种"背景知识型"skill（比如解释你们公司一个老系统的背景，Claude 在相关任务里需要知道，但用户直接打这个命令没意义）。

所以 Skill 的第一件事，不是写很多规则，而是想清楚：它应该自动触发，还是只适合手动触发？

# 3\. 限制 Skill 的工具边界

Skill 可以限制允许使用哪些工具。

这不是必须的，但很有用。

因为不同 Skill 需要的权限不同。

比如在 Claude Code 里，可以写类似：

\`\`\`yaml
allowed-tools:
  \- Bash
  \- Read
  \- Grep
\`\`\`

如果只是整理学习资料，可能只需要：

\`\`\`yaml
allowed-tools:
  \- Read
  \- Grep
  \- Write
\`\`\`

如果是文档整理，可能只需要：

\`\`\`yaml
allowed-tools:
  \- Read
  \- Write
  \- Grep
\`\`\`

如果是封面图生成，可能需要读参考资料、写出 prompt，再调用图片工具：

\`\`\`yaml
allowed-tools:
  \- Read
  \- Write
  \- ImageGenerate
\`\`\`

如果是批量整理资料，才需要开放更多权限，比如：

\`\`\`yaml
allowed-tools:
  \- Read
  \- Write
  \- Edit
  \- Bash
\`\`\`

核心原则很简单：只给完成任务所需的最小权限。

不要让只负责生成建议的 Skill 默认能修改文件。

不要让只读分析 Skill 默认能执行任意命令。

工具越多不一定越强，有时只是风险更大。

## 3.1  allowed-tools 可以细致到子命令

很多人不知道 allowed-tools 可以写得更细——不只是限制工具类型，还能限制工具的具体调用模式。

比如一个负责发布文章的 skill，只允许跑发布相关的命令，不允许跑别的：

\`\`\`yaml
\# 只能跑发布脚本和上传图片，不能动其他文件
allowed-tools: "Bash(python publish.py \*) Bash(curl \*) Read Write"
\`\`\`

或者一个跑数据分析的 skill，只允许读文件 + 跑 Python 脚本，不允许修改任何东西：

\`\`\`yaml
\# 只读 + 只能跑 Python，不能写文件不能跑其他命令
allowed-tools: "Read Bash(python:\*)"
\`\`\`

这样即便 Skill 被误用了 ，也不能跑删文件之类的危险命令。

如果你不写代码、Skill 里也不调用脚本，这一节用不到——直接跳过，看下一段安全限制就行。

## 3.2 安全限制

这一段不是建议，是 Anthropic 官方明文的硬规则。

YAML 前置元数据里禁止出现 XML 尖括号 \`&lt; &gt;\`。原因是 frontmatter 会出现在 Claude 的系统提示里。如果 description 或其他字段里塞了类似 &lt;instructions&gt;do XYZ&lt;/instructions&gt; 的内容，可能会被当成提示注入。

Skill 名字不能用 "claude" 或 "anthropic" 作前缀。这两个前缀是 Anthropic 保留的。

文件名必须严格是 \`SKILL.md\`。区分大小写。SKILL.MD / skill.md / Skill.md 都不行——上传会失败。

文件夹名必须用 kebab-case。不能有空格、下划线、大写字母。比如：

- [✅](https://abs.twimg.com/emoji/v2/svg/2705.svg) notion-project-setup

- [❌](https://abs.twimg.com/emoji/v2/svg/274c.svg) Notion Project Setup

- [❌](https://abs.twimg.com/emoji/v2/svg/274c.svg) notion\_project\_setup

- [❌](https://abs.twimg.com/emoji/v2/svg/274c.svg) NotionProjectSetup

不要在 Skill 文件夹里放 \`README.md\`。所有给 Claude 看的文档都应该放在 SKILL.md 或 references/ 里。给人类看的 README 只在你把 skill 发布到 GitHub 仓库根目录时放。

# 4\. 给 Skill 配置最适合的模型

Skill 也可以指定模型，这点经常被忽略，但很实用。

因为不同任务对模型的要求不一样。

写文档、做图、数据分析、信息爬取、整理学习笔记、生成长文，其实不应该默认使用同一个模型。

举几个例子：

- 写文档：需要表达清楚、结构稳定，可以用擅长写作和总结的模型。

- 做图 / 设计：需要视觉理解、布局审美，适合多模态或设计能力更强的模型。

- 数据分析：需要稳定处理表格、解释结果，可以用推理不错但成本较低的模型。

- 信息爬取：很多时候是批处理和抽取，不一定需要最强模型，便宜快的模型更合适。

- 整理学习笔记：需要分类、提炼重点、保留原意，可以用稳定便宜的模型。

- 生成 X 长文：需要结构、语气、节奏和观点判断，可以用写作能力更强的模型。

- 修改简历：需要理解岗位要求和表达取舍，可以用更谨慎的模型。

有些模型更强，但更贵。

有些模型便宜，却已经足够完成简单任务。

一个成熟的 Skill 系统，不应该所有任务都默认用同一个模型。

它应该根据任务类型选择合适的执行模型。

具体怎么写

Claude Code 提供了一个 model 字段（Claude Code 专属）。官方文档原话：

> Model to use when this skill is active. The override applies for the rest of the current turn and is not saved to settings; the session model resumes on your next prompt. Accepts the same values as /model, or inherit to keep the active model.

两点意思要看清楚：

1. 切换的范围是"这一轮对话"。下一次用户输入新提示词，会自动回到原来的会话模型。这是临时切换，不是永久改设置。

1. inherit 是默认行为——保持当前会话模型。如果你只想在某些 skill 里特别用强模型，就在那几个 skill 的 frontmatter 里写具体型号，其他的不写或写 inherit。

写法。复杂任务用强模型：

\`\`\`yaml
\---
name: deep-post-analysis
description: 深度拆解小红书爆款笔记——封面、文案、节奏、心理学钩子全维度分析
model: claude-opus-4-5
\---

\# 深度爆款拆解
...
\`\`\`

简单任务用便宜模型：

\`\`\`yaml
\---
name: daily-topic-pool
description: 从用户关注的公众号和 X 收藏里拉出今天的候选选题清单
model: claude-haiku-4-5
\---
\`\`\`

不指定（跟着当前会话模型走）：

\`\`\`yaml
\---
name: weekly-summary
description: 整理本周公众号后台数据，生成回顾报告
model: inherit
\---
\`\`\`

顺手提一下 effort 字段

跟 model 配套的还有一个 effort 字段（也是 Claude Code 专属），控制思考深度：

\`\`\`yaml
effort: high   # low / medium / high / xhigh / max
\`\`\`

简单任务用低思考省钱省时间，复杂决策用高思考换准确率。可用的级别取决于模型——Haiku 不支持 max，Opus 才支持。

# 5\. 渐进式披露，限制 Skill.md 的大小

Skill 的整个文件加载机制是个三级系统：

- 第一级（Description）：始终加载到 Claude 的系统提示里。所以 Skill 描述写的信息要足够让 Claude 判断"什么时候该用这个 skill"，但不能太长。

- 第二级（SKILL.md 正文）：当 Claude 判断这个 skill 跟当前任务相关时才加载。包含完整指令。

- 第三级（捆绑文件）：放在 skill 目录里的额外文件。Claude 真正需要时才去读。

理解了这三级，才能理解为什么 SKILL.md 不应该承载所有内容。

它更像入口文件。

里面应该放：

- 什么时候触发。

- 做事原则。

- 执行步骤。

- 需要哪些工具。

- 其他资料在哪里。

- 最后怎么验证。

但不要把所有参考资料、长案例、脚本、模板都塞进去。

更好的方式是分层：

\`\`\`text
生成封面图/
  SKILL.md
  references/
    封面图风格参考.md
    常见平台尺寸.md
    好坏案例对比.md
  scripts/
    检查图片尺寸.py
    导出多平台版本.py
  assets/
    封面图模板.md
    字体与配色示例.json
\`\`\`

不同目录放不同东西。

references/ 放长文档、风格参考、平台尺寸、详细案例。

scripts/ 放可执行代码。比如检查图片尺寸、批量重命名文件、导出多平台版本、整理表格。这些确定性操作用脚本比让模型每次现场生成更稳定。

assets/ 放模板、schema、图片、示例文件、输出样式。

这样做的好处是：

- Agent 不需要每次加载所有内容。

- 它先读 SKILL.md，知道整体流程。真的需要细节时，再去读 reference，或者执行 script。

这就是 Progressive Disclosure：渐进式披露。

按需读，按需执行。

不要一次性把所有东西都塞进上下文。

## 5.1 为什么要做渐进式披露

第一个：省 token（省钱）

每次跟 Claude 对话，发出去的 token 都按量收费。

每个 Skill 都把所有内容塞进上下文 = 每次对话多花几千个 token。一个用户一天调用 100 次，一个月就是几万次——这是真金白银的 API 账单。

Anthropic 官方文档原话：渐进式披露的目的是"在保持专业知识的同时，最小化 token 用量"。三级系统让 Claude 只在真正需要时才把内容加载进来，从源头省钱。

第二个：省上下文空间（保模型表现）

这一条更隐蔽，但同样要命。

AI 的上下文窗口有上限——比如 200K token。这块空间所有人共用：

- 系统提示词

- 之前几十轮的对话历史

- CLAUDE.md 里的项目规则

- 当前加载的所有 Skill

- 用户这一轮的提问

- 工具调用的返回结果

如果每个 Skill 都把详细参考资料、案例库、长说明全塞进来，会发生三件事：

第一，挤占对话历史——老的对话会被自动压缩或丢弃，Claude 忘了之前说过什么。长对话里这个问题最明显——你聊到第二十轮，发现 Claude 把前十轮的关键决定都忘了，常常是被一堆 skill 塞满空间挤掉的。

第二，影响找重点——内容太多，模型容易在大段文字里"迷路"。研究里管这个叫"lost in the middle"（中段迷失）：关键指令埋在中间反而不被遵守。

第三，触发自动压缩——超过阈值后系统会强制总结上文，原始细节丢失，模型表现下降。Claude Code 里专门有个机制叫 auto-compaction，触发后只保留每个 skill 最近一次调用的前 5000 token，再早的就丢了。

三级系统在这里的作用：让 SKILL.md 只把"导航信息"放进上下文，详细资料留在硬盘上 Claude 按需读取。资料没有进上下文，就不占空间，也就不会拖累模型。

省钱看得见，省上下文空间看不见——但长对话里后者影响更大。

## 5.2 SKILL.md 应该多大？

Claude Code 官方原话："Keep SKILL.md under 500 lines"——建议保持 SKILL.md 在 500 行以内。

不是因为 500 这个数字有什么魔法，而是因为超过这个长度，通常说明你把太多东西混在一起了。

如果 Skill 太长，按这个顺序拆：

1. 长说明移到 references/。

1. 稳定操作写成 scripts/。

1. 模板和样例放到 assets/。

如果拆完还是很长，可能说明这不是一个 Skill，而是几个 Skill。

---

# 6\. 写完 Skill 之后还需要验证、打分、迭代

Skill 写完，不代表它真的能用。

这点很重要。

如果你希望一个 Skill 更稳定，建议至少做三类验证：

1. 能不能跑。

1. 能不能正确触发。

1. 跑出来的结果，是否真的比不用 Skill 更好。

第三点最容易被忽略。

很多 Skill 只是"看起来写完了"。但它到底有没有提升质量？有没有减少错误？有没有让输出更符合用户预期？如果没有评测，其实没人知道。

Claude Code 的 Skill Creator 给了一个很好的思路：Skill 不应该只靠感觉发布，而应该配测试数据、跑评测、看结果、再迭代。

它的核心流程大概是：

1. 明确 Skill 要解决什么任务。

1. 写出 Skill 初稿。

1. 准备测试数据 / 测试提示。

1. 用这些测试运行 Skill。

1. 对每个测试结果做评估。

1. 给每个结果打分。

1. 根据失败点修改 Skill。

1. 再跑一轮。

1. 直到主要测试都达到最低可接受分数。

你可以把它理解成给 Skill 写测试。

不是单元测试那么死，但思路类似：别只相信 Skill 文件本身，要看它在样本任务里的表现。

## 6.1 三种测试方式：

Anthropic 官方推荐的三层测试架构：

- 在 Claude 中手动测试：直接打字试。最快，零设置，适合早期快速迭代。

- 在 Claude Code 写脚本测试：自动化测试用例，每次改完都能跑一轮，适合需要可重复验证的中期阶段。

- 通过 Skills API 程序化测试：搭一套评测套件，对照固定测试集跑。适合要部署给几千人用的成熟 Skill。

选哪种取决于这个 Skill 的影响范围。给自己用的可以只做第一层；给团队用的至少要到第二层；给数千企业用户用的必须做到第三层。

##  6.2 第一层：验证它能不能跑

先测试最基础的执行能力。

比如：

- 文件路径对不对？

- 工具权限够不够？

- 脚本能不能执行？

- reference 能不能被读到？

- assets 模板能不能被正确使用？

- 输出格式是否符合预期？

- 有没有漏掉必要步骤？

如果一个 Skill 连真实任务都跑不通，后面谈触发和质量都没意义。

## 6.3 第二层：验证它能不能正确触发

自动加载类 Skill 还要测试触发。

不能只测一句：

\`\`\`text
请运行 X 长文 skill。
\`\`\`

因为真实用户不会这么说。

应该准备一组用户真实可能会说的话：

\`\`\`text
把这个想法展开成一篇长推
帮我写一篇 X 长文
这个观点能不能写成一条长内容
按我的语气扩写一下
给我一个开头更抓人的版本
\`\`\`

如果是封面图 Skill，也可以测试：

\`\`\`text
帮我做一张封面图
给这篇文章配个图
按这个标题做一张科技感海报
做一张适合小红书的封面
\`\`\`

这就是触发测试。

每条测试都应该标记：

\`\`\`json
\[
  {"query": "把这个想法展开成一篇长推", "should\_trigger": true},
  {"query": "帮我查一下今天的天气", "should\_trigger": false}
\]
\`\`\`

如果该触发的不触发，description 要补关键词。

如果不该触发的触发了，description 要收窄边界。

这一步优化的是 Skill 的入口。

入口不准，正文写得再好也没用。

##  6.4 第三层：准备测试数据 / 评测用例

更关键的是结果质量验证。

你需要准备测试数据。

但这不等于用户要亲自准备一堆测试材料。

更合理的做法是：让 Agent 根据 Skill 的用途，自动生成第一批测试数据和评测用例，用户只需要检查这些测试是否贴近真实场景。

比如：

- 封面图生成 Skill：准备 5 个标题、5 种内容类型、几张参考图。

- X 长文 Skill：准备 5 条原始想法、目标读者、理想成稿风格。

- 学习笔记整理 Skill：准备几份课堂笔记、摘抄、截图 OCR 文本。

- 简历重写 Skill：准备不同岗位 JD、原始简历、理想修改方向。

- 周报总结 Skill：准备一周零散记录、会议纪要、完成事项。

每个测试用例最好包含：

\`\`\`json
{
  "id": 1,
  "prompt": "用户会怎么提这个任务",
  "files": \["测试输入文件"\],
  "expected\_output": "什么样的结果算好",
  "assertions": \[
    "必须保留用户原始观点",
    "必须生成抓人的开头",
    "不能编造用户没有说过的经历"
  \]
}
\`\`\`

重点是思路，不是格式：

你要提前定义"什么算好"。

否则评测就会变成事后凭感觉。

## 6.5 第四层：打分要分量化和定性两类

Anthropic 官方建议把成功标准分成两类：

量化指标（能直接数出来的）：

- Skill 在 90% 的相关查询里触发

- 完成工作流的工具调用次数 ≤ X

- 0 失败的 API 调用

- 消耗的 token 数

定性指标（要观察才能判断的）：

- 用户跑完之后不需要再追问"下一步呢"

- 同一个请求跑 3-5 次，输出结构和质量基本一致

- 新用户第一次试，不用多少指导就能完成

跑完测试数据后，不要只写"结果不错"。

应该给每个用例打分，比如 0 到 10 分。

可以用这个简单标准：

- 0-2 分：完全没完成任务，或方向错了。

- 3-4 分：勉强相关，但漏掉关键要求。

- 5-6 分：基本可用，但还有明显问题。

- 7-8 分：质量稳定，少量细节可改。

- 9-10 分：非常符合预期，可以作为示范输出。

最低标准可以设成：主要测试数据至少 5 分以上。

如果某个重要用例低于 5 分，就说明这个 Skill 还不够稳。

尤其是高频 Skill，这通常意味着它在某个常见场景下还不可用。

## 6.6 第五层：和基线对比

如果想更专业，可以做基线对比。

也就是同一个测试，跑两次：

1. 不使用 Skill。

1. 使用 Skill。

然后比较结果。

Claude Code Skill Creator 的评测思路里，就有类似 A/B 对比：开启 skill vs 不开启 skill。

这很有价值。

因为一个 Skill 光能跑还不够，得证明自己有用。

如果不用 Skill 的结果已经 7 分，用了 Skill 还是 7 分，那这个 Skill 可能没有提供明显增益。

如果不用 Skill 是 4 分，用了 Skill 是 8 分，这才说明它真的把经验固化进去了。

第六层：根据失败点修改 Skill

评分是为了定位该改哪里。

常见修法有几种：

- 触发失败：改 description，加真实触发短语。

- 误触发：收窄 description，加入反向用例。

- 步骤漏掉：改 SKILL.md 的 workflow。

- 输出格式不稳定：加输出模板到 assets/。

- 确定性检查不稳定：写脚本。

- 参考信息太长：拆到 references/。

- 工具权限不够：补 allowed-tools。

- 工具权限太大：收紧 allowed-tools。

- 模型能力不够：换更适合的 model。

- 思考深度不够：调整 effort 级别。

然后再跑一轮评测。

这就是 Skill 的优化闭环：

\`\`\`text
写 Skill
→ 准备测试数据
→ 运行评测
→ 逐项打分
→ 找失败原因
→ 修改 Skill
→ 再跑评测
→ 达到最低分数线，或者至少知道它的边界
\`\`\`

如果是高频、复杂、要交给别人使用的 Skill，最好跑过这个闭环。

否则它可能只是一个未经验证的 Prompt 文件。

## 6.7 用官方的 skill-creator 帮你搭建并审查

Anthropic 自己出了一个内置 Skill 叫 skill-creator，Claude.ai 插件目录可装，Claude Code 也能直接下载。

它能帮你做几件事：

- 根据自然语言描述生成 skill 初稿

- 产出格式正确的 SKILL.md（带 frontmatter）

- 建议触发短语和结构

- 复查已有 skill，标记常见问题（描述模糊、缺触发、结构问题）

- 在你跑测试遇到边缘情况后，把这些反馈带回来迭代改进

调用方式很简单：

\`\`\`text
Use the skill-creator skill to help me build a skill for \[我的用例\]
\`\`\`

它不会自动跑评测、不会自动出量化报告，但会帮你绕过从零起手最容易踩的坑。

新手起步阶段，强烈建议先用 skill-creator 出第一版骨架，再自己改。

---

# 7\. Skill 写完了怎么分享给别人？

写完一个 Skill，下一步是让它能被你以外的人用上。

Anthropic 当前推荐的路径：

第一步：托管在 GitHub

- 用公开仓库（如果是开源 skill）

- 仓库根目录写一份清晰的 README（这个是给人类读者看的，跟 skill 文件夹里"不能放 README.md"那条规则不冲突——人类的 README 跟 skill 文件夹是平级的）

- 给出几张使用截图

第二步：上传到 Claude.ai

- 把整个 skill 文件夹打包成 zip

- 打开 Claude.ai → Settings → Capabilities → Skills → Upload skill

- 选 zip → 开启 → 测试

第三步：组织级分发

Anthropic 已经上线了组织级 skill 部署——管理员可以一次推到整个工作区。所有成员自动拿到、自动更新、集中管理。如果你是给团队用的 skill，这条路比让每个人自己上传稳得多。

第四步：通过 API 程序化使用

如果是搭应用、Agent 或自动化流程：

- 用 /v1/skills 端点列出和管理

- 通过 container.skills 参数把 skill 加进 Messages API 请求

- 在 Claude 控制台做版本控制

- 配合 Claude Agent SDK 构建自定义 Agent

哪种最佳取决于场景：

![Image](../_media/x-2051111166416396713/Ryrenz_2051111166416396713_1.jpg)

## 7.1 描述你的 Skill 时，聚焦成果

写 README、写营销文案、写 MCP 文档里的 skill 介绍时，记住一个原则：用户不关心你是什么，关心你能给他什么结果。

[❌](https://abs.twimg.com/emoji/v2/svg/274c.svg) 不好的写法：

> ProjectHub skill 是一个包含 YAML frontmatter 和 Markdown 指令的文件夹，能调用我们 MCP server 的工具。

[✅](https://abs.twimg.com/emoji/v2/svg/2705.svg) 好的写法：

> ProjectHub skill 让团队 30 秒内搭好完整项目工作区——包括页面、数据库、模板——不用花 30 分钟手动配置。

第一种写法说的是文件结构（用户不关心）。第二种说的是节省的时间（用户秒懂）。

---

# 8\. 一个好 Skill 应该是什么样的？

什么是一个好的 Skill？

它只需要做到几件事：

1. 能被正确触发。

1. 不该触发时保持安静。

1. 工具权限足够但不过度。

1. 用对了模型和思考深度

1. SKILL.md 足够短（500 行以内），资料按需展开。

1. 重要的 Skill 最好有测试数据、有评测、有失败案例、有迭代。

所以写 Skill 时，不要只思考：

"我要模型干什么？"

更应该思考：

- 用户说出哪些话时，这个 Skill 应该被模型调用？

- 它触发后，应该按什么流程做？

- 它允许用哪些工具，不允许做什么？

- 用哪个模型跑最合适？

- 哪些内容应该留在主文件，哪些应该拆出去？

- 我要怎么证明它真的有效？

- 别人怎么装、怎么升级、出问题怎么找回来？

这就是 Skill 跟 Prompt 最大的区别。

---

# 附录 A：SKILL.md 起步模板

直接抄走改。注意：YAML 字段名（name / description / model 等）是 Skill 系统硬性规定，必须保持英文。但字段值、Markdown 正文、示例都可以全用中文。

\`\`\`markdown
\---
name: weekly-topic-planner
description: 规划自媒体作者下周的公众号选题。当用户说"定下周选题"、"这周写什么"、"帮我看看下周发啥"的时候用。
\---

\# 每周公众号选题规划

\## 操作步骤

\### 第一步：拉素材
从用户关注的微信群、X 收藏、小红书爆款里，找出最近 7 天的热点话题。

\### 第二步：按账号定位过滤
读取 \`references/account-positioning.md\` 里的账号方向，把跟方向不符的话题筛掉。

\### 第三步：生成选题清单
给出 5 个候选选题，每个包含：
\- 建议标题
\- 切角说明
\- 预估爆款概率
\- 写作难度

（按需添加更多步骤）

\## 示例

\### 示例 1：常见场景
用户说："帮我定下周选题"
操作：
1\. 拉最近 7 天的爆款（从素材池）
2\. 按账号定位筛掉无关话题
3\. 输出 5 个候选选题表格
结果：5 个候选选题，用户可以直接挑一个开写

\## 故障排除

\### 错误：拉不到素材
\*\*原因\*\*：素材来源链接失效或网络断了
\*\*解决\*\*：检查 \`references/sources.md\` 里的链接，更新失效的源
\`\`\`

# 附录 B：Skill YAML 完整字段

![Image](../_media/x-2051111166416396713/Ryrenz_2051111166416396713_2.jpg)

例子：

\`\`\`yaml
\---
name: weekly-topic-planner
description: 帮自媒体作者规划下周公众号选题。当用户说"定下周选题"、"这周写什么"的时候用。
license: MIT
allowed-tools: "Bash(python:\*) Bash(npm:\*) WebFetch"
model: claude-opus-4-5
effort: high
metadata:
  author: 张大
  version: 1.0.0
  mcp-server: wechat-mp-server
  category: 自媒体
\---
\`\`\`

给跨平台 skill 的提醒：如果你想让 skill 在 Codex、Hermes上也能跑，只用通用字段。

Claude Code 专属字段在其他平台会被忽略。

---

# 附录 C：快速检查清单

开工前

- \[ \] 已经定了 2-3 个具体用例

- \[ \] 已经确定要用哪些工具（Claude 自带的，还是 MCP 接的）

- \[ \] 已经看过几个示例 skill

- \[ \] 已经规划好文件夹结构

写的过程中

- \[ \] 文件夹名是 kebab-case

- \[ \] SKILL.md 文件名拼写完全正确（大小写）

- \[ \] YAML frontmatter 有 --- 分隔符

- \[ \] name 字段：kebab-case、无空格、无大写

- \[ \] description 包含"做什么"和"什么时候用"

- \[ \] 任何地方都没有 XML 尖括号 &lt; &gt;

- \[ \] 指令清晰可操作

- \[ \] 包含错误处理

- \[ \] 提供示例

- \[ \] references 清晰链接

- \[ \] SKILL.md 在 500 行以内

上传前

- \[ \] 已经测过明显任务的触发

- \[ \] 已经测过改写过的请求的触发

- \[ \] 已经验证不会在无关话题上触发

- \[ \] 功能测试通过

- \[ \] 工具集成正常工作（如适用）

- \[ \] 已压缩成 zip 文件

上传后

- \[ \] 监控触发不足/过度触发的情况

- \[ \] 收集用户反馈

- \[ \] 根据反馈迭代 description 和指令

---

Prompt 解决的是这一次对话。

Skill 解决的是之后一百次类似任务。

它是把经验固化成一个可触发、可测试、可分发的工作流。

### 🖼️ Attached Media

![Image 1](../_media/x-2051111166416396713/Ryrenz_2051111166416396713_3.jpg)

## 💬 Replies

### 1 @Ryrenz (Ren) (Author)

*Fri May 15 05:17:54 +0000 2026*

[x.com/FakeMaidenMake…](https://x.com/FakeMaidenMaker/status/2055146731625447516)

### 2 @Stanleysobest (Stanley)

*Tue May 05 01:41:38 +0000 2026*

@ryrenz 新手居然也能学会。太牛了！

### 3 @Ryrenz (Ren) (Author)

*Tue May 05 02:10:41 +0000 2026*

@Stanleysobest 是的哈哈哈

### 4 @ai_xiaomu (黄小木)

*Mon May 04 01:49:16 +0000 2026*

@ryrenz 这么炫酷的标题和背景，像赛博朋克2077

### 5 @Ryrenz (Ren) (Author)

*Mon May 04 01:53:45 +0000 2026*

@ai\_xiaomu 大神的实力还是太权威了

### 6 @noahduck283 (诺鸭船长3)

*Mon May 04 06:06:05 +0000 2026*

@ryrenz 一个好skill真的要打磨好久

### 7 @Ryrenz (Ren) (Author)

*Mon May 04 06:41:54 +0000 2026*

@noahduck283 是啊，做完了还得根据使用后的情况继续优化，甚至agent和model升级了之后有些内容也需要更新

### 8 @PandaMing88 (Ming)

*Mon May 04 02:18:45 +0000 2026*

@ryrenz 相当牛逼的教程，，下载下来好好看。

### 9 @Ryrenz (Ren) (Author)

*Mon May 04 02:24:53 +0000 2026*

@PandaMing88 过奖了哥，整理了一下现有经验，希望能帮到朋友们

### 10 @OMOisomo (O MO)

*Mon May 04 05:03:50 +0000 2026*

@ryrenz 写的skill都是自己用，没怎么在意过边界之类的东西🤦

### 11 @Ryrenz (Ren) (Author)

*Mon May 04 05:11:20 +0000 2026*

@OMOisomo 哈哈哈是这样的，自用能跑就行
如果要商用或者开源需要长期可维护可优化，就需要多考虑一些了

### 12 @sleepmagican (sleep magician)

*Mon May 04 07:03:17 +0000 2026*

@ryrenz 背景真炫酷

### 13 @Ryrenz (Ren) (Author)

*Mon May 04 07:06:04 +0000 2026*

@sleepmagican 或许你也喜欢 Akira？

### 14 @alec2244 (一楼蹦极·AI探索🧐)

*Mon May 04 14:37:02 +0000 2026*

@ryrenz 想请教下：当Skill数量超过20个以后，你是怎么管理description常驻匹配成本的？有推荐的架构实践吗？

### 15 @Ryrenz (Ren) (Author)

*Mon May 04 15:35:19 +0000 2026*

@alec2244 把 Decription 优化到能触发又不会误触发；
然后分清楚项目级和全局 Skill，不是跨项目的 skill 就放到 项目级；
还有就是文中有讲，不常用的就直接 diable 自动触发，手动通过 slash command 去调用就好。

### 16 @AshcbeMartin (江堡ALL IN AI)

*Mon May 04 03:07:42 +0000 2026*

@ryrenz 值得反复细读🧐

