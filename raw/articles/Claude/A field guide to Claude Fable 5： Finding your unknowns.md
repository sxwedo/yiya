---
url: https://claude.com/blog/a-field-guide-to-claude-fable-finding-your-unknowns
author: Claude
ingested: "2026-09-11"
---

# A field guide to Claude Fable 5: Finding your unknowns

# 📰 A field guide to Claude Fable 5: Finding your unknowns

> Practical patterns for agentic coding with Claude Fable: how to find your unknowns before, during, and after implementation, from the team at Anthropic.

When working with Claude Code, I’m often reminded of the difference between the map and the territory.

The map, a representation of the work to be done, is my prompts and skills and context, it’s what I give Claude. The territory is where the work needs to happen, the codebase, the real world, its actual constraints.

![](../_media/claude-a-field-guide-to-claude-fable-5-finding-your-unknowns/Claude_a-field-guide-to-claude-fable-finding-your-unknowns_1.png)

The difference between the map and the territory is what I call *unknowns*. When Claude runs into an unknown, it needs to make a decision based on its best guess of what I want. The more work being done, the more unknowns Claude might run into.

Claude Fable is the first model where I find the quality of the work is bottlenecked by my ability to clarify its unknowns.

Importantly, just planning ahead isn’t always enough. You can find unknowns deep in implementation, or your unknowns may point you to the fact that you should actually be solving the problem in a different way altogether.

I’ve found that working with Fable is an iterative process of discovering my unknowns before, during, and after implementation.
