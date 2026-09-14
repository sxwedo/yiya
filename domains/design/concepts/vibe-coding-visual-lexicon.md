---
type: Concept
title: "Vibe Coding 视觉词典"
description: "把「高级/简洁/有设计感」换成可执行结构词：布局、页面结构、导航、组件。上篇 40 词；忌只说感受。"
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-09-14T23:10:00Z }
related:
  - vibe-coding-motion-lexicon
  - ai-design-deslop
sources:
  - ../../../raw/articles/Adrian Punk/Vibe Coding 视觉词典（上篇）：布局、页面结构、导航与常用组件.md
---

# Definition

**Vibe Coding 视觉词典**（Adrian Punk 上篇）：用自然语言做网页时，卡点是结构无名。「高级、简洁、有设计感」不是布局。拆四层再点名，每条带适合场景和可复制提示词（文中示例都落在 Punk 个人站，本页只收机制）：

1. **布局 Layout**：东西怎么占屏幕。卡片最稳；瀑布流保原比例、不裁齐高；Bento 靠模块大小分主次，**不要平均九宫格**；分屏左右主角；CSS Grid 管二维（列跨度），Flexbox 管一行一列（导航/按钮组）；侧栏/Dashboard 偏任务密度；响应式是**改排列**不是整页缩小；全出血 Hero 铺满后再把正文收回居中容器。
2. **页面结构 Page Structure**：先看到什么。单页靠锚点滚完；多页才长期扩展。落地页一个转化目标、导航要瘦。案例研究讲问题-过程-决策，不只秀成品。Hero 先回答你是谁、下一步点哪。功能网格 3–6 项。Sticky 叙事桌面一侧钉住、手机取消。时间线/FAQ/Footer 收尾。
3. **导航 Navigation**：怎么移动。Sticky 顶栏、汉堡（小屏）、面包屑、锚点（尊重 reduced-motion）、Tabs、侧栏、Mega Menu、底栏、分页、回顶。
4. **组件 UI Components**：点击、输入、展开、关闭、反馈。Modal 打断（原生 dialog、Esc、焦点回去）；Drawer 滑出仍见主页面；Accordion 一次一项；Tooltip 一句话且不能只 hover；Toast 不打断（错的不要秒关）；Carousel **默认不自动播放**；Lightbox 锁背景滚动；表单可见 label；Command Palette ⌘K；FAB 别挡底栏。

词条不是收藏夹：Grid 硬拼绝对定位、Carousel 当首页主叙事、Tooltip 当说明书，都会把 AI 带偏。

## 何时不用

- 当动效叫名：那是 [Vibe Coding 网页动效词典](./vibe-coding-motion-lexicon.md)（工具/触发/类型/UX）。
- 当设计纪律（约束、删减、去 slop）：那是 [AI Design De-slop](./ai-design-deslop.md)。
- 当 Datawhale 课 [easy-vibe](../../agents/entities/easy-vibe.md)。
- 文称上篇；下篇未灌库。

## Related

- [Vibe Coding 网页动效词典](./vibe-coding-motion-lexicon.md)
- [AI Design De-slop](./ai-design-deslop.md)
