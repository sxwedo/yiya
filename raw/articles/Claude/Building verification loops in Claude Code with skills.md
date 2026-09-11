---
title: "Building verification loops in Claude Code with skills"
author: "Delba de Oliveira"
url: "https://claude.com/blog/building-verification-loops-in-claude-code-with-skills"
ingested: "2026-09-11"
date: "July 22, 2026"
---

# Building verification loops in Claude Code with skills

> How to turn your manual checks into skills, so Claude closes its own feedback loop.

Most [agentic coding](https://claude.com/blog/introduction-to-agentic-coding) sessions follow a loop: you ask for a change, Claude gathers context, takes action, verifies the results, and if needed, loops back to gather additional context.

Verification is how agents check their work before responding. Claude already does some of this from observing the deterministic signals in your codebase, including type checkers, linters, tests, and runtime errors. Whatever Claude can't infer becomes the steps you take to manually check a feature.

These manual steps, however, can be transformed into verification loops. In [Claude Code](https://claude.com/product/claude-code), a verification loop is an iterative process where Claude checks and attempts to fix the work.

![diagram of the agentic loop: 1. gathering context, 2. taking action, 3. verifying results.](../_media/claude-building-verification-loops-in-claude-code-with-skills/Delba_de_Oliveira_building-verification-loops-in-claude-code-with-skills_1.png)

*The agentic loop: 1. gathering context, 2. taking action, 3. verifying results.*

In this article, we cover the most common types of verification loops and show you what we use inside Anthropic. Then we’ll show how to encode the manual checks you already do as skills, so Claude can close its own feedback loop and you can work on something else while it iterates.

New to agent loops? Start with [getting started with loops](https://claude.com/blog/getting-started-with-loops).

## What is a verification loop?

A verification loop is a repeating cycle where an AI agent checks its own work — running tests, linters, or custom checks — and fixes what fails before moving on. In Claude Code, verification loops can be packaged as skills, so every session applies the same checks automatically instead of relying on a human to remember them.

## Built-in verification loops

Before diving into designing custom verification loops, it can be helpful to understand the built-in support Claude has for a number of different verification loops. Common features and approaches include:

* **/verify skill**: builds, runs, and observes the changes in your application.
* **Toolchain**: Claude aims to catch and act on error codes and warnings from any tool you provide such as a linter. A good practice is to list your exact build and test commands in CLAUDE.md so Claude doesn't have to infer them.
* **Code Review (research preview)**: A managed multi-agent service that runs an automated review pass on PRs in the repos you enable. You can manually fix the finding and push, or close the loop by commenting @claude on the finding (if you’ve already set up and configured GitHub Actions, below).
* **GitHub Actions**: Define a job that invokes Claude with a verification skill, and the same checks you run locally fire on every push or PR.
* **Spec validation**: A skill that helps verify each change against a markdown spec in the repo and looks to fix violations.
* **Rubrics in Claude Managed Agents (beta)**: A managed agentic service that allows you to verify outcomes against a rubric using a separate grader agent. Failures loop back for rework automatically.

## Writing verification loops

When you have an existing project and you find yourself making the same small corrections every time Claude implements a new feature for you, it’s time to turn those steps into your own custom verification loop. The first step is to write down everything that you find yourself doing every time

The same goes if you're starting a new project and need to figure out how the project should behave. Write the best-practices version in plain English, the way you'd hand it to a new teammate on day one.

If you're struggling to articulate the verification check itself, ask Claude for best practices first and edit from there. Your version probably differs on a few specific points, and those differences are exactly what you want to capture.

**Pro tip**: The check doesn't have to be qualitative to belong here. "Reject any migration that drops a column without a backfill step" is a deterministic rule no generic linter will catch but a project-specific one will. Anything you keep having to enforce by hand as a manual check qualifies for capture as a loop.
