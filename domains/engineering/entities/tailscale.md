---
type: Entity
title: "Tailscale"
description: "基于 WireGuard 的 mesh VPN：设备直连加密、自动 NAT 穿透，协调面管密钥与 ACL。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-07T20:40:00Z }
related:
  - tailscale-site
  - ping-pe
  - pilot-protocol
sources:
  - ../references/tailscale-site.md
  - ../../../raw/articles/向阳乔木/最近最火的Codex优化网络速度Use Case，写了个提示词，亲测效果不错：.md
  - ../../../raw/articles/QingYue/泪目！在 小火箭中配置 Taiscale，我终于做到了！.md
---

# Summary

**Tailscale**（<https://tailscale.com/）在> WireGuard 上做零配置 mesh：每台设备一对密钥，数据面尽量点对点加密直连；过不了 NAT 时走 DERP 中继，中继看不到明文。协调服务器只交换公钥和策略，不扛业务流量。登录身份（SSO）和 ACL 决定谁能连谁。不是把上网流量都送进 Tailscale 机房的那种 VPN（出口节点是另开的能力）。

定位：人和机器的**组网层**。连通性诊断见 [ping.pe](./ping-pe.md)；给 Agent 用的 overlay 见 [Pilot Protocol](../../agents/entities/pilot-protocol.md)。

## Related

- [Tailscale（站点）](../references/tailscale-site.md)
- [ping.pe](./ping-pe.md)
- [Pilot Protocol](../../agents/entities/pilot-protocol.md)
