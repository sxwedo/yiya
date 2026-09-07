---
type: Entity
title: "MinerU"
description: "面向 Agent 和 RAG 的文档解析：PDF / Office / 图片转成 LLM 可读的 Markdown 与 JSON。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T16:40:00Z }
related:
  - mineru-site
  - langchain
  - mcp
sources:
  - ../references/mineru-site.md
---

# Summary

**MinerU**（https://mineru.net/）把 PDF、图片、DOCX、PPTX、XLSX 转成带结构的 Markdown / JSON，给 RAG 与 Agent 当文档入口。公式出 LaTeX、表格出 HTML，按阅读顺序排版并去掉页眉页脚；扫描件走 OCR（多语）。产品面：官网在线解析、桌面客户端、API；开源引擎在 [opendatalab/MinerU](https://github.com/opendatalab/MinerU)（OpenDataLab / 上海人工智能实验室）。可挂 MCP，也有官方 LangChain Loader。

定位：文档 → **给模型用的结构化文本**，不是 harness，也不是代码仓 Wiki。RAG 框架侧见 [LangChain](./langchain.md)；协议侧见 [MCP](./mcp.md)。

## Related

- [MinerU（站点）](../references/mineru-site.md)
- [LangChain](./langchain.md)
- [Model Context Protocol (MCP)](./mcp.md)
