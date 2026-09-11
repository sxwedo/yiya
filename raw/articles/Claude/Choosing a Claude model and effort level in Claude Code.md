---
title: "Choosing a Claude model and effort level in Claude Code"
author: "Lydia Hallie"
url: "https://claude.com/blog/claude-model-and-effort-level-in-claude-code"
ingested: "2026-09-11"
date: "July 7, 2026"
---

# Choosing a Claude model and effort level in Claude Code

> Anthropic's guide to the Claude Code effort level and model selection: when to raise or lower effort—low, medium, high, and max—and how to choose between Claude Fable, Opus, and Sonnet.

**Key takeaways**:

* Claude model selection chooses the set of fixed weights, or the overall capability range of the model. While models can be provided context or steered, the model’s overall knowledge base and capabilities are set.
* Effort means more than "thinking time.” It controls how much work Claude does on your request overall including the number of files read, tools used, and how many steps it takes before it checks back in with you.
* Choose smaller models for more routine tasks and larger models for more complex or ambiguous tasks. Start with default effort levels for each model and tune as a general preference based on the type of work you do rather than task-by-task.
* If Claude has all the pertinent context, clearly tried, and still got it wrong, that's a signal to pick a more capable model. If Claude got it wrong by skipping a file, not running the tests, or bailing on a refactor partway through, pick a higher effort level.

## **Claude Code effort level and model selection**

Claude Code gives you two settings that appear to "make the answer better": the model setting and the effort level. You may expect that larger models like Claude Fable 5 provide a smarter output than Claude Sonnet, and a higher effort level means Claude thinks longer before it answers.

The first assumption is accurate. Our largest models are more capable, according to industry-standard benchmarks.

But effort means more than just "thinking time." Effort level controls how much work Claude does on your request overall. This does include how long the model thinks, but also:

* How many files it reads;
* How much it verifies; and
* How far it pushes through a multi-step task before checking in with you.

At a higher effort, Claude will take more of those actions (for example, read files, run tests, and double-check) before it comes back to you. At lower effort, it would rather ask you for more context than spend tokens figuring something out on its own.
