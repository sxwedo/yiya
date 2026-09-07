---
title: "Cloudflare 自建永久免费节点保姆级教程（超详细）"
author: "小奇说 (@xingbugengming)"
url: "https://x.com/xingbugengming/status/2044970505317560329"
ingested: "2026-09-07"
date: "Fri Apr 17 02:45:36 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 Cloudflare 自建永久免费节点保姆级教程（超详细）

> 自己买现成的梯子要么贵，要么不稳定，现在只需十分钟，用Cloudflare搭建免费节点（仅限备用），实测能够完美访问Gemini和GPT，Claude付费用户就不推荐用了，防止被A社ban掉

## 下面废话不多说直接上教程

## 第 1 步：注册免费域名

my.dnshe.com 

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_11.png)

进入网站注册账号后点击免费域名

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_12.jpg)

输入一个自己喜欢的域名，成功先面试到这里你就拥有了属于你自己的域名了，别看只有一年的时间，到期后可以在这里继续免费续杯

## 第2步：把域名的 DNS 托管权交给 Cloudflare

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_18.png)

进入Cloudflare点击加入域

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_8.jpg)

输入刚刚获取的免费域名，点击继续，后续一路点击继续，选择免费的计划

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_19.png)

快进到显示这两个网址

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_15.jpg)

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_13.png)

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_16.png)

再回到刚刚注册域名的网址，点击DNS服务器，将刚刚Cloudflare生成的两个网址分别复制上去，显示已解析即可

## 第 3 步：创建 Workers KV并部署脚本

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_17.png)

域名解析完后，再回到Cloudflare界面，按照图示，创建workers kv，输入自己喜欢的名字，记住这个命名空间，后面要绑定到 Worker

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_2.png)

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_10.jpg)

点击左侧的计算，进入 Cloudflare 的 Workers 和 Pages，选择从Helloworld开始，然后进行部署

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_4.png)

部署完成后，进入代码编辑

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_6.png)

[https://github.com/cmliu/edgetunnel/blob/main/\_worker.js](https://github.com/cmliu/edgetunnel/blob/main/_worker.js)

把左边的输入框原有的所有代码全部删除，去github上把代码复制下来粘贴内，再进行部署（我这里遇到一个问题，谷歌浏览器左侧代码文件可能读取不出来，换一个浏览器或者无痕模式再进入就可以看到了）

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_14.png)

部署成功后，返回进入设置，进入域和路由，添加自定义域，输入刚刚注册的域名

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_20.png)

添加变量和机密，变量名称输入ADMIN，值就是设置你的登陆密码，部署成功后即可

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_5.png)

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_1.png)

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_3.jpg)

再进入到绑定KV空间，按照图示操作，变量名称输入KV（不要随便输入其他名称），KV命名空间就是刚刚创建的workes kv

## 第4步：进入管理页面生成订阅

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_7.jpg)

在浏览器上输入你的域名后缀加上/login，进入登陆界面，密码就是你之前设置的值

![Image](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_9.jpg)

OK，那么到这里就大功告成了，把自适应订阅的链接直接导入到你的代理软件就可以了！

后续有想继续折腾的小伙伴点击我是高手按钮就可以继续玩了，不过这个自适应订阅链接还不适用于小火箭，只适用于clash

古法码字不易，恳请大家多点点关注O！

### 🖼️ Attached Media

![Image 1](../_media/x-2044970505317560329/xingbugengming_2044970505317560329_21.jpg)

## 💬 Replies

### 1 @jeonleetogether (Jeonlees ｜ 来Gate事件合约抢百万积分)

*Fri Apr 17 03:38:59 +0000 2026*

@xingbugengming 哇塞！！！好详细！！感谢！！

### 2 @xingbugengming (小奇说) (Author)

*Fri Apr 17 03:47:26 +0000 2026*

@jeonleetogether 不过只能留着备用，有时候速度也不是很好

### 3 @szyqaq (三月🕊)

*Fri Apr 17 04:17:58 +0000 2026*

@xingbugengming 很实用的教程呀，小奇也加入技术流了吗？

### 4 @xingbugengming (小奇说) (Author)

*Fri Apr 17 04:28:56 +0000 2026*

@szyqaq 我这算是一瓶不满，半瓶晃荡

多多向三月老师学习，三月老师才是真的深藏不露的技术流主播

### 5 @Molly9975019573 (Molly 币圈大V推荐🕊️)

*Sat Apr 18 03:27:42 +0000 2026*

@xingbugengming 备用备用

### 6 @xingbugengming (小奇说) (Author)

*Sat Apr 18 03:55:44 +0000 2026*

@Molly9975019573 谢谢Molly老师，可以尝试搭建一下，防止以后找不到Molly老师了😄

### 7 @Bitcoin188 (比特币道)

*Fri Apr 17 03:39:38 +0000 2026*

@xingbugengming 永久免费节点

### 8 @xingbugengming (小奇说) (Author)

*Sat Apr 18 01:01:05 +0000 2026*

@Bitcoin188 不过有的时候也会掉线，当个备用站点

### 9 @laosanhemao (CatNarratives老三)

*Fri Apr 17 03:51:08 +0000 2026*

@xingbugengming 老师发的好及时，正好最近vpn卡得很

### 10 @xingbugengming (小奇说) (Author)

*Fri Apr 17 04:00:21 +0000 2026*

@laosanhemao 这个有时候也很卡🤣留着当免费备用的了

### 11 @nuligeA8 (李努力.btc)

*Fri Apr 17 07:33:33 +0000 2026*

@xingbugengming 啥时候能出一个比较稳定，好用的，最好适合KOL用，不会封号的那种，一个月50\~100就行

### 12 @xingbugengming (小奇说) (Author)

*Fri Apr 17 08:03:06 +0000 2026*

@nuligeA8 自用的话VPS搭建即稳定纯净度又高，不过不太敢发出来啊哈哈🤣

### 13 @xx03199 (web3 八方)

*Fri Apr 17 04:19:07 +0000 2026*

@xingbugengming 非常详细的教程

### 14 @xinrui0214 (新瑞🐳)

*Fri Apr 17 03:36:36 +0000 2026*

@xingbugengming 最近机场好卡 自建VPS 不错的选择

### 15 @iamironman0315 (一叽咕)

*Fri Apr 17 03:36:57 +0000 2026*

@xingbugengming 写的太细了，正好去试试

### 16 @hutianye1992 (𝘊𝘳𝘺𝘱𝘵𝘰 𝘏𝘶𝘨𝘰 胡)

*Fri Apr 17 03:34:36 +0000 2026*

@xingbugengming 留着备用，现在我的机场还没挂

### 17 @readonlm (老猫 | OldCat)

*Fri Apr 17 03:40:28 +0000 2026*

@xingbugengming 十分钟白嫖稳定节点，机场老板直接原地失业

### 18 @rich031011 (Ya)

*Fri Apr 17 03:53:16 +0000 2026*

@xingbugengming 厉害了👍

### 19 @JamesWantCat (James)

*Fri Apr 17 03:36:17 +0000 2026*

@xingbugengming 这个好，最近的快连都变成慢连了

### 20 @aizhetong (aizhetong)

*Mon Apr 20 09:38:56 +0000 2026*

@xingbugengming VPN mark

### 21 @pie1578071 (Seriou)

*Mon Apr 20 08:57:52 +0000 2026*

@xingbugengming mark

### 22 @yuzawa_shi (🇯🇵湯沢仕_素敵な素敵な人間達🇹🇼)

*Wed Apr 22 16:32:11 +0000 2026*

@xingbugengming 节点太烂了，99个，只有七八个能用还都是2000ms，打开grok和chatgpt几乎用不了的状态一直卡cloudflare 机器人认证。。。 高峰期用不了，低谷期凌晨可以用。 

![Image](../_media/x-2044970505317560329/yuzawa_shi_2046990460615631200_1.jpg)

### 23 @Xiaoqinakk (April)

*Fri Apr 17 03:43:57 +0000 2026*

@xingbugengming 老师厉害👍

