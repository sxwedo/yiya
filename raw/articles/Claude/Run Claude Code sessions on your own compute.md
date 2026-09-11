---
url: https://claude.com/blog/run-claude-code-sessions-on-your-own-compute
author: Claude
ingested: "2026-09-11"
---

# Run Claude Code sessions on your own compute

# 📰 Run Claude Code sessions on your own compute

> Self-hosted environments are in public beta. Run Claude Code sessions on your own infrastructure, inside your network and next to your internal services.

Now in public beta, self-hosted environments let you run Claude Code sessions on your own infrastructure. Start a session from the web, mobile, desktop, or a routine, and it runs inside your network, next to your internal services, toolchains, and security controls, rather than on Anthropic-hosted infrastructure.

For most enterprises, we strongly recommend our hosted offering for operational simplicity with no infrastructure to run or maintain. Self-hosted environments are for teams whose network, tooling, or compliance requirements call for keeping agent execution on infrastructure they control. If you go this route, plan to staff engineering to own setup and ongoing maintenance.

### **Why self-host** ###

We saw organizations in our preview program adopt self-hosted environments for a few key reasons:

* **Network access:** sessions run inside your network and can reach internal services, databases, and registries without exposing them to the public internet
* **Customizability:** pre-install compilers, SDKs, and internal CLIs in your environment so every session starts ready to build
* **Compliance:** source code and build artifacts stay on infrastructure you control
