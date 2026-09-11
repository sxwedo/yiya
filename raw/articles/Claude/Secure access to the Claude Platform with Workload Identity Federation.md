---
url: https://claude.com/blog/workload-identity-federation
author: Claude
ingested: "2026-09-11"
---

# Secure access to the Claude Platform with Workload Identity Federation

# 📰 Secure access to the Claude Platform with Workload Identity Federation

> WIF replaces static API keys with short-lived, scoped credentials issued at request time. WIF is compatible with any OIDC-compliant identity provider and covers all Claude API endpoints

Workload Identity Federation (WIF) is now generally available on the Claude Platform. WIF is compatible with any OIDC-compliant identity provider and covers all Claude API endpoints, including when accessing the endpoints through our first-party SDKs and Claude Code.

With WIF for workloads and [ant auth login](https://platform.claude.com/docs/en/cli-sdks-libraries/cli/quickstart#authentication) for interactive sessions, developers never have to handle a static API key when building with the Claude Platform.

## How Workload Identity Federation works

WIF replaces static API keys with short-lived, scoped credentials issued at request time. Whether you're a two-person startup running GitHub Actions or an enterprise with detailed credential policies, you can now authenticate with the Claude Platform the same way you authenticate with the rest of your stack.

With WIF, there are no static Anthropic credentials to create, rotate, or leak. Workloads authenticate with the identity they already have: an AWS IAM role, a GCP or Kubernetes service account, an Azure managed identity, a GitHub Actions token, Okta, or other OIDC-compliant providers.

We're also introducing service accounts to the Claude Platform, so each workload can have its own identity, roles, and audit trail instead of a shared API key. First, a federation rule binds an external identity to a service account. Then, when a workload requests access, the Claude Platform verifies the workload's signed OIDC token, matches its claims against your federation rules, and issues a short-lived access token bounded by the service account's roles. Every exchange and request is recorded against that service account in your audit logs.

## Set up your first workload in minutes

The [Claude Console](https://platform.claude.com/) has a guided setup flow for configuring workload identities. The setup validates each step and finishes with a test command that confirms your workload can authenticate.

![](../_media/claude-secure-access-to-the-claude-platform-with-workload-identity-/Claude_workload-identity-federation_1.png)

## Run your whole organization without static keys

WIF is compatible with the [Admin API](https://platform.claude.com/docs/en/build-with-claude/administration-api) for organization management. Federation rules can be configured for least-privilege access through fine-grained scopes.

Federation configuration is also fully programmatic for organizations operating at scale. New Admin API endpoints let you create and update issuers, service accounts, and federation rules.
