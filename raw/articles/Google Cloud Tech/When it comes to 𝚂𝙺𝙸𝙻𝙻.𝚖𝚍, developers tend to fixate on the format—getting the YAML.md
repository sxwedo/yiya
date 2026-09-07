---
title: "5 Agent Skill design patterns every ADK developer should know"
author: "Google Cloud Tech (@GoogleCloudTech)"
url: "https://x.com/GoogleCloudTech/status/2033953579824758855"
ingested: "2026-09-07"
date: "Tue Mar 17 17:08:17 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 5 Agent Skill design patterns every ADK developer should know

When it comes to 𝚂𝙺𝙸𝙻𝙻.𝚖𝚍, developers tend to fixate on the format—getting the YAML right, structuring directories, and following the spec. But with more than 30 agent tools (like Claude Code, Gemini CLI, and Cursor) standardizing on the same layout, the formatting problem is practically obsolete.

The challenge now is content design. The specification explains how to package a skill, but offers zero guidance on how to structure the logic inside it. For example, a skill that wraps FastAPI conventions operates completely differently from a four-step documentation pipeline, even though their 𝚂𝙺𝙸𝙻𝙻.𝚖𝚍 files look identical on the outside.

By studying how skills are built across the ecosystem—from Anthropic’s repositories to Vercel and Google's internal guidelines— there are five recurring design patterns that can help developers build agents.

By @Saboo\_Shubham\_ and @lavinigam

This article covers each one with working ADK code:

- Tool Wrapper: Make your agent an instant expert on any library

- Generator: Produce structured documents from a reusable template

- Reviewer: Score code against a checklist by severity

- Inversion: The agent interviews you before acting

- Pipeline: Enforce a strict multi-step workflow with checkpoints

![Image](../_media/x-2033953579824758855/GoogleCloudTech_2033953579824758855_7.jpg)

## Pattern 1: The Tool Wrapper

A Tool Wrapper gives your agent on-demand context for a specific library. Instead of hardcoding API conventions into your system prompt, you package them into a skill. Your agent only loads this context when it actually works with that technology.

![Image](../_media/x-2033953579824758855/GoogleCloudTech_2033953579824758855_4.jpg)

It is the simplest pattern to implement. The 𝚂𝙺𝙸𝙻𝙻.𝚖𝚍 file listens for specific library keywords in the user's prompt, dynamically loads your internal documentation from the  𝚛𝚎𝚏𝚎𝚛𝚎𝚗𝚌𝚎𝚜/ directory, and applies those rules as absolute truth. This is the exact mechanism you use to distribute your team's internal coding guidelines or specific framework best practices directly into your developers' workflows.

Here is an example of a Tool Wrapper that teaches an agent how to write FastAPI code. Notice how the instructions explicitly tell the agent to load the 𝚌𝚘𝚗𝚟𝚎𝚗𝚝𝚒𝚘𝚗𝚜.𝚖𝚍 file only when it starts reviewing or writing code:

\`\`\`
\# skills/api-expert/SKILL.md
\---
name: api-expert
description: FastAPI development best practices and conventions. Use when building, reviewing, or debugging FastAPI applications, REST APIs, or Pydantic models.
metadata:
  pattern: tool-wrapper
  domain: fastapi
\---

You are an expert in FastAPI development. Apply these conventions to the user's code or question.

\## Core Conventions

Load 'references/conventions.md' for the complete list of FastAPI best practices.

\## When Reviewing Code
1\. Load the conventions reference
2\. Check the user's code against each convention
3\. For each violation, cite the specific rule and suggest the fix

\## When Writing Code
1\. Load the conventions reference
2\. Follow every convention exactly
3\. Add type annotations to all function signatures
4\. Use Annotated style for dependency injection

\`\`\`

## Pattern 2: The Generator

While the Tool Wrapper applies knowledge, the Generator enforces consistent output. If you struggle with an agent generating different document structures on every run, the Generator solves this by orchestrating a fill-in-the-blank process.

![Image](../_media/x-2033953579824758855/GoogleCloudTech_2033953579824758855_6.jpg)

It leverages two optional directories: 𝚊𝚜𝚜𝚎𝚝𝚜/ holds your output template, and 𝚛𝚎𝚏𝚎𝚛𝚎𝚗𝚌𝚎𝚜/ holds your style guide. The instructions act as a project manager. They tell the agent to load the template, read the style guide, ask the user for missing variables, and populate the document. This is practical for generating predictable API documentation, standardizing commit messages, or scaffolding project architectures.

In this technical report generator example, the skill file does not contain the actual layout or the grammar rules. It simply coordinates the retrieval of those assets and forces the agent to execute them step by step:

\`\`\`
\# skills/report-generator/SKILL.md
\---
name: report-generator
description: Generates structured technical reports in Markdown. Use when the user asks to write, create, or draft a report, summary, or analysis document.
metadata:
  pattern: generator
  output-format: markdown
\---

You are a technical report generator. Follow these steps exactly:

Step 1: Load 'references/style-guide.md' for tone and formatting rules.

Step 2: Load 'assets/report-template.md' for the required output structure.

Step 3: Ask the user for any missing information needed to fill the template:
\- Topic or subject
\- Key findings or data points
\- Target audience (technical, executive, general)

Step 4: Fill the template following the style guide rules. Every section in the template must be present in the output.

Step 5: Return the completed report as a single Markdown document.

\`\`\`

## Pattern 3: The Reviewer

The Reviewer pattern separates what to check from how to check it. Rather than writing a long system prompt detailing every code smell, you store a modular rubric inside a 𝚛𝚎𝚏𝚎𝚛𝚎𝚗𝚌𝚎𝚜/𝚛𝚎𝚟𝚒𝚎𝚠-𝚌𝚑𝚎𝚌𝚔𝚕𝚒𝚜𝚝.𝚖𝚍 file.

![Image](../_media/x-2033953579824758855/GoogleCloudTech_2033953579824758855_5.jpg)

When a user submits code, the agent loads this checklist and methodically scores the submission, grouping its findings by severity. If you swap out a Python style checklist for an OWASP security checklist, you get a completely different, specialized audit using the exact same skill infrastructure. It is a highly effective way to automate PR reviews or catch vulnerabilities before a human looks at the code.

The following code reviewer skill demonstrates this separation. The instructions remain static, but the agent dynamically loads the specific review criteria from an external checklist and forces a structured, severity-based output:

\`\`\`
\# skills/code-reviewer/SKILL.md
\---
name: code-reviewer
description: Reviews Python code for quality, style, and common bugs. Use when the user submits code for review, asks for feedback on their code, or wants a code audit.
metadata:
  pattern: reviewer
  severity-levels: error,warning,info
\---

You are a Python code reviewer. Follow this review protocol exactly:

Step 1: Load 'references/review-checklist.md' for the complete review criteria.

Step 2: Read the user's code carefully. Understand its purpose before critiquing.

Step 3: Apply each rule from the checklist to the code. For every violation found:
\- Note the line number (or approximate location)
\- Classify severity: error (must fix), warning (should fix), info (consider)
\- Explain WHY it's a problem, not just WHAT is wrong
\- Suggest a specific fix with corrected code

Step 4: Produce a structured review with these sections:
\- \*\*Summary\*\*: What the code does, overall quality assessment
\- \*\*Findings\*\*: Grouped by severity (errors first, then warnings, then info)
\- \*\*Score\*\*: Rate 1-10 with brief justification
\- \*\*Top 3 Recommendations\*\*: The most impactful improvements

\`\`\`

## Pattern 4: Inversion

Agents inherently want to guess and generate immediately. The Inversion pattern flips this dynamic. Instead of the user driving the prompt and the agent executing, the agent acts as an interviewer.

![Image](../_media/x-2033953579824758855/GoogleCloudTech_2033953579824758855_2.jpg)

Inversion relies on explicit, non-negotiable gating instructions (like "DO NOT start building until all phases are complete") to force the agent to gather context first. It asks structured questions sequentially and waits for your answers before moving to the next phase. The agent refuses to synthesize a final output until it has a complete picture of your requirements and deployment constraints.

To see this in action, look at this project planner skill. The crucial element here is the strict phasing and the explicit gatekeeping prompt that stops the agent from synthesizing the final plan until all user answers are collected:

\`\`\`
\# skills/project-planner/SKILL.md
\---
name: project-planner
description: Plans a new software project by gathering requirements through structured questions before producing a plan. Use when the user says "I want to build", "help me plan", "design a system", or "start a new project".
metadata:
  pattern: inversion
  interaction: multi-turn
\---

You are conducting a structured requirements interview. DO NOT start building or designing until all phases are complete.

\## Phase 1 — Problem Discovery (ask one question at a time, wait for each answer)

Ask these questions in order. Do not skip any.

\- Q1: "What problem does this project solve for its users?"
\- Q2: "Who are the primary users? What is their technical level?"
\- Q3: "What is the expected scale? (users per day, data volume, request rate)"

\## Phase 2 — Technical Constraints (only after Phase 1 is fully answered)

\- Q4: "What deployment environment will you use?"
\- Q5: "Do you have any technology stack requirements or preferences?"
\- Q6: "What are the non-negotiable requirements? (latency, uptime, compliance, budget)"

\## Phase 3 — Synthesis (only after all questions are answered)

1\. Load 'assets/plan-template.md' for the output format
2\. Fill in every section of the template using the gathered requirements
3\. Present the completed plan to the user
4\. Ask: "Does this plan accurately capture your requirements? What would you change?"
5\. Iterate on feedback until the user confirms

\`\`\`

## Pattern 5: The Pipeline

For complex tasks, you cannot afford skipped steps or ignored instructions. The Pipeline pattern enforces a strict, sequential workflow with hard checkpoints.

The instructions themselves serve as the workflow definition. By implementing explicit diamond gate conditions (such as requiring user approval before moving from docstring generation to final assembly), the Pipeline ensures an agent cannot bypass a complex task and present an unvalidated final result.

![Image](../_media/x-2033953579824758855/GoogleCloudTech_2033953579824758855_3.jpg)

This pattern utilizes all optional directories, pulling in different reference files and templates only at the specific step where they are needed, keeping the context window clean.

In this documentation pipeline example, notice the explicit gate conditions. The agent is explicitly forbidden from moving to the assembly phase until the user confirms the generated docstrings in the previous step:

\`\`\`
\# skills/doc-pipeline/SKILL.md
\---
name: doc-pipeline
description: Generates API documentation from Python source code through a multi-step pipeline. Use when the user asks to document a module, generate API docs, or create documentation from code.
metadata:
  pattern: pipeline
  steps: "4"
\---

You are running a documentation generation pipeline. Execute each step in order. Do NOT skip steps or proceed if a step fails.

\## Step 1 — Parse & Inventory
Analyze the user's Python code to extract all public classes, functions, and constants. Present the inventory as a checklist. Ask: "Is this the complete public API you want documented?"

\## Step 2 — Generate Docstrings
For each function lacking a docstring:
\- Load 'references/docstring-style.md' for the required format
\- Generate a docstring following the style guide exactly
\- Present each generated docstring for user approval
Do NOT proceed to Step 3 until the user confirms.

\## Step 3 — Assemble Documentation
Load 'assets/api-doc-template.md' for the output structure. Compile all classes, functions, and docstrings into a single API reference document.

\## Step 4 — Quality Check
Review against 'references/quality-checklist.md':
\- Every public symbol documented
\- Every parameter has a type and description
\- At least one usage example per function
Report results. Fix issues before presenting the final document.

\`\`\`

## Choosing the right agent skill pattern

Each pattern answers a different question. Use this decision tree to find the right one for your use-case:

![Image](../_media/x-2033953579824758855/GoogleCloudTech_2033953579824758855_1.jpg)

## And finally, patterns compose

These patterns are not mutually exclusive. They compose.

A Pipeline skill can include a Reviewer step at the end to double-check its own work. A Generator can rely on Inversion at the very beginning to gather the necessary variables before filling out its template. Thanks to ADK's 𝚂𝚔𝚒𝚕𝚕𝚃𝚘𝚘𝚕𝚜𝚎𝚝 and progressive disclosure, your agent only spends context tokens on the exact patterns it needs at runtime.

Stop trying to cram complex and fragile instructions into a single system prompt. Break your workflows down, apply the right structural pattern, and build reliable agents.

## Get started today

The Agent Skills specification is open-source and natively supported across ADK. You already know how to package the format. Now you know how to design the content. Go build smarter agents with [Google Agent Development Kit](https://google.github.io/adk-docs/).

### 🖼️ Attached Media

![Image 1](../_media/x-2033953579824758855/GoogleCloudTech_2033953579824758855_8.jpg)

## 💬 Replies

### 1 @Vanarchain (Vanar)

*Wed Mar 18 20:15:18 +0000 2026*

@GoogleCloudTech 

![Image](../_media/x-2033953579824758855/Vanarchain_2034363034052055385_1.jpg)

### 2 @brianchew (Brian Chew)

*Wed Mar 18 01:44:40 +0000 2026*

@GoogleCloudTech first time seeing the term ADK

### 3 @HeyYoGB (GBE)

*Wed Mar 18 07:24:31 +0000 2026*

@GoogleCloudTech i love these prompts

### 4 @seclink (Y11)

*Mon Aug 03 03:52:40 +0000 2026*

@GoogleCloudTech @grok 这个纯研究还是有工业意义，具体工业场景视角看意义是什么，有开源数据集或者开源项目代码吗？从多个数据源交叉验证，不要只看新闻媒体一面之辞。帮我排除没意义的垃圾商业营销推广。

### 5 @Ember_web3 (Ember 🇰🇷)

*Wed Mar 25 10:55:55 +0000 2026*

@GoogleCloudTech Glad you appreciated it, thank you so much.

### 6 @FishxCD (Fish)

*Wed Mar 18 19:25:37 +0000 2026*

@GoogleCloudTech 

![Image](../_media/x-2033953579824758855/FishxCD_2034350528529064316_1.jpg)

### 7 @GalemKayo (Galem Kayo)

*Tue Mar 17 22:04:17 +0000 2026*

@GoogleCloudTech Great synthesis. Added to [github.com/skillmatic-ai/…](https://github.com/skillmatic-ai/awesome-agent-skills)

### 8 @sher_mish_ (Sher)

*Tue Mar 17 18:24:56 +0000 2026*

@GoogleCloudTech this is the missing piece a lot of people still gloss over. tools make agents possible, but patterns are what keep them from turning into spaghetti with API keys.

### 9 @agiwebsite (Vibe Monkey 😂)

*Wed Mar 18 15:55:57 +0000 2026*

@GoogleCloudTech 中文版😆U

![Image](../_media/x-2033953579824758855/agiwebsite_2034297767993180162_1.jpg)

### 10 @HungEgg (Willie)

*Wed Mar 18 05:21:45 +0000 2026*

@GoogleCloudTech Really useful breakdown! The Reviewer and Pipeline patterns are great — definitely going to apply these to improve the built-in skills in my project skillshare ([github.com/runkids/skills…](http://github.com/runkids/skillshare))

### 11 @outprogX (outprog)

*Wed Mar 18 12:14:40 +0000 2026*

@GoogleCloudTech AI agent engineering ≈ biological engineering: what we’re doing now—searching for best practices for AI agents—is much like how nature drives the evolution of life.

### 12 @agiwebsite (Vibe Monkey 😂)

*Wed Mar 18 16:03:11 +0000 2026*

@GoogleCloudTech Beautiful SKILL.md😆3

![Image](../_media/x-2033953579824758855/agiwebsite_2034299587666862457_1.jpg)

### 13 @zhongying14 (麻酱AI实验室)

*Wed Mar 18 15:09:54 +0000 2026*

@GoogleCloudTech 5种逻辑结构学会了，让Agent Skill更稳定
[x.com/zhongying14/st…](https://x.com/zhongying14/status/2034282046592282744?s=20)

### 14 @dong_ruiya65719 (Ruiyang Dong)

*Wed Mar 18 14:22:09 +0000 2026*

@GoogleCloudTech @grok 帮我总结这个文章内容，翻译成中文。

### 15 @luongnv89 (Luong NGUYEN)

*Wed Mar 18 08:59:10 +0000 2026*

very interesting article. we need to explore more the metadata field, or create more field in the frontmatter section.

one of the problem nowadays, each one has their own version of code-review skill, design-skill, etc. 
&gt;&gt;&gt; at certain moment, managing different skills from different providers/creators for different situation will be quite complicated.

I have been working on a tool to manage agent skills to address such issues like that. tool is build for human (tui) and also for agent (cli). 

MIT licensed: [github.com/luongnv89/agen…](https://github.com/luongnv89/agent-skill-manager)

![Reply 15 Image 1](../_media/x-2033953579824758855/luongnv89_2034192880156250574_1.jpg)

### 16 @zhongying14 (麻酱AI实验室)

*Wed Mar 18 15:10:08 +0000 2026*

@GoogleCloudTech 5种逻辑结构学会了，让Agent Skill更稳定
[x.com/zhongying14/st…](https://x.com/zhongying14/status/2034282046592282744?s=20)

### 17 @martuccimichele (Mik)

*Wed Mar 18 11:07:10 +0000 2026*

@GoogleCloudTech it would be great if you share resources as well (the one referenced in the skills) just to understand how they're engineered

### 18 @codingber (coding.berlin | KERNSTACK)

*Tue Mar 17 21:18:17 +0000 2026*

@GoogleCloudTech this type of clear structure really gets me excited - so many pieces clicking into place after billions of tokens of „raw“ experimentation 💪

### 19 @zhiyulee03 (LEE)

*Wed Mar 18 07:40:51 +0000 2026*

@GoogleCloudTech @grok 通俗易懂的帮我总计下

### 20 @Mlke_Mik (Mike Mik)

*Wed Mar 18 10:48:39 +0000 2026*

@GoogleCloudTech Why Gemini models have such big issues with structured response? It is almost impossible to parse reasoning

### 21 @asdghjklil (一头卷发)

*Wed Mar 18 15:45:39 +0000 2026*

@GoogleCloudTech @grok 使用中文总结。

### 22 @BadTechBandit (Roman M • building gotmoat.ai • curo.you - e/acc)

*Thu Mar 19 02:56:35 +0000 2026*

@GoogleCloudTech Thank you for dropping some amazing alpha!

### 23 @mylxsw (mylxsw)

*Wed Mar 18 06:58:24 +0000 2026*

This really resonates. It feels like we’ve officially moved past “prompt hacking” and into actual system design.

What stood out to me is the shift from what the agent knows to how the agent behaves. These patterns make that explicit — especially Inversion and Pipeline, which basically introduce control flow and guardrails into agent design.

Also love the idea that skills are composable. That’s probably the missing layer for building agents that are not just smart, but dependable.

Curious to see how teams standardize around these patterns over time — this feels like the early days of design patterns for AI systems.

### 24 @0xOzen (Ali Osman Ozen)

*Wed Mar 18 16:11:49 +0000 2026*

@GoogleCloudTech @grok can you send this article into my AI Interpreter project

### 25 @amazinglvxw (Observer)

*Tue Mar 17 22:51:30 +0000 2026*

@GoogleCloudTech @Grok 帮我总结这篇文章

### 26 @brucewa00876402 (bruce12345678)

*Wed Mar 18 05:58:38 +0000 2026*

@GoogleCloudTech @grok 帮我总结一下内容

### 27 @ZJM330 (M1nG)

*Thu Mar 19 00:18:06 +0000 2026*

@GoogleCloudTech @grok 请帮我用中文进行总结，并告知我其中详细的内容，以及所有细节。同时点明其中在部署时应该注意的事项

### 28 @yanlongli011 (new)

*Wed Mar 18 14:25:10 +0000 2026*

@GoogleCloudTech @grok 帮我总结这篇文章

### 29 @khcluc85173 (khcluc)

*Wed Mar 18 06:55:32 +0000 2026*

@GoogleCloudTech @grok 什么意思 帮我总结

### 30 @guojllyq (yeguang)

*Wed Mar 18 15:46:54 +0000 2026*

@GoogleCloudTech @grok 帮我翻译一下

### 31 @weicheng_95 (weicheng)

*Wed Mar 18 10:00:03 +0000 2026*

@GoogleCloudTech patterns &gt; tools, every time

### 32 @heguang005 (He Guang/Protocol Architect 人机共生时代的关系与边界设计者)

*Wed Mar 18 07:13:27 +0000 2026*

@GoogleCloudTech good

### 33 @Doris0612heart (Doris.hainan)

*Wed Mar 18 15:42:03 +0000 2026*

@GoogleCloudTech 期待，有新手教学就好了

### 34 @Valeriex5689 (Valerie)

*Wed Mar 18 17:17:13 +0000 2026*

@GoogleCloudTech good

### 35 @tutao0123 (TuTao)

*Thu Mar 19 04:27:37 +0000 2026*

@GoogleCloudTech @grok 
总结一下

