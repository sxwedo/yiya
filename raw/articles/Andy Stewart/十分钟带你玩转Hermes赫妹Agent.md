---
title: "十分钟带你玩转Hermes赫妹Agent"
author: "Andy Stewart (@manateelazycat)"
url: "https://x.com/manateelazycat/status/2041734508073120170"
ingested: "2026-09-07"
date: "Wed Apr 08 04:26:54 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 十分钟带你玩转Hermes赫妹Agent

https://github.com/chinapxe/sketchshotHermes Agent 非常创新

主动创建 Skill（技能）
它会在对话过程中，自动把值得复用的任务总结成一个小笔记（Skill），相当于自己写了一本专属秘籍，存进内部数据库。

渐进式 + 模块化调用
需要的时候只智能加载当前需要的部分，而不是一次性全塞进来。
这样做的好处是：节省 token、记忆不会膨胀、注意力更集中，还能越用越聪明。

今天为大家介绍下在小龙虾养殖中心使用Hermes，得益于懒猫微服小龙虾养殖中心的强大基座，部署超方便，使用超简单\~

> 推荐使用 LC-03 48G大内存运行更快、更流畅、不卡顿，购机优惠咨询请加专业团队

![Image](https://pbs.twimg.com/media/HFS8HdkbMAA8hhf.jpg)

首先安装最新版小龙虾养殖中心，如果您之前已经在用了，可以一键导入OpenClaw配置到Hermes中

## 配置网络环境

需要确保科学上网

## 一键安装

进入小龙虾养殖中心，双击桌面上的终端按钮，复制下方命令，在终端中 Ctrl Shift + V 粘贴，回车执行

![Image](https://pbs.twimg.com/media/HFS82XoaEAANihL.jpg)

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh \| bash
\`\`\`

![Image](https://pbs.twimg.com/media/HFS9AY0bsAAuF4b.jpg)

安装程序会开始运行，如果失败可以检查科学上网环境

进行到激活虚拟环境这一步时，可能会卡很久，是正常的，请耐心等待下

Permission denied 的提示可以忽略

![Image](https://pbs.twimg.com/media/HFS9YecbkAAWmOm.jpg)

## 一键迁移&初始化

这里视您的需求，看是否从小龙虾养殖中心的OpenClaw 中导入配置，输入Y回车即可

![Image](https://pbs.twimg.com/media/HFS97kubgAA1anY.jpg)

执行快速初始化

![Image](https://pbs.twimg.com/media/HFS-JGmawAAU_nQ.jpg)

设置模型接入点

![Image](https://pbs.twimg.com/media/HFS-ogJaQAAYViI.jpg)

部分供应商可能会导入失败，重新输入添加，后续重新配置下

![Image](https://pbs.twimg.com/media/HFS-5oVbUAABkby.jpg)

Hermes赫妹暂无WebUI，这里来配置消息渠道

![Image](https://pbs.twimg.com/media/HFS--RKa4AAwW7W.jpg)

我的 TelegramBot 已经自动从 OpenClaw 配置中导入了，直接回车

![Image](https://pbs.twimg.com/media/HFS_FpUa8AAVwd_.jpg)

参考图中选择进行配置，稍后手动配对消息渠道id

![Image](https://pbs.twimg.com/media/HFWUMola0AAR2Rp.jpg)

## 启动

安装进入末尾，直接顺手启动

![Image](https://pbs.twimg.com/media/HFWUQzcbwAAr3iD.jpg)

## 配对消息渠道

随便发送消息给 Bot，点击配对命令，粘贴到终端进行配对

![Image](https://pbs.twimg.com/media/HFWUXLSa8AAFhrc.jpg)

## 守护进程

在桌面上找到额外扩展功能，进入自启动管理，点击添加，填入命令

\`\`\`
hermes gateway run&
\`\`\`

![Image](https://pbs.twimg.com/media/HFWUb52a8AI4rGa.jpg)

保存后重启小龙虾养殖中心，即可实现自启动

## 配置模型接口

如果需要新增模型，或是部分模型端点从OpenClaw导入后会失效，需要重新配置

打开终端，执行hermes model 选择对应接口或更多提供商，这里自定义为例

![Image](https://pbs.twimg.com/media/HFWUmcPa8AMMMlM.jpg)

自定义接入点

![Image](https://pbs.twimg.com/media/HFWUqZJa8AIopOH.jpg)

按照图示交互式填入

![Image](https://pbs.twimg.com/media/HFWUt7gaIAAUBHY.jpg)

## 结束

重新配置好模型后，可以正常和agent对话了

![Image](https://pbs.twimg.com/media/HFWU35Ja8AIMk8M.jpg)

### 🖼️ Attached Media

![Image 1](https://pbs.twimg.com/media/HFWy34HbcAAZ05j.jpg)

## 💬 Replies

### 1 @Eth_lxy (快乐达芬奇)

*Wed Apr 08 07:04:16 +0000 2026*

@manateelazycat 配置完模型，怎么对话他会给我一个empty的返回

### 2 @manateelazycat (Andy Stewart) (Author)

*Wed Apr 08 07:04:45 +0000 2026*

@Eth\_lxy 是不是哪里配置的有问题啊？
你要不要加一下我们的群？
这个二维码已经扫不进去了，你私信一下我。

### 3 @VividTrail30 (蛋燕)

*Wed Apr 08 10:28:48 +0000 2026*

@manateelazycat X营销跟着你学就行了，其他的都是纸上谈兵

### 4 @manateelazycat (Andy Stewart) (Author)

*Wed Apr 08 12:26:57 +0000 2026*

@VividTrail30 老板，买一台啊，我教你啊。哈哈哈

### 5 @undefined_none (undefined_null)

*Fri Apr 10 08:56:24 +0000 2026*

@manateelazycat Hermes我第一反应是赫尔墨斯

### 6 @manateelazycat (Andy Stewart) (Author)

*Fri Apr 10 08:57:13 +0000 2026*

@undefined\_none 没毛病，就是神

### 7 @helbjiang (jhon jiang)

*Wed Apr 08 12:10:37 +0000 2026*

@manateelazycat 差生工具多

### 8 @jingjiaalex (alex@ccsub)

*Thu Apr 09 04:34:29 +0000 2026*

@manateelazycat 哇，学习了！配置出问题也可以看看这个详细版教程对照下哪里配错了[x.com/jingjiaalex/st…](https://x.com/jingjiaalex/status/2041984218360902124?s=46&t=ID1WSIUe_v6UkgT7aGuluA)

### 9 @gaochong2019 (高冲)

*Thu Apr 09 23:13:08 +0000 2026*

@manateelazycat 谢谢老王

### 10 @qingqingdilaiP (轻轻地来🕯️🕯️🕯️-2 （Pray for Charlie Kirk ! ))

*Fri Apr 10 06:16:18 +0000 2026*

@manateelazycat 哥，
赞
予人方便，
予己方便。

