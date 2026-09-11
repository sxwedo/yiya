---
url: https://claude.com/blog/code-w-claude-london-2026-rethinking-how-we-build
author: Claude
ingested: "2026-09-11"
---

# Code w/ Claude London 2026: Rethinking how we build

# 📰 Code w/ Claude London 2026: Rethinking how we build

> Couldn't make it to London? Keynotes and breakout sessions are now live.

This week in London, we brought [Code w/ Claude](https://claude.com/code-with-claude/london) to Europe. The event brought together builders, developers, and founders for two days of keynotes, breakout sessions, and workshops with the teams building Claude.

![Cat Wu, Head of Product, Claude Code, chats with an attendee between sessions. ](../_media/claude-code-w-claude-london-2026-rethinking-how-we-build/Claude_code-w-claude-london-2026-rethinking-how-we-build_1.jpg)

*Cat Wu, Head of Product, Claude Code, chats with an attendee between sessions.*

Boris Cherny, Head of Claude Code, kicked off [the keynote](https://www.youtube.com/watch?v=6amLO7I9xdg) by describing the first time he felt the “magic” of coding. In secondary school, he wrote TI-83 programs that solved his math homework and tests, and taught himself HTML to make his eBay listings for Pokémon cards sell better. He learned by tinkering, and when something ran, it was exciting.

Somewhere along the way, he suggested, programming got complicated. Compilers, typecheckers, build systems, and each layer pushed the distance between "I have an idea" and "it runs" a little further out. With agents, that distance is collapsing again: you describe a problem, and the program shows up. It's the calculator feeling, except the calculator can write a distributed system.

From workshops highlighting how to [go beyond the basics](https://claude.com/code-with-claude/session/ldn-beyond-the-basics-with-claude-code) with Claude Code to optimizing [thinking budgets and effort levels](https://claude.com/code-with-claude/session/ldn-the-thinking-lever) across our models, we demonstrated how Anthropic and customers like [Spotify](https://claude.com/code-with-claude/session/ldn-coding-is-no-longer-the-constraint-scaling-devex-to-teams-and-agents-at-spotify), [Base44](https://claude.com/code-with-claude/session/ldn-from-one-person-to-80-scaling-a-hypergrowth-engineering-org-with-claude-code), and [Legora](https://claude.com/code-with-claude/session/ldn-what-legal-agents-inherit-from-coding-agents-lessons-from-legora) are already recapturing this experience.

## What was announced

![Katelyn Lesse, Head of Engineering, Claude Developer Platform, and Angela Jiang, Head of Product, Claude Developer Platform, demo some of our new Claude Managed Agents features during Code w/ Claude London. ](../_media/claude-code-w-claude-london-2026-rethinking-how-we-build/Claude_code-w-claude-london-2026-rethinking-how-we-build_2.jpg)

*Katelyn Lesse, Head of Engineering, Claude Developer Platform, and Angela Jiang, Head of Product, Claude Developer Platform, demo some of our new Claude Managed Agents features during Code w/ Claude London.*

Announced at the conference, Claude Managed Agents can now operate in a sandbox you control and connect to your private Model Context Protocol (MCP) servers. Now both the environment where an agent executes tools and the services it reaches run within the established boundaries of your enterprise. These two [new capabilities](https://claude.com/blog/claude-managed-agents-updates) are available on the Claude Platform:

* **Self-hosted sandboxes** (public beta). Tool execution moves to an environment you configure—your own infrastructure or a managed provider like Cloudflare, Daytona, Modal, or Vercel—while the agent loop that handles orchestration, context management, and error recovery stays on Anthropic's infrastructure. Your network policies, audit logging, and security tooling apply, files and repositories don't leave your perimeter, and you control compute sizing and the runtime image for compute-heavy work.
* **MCP tunnels** (research preview)*.* Your agents reach MCP servers inside your private network without exposing them to the public internet. A lightweight gateway you deploy makes a single outbound connection: no inbound firewall rules, no public endpoints, and traffic encrypted end to end. MCP tunnels are supported in Managed Agents and the Messages API, and are managed from the Claude Console by organization admins.

Teams including Amplitude, Clay, and Rogo are already building on Managed Agents with self-hosted sandboxes. To get started, explore the [docs](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes), follow our [cookbooks](https://github.com/anthropics/claude-cookbooks/tree/main/managed_agents/self_hosted_sandboxes), or [request access](https://claude.com/form/claude-managed-agents) to MCP tunnels.

## In case you missed it

![Lisa Crofoot, Research Product Manager, presents during the Code w/ Claude London keynote. ](../_media/claude-code-w-claude-london-2026-rethinking-how-we-build/Claude_code-w-claude-london-2026-rethinking-how-we-build_3.jpg)

*Lisa Crofoot, Research Product Manager, presents during the Code w/ Claude London keynote.*

If you missed the livestream, check our keynote and breakout session [recordings](https://claude.com/code-with-claude/london).

Code w/ Claude heads to [Tokyo](https://claude.com/code-with-claude/tokyo) next (June 5–6). All Day 1 keynotes and breakout sessions will be streamed live.

*Stay tuned for technical tutorials, guides, and customer stories inspired by our talks.*
