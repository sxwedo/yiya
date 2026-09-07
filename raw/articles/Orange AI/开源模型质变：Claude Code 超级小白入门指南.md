---
title: "开源模型质变：Claude Code 超级小白入门指南 "
author: "Orange AI (@oran_ge)"
url: "https://x.com/oran_ge/status/2005419365450252425"
ingested: "2026-09-07"
date: "Sun Dec 28 23:23:30 +0000 2025"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 开源模型质变：Claude Code 超级小白入门指南 

两个月以来，我一直想写一篇给小白的 CC 入门指南，今天终于可以写了。

Claude Code （简称 CC）是我今年最推荐的 AI 产品，没有之一。

Claude Code 虽然叫 Code，但它的功能绝对不止是写代码，而是一款真正意义上的通用 Agent。

很多电脑上的很繁琐的工作，都是 CC 一句话的事情。

我用它做问答、写作、写网页、写软件，数据分析、甚至拆分工资条。

它甚至可以帮我把音频和图片快速合成视频。

为了 CC，我还专门用 CC 写了一个开源的 CC 启动器，叫 Claude Code Now，它在 Github 已经 400 Stars 了。

CC 也是那个让著名的 OpenAI 研究员 AK 都感到自己落伍的那个软件。

这是 CC 的作者和 AK 之间的一段对话，你只需要把 CC 对准目标，它就会把你的问题熔化！

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_13.jpg)

我一直在给身边的同事们、朋友们安利 CC，每次看他们用完之后都会惊呼，这 AI 太智能了。

但是 CC 并不是那么好安利的，因为 Claude 这家公司的 CEO 有点丧心病狂...

封号封到一个月三次郎，根本受不了。

毕竟 Claude Code 的收入一年就10亿美金，他们CEO根本看不上中国用户。

所以我一直在等一个时刻，就是国产开源模型的代码能力突破阈值。

在周一的时候，我的朋友杨攀在群里激动地说，这个时刻到了！

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_8.png)

现在，终于有一个开源模型，可以在 Claude Code 里真正用起来了。

我也终于可以写一个给新手小白的 Claude Code 入门指南了。

友情提醒，这篇文章比较长，一步一步操作下来，大概需要一个小时，可以先收藏再看。

如果你的朋友也想体验电脑上最智能的 AI ，请一定把这篇文章转发给他！

# Claude Code 安装指南

## 一、基础准备

1. 先准备一个科学的网络环境。

2. 到这里安装最新版本的 Node.js ，地址：
https://nodejs.org/en/download/

3. Windows 用户还需要额外安装 Git for Windows，地址：https://git-scm.com/install/windows


## 二、正式开始安装 CC

1. 在你的电脑上，搜索「终端」，打开它，是这样的，不用害怕，你就把它理解成一个界面很酷的 AI 对话框。

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_10.jpg)

2. 在终端里，粘贴下面的命令，然后回车。
npm install -g @anthropic-ai/claude-code

这里你可能会遇到各种报错，如果你已经安装了其他 AI 编程工具，如 Cursor，强烈建议在这些工具内安装，他们会帮你解决问题。

如果没有其他工具，可以询问任何 AI 来尝试解决错误。

3. 如果2的方法，安装没有成功，可以尝试下列这个方法：

如果你的电脑是 macOS, Linux, WSL，粘贴这条命令，回车

curl -fsSL https://claude.ai/install.sh \| bash


如果你的电脑是 Windows，粘贴这条命令，回车

irm https://claude.ai/install.ps1 \| iex


安装完成后，输入 claude --version ，如果出现版本号，则代表安装成功。

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_9.png)

新版本的 Claude Code 增加了一个恶心的验证，我们通过这个方法跳过它。

在 \~/.claude.json 添加配置项："hasCompletedOnboarding": true，如果该文件不存在，可以手动创建。 

看起来像这样： 

{ // ... 其他配置 "hasCompletedOnboarding": true }

## 三、购买 CC 服务器的套餐

前面也说到了，官方的 CC 丧心病狂，封号严重，官方的那个订阅就不推荐了，如果你能搞定官方的，我表示敬佩，大概率也不会来看这篇文章。

国内对 CC 模型支持比较好的有三个：GLM 4.7，MiniMax M2.1，Kimi K2。

这里，我们以用 GLM 4.7 的配置为例来演示一下国产，因为是国内网站，使用就比较简单了，其他模型都有 Coding Plan 也都是类似的。

1. 注册账号。访问 智谱开放平台（https://open.bigmodel.cn/），点击右上角的「注册/登录」按钮，按照提示完成账号注册流程。


2. 获取API Key。在个人中心页面，点击 API Keys（https://bigmodel.cn/usercenter/proj-mgmt/apikeys）创建一个新的 API Key，复制下来备用。


3. 订阅一个 Coding 套餐，用了套餐之后，可以尽情使用，再也不用担心账号欠费背刺。

现在有个跨年特惠，强烈推荐这个包季的 Coding Lite，三个月只要 54 块钱，跟不要钱一样。

可以在这里购买：https://www.bigmodel.cn/glm-coding?ic=KSGMCBOXUT

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_5.jpg)

## 四、配置 CC 服务器

有了 Coding 套餐之后，就可以配置使用了。

这里要用到一个新的工具，叫 Coding Tool Helper。

用这个工具可以方便地把 GLM 的服务器配置，导入到 CC 里。

1. 再次进入终端，输入下面的命令行，回车

npx @z\_ai/coding-helper

2. 这时候你会看到一个亲切的中文界面

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_7.jpg)

3. 你按照这个工具的提示，把在上面拿到的 API Key 粘贴到这里，并且按提示一步一步地走完就可以了。


## 五、Claude Code 启动！

🎉 恭喜你，你已经安装好了现在最强的 AI 工具，现在可以喘口气了。

喝口水，然后启动它！

等一下，如何启动？

还是在终端里，每次只要输入 claude ，然后回车，你就能看到下面的界面了。

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_11.jpg)

说个你好，打个招呼吧！

从此以后，这就是你的万能的助手。

你可能不习惯这种打开方式，没关系，可以安装我写的启动器 Claude Code Now，在这里安装 https://claudecodenow.com/

安装之后，在你的任意文件夹里，都可以看到 Claude Code，点击一下，就能启动了，超级方便。

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_4.jpg)

## 六、Claude Code 的上手技巧

上手 Claude Code，要学习的东西很多。

但是最基础只有三件事，核心是理解 CC 的工作原理。

你可以把 CC 理解成一个能操作系统的代理人，它能看到你的电脑、读取文件、操作文件、分析文件、输出文件。

你和它的沟通方式，就是通过自然对话，不需要你写一行代码。

1. 文件夹

文件夹是 CC 最棒的设计理念，它是 CC 运行的游乐场。

CC 启动的时候，需要你给它指定一个文件夹，这个文件夹就是这次任务的上下文。

我非常建议大家建立一个 Claude Code 文件夹，用于各种 CC 的项目。

下面是我的 CC 文件夹，我用他做笔记、分析数据、深度阅读、开发软件，每个任务都建立一个文件夹，这样就互不干扰。

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_2.jpg)

指定文件夹的方式有两种，一种是上面说的 Claude Code Now，你点击一下，就启动，并自动加载文件夹了。

另一种，是把文件夹拖拽到 CC 里，它会自动读取文件夹。

文件也是一样的逻辑，也可以直接拖到 CC 里，这是第一个非常重要的技巧。

2. Claude.md 文件

Claude.md 文件是 CC 的核心配置文件，是 CC 的长期记忆。

你也可以理解为这个文件是 CC 的宪法。

CC 每次启动的时候，都会自动加载这个文件，它记录了你要做什么，你给 CC 的一些规则。

你也可以让 CC 来自己创建这个文件，并把你觉得重要的信息告诉它。

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_6.jpg)

3. 危险模式

什么是危险模式呢？

顾名思义，就是一旦打开，CC 可以全自动地操控你的电脑，不需要你的任何确认。

听起来很危险，但是不开的话，每次操作都要确认，非常繁琐，非常影响效率。

你如果用的是 Claude Code Now 作为启动器，我已经自动帮你打开了危险模式。

如果你没用，那可以输入这段代码手动开启

claude --dangerously-skip-permissions

但是一旦开启，CC 可能会造成不可挽回的损失，所以一定要指定好文件夹，同时做好备份。

好，三个重要的事情说完了，接下来是一个一个非常实用的技巧：粘贴图片

有了 CC 后，你遇到任何问题都可以直接问它。但是有些问题需要图片，你就需要把图片粘贴到 CC 里面。

因为 CC 运行在终端里，所以粘贴命令和系统不太一样，不是 cmd+v，而是

Control + V

粘贴之后，CC 就能看到图片了。

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_14.jpg)

## 七、一个真实的用法：拆工资条

接下来，让我们演示一个我在工作中遇到的案例，一起看看 CC 的神奇用法。

作为公司的老板和财务，我要每个月给大家发工资。

发工资之后，就需要一个一个地发工资条。

但是代理只给我一个工资表，这个表是长这样的：

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_3.jpg)

我要把这个表拆开，每一行做个表，再发给每个人。

这种重复性的劳动，想想就很烦。

但是有了 CC，我们只需要把我的需求告诉它：

“这是一个工资表，帮我拆成工资条，一个人个文件 ”

我把从启动到输入命令到完成的全过程录下来了，没有任何剪辑。

是不是很神奇！这个繁琐的任务，总共只花了 29 秒！

这只是工作中的一个小案例，实际上 CC 可以做的事情，数以万计。

下次你遇到重复性的工作，不如就打开 CC 跟它聊聊。

## 八、加载 Skill ，封装好的工作流

Skill 是 Claude Code 最近推出的重要功能。

你可以把 Skill 理解成前人已经测试验证好的工作流，你只需要借来用就好了。

你可以直接从现有的 Skill 网站里 copy，也可以让 CC 自己创建，这是官方的 Skill 指南 https://github.com/anthropics/skills

Skill 的具体使用也非常简单，比如今天刚好看到刘小排老师发的前端设计 Skill (刘小排老师是 CC 之神，大家可以关注他的公众号学习更多技巧）

先用一句话安装 Skill

npx skills-installer install @anthropics/claude-code/frontend-design --client claude-code

然后跟 CC 说：

使用 @anthropics/skills/frontend-design skill，重新设计 https://listenhub.ai 的首页

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_1.jpg)

得到的结果是这样的，非常高级，完全没有 AI 设计网页的默认蓝紫色。

![Image](../_media/x-2005419365450252425/oran_ge_2005419365450252425_12.jpg)

# 结语：一鲸落，万物生

到这里，Claude Code 的超级小白基础入门差不多就写完了。

上面的步骤只是你开启智能化工作学习的一个开始，未来还有很多东西要学。

万事开头难，这篇文章其实是最难的部分，后续你遇到任何问题，直接问 CC ，它都能帮你解决。

相信你很快能找到属于自己的 Wow moment！

写到最后，突然想起和前几天杨攀吃饭，我们聊到了 GLM 4.7 这个模型的重大意义。

之前 Claude Code 一年十亿美金，但都被 Claude 一只巨鲸吃掉。

现在国产开源模型都跟上来了，这正是我们期待已久的技术平权。

因为它是开源的，这就代表每一个云厂商都可以部署、售卖、盈利。

而用户能得到的，是只需要百分之一的价格，就能享受到智能的便利。

我们即将看到的，是整个开源生态的繁荣，以及 Vibe Coding 从玩具到生产的转变。

巨鲸仍在，

但在海的深处，

万物生长。

### 🖼️ Attached Media

![Image 1](../_media/x-2005419365450252425/oran_ge_2005419365450252425_15.jpg)

## 💬 Replies

### 1 @oran_ge (Orange AI) (Author)

*Mon Dec 29 02:08:06 +0000 2025*

国内的文章镜像，可以发给国内的朋友们： [mp.weixin.qq.com/s/pEPweAhpzZb1…](https://mp.weixin.qq.com/s/pEPweAhpzZb1ef5oMvaDDA)

### 2 @oran_ge (Orange AI) (Author)

*Thu Jan 22 00:42:39 +0000 2026*

很多人说看图文还是学不会
没关系，视频版本来了！
橘子手把手地带你入门 CC
跟着视频走，应该都能学会了吧
[bilibili.com/video/BV1Huz7B…](https://www.bilibili.com/video/BV1Huz7BmEni/)

### 3 @yanhua1010 (Yanhua)

*Mon Dec 29 00:31:24 +0000 2025*

@oran\_ge 实测glm coding效果咋样

### 4 @oran_ge (Orange AI) (Author)

*Mon Dec 29 09:43:33 +0000 2025*

@yanhua1010 够我用

### 5 @xiaoerzhan (小耳👂Jane｜Xiaoer)

*Mon Dec 29 03:15:24 +0000 2025*

@oran\_ge 大佬好\~\~我今天认真看了这个教程,费了我九牛五六七八虎之力,用了 cursor,还是没有安装成功.

但是我懂这世界上一定有邪修之路,那就是海鲜市场,我找了个远程,36.6 给我弄好了,10 分钟.

各位像我一样的小白白们,实在搞不定就上海鲜市场吧.🤣

### 6 @oran_ge (Orange AI) (Author)

*Mon Dec 29 03:20:29 +0000 2025*

@xiaoerzhan 为你点赞！
确实每个人的电脑太不一样了
闲鱼是最终的归宿啊

### 7 @mranti (Michael Anti)

*Mon Dec 29 04:42:43 +0000 2025*

@oran\_ge 在引用skill的时候，一定要准确找到skill储存地址？

### 8 @oran_ge (Orange AI) (Author)

*Mon Dec 29 04:48:39 +0000 2025*

@mranti 不需要吧

### 9 @JettHuu (meath)

*Thu Jan 01 18:44:22 +0000 2026*

@oran\_ge mac 是不是也差不多

### 10 @oran_ge (Orange AI) (Author)

*Thu Jan 01 21:09:49 +0000 2026*

@JettHuu 这篇就是用mac写的

### 11 @SpiciComic (SpiciComic)

*Mon Dec 29 03:09:55 +0000 2025*

@oran\_ge 有一个疑问：

可是，换了模型，还有必要使用 ClaudeCode 吗？使用它不就是看中了他的模型能力吗？

还是说，ClaudeCode 这么火，是因为它的智能体优化能力？

### 12 @oran_ge (Orange AI) (Author)

*Mon Dec 29 03:10:55 +0000 2025*

@SpiciComic 有必要
模型训练的时候都是在这个环境里训练的
换其他的不好

### 13 @yam96005 (Ciaoli)

*Mon Dec 29 07:37:35 +0000 2025*

@oran\_ge 你好，
在這一步卡住： 三、购买 CC 服务器的套餐 
您使用的Coding Tool Helper是走GLM   
請問有沒有其他支持的網站（國際版）可使用呢？（智谱开放平台以外的）

### 14 @oran_ge (Orange AI) (Author)

*Mon Dec 29 09:45:00 +0000 2025*

@yam96005 [z.ai](http://z.ai) 可以

### 15 @bigcat_gj (Big Cat)

*Mon Dec 29 05:42:42 +0000 2025*

@oran\_ge CC封号太烦了之前一直没看，最近Skill出来感觉必须得学习一下的时候，大佬出了我们这种小白可以学习的教程，简直是及时雨啊🫰

### 16 @oran_ge (Orange AI) (Author)

*Mon Dec 29 09:42:36 +0000 2025*

@bigcat\_gj 对，超级烦，小白不需要那么高级的模型，这个就够用了

### 17 @yeyubei (夜雨 RainNorth)

*Mon Dec 29 08:47:09 +0000 2025*

@oran\_ge 攀哥说的是模型是哪个

### 18 @oran_ge (Orange AI) (Author)

*Mon Dec 29 09:41:44 +0000 2025*

@yeyubei glm 4.7

### 19 @underflow037 (m1yabi)

*Mon Dec 29 14:07:19 +0000 2025*

@oran\_ge 我用mac安装的时候显示报错，然后gemini告诉我要在前面加上一个指令获取系统权限啥的，然后就装好了，下面这个指令：
sudo npm install -g @anthropic-ai/claude-code

### 20 @oran_ge (Orange AI) (Author)

*Mon Dec 29 14:18:30 +0000 2025*

@underflow037 @Anthropic 嗯嗯 每个人的电脑不一样
问ai就能解决所有问题

### 21 @zway_ai (ZW)

*Mon Dec 29 08:13:53 +0000 2025*

@oran\_ge 请教一下，Claude Code 跟 Cursor CLI 的区别是什么呀？我现在用 Cursor 也是当做多用途 Agent 而不是 Vibe coding 工具来用的。

### 22 @oran_ge (Orange AI) (Author)

*Mon Dec 29 09:42:06 +0000 2025*

@zway\_ai agent 设计和生态不同

### 23 @REraserTech (benjAmIn)

*Mon Dec 29 10:52:50 +0000 2025*

@oran\_ge 橙老师这个对于超级小白太有价值了，感谢无私分享，果断一键三连了，看了这么多的博主，你说话最像人😂

### 24 @oran_ge (Orange AI) (Author)

*Mon Dec 29 14:19:24 +0000 2025*

@REraser49085 这评价我也是觉得很高了（很奇怪

### 25 @Murder23333 (Fu_sir)

*Mon Dec 29 09:29:57 +0000 2025*

@oran\_ge 喜欢cursor类的提问框不喜欢在终端操作的可以在配置完毕后在vscode里面下载claude code for vscode，和cursor类似的提问方式。我个人用得很舒服。

### 26 @oran_ge (Orange AI) (Author)

*Mon Dec 29 09:44:43 +0000 2025*

@Murder23333 也是个好用法

### 27 @Ley1l1 (Ley1l1)

*Mon Dec 29 07:03:40 +0000 2025*

@oran\_ge 你这模型用的国产的，只是原版套壳子啊

### 28 @oran_ge (Orange AI) (Author)

*Mon Dec 29 09:43:16 +0000 2025*

@Cli13146688 对啊

