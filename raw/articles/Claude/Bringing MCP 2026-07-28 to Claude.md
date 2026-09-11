---
url: https://claude.com/blog/bringing-mcp-2026-07-28-to-claude
author: Claude
ingested: "2026-09-11"
---

# Bringing MCP 2026-07-28 to Claude

# 📰 Bringing MCP 2026-07-28 to Claude

> The MCP 2026-07-28 spec is live, moving the Model Context Protocol to a stateless core with standardized extensions and hardened auth. Support is rolling out across Claude products soon. See what's new and how MCP is advancing in Claude.

The fifth spec release of the Model Context Protocol, [**MCP 2026-07-28**](https://modelcontextprotocol.io/specification/2026-07-28)**,** is live today. The latest spec moves MCP to a stateless core, while hardening authorization and graduating official extensions. Support is being rolled out across Claude products.  

## **What's new in MCP**‍

MCP recently surpassed 400M monthly SDK downloads, a 4x increase this year, and has become the industry standard for connecting AI agents to applications. MCP 2026-07-28 is one of the most significant spec releases to date:  

**Stateless core.** MCP moves from a bidirectional stateful protocol to a request/response model. Servers can now deploy on serverless and edge infrastructure. This simplifies the experience of building MCP servers for Claude and scaling their usage as they grow in adoption.

**Standardized extensions.** [MCP Apps](https://modelcontextprotocol.io/extensions/apps/overview) and [Tasks](https://modelcontextprotocol.io/extensions/tasks/overview) now ship under a versioned extensions framework, giving developers a formal path to add capabilities like interactive UIs and long-running work without changing the core protocol.  

**Auth hardening.** Authorization now aligns with production OAuth 2.0 and OIDC deployments, so MCP servers connect to enterprise identity systems like Entra or Okta without workarounds.

Companies across the ecosystem have been building on the new spec alongside the MCP community since beta:
