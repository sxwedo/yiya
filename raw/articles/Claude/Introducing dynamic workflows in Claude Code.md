---
url: https://claude.com/blog/introducing-dynamic-workflows-in-claude-code
author: Claude
ingested: "2026-09-11"
---

# Introducing dynamic workflows in Claude Code

# 📰 Introducing dynamic workflows in Claude Code

> Dynamic workflows in Claude Code let Claude tackle the most challenging tasks by executing across 10s to 100s of parallel subagents, and checking its work before anything reaches you.

**Update:** Dynamic workflows are now generally available.

Today we're introducing dynamic workflows in Claude Code, helping Claude take on the most challenging tasks end-to-end. Work you'd normally plan in quarters now finishes in days. Claude dynamically writes orchestration scripts that run tens to hundreds of parallel subagents in a single session, checking its work before anything reaches you.

Some problems are too big for one pass by a single agent, especially in complex, legacy codebases: a bug hunt across an entire service, a migration that touches hundreds of files, a plan you want stress-tested from every angle before you commit to it. Dynamic workflows can handle all of these end-to-end.

![](../_media/claude-introducing-dynamic-workflows-in-claude-code/Claude_introducing-dynamic-workflows-in-claude-code_1.png)

Dynamic workflows are generally available in the Claude Code CLI, Desktop, and the VS code extension for Pro, Max, Team, and Enterprise plans, as well as on the Claude API, on Amazon Bedrock, Vertex AI, and Microsoft Foundry.

Note: Dynamic workflows can consume substantially more tokens than a typical Claude Code session, so we recommend starting on a scoped task to get a feel for usage in your work.

For the best experience, turn on auto mode when using dynamic workflows. From there, you have two ways to start a workflow:

1. Ask Claude to create a dynamic workflow directly (e.g., “Create a workflow”), or
2. Switch on a new Claude Code-specific setting called `ultracode`. This is accessible through the effort menu and it sets the effort level to xhigh, while letting Claude decide automatically when to use a workflow to handle your task.

## **Dynamic workflows in action**

Early access users and teams inside Anthropic have been using dynamic workflows for a wide range of use cases, including:

* **Codebase-wide bug hunts, profiler-guided optimization audits, and security audits:** Claude searches a service or repo in parallel, then runs independent verification on every finding so the report surfaces real issues. The same shape works for hardening passes: auth checks, input validation, and unsafe patterns across an entire codebase.
* **Large migrations and modernization efforts:** Claude can handle framework swaps, API deprecations, language ports that span thousands of files end-to-end.**‍**
* **Critical work you need checked twice:** When the cost of a wrong answer is high, a workflow gives Claude independent attempts at the problem and adversarial agents working to break the result before you see it.
