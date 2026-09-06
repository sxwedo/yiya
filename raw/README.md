# raw

- `_inbox/`：未分域剪藏
- `bookmarks/`：书签表（`github.md` / `sites.md`），表格追加行（项目、URL、作者、简介），不按项目建 stub 目录
- `articles/<作者>/<人话标题>.md`：成文型原文（按作者分目录；无作者则 `_unknown/`；无 YYYY/MM、无 slug 目录）
- `articles/_media/<slug>/`：配图（**不**迁入作者目录；正文相对链接 `../_media/<slug>/...`）
- 认领见根目录 `raw-manifest.yaml`（仅成文型；书签不进 per-link claim）
