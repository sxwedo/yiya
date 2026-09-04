---
name: yiya-promote-to-shared
description: >-
  Promote a cross-domain Entity or Concept into shared/ and retarget domain
  pages. Use when the same person/tool/idea is referenced from multiple domains,
  or the user asks to 升格, promote to shared, or 放到 shared.
argument-hint: "[path-to-page]"
---

# yiya-promote-to-shared

当实体/概念被 ≥2 个域使用，或用户明确要求进入 `shared/` 时执行。

## 步骤

1. 确认源页路径（如 `domains/agents/entities/foo.md`）与权威标题。
2. 在 `shared/entities/` 或 `shared/concepts/` 创建（或合并）权威页；保留 OKF 字段，`domain: shared`。
3. 源域页处理二选一（优先问用户）：
   - **stub**：保留文件，`status: deprecated` 或正文仅链到 shared；或
   - **删除**源页并全局改链接（破坏性，需明确同意）。
4. 更新相关域与 `shared` 的 `log.md`、相关 `index.md`。
5. 搜索仓库内旧路径链接并改为 shared 路径。

## 完成标准

- [ ] shared 上有唯一权威页
- [ ] 原域不再维护第二份正文
- [ ] 断链已处理或已列入报告
