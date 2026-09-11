---
url: https://claude.com/blog/skills
author: Claude
ingested: "2026-09-11"
---

# Introducing Agent Skills

# 📰 Introducing Agent Skills

> Claude can now use Skills to improve how it performs specific tasks. Skills are folders that include instructions, scripts, and resources that Claude can load when needed. Claude will only access a skill when it's relevant to the task at hand.

***Update:*** *We've added* [*organization-wide management for skills*](https://claude.com/blog/organization-skills-and-directory)*, a* [*directory*](https://claude.com/connectors) *featuring partner-built skills, and published* [*Agent Skills*](https://agentskills.io) *as an open standard for cross-platform portability. (December 18, 2025)*

Claude can now use *Skills* to improve how it performs specific tasks. Skills are folders that include instructions, scripts, and resources that Claude can load when needed.

Claude will only access a skill when it's relevant to the task at hand. When used, skills make Claude better at specialized tasks like working with Excel or following your organization's brand guidelines.

[![Embedded YouTube video](https://img.youtube.com/vi/IoqpBKrNaZI/0.jpg)](https://www.youtube.com/watch?v=IoqpBKrNaZI)

You've already seen Skills at work in Claude apps, where Claude uses them to create files like spreadsheets and presentations. Now, you can build your own skills and use them across Claude apps, Claude Code, and our API.

## How Skills work

While working on tasks, Claude scans available skills to find relevant matches. When one matches, it loads only the minimal information and files needed—keeping Claude fast while accessing specialized expertise.

Skills are:

* **Composable**: Skills stack together. Claude automatically identifies which skills are needed and coordinates their use.
* **Portable**: Skills use the same format everywhere. Build once, use across Claude apps, Claude Code, and API.
* **Efficient**: Only loads what's needed, when it's needed.
* **Powerful**: Skills can include executable code for tasks where traditional programming is more reliable than token generation.

Think of Skills as custom onboarding materials that let you package expertise, making Claude a specialist on what matters most to you. For a technical deep-dive on the Agent Skills design pattern, architecture, and development best practices, read our [engineering blog.](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

## Skills work with every Claude product

### **Claude apps** ###

Skills are available to Pro, Max, Team and Enterprise users. We provide skills for common tasks like document creation, examples you can customize, and the ability to create your own custom skills.

![The Skills capabilities interface in Claude.ai with example Skills toggled on.](../_media/claude-introducing-agent-skills/Claude_skills_1.webp)

Claude automatically invokes relevant skills based on your task—no manual selection needed. You'll even see skills in Claude's chain of thought as it works.  

Creating skills is simple. The "skill-creator" skill provides interactive guidance: Claude asks about your workflow, generates the folder structure, formats the SKILL.md file, and bundles the resources you need. No manual file editing required.

[![Embedded YouTube video](https://img.youtube.com/vi/kS1MJFZWMq4/0.jpg)](https://www.youtube.com/watch?v=kS1MJFZWMq4)

Enable Skills in [Settings](https://claude.ai/redirect/website.v1.51f73c97-b077-44e7-85ba-8b27a025dfdf/settings/features). For Team and Enterprise users, admins must first enable Skills organization-wide.

### **Claude Developer Platform (API)** ###

Agent Skills, which we often refer to simply as Skills, can now be added to Messages API requests and the new `/v1/skills` endpoint gives developers programmatic control over custom skill versioning and management. Skills require the [Code Execution Tool](https://docs.claude.com/en/docs/agents-and-tools/tool-use/code-execution-tool) beta, which provides the secure environment they need to run.

Use Anthropic-created skills to have Claude read and generate professional Excel spreadsheets with formulas, PowerPoint presentations, Word documents, and fillable PDFs. Developers can create custom Skills to extend Claude's capabilities for their specific use cases.

Developers can also easily create, view, and upgrade skill versions through the Claude Console.

Explore the [documentation](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) , our [skills cookbook](https://platform.claude.com/cookbook/skills-notebooks-01-skills-introduction), or [Anthropic Academy](https://www.anthropic.com/learn/build-with-claude) to learn more.

‍
