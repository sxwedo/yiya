---
type: Concept
title: "Vibe Coding 网页动效词典"
description: "把「高级/丝滑」换成可执行词：先拆工具、触发、类型、UX。上篇到文字显现，中篇 17–36 词（视差/磁吸/指针）；忌整页同一节奏淡入。"
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-09-14T23:00:00Z }
related:
  - ai-design-deslop
  - vibe-coding-visual-lexicon
sources:
  - ../../../raw/articles/Adrian Punk/Vibe Coding 网页动效词典（上篇）：教你准确描述页面怎么动.md
  - ../../../raw/articles/Adrian Punk/Vibe Coding 网页动效词典（中篇）：视差滚动、磁吸按钮与鼠标跟随.md
---

# Definition

**Vibe Coding 网页动效词典**（Adrian Punk 上+中篇）：用自然语言做网页时，卡点往往不是库，是叫不出名字。只会说「加点高级动效 / 丝滑一点 / 像苹果官网」，模型就把标题、图片、卡片同一节奏淡入，看起来仍像模板。

可执行的一句长这样：页面打开时，主标题 **按行显现（Line reveal）**，说明文字随后 **淡入（Fade in）**，三张卡片 **交错出现（Stagger）**；整体柔和、克制，**正文不要逐字播放**。

先拆四层，不要混着说：

1. **技术工具**：CSS / Motion / GSAP / Three.js / Lottie / Rive。先复用项目已有栈；简单淡入悬停不要为了动效再装大库。
2. **触发方式**：什么时候开始。Hover（含 group / intent / proximity）≠ Focus（键盘，focus-visible）≠ Click/Tap/Press/Toggle。Pointer 才读位置、速度、距离。**进入视口（Scroll-triggered）** 像按播放键；**跟随滚动（Scroll-linked / Scrub / Pin）** 像拖进度条。还有手势、Load/Route、状态变化、Timer/Idle。自动播放不要抢控制权。
3. **动效类型**：画面怎么动。手感五词：Easing、Duration、Delay、Stagger、Spring。入场八词：Fade、Crossfade、Slide、Scale、Blur / Clip-path / Mask reveal、Wipe。文字：Text / Line / Word reveal；中篇再加 Character reveal、Typewriter、Scramble、Text morphing——短词可用，整段正文会让人等动画。滚动≠视差：滚动是触发，视差是前景背景不同速。中篇 21–36：Parallax / 多层视差、横向滚动、Scroll zoom、Sticky scrollytelling、图片序列、Scroll snap、进度提示；磁吸按钮、Tilt card、光标跟随/聚光灯/拖尾、跟随眼睛、指针响应背景、3D 跟随。手机没有持续 hover，指针类要交代触屏怎么简化。横向滚动在手机可能和返回手势冲突。
4. **UX 规则**：Feedback、Affordance、Focus、Reduced motion。仍待下篇。布局过渡、页面转场未灌。

滚动触发淡入 ≠ 视差。每个区块最好一个主动作。

## 何时不用

- 当「先列约束再删减」的设计纪律：那是 [AI Design De-slop](./ai-design-deslop.md)。本页只管**怎么把动效说清楚**。
- 当 Datawhale 入门课 [easy-vibe](../../agents/entities/easy-vibe.md)：那是课程仓，不是这本词典。
- 当同作者《视觉词典》（布局/导航/组件）：对象是静态结构，不是运动，见 [Vibe Coding 视觉词典](./vibe-coding-visual-lexicon.md)。

## Related

- [AI Design De-slop](./ai-design-deslop.md)
- [Vibe Coding 视觉词典](./vibe-coding-visual-lexicon.md)
