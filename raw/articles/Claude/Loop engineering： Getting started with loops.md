---
url: https://claude.com/blog/getting-started-with-loops
author: Claude
ingested: "2026-09-11"
---

# Loop engineering: Getting started with loops

# 📰 Loop engineering: Getting started with loops

> Learn how the Claude Code team defines agentic loops, with practical guidance on progressing from turn-based to goal-based, time-based, and proactive loops—and when to use each.

## Getting started with loops

There’s a lot of talk right now about loop engineering or "designing loops" instead of prompting your coding agent. If you spend some time on X trying to pin down what a loop actually is, you'll come across multiple different answers.

On the Claude Code team, we define **loops as agents repeating cycles of work until a stop condition is met**. We categorize a few different types of loops based on:

* How they are triggered
* How they are stopped
* What Claude Code primitive is used
* What type of task is most appropriate for each.

We’ll cover the main loop types, when to use each, and how to maintain code quality while managing token usage. Not all tasks require complex loops; start with the simplest solution and use these patterns selectively.
