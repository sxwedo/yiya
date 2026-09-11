---
url: https://claude.com/blog/observability-for-developers-building-connectors
author: Claude
ingested: "2026-09-11"
---

# Observability for developers building connectors

# 📰 Observability for developers building connectors

> Developers can now monitor their connectors' performance across Claude products and submit connectors to the directory in-app.

## Monitor, debug, and improve connectors

Published connectors in the [directory](https://claude.ai/directory/connectors) now have a dashboard showing how they’re performing across Claude product surfaces. Connector owners can use it to:

* **Track adoption.** Monitor active users, total tool calls, and directory rank over time.
* **Diagnose errors and latency.** See health score, error rates, and latency at a glance, with per-tool error breakdowns to pinpoint what's failing.**‍**
* **Break down usage by product.** Compare tool calls across Claude, Claude Code, Cowork, and more to understand where users are engaging.

![Stylized view of observability for connectors. Data is illustrative.](../_media/claude-observability-for-developers-building-connectors/Claude_observability-for-developers-building-connectors_1.png)

*Stylized view of observability for connectors. Data is illustrative.*

Available today in public beta. Find it in Claude under[Directory](https://claude.ai/admin-settings/directory/submissions) in[Organization settings](https://claude.ai/admin-settings/organization). Requires Admin or Owner access on a Team or Enterprise plan. On Enterprise, Owners can also delegate access with a [custom role](https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans) that has the Directory management or Libraries permission.

## Joining the directory

Connectors are built on the[Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro). There are over 300 third-party connectors in the[directory](https://claude.ai/directory/connectors), used by millions of people every day. If you wish to submit your MCP server to the directory, you can now do so directly in Claude. [Learn more](https://claude.com/docs/connectors/building/submission).
