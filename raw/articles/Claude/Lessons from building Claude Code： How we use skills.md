---
url: https://claude.com/blog/lessons-from-building-claude-code-how-we-use-skills
author: Claude
ingested: "2026-09-11"
---

# Lessons from building Claude Code: How we use skills

# 📰 Lessons from building Claude Code: How we use skills

> What we learned building and scaling hundreds of skills internally at Anthropic.

Skills have become one of the most used extension points in Claude Code. They’re flexible, easy to make, and easy to distribute.

But this flexibility also makes it hard to know what works best. What type of skills are worth making? How do you structure a skill? When do you share them with others?

We've been using skills in Claude Code extensively at Anthropic with hundreds of them in active use. These are the lessons we've learned about using skills to accelerate our development.

## What are skills?

Skills are folders of instructions, scripts, and resources that agents can discover and use to do things more accurately and efficiently. This blog post assumes familiarity with skills basics; if you’re new, start with our [Introduction to agent skills course on Skilljar](https://anthropic.skilljar.com/introduction-to-agent-skills).

A common misconception we hear about skills is that they are “just markdown files.” They’re actually folders that can include scripts, assets, data, etc. that the agent can discover, explore and manipulate.

In Claude Code, skills also have a [wide variety of configuration options](https://code.claude.com/docs/en/skills#frontmatter-reference) including registering dynamic hooks.

We’ve found that some of the most effective skills in Claude Code use these configuration options and folder structure effectively.
