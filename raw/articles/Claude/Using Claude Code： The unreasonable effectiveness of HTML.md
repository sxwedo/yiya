---
url: https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html
author: Claude
ingested: "2026-09-11"
---

# Using Claude Code: The unreasonable effectiveness of HTML

# 📰 Using Claude Code: The unreasonable effectiveness of HTML

> How and why members of the Claude Code team use HTML instead of Markdown to produce richer, more readable, and easily shareable outputs. ‍

Markdown has become the dominant file format used by agents to communicate with humans. It’s simple, portable, has some rich text capability and is easy to edit. Claude has even gotten surprisingly good at using ASCII to make diagrams inside of Markdown files.

But as agents have become more and more powerful, I’ve found that Markdown has become an increasingly restrictive format. Specifically, I find it difficult to read a Markdown file of more than a hundred lines; I want to use Claude to generate richer visualizations, color and diagrams; and I want to be able to share these outputs more easily.

I also am increasingly not editing these files myself, but using them as specs and reference files. When I do make edits, I’m usually prompting Claude to edit them, which removes one of Markdown’s largest benefits.

Instead, I’ve started preferring HTML as an output format instead of Markdown and increasingly see this pattern being applied by others on the Claude Code team. In this post, I share why and how our team uses HTML to produce richer, more readable Claude Code outputs. If you'd like to follow along, you can start using these [HTML file templates](https://thariqs.github.io/html-effectiveness/#code-review) for common use cases, too.
