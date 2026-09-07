---
title: "为每个任务量身定做：Claude Code 动态工作流完全指南"
author: "Mr Panda (@PandaTalk8)"
url: "https://x.com/PandaTalk8/status/2063918562318946740"
ingested: "2026-09-07"
date: "Mon Jun 08 09:38:25 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 为每个任务量身定做：Claude Code 动态工作流完全指南

Bun 团队把底层从 Zig 迁移到 Rust，几十万行代码要改。不是一个人坐那儿一行一行改——是用 Claude Code 的 Workflow 同时派出几十个 AI 代理，每个代理负责一个模块，在独立的 Git 分支里改完、跑通测试、交叉验证，最后合并。

这个功能叫动态工作流（Dynamic Workflows）。它和你之前见过的任何"自动化编排"都不一样——不是预先定义好的固定流程，而是 Claude 根据你当前的具体任务，实时生成一套最适合的多代理协作方案。

但问题是——大多数人要么不知道怎么触发它，要么给了一个模糊的指令然后对着一堆并发代理不知所措。这篇文章从"为什么需要它"讲起，把六种核心模式拆开讲透，最后给你十个即拿即用的场景。

# 一、单代理的三个致命瓶颈

你有没有遇到过这种情况：让 Claude 做一个复杂任务——比如审查 50 个文件的安全性——它做到第 15 个就开始"偷工减料"，后面的文件明显比前面敷衍？

这不是 bug，是单代理在长任务中的结构性缺陷。Anthropic 的工程团队总结了三种典型的失效模式：

- 代理惰性（Agentic Laziness）。 任务越长，代理越倾向于提前收工。做了十个文件后，它会说"其余文件结构类似，风险较低"——其实是上下文窗口被占满，它在寻找捷径。

- 自我偏好（Self-preferential Bias）。 让同一个代理先写代码再审查自己的代码，它几乎不会发现问题。这和人类的认知偏差一模一样——作者永远是最差的校对者。

- 目标漂移（Goal Drift）。 在一个超长的对话中，上下文会被多次压缩和摘要。每压缩一次，原始目标的细节就损失一层。到第五次压缩时，代理可能已经忘了你最初要求的三个关键约束中的两个。

Workflow 的解法很直接：拆。 把一个大任务拆成很多小任务，每个小任务交给一个独立的子代理。每个子代理有自己干净的上下文窗口、明确的单一目标、固定的输出格式。它不需要记住前面 49 个文件的结果，只需要把眼前这一个文件审查透。

# 二、动态工作流 vs 静态工作流

如果你用过 Claude Agent SDK 或者 claude -p 管道命令来编排多个代理，那你用的是静态工作流——你预先写好一套通用的编排逻辑，它对所有输入都走相同的流程。

动态工作流完全不同。你只需要用自然语言描述任务，Claude Opus 会根据任务的具体特征，当场生成一段 JavaScript 编排脚本。

两者的区别：

\| 维度     \| 静态工作流               \| 动态工作流                           \|
\| -------- \| ------------------------ \| ------------------------------------ \|
\| 编排逻辑 \| 你预先写好               \| Claude 实时生成                      \|
\| 灵活性   \| 一套逻辑应对所有输入     \| 每次任务定制化                       \|
\| 适合场景 \| 高频重复的标准化任务     \| 一次性的复杂任务                     \|
\| 门槛     \| 需要懂 SDK 和编排代码    \| 用自然语言描述即可                   \|
\| 典型触发 \| \`claude -p "..." \\\| ...\` \| 在对话中说"用 workflow"或"ultracode" \|

核心洞察：静态工作流追求通用性——它必须处理所有可能的边界情况。动态工作流追求针对性——它只需要解决眼前这一个具体问题。 后者的效果几乎总是更好，因为通用方案无法利用具体任务的特殊结构。

# 三、六种核心编排模式

所有复杂的 Workflow 都是由以下六种基本模式组合而成。掌握这六种，你就能应对几乎任何编排需求。

## 模式一：分类-执行（Classify-and-act）

一句话概括：先判断"这是什么类型的任务"，再把它路由到对应的处理逻辑。

最简单的例子：你有一堆混合的 GitHub Issue，有 bug、有 feature request、有文档问题。先用一个分类代理把它们分好类，再把不同类型分发给不同的专家代理。

\`\`\`javascript
export const meta = {
  name: 'issue-triage',
  description: '自动分类并处理 GitHub Issues',
  phases: \[
    { title: 'Classify', detail: '分类所有待处理 Issue' },
    { title: 'Handle', detail: '按类型分发处理' },
  \],
}

const CLASSIFY\_SCHEMA = {
  type: 'object',
  properties: {
    issues: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          type: { enum: \['bug', 'feature', 'docs', 'question'\] },
          priority: { enum: \['low', 'medium', 'high'\] },
          summary: { type: 'string' },
        },
        required: \['id', 'type', 'priority'\],
      },
    },
  },
  required: \['issues'\],
}

phase('Classify')
const classified = await agent(
  '读取所有 open 的 GitHub Issues，按类型（bug/feature/docs/question）和优先级（low/medium/high）分类',
  { label: 'classifier', schema: CLASSIFY\_SCHEMA }
)

phase('Handle')
const bugs = classified.issues.filter(i =&gt; i.type === 'bug' && i.priority === 'high')
const features = classified.issues.filter(i =&gt; i.type === 'feature')

const results = await parallel(\[
  () =&gt; agent(
    \`分析以下高优先级 bug，给出根因假设和修复建议：${JSON.stringify(bugs)}\`,
    { label: 'bug-handler', phase: 'Handle' }
  ),
  () =&gt; agent(
    \`评估以下 feature request 的可行性和工作量：${JSON.stringify(features)}\`,
    { label: 'feature-handler', phase: 'Handle' }
  ),
\])

return { bugs: bugs.length, features: features.length, results: results.filter(Boolean) }
\`\`\`

关键点： 分类代理和处理代理是不同的角色。分类代理需要广度——快速浏览所有 Issue 做判断；处理代理需要深度——深入分析一个类型的问题。把它们分开，各自发挥最大效果。

## 模式二：扇出-汇总（Fan-out-and-synthesize）

一句话概括：把大任务拆成独立的小块，并行处理，最后合并结果。

这是最常用的模式。代码审查、安全审计、文档翻译——只要任务可以按某个维度（文件、章节、维度）拆分，就用这个模式。

\`\`\`javascript
export const meta = {
  name: 'codebase-review',
  description: '多维度并行代码审查',
  phases: \[
    { title: 'Review', detail: '多维度并行审查' },
    { title: 'Synthesize', detail: '汇总审查结果' },
  \],
}

const REVIEW\_SCHEMA = {
  type: 'object',
  properties: {
    dimension: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          line: { type: 'number' },
          severity: { enum: \['info', 'warning', 'error'\] },
          message: { type: 'string' },
        },
        required: \['file', 'severity', 'message'\],
      },
    },
  },
  required: \['dimension', 'findings'\],
}

phase('Review')
const dimensions = \[
  { key: 'bugs', prompt: '查找逻辑错误、边界条件遗漏、空指针风险' },
  { key: 'perf', prompt: '查找性能问题：N+1 查询、不必要的重复计算、内存泄漏' },
  { key: 'security', prompt: '查找安全漏洞：注入、XSS、认证绕过、敏感信息泄露' },
  { key: 'style', prompt: '检查代码规范：命名一致性、死代码、过度复杂的抽象' },
\]

const reviews = await parallel(
  dimensions.map(d =&gt; () =&gt;
    agent(
      \`审查当前分支的改动文件。审查维度：${d.prompt}\`,
      { label: \`review:${d.key}\`, phase: 'Review', schema: REVIEW\_SCHEMA }
    )
  )
)

phase('Synthesize')
const allFindings = reviews.filter(Boolean).flatMap(r =&gt; r.findings)
const report = await agent(
  \`汇总以下代码审查发现，按严重程度排序，合并重复项，给出修复优先级建议：\\n${JSON.stringify(allFindings)}\`,
  { label: 'synthesize', phase: 'Synthesize' }
)

return report
\`\`\`

这里 parallel 是正确的选择——汇总阶段必须拿到所有维度的结果才能去重和排序。这恰好是使用屏障（barrier）的三种合理场景之一。

## 模式三：对抗性验证（Adversarial Verification）

一句话概括：派独立的"怀疑者"去反驳每个发现，多数无法反驳才算通过。

这是解决"自我偏好"问题的核心手段。审查代理说"这里有 SQL 注入"，你不能直接信。派三个完全独立的验证代理去尝试反驳——如果它们都说"确实有问题"，那大概率是真的。

\`\`\`javascript
async function adversarialVerify(finding, threshold) {
  const votes = await parallel(
    Array.from({ length: 3 }, (\_, i) =&gt; () =&gt;
      agent(
        \`你是安全审计怀疑者 #${i + 1}。你的任务是尝试反驳以下发现。它可能是误报吗？是否有已有的防护措施已经处理了这个问题？如果你无法确定它是真实问题，默认判定为误报。\\n\\n${JSON.stringify(finding)}\`,
        {
          label: \`skeptic:${finding.file}:L${finding.line}\`,
          phase: 'Verify',
          schema: {
            type: 'object',
            properties: {
              isReal: { type: 'boolean' },
              reason: { type: 'string' },
            },
            required: \['isReal', 'reason'\],
          },
        }
      )
    )
  )
  const validVotes = votes.filter(Boolean)
  const realCount = validVotes.filter(v =&gt; v.isReal).length
  return realCount &gt;= (threshold \|\| 2)
}
\`\`\`

关键细节： 提示词里说"如果无法确定，默认判定为误报"——这个默认立场很重要。验证者的默认态度应该是怀疑，而不是赞同。如果默认为"真实问题"，那验证就是走过场。

## 模式四：生成-筛选（Generate-and-filter）

一句话概括：先大量生成候选方案，再用严格标准筛选出最好的。

适合创意类任务——命名、设计方案、文案。先让多个代理各出各的方案，再用评审标准过滤。

\`\`\`javascript
export const meta = {
  name: 'naming-brainstorm',
  description: '头脑风暴产品命名并筛选最佳方案',
  phases: \[
    { title: 'Generate', detail: '多角度生成候选名称' },
    { title: 'Filter', detail: '按标准筛选' },
  \],
}

phase('Generate')
const angles = \[
  '从功能描述出发，生成 10 个简洁的英文产品名',
  '从用户情感出发，生成 10 个有温度的产品名',
  '从技术特色出发，生成 10 个专业感的产品名',
  '从竞品差异化出发，生成 10 个有辨识度的产品名',
\]

const NAME\_SCHEMA = {
  type: 'object',
  properties: {
    names: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          rationale: { type: 'string' },
        },
        required: \['name', 'rationale'\],
      },
    },
  },
  required: \['names'\],
}

const generated = await parallel(
  angles.map((angle, i) =&gt; () =&gt;
    agent(
      \`为一个 AI 编程助手产品命名。角度：${angle}。要求：易拼写、易记忆、.com 域名可能可用\`,
      { label: \`gen:${i}\`, phase: 'Generate', schema: NAME\_SCHEMA }
    )
  )
)

phase('Filter')
const allNames = generated.filter(Boolean).flatMap(r =&gt; r.names)
log(\`生成了 ${allNames.length} 个候选名称，开始筛选\`)

const winner = await agent(
  \`从以下 ${allNames.length} 个候选产品名中，按以下标准打分（每项1-5分）：
  1\. 简洁性（越短越好）
  2\. 记忆度（第一次听就能记住）
  3\. 独特性（不容易和已有产品混淆）
  4\. 域名可用性（.com 可能可用）
  选出得分最高的 5 个，说明理由。
  候选名：${JSON.stringify(allNames.map(n =&gt; n.name))}\`,
  { label: 'filter', phase: 'Filter' }
)

return winner
\`\`\`

## 模式五：锦标赛（Tournament）

一句话概括：多个代理用不同策略解同一个问题，两两对比选出赢家。

和"生成-筛选"的区别是：筛选用绝对标准打分，锦标赛用相对比较。对于没有客观标准的问题——设计品味、文案风格、架构取舍——相对比较比绝对打分更可靠。

\`\`\`javascript
export const meta = {
  name: 'design-tournament',
  description: '多方案竞赛：不同设计思路两两对比',
  phases: \[
    { title: 'Compete', detail: '多角度独立设计' },
    { title: 'Judge', detail: '两两对比评判' },
  \],
}

phase('Compete')
const strategies = \[
  '用最简方案实现——最少的组件、最少的状态、最直接的数据流',
  '用最灵活的方案实现——为未来扩展留足空间，接口解耦',
  '用性能最优的方案实现——最少的渲染次数、最小的包体积',
\]

const proposals = await parallel(
  strategies.map((s, i) =&gt; () =&gt;
    agent(
      \`为用户管理模块设计前端架构。策略：${s}。输出：组件树、状态管理方案、关键接口定义\`,
      { label: \`contestant:${i}\`, phase: 'Compete' }
    )
  )
)

phase('Judge')
const valid = proposals.filter(Boolean)

const JUDGE\_SCHEMA = {
  type: 'object',
  properties: {
    winner: { type: 'number' },
    reasoning: { type: 'string' },
    bestIdeasFromLoser: { type: 'array', items: { type: 'string' } },
  },
  required: \['winner', 'reasoning'\],
}

const judgements = await parallel(\[
  () =&gt; agent(
    \`比较方案 0 和方案 1，哪个更好？考虑可维护性、开发速度、用户体验。\\n方案0：${valid\[0\]}\\n方案1：${valid\[1\]}\`,
    { label: 'judge:0v1', phase: 'Judge', schema: JUDGE\_SCHEMA }
  ),
  () =&gt; agent(
    \`比较方案 1 和方案 2，哪个更好？\\n方案1：${valid\[1\]}\\n方案2：${valid\[2\]}\`,
    { label: 'judge:1v2', phase: 'Judge', schema: JUDGE\_SCHEMA }
  ),
  () =&gt; agent(
    \`比较方案 0 和方案 2，哪个更好？\\n方案0：${valid\[0\]}\\n方案2：${valid\[2\]}\`,
    { label: 'judge:0v2', phase: 'Judge', schema: JUDGE\_SCHEMA }
  ),
\])

return { proposals: valid, judgements: judgements.filter(Boolean) }

\`\`\`

## 模式六：循环到干（Loop-until-done）

一句话概括：你不知道有多少问题要找，就一直找，直到连续几轮都没新发现为止。

前五种模式的前提是"你大概知道任务的规模"。但有些任务天然规模未知——代码库里有多少 bug？一份文档里有多少事实性错误？你不知道。

\`\`\`javascript
export const meta = {
  name: 'exhaustive-bug-hunt',
  description: '穷尽式 bug 搜索：搜到搜不出为止',
  phases: \[{ title: 'Hunt', detail: '多轮搜索直到枯竭' }\],
}

const BUG\_SCHEMA = {
  type: 'object',
  properties: {
    bugs: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          line: { type: 'number' },
          description: { type: 'string' },
        },
        required: \['file', 'description'\],
      },
    },
  },
  required: \['bugs'\],
}

phase('Hunt')
const seen = new Set()
const allBugs = \[\]
let dryRounds = 0

while (dryRounds &lt; 3) {
  const round = allBugs.length &gt; 0
    ? \`以下 bug 已经找到过了，不要重复报告：\\n${allBugs.map(b =&gt; \`- ${b.file}: ${b.description}\`).join('\\n')}\\n\\n请找其他还没发现的问题。\`
    : '这是第一轮搜索，尽可能多找。'

  const result = await agent(
    \`在 src/ 目录中查找代码 bug——逻辑错误、边界条件、未处理的异常、竞态条件。${round}\`,
    { label: \`hunt:round-${allBugs.length}\`, phase: 'Hunt', schema: BUG\_SCHEMA }
  )

  const fresh = result.bugs.filter(b =&gt; {
    const key = \`${b.file}:${b.line \|\| 'unknown'}:${b.description.slice(0, 50)}\`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  if (!fresh.length) {
    dryRounds++
    log(\`第 ${dryRounds} 轮空轮，${dryRounds &gt;= 3 ? '搜索结束' : '继续尝试'}\`)
    continue
  }

  dryRounds = 0
  allBugs.push(...fresh)
  log(\`新发现 ${fresh.length} 个 bug，累计 ${allBugs.length} 个\`)
}

return { total: allBugs.length, bugs: allBugs }
\`\`\`

关键设计： dryRounds &lt; 3 而不是 &lt; 1——单次空轮可能是搜索方向不对，不代表真的没有更多问题。连续三轮空才有较高的置信度。

# 四、十个即拿即用的场景

前面讲了六种基本模式，但真正有价值的是知道什么场景用什么模式。以下是十个经过验证的高价值场景。

## 场景一：大规模代码迁移

模式组合： 扇出-汇总 + 对抗性验证

Bun 团队从 Zig 迁移到 Rust 时的策略：先找出所有需要迁移的调用点，然后每个调用点派一个子代理在独立的 Git worktree 里修改，修改完用另一个代理跑测试验证。

用 workflow 把所有调用 oldAuth() 的文件迁移到 newAuth()。
每个文件在独立 worktree 里修改，改完跑相关测试验证。

## 场景二：深度研究

模式组合： 扇出-汇总 + 对抗性验证 + 完备性批评

Claude Code 内置的 /deep-research 就是这个模式——多个代理从不同搜索角度并行调研，交叉验证信息源的可靠性，最后综合成一份带引用的报告。你可以把它用在任何需要多源验证的研究任务上。

ultracode: 调研 WebSocket 和 Server-Sent Events 在实时通知场景下的优劣。
从性能、兼容性、运维复杂度、移动端支持四个维度分别调研，交叉验证。

## 场景三：事实核查

模式组合： 扇出-汇总 + 对抗性验证

一份 20 页的技术白皮书里有多少事实性错误？一个代理提取所有事实性声明，然后每个声明派独立代理去验证——查源代码、查文档、查官方数据。

用 workflow 核查这份 API 文档的准确性。
一个代理提取所有事实性声明，然后每个声明派独立代理对照实际代码验证。

## 场景四：定性排序

模式组合： 锦标赛

100 份简历怎么排序？绝对打分不靠谱——同一个代理看第 1 份和第 80 份时的标准已经漂移了。锦标赛模式更好：两两比较（"A 和 B 谁更适合这个岗位？"），多轮淘汰，最终排名。

ultracode: 我有 50 个 CLI 命名候选，用锦标赛模式两两对比，
选出最符合"简洁、好记、不和已有工具冲突"标准的前 5 个。

## 场景五：规则遵守检查

模式组合： 扇出-汇总（每条规则一个验证代理）

你有一份编码规范，20 条规则。与其让一个代理同时检查所有规则（它一定会遗漏几条），不如每条规则派一个专门的代理。每个代理只关注一件事，做到极致。

用 workflow 检查这次 PR 是否符合 .cursor/rules 里的所有编码规范。
每条规则一个独立的验证代理。

## 场景六：根因分析

模式组合： 扇出-汇总 + 对抗性验证

生产环境出了一个诡异的 bug。日志里有线索，代码里有线索，配置里也有线索——但它们散落在不同地方。如果让同一个代理先看日志再看代码，它会锚定在第一个发现上，忽略其他可能性。

更好的做法：派三个独立代理，一个只看日志，一个只看代码变更，一个只看配置和环境。各自独立提出假设，再交叉验证。

ultracode: 线上 /api/checkout 接口从昨天开始间歇性返回 500。
派三个独立代理分别从日志、最近代码变更、基础设施配置三个方向调查，
各自提出假设，然后交叉验证。

## 场景七：大规模工单分拣

模式组合： 分类-执行 + 循环到干

结合 /loop 使用威力最大。每隔一段时间自动检查新工单，分类、去重、标记优先级、关联已有 Issue。

/loop 30m 用 workflow 检查新的 GitHub Issues，
按类型分类，标记优先级，
如果和已有 Issue 重复就自动标记 duplicate 标签。

## 场景八：探索与品味

模式组合： 生成-筛选 或 锦标赛

UI 设计、产品命名、文案写作——这些任务没有"正确答案"，只有"更好的答案"。关键是给评审代理一份明确的评判标准（rubric），否则它的评判和随机选择没区别。

## 场景九：轻量级评估

模式组合： 扇出-汇总

你改了一个 Prompt，想知道效果有没有变好。派 N 个代理分别用新旧 Prompt 处理一批测试用例，再用评判代理对比输出质量。不需要搭一套正式的 eval 框架——一个 Workflow 就够了。

## 场景十：智能路由

模式组合： 分类-执行

不是所有任务都需要最强的模型。先用一个轻量代理判断任务复杂度，简单任务路由给 Haiku（快且便宜），复杂任务路由给 Opus（强但贵）。

# 五、一个隐蔽但关键的设计：隔离

如果你的 Workflow 需要处理不可信的外部输入——比如从公开的 GitHub Issue 或邮件中读取内容——有一个安全模式值得注意：隔离（Quarantine）。

原理很简单：读取外部内容的代理，不应该拥有高权限操作的能力。具体做法是把读取和操作分成两层代理：

1. 读取 Agent ——只能读外部内容，提取结构化信息，不能执行任何写操作

1. 操作 Agent ——只接收读取Agent的结构化输出（不接触原始外部内容），执行实际操作

这样即使外部内容里嵌入了提示词注入攻击，读取 Agent 最多被骗提取错误信息，但操作 Agent 看不到原始恶意内容，不会被直接操控。

## 六、怎么触发动态工作流

四种方式，从低门槛到高控制：

第一种，自然语言请求。 只要你在对话中明确提到"workflow""多代理""并行编排"，Claude 就会判断是否需要生成 Workflow 脚本。

用 workflow 并行审查这次 PR 的所有改动文件

第二种，ultracode 关键词。 在提示词中加上这个词，Claude 会对所有非平凡的任务自动启用 Workflow。

ultracode: 审计 src/ 下所有 API 的权限检查

第三种，/effort ultracode 模式。 输入这个命令后，当前会话的所有复杂任务自动走 Workflow，不需要每次都说。

第四种，保存并复用。 在 /workflows 监控面板里按 s 保存一个 Workflow，它会存到 \~/.claude/workflows/ 目录。之后可以作为命令直接调用，也可以通过 Skill 的 SKILL.md 分发给团队。

# 七、预算控制与组合命令

控制 Token 消耗

Workflow 很强大，也很贵。一个没有预算限制的 Workflow 可以在几分钟内消耗掉你一天的 Token 额度。两种控制手段：

在提示词里直接说。 "用 10k tokens"——Claude 会据此控制代理数量和搜索深度。

在脚本里用 budget 对象。 budget.total 是用户设定的上限，budget.remaining() 是剩余额度。用它来动态调整并发规模。

和 /loop、/goal 组合

\`\`\`javascript
const fleetSize = budget.total ? Math.floor(budget.total / 100000) : 5

\`\`\`

- /loop + Workflow = 定时巡检。 每 30 分钟跑一次安全扫描，每小时检查一次依赖更新。

- /goal + Workflow = 达标即停。 "把所有测试修到绿色"——Goal 驱动整体目标，Workflow 处理每一轮的并行修复。

三者是不同层次的自动化：/loop 管时间节奏，/goal 管完成条件，Workflow 管单次任务内的并行编排。

# 八、什么时候不该用 Workflow

- 简单任务不需要 Workflow。 改一个函数、修一个 bug、写一段文档——直接和 Claude 对话就行。Workflow 的脚本生成、审批、调度有固定开销，小任务划不来。

- 需要上下文连贯性的任务不适合 Workflow。 写一篇长文章、设计一个完整的系统架构——这些需要一个代理从头到尾维持连贯的思路。拆成并行再拼接，质量几乎一定下降。

一个好的判断标准：问自己"这个任务真的需要更多算力吗？" 五个审查者比一个审查者好吗？如果你的代码库只有 10 个文件，一个认真的审查者可能比五个分散的审查者更可靠。

# 写在最后

动态工作流不是"让 Claude 更快"的工具，而是"让 Claude 更可靠"的架构。它的核心价值是用隔离消除偏见，用对抗验证消除幻觉，用并行消除偷懒。

先掌握六种模式，再去看具体场景。模式是积木，场景是拼法——积木就那么几块，拼法是无限的。

### 🖼️ Attached Media

![Image 1](../_media/x-2063918562318946740/PandaTalk8_2063918562318946740_1.jpg)

## 💬 Replies

### 1 @josepha_ai_tool (jose_Phoebe)

*Tue Jun 09 06:36:47 +0000 2026*

@PandaTalk8 分模块并行这块是关键
Bun 那种规模一次性让单 agent 改全部容易 context 超限崩掉；拆成独立 git 分支后失败了只重跑那一块，稳多了

### 2 @mobailabs (MobaiLabs | 墨白实验室)

*Mon Jun 08 11:24:13 +0000 2026*

@PandaTalk8 Zig到Rust几十万行迁移，这个案例太硬核了。想知道workflow具体怎么编排的，每个agent负责一个模块还是按层拆的？

