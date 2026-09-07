---
title: "没梯子了咋办？出一期CF白嫖搭建教程"
author: "奶昔🥤 (@realNyarime)"
url: "https://x.com/realNyarime/status/2022886892770099649"
ingested: "2026-09-07"
date: "Sun Feb 15 04:13:13 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 没梯子了咋办？出一期CF白嫖搭建教程

赛博大善人Cloudflare的workers和pages一直都非常适合白嫖，尤其是在机场跑路、失联的情况下，给自己安排一个备胎。

# 一、准备工作

- 一个Cloudflare账户（[可直接注册](https://dash.cloudflare.com/sign-up)）

- 一个托管到CF的域名，像\*.dpdns.org这类免费二级PSL域名，或是去[SpaceShip](https://www.spaceship.com/zh/domains/)买6-9位纯数字xyz十年仅需48元

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_4.jpg)

# 二、创建应用程序

1）依次点击 计算（workers）——&gt; workers和pages ——&gt; 创建应用程序

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_17.jpg)

2）从Hello World开始——&gt;部署——&gt;编辑代码

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_2.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_6.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_9.jpg)

# 三、项目代码

1）这里有很多大佬的项目可以选择，基本的搭建流程都是一样的

2）以cmliu大佬的项目为例：https://github.com/cmliu/edgetunnel/blob/main/\_worker.js

3）点击右上角 复制代码——&gt;原有代码全部删除——&gt;粘贴代码——&gt;右上角 部署——&gt;左上角 返回

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_15.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_16.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_12.jpg)

# 四、绑定域名

依次点击 设置——&gt; 域和路由（添加）——&gt;自定义域——&gt;输入域名，然后点击——&gt;右下角添加域

以我托管的域名为例(gumeng.dpdsn.org),这里可以输入 \*.gumeng.dpdns.org，我这里输入的是aaaa.gumeng.dpdns.org

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_20.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_19.jpg)

# 五、绑定KV

1）依次点击左侧 存储和数据库——&gt;Workers KV——&gt;右上角Create Instacte——&gt;输入KV(需要大写)——&gt;创建

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_21.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_13.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_22.jpg)

2）依次点击左侧 Workers和Pages——&gt;创建的项目——&gt;项目左上角绑定——&gt;添加绑定——&gt;KV命名空间——&gt;添加绑定——&gt;变量名称(需大写)：KV——&gt;KV命名空间：KV——&gt;添加绑定——&gt;右下角部署

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_14.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_7.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_8.jpg)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_18.jpg)

# 六、设置变量

依次点击 项目左上角 设置——&gt;类型：文本——&gt;变量名称ADMIN（需大写）：ADMIN——&gt;值：任意输(这个值为面板登录密码)

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_5.jpg)

# 七、打开edgetunnel配置中心

1）访问https://绑定的域名/admin

> 我这里就是https://aaaa.gumeng.dpdns.org/admin
面板登录密码为上面设置的ADMIN

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_3.jpg)

2）进来后就能直接看到你的订阅地址了

> 对延迟没要求的目前已经可以直接到clash使用了
有要求的可以看下面的编辑优选ip列表

3）打不开的请等待一会，域名绑定需要一定时间，等域名绑定完成后再打开

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_11.jpg)

# 八、优选IP

cm大佬已内置好优选，目前只要更新订阅自动根据你网络的运营商更换优选IP，可不设置这一步，想自己设置优选IP的看下面：

## 1）在线优选IP

依次点击 在线优选IP——&gt;IP库:随意选（我这里选cm整理列别）——&gt;端口:随意——&gt;开始延迟测试——&gt;覆盖/追加 保存优选IP——&gt;重新更新订阅使用

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_1.jpg)

## 2）编辑优选IP列表

(1）输入大佬们优选好的IP，一行一个
(2)大佬们的优选IP可访问cmliu大佬的[优选汇总网址](http://cf.090227.xyz/)获得，也可以自己另外寻找
(3)保存——&gt;重新更新订阅使用

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_10.jpg)

最后补充一点，其实用手机也能部署，只需编辑代码时，把手机竖屏调成横屏操作即可。

![Image](../_media/x-2022886892770099649/realNyarime_2022886892770099649_23.jpg)

如果worker太贵，也可以用Pages方式搭建。GitHub上有个项目叫CFnew的可以去搜一搜，用起来要简单方便很多。

### 🖼️ Attached Media

![Image 1](../_media/x-2022886892770099649/realNyarime_2022886892770099649_24.jpg)

## 💬 Replies

### 1 @AlexanderJimlee (ChaosInMotion)

*Sun Feb 15 14:42:05 +0000 2026*

@realNyarime 这可太安全、太重要了，我是真需要用这个东西。

有时候你不得不、必须得用这个东西来解决自己的一些问题，比如说系统全挂了之类的，确实没办法。

### 2 @angraya275701 (angraya)

*Sun Feb 15 06:38:40 +0000 2026*

@realNyarime 滥用封号

### 3 @JackieWongHK (Jackie)

*Sun Feb 15 09:45:30 +0000 2026*

@realNyarime 我一直用甬哥的worker.js，很稳定，就是很多网站无法访问，推特也不行

### 4 @izodic (龙城思码客 (Loading...))

*Sun Feb 15 05:24:28 +0000 2026*

@realNyarime This IP is dynamic, isn't it?

### 5 @ClockWorkMe (boris1993)

*Mon Feb 16 03:58:36 +0000 2026*

@realNyarime 我记得这玩意是违反TOS的，有封号风险

### 6 @wxdbtc (Ai Money)

*Sun Feb 15 05:34:20 +0000 2026*

@realNyarime @grok 检查一下这个安全不？

### 7 @ichilixin (蜡笔画小新)

*Sun Feb 15 11:42:48 +0000 2026*

@realNyarime 搞了两小时才弄好

### 8 @kan11jia28 (corp369)

*Mon Feb 16 11:18:43 +0000 2026*

@realNyarime @grok 可以存活多久

### 9 @hyckr404 (hyckr /zh)

*Sun Feb 15 09:11:47 +0000 2026*

@realNyarime Vless节点小火箭用不了， Loon可以

### 10 @Spathathen (Spatium · 冥穹玄籙)

*Tue Feb 17 14:16:39 +0000 2026*

@realNyarime 可以是可以，但是搞出来的节点全是“CF优选”，根本看不到哪个节点是哪个国家.........

而且我本来就是因为现有机场的节点跟国家“货不对板”才看到这个教程想试一下的，问了AI，说这种方法的节点，ip乱跳更乱

因为这种方法
本质上就是一个巨大的、分布在全球的“CF美国代理”

### 11 @Jinja_Natsume (JustYuri)

*Mon Feb 16 04:14:57 +0000 2026*

@realNyarime 有缺点，无法下载大文件

