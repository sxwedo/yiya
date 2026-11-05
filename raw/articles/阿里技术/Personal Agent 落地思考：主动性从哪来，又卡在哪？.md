---
title: "Personal Agent 落地思考：主动性从哪来，又卡在哪？"
author: "阿里技术"
url: "https://mp.weixin.qq.com/s/c5k2iwYh1O1OLA8ULf5X_A"
ingested: "2026-10-26"
date: "2026-10-26"
---

# Personal Agent 落地思考：主动性从哪来，又卡在哪？

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/GicicSW0VicbibksAa69YiayJtt2iajASL7kKDFjNc0wwmE1iaGbezbYdFib2qtvYS05uC5M4QF9po0QibwicT4IzeFp7x0nrUicyNiciaz1gBnGOmnT2C6k/640?wx_fmt=jpeg)

## 01 现象：大家说的「更主动」，到底是什么

这一轮 Personal Agent 产品出来以后，讨论里出现最多的一个词是"更主动了"：它会自己来找你，会记得你上周随口说过的事，会在你没开口的时候替你把事情往前推。看起来更主动里，但「主动」不是一个单独的功能。拆开看，它是这三件事组合出来的外显效果。

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0Vicbiblywicl2YjI3UNsaNLa73kshuUxZ7mtF6naCXVLY2AKFVcsgj6n4laicfgXMbHcGId0w7fiaD8I8sibNzy8F5hXRibfch1SwX9XLeYI/640?wx_fmt=png&from=appmsg#imgIndex=1)

图 1 · 三要素组合出"更主动"

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0VicbiblyLgru7zt836jQhk9f0vleTziam8YSaq2wc6lqmNdcpuFM4tScwFABZfZ16eyBOGT2yIl4GGl8yhYhNBMIIibnribThh5nqIdxL3Y/640?wx_fmt=png&from=appmsg#imgIndex=2)

三件事缺一件，主动性都有缺失：

- 只有身份、没有数据源，Agent 在场却无事可做。
- 只有数据源、没有记忆，推送什么都像群发通知。
- 只有记忆、没有身份，Agent 想到了也只能等你下次打开对话框。

### 1.1 有了身份，数据源的变化本身就是事件

这里有一个容易被大家忽略的点：一旦 Agent 有了独立身份，数据源的变化天然就是事件源。

拿 git 举例。Agent 可以定时去读仓库状态，这是一种获取变化的方式。push、merge 本身也是事件，在 DevOps 里，它们就是各条 pipeline 的触发时机。人不在的时候，这些事件照样发生；Agent 有了自己的账号和权限，就能像流水线一样被它们唤醒。

所以 Agent 判断"什么时候该动"，时机可以有两种来源：

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0Vicbnz6WUIw152tNlhcY3iboYgyLzVXF9qYmPPPhp6Zvn9kqqXD9flhWMbqWHwTFg75Y0rBZkpfEGp8NseXJhHtPibibkWZ6RE3wEWlw/640?wx_fmt=png&from=appmsg#imgIndex=3)

到这里，"Agent 能不能主动"的问题基本解决了。但还有一个更关键的问题没回答：它该在什么事上主动？

## 02 本质：主动性来自「目标−现状」

回到最朴素的问题：人为什么会主动去做一件事？

因为心里有个目标，眼前的状态和目标之间有差距。差距让人意识到「这里有个问题」，问题再被拆成要做的任务。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/GicicSW0Vicbkk78EgNx31KYXjwc4gtb9EvpQGM6iM0Py1pkiaJ34wH6hroeUEdxqe6Uk7xwJaFAcKeWkQUzJP87liaUOoGQJ2uWlZIR6PcpmWY/640?wx_fmt=png&from=appmsg#imgIndex=5)

图 2 · 目标 − 现状 = 差距 → 问题 → 任务

Agent 也一样。没有目标，就没有差距；没有差距，主动就只是在刷存在感。

### 2.1 这件事在任务级 Agent 上其实已经发生了

今天的 Coding Agent 和各类通用任务 Agent 都在做这件事：用户给一个 goal，Agent 跑一个 loop，执行、检查，再对照 outcome 判断是否完成。中间缺什么就补什么，这本身就是"按差距行动"。

PA 并没有发明新机制。它做的是把任务级的 goal / outcome 在两个方向上放大：

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0Vicbm3YLdtTNjnjA4pg7pzKZUywxTdjtQzQiajMnfLO9lHlXXHiau540SicLmGE2OVH2cxOqLqQpwP6iavfUkINKvmB4cnaqCwREZTlpQ/640?wx_fmt=png&from=appmsg#imgIndex=6)

图 3 · 从任务级目标到 PA 长期目标

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0Vicbn7yNY2DicMfjk6zv4NNLzBHdV2dYplC9QeqFHfQdFquPuiaA5tXJuYnWmbjIj51brd7VyBX71RpHnmpw07v7b5kkAiaOXhFNksNJw/640?wx_fmt=png&from=appmsg#imgIndex=7)

### 2.2 放大之后，有三件事随之改变

①主动性从加分项变成了刚需。 任务级 Agent 不主动也能交付，因为用户就在旁边，随时会推它一下。长期目标下，用户大部分时间不在场。Agent 不自己跟踪、不自己发现问题，目标就会停在原地。主动性是被长期目标逼出来的。

②授权跟着子任务走，不跟着目标走。 我给了 Agent 一个"把这个里程碑推到上线"的目标，不等于授权它替我给所有人发消息，也不等于授权它改线上配置。目标只说明了方向，每个子任务的风险都不一样，授权只能一个个给。

③周期越长，越需要持续对齐目标。 一次任务里，目标在开头说清楚，基本不会变。几周的周期里，目标本身会漂：优先级变了，上游决策变了，我自己的想法变了。Agent 如果拿着三周前的理解一路往前推，就是在"目标已经错位，却还在用力推进"。这是长期主动最危险的失败方式。

## 03 主动性是分层的

既然主动性来自「差距 → 问题」，分层的标准就很自然：这个问题是谁定义的？可以分两根轴来看。

### 3.1 横轴：谁定义问题

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0Vicbl7RibaLL7s40JJlhSQbBqrAaz91hjApTtia8bOEQODYkQkt3picBNvDV4OSHWT9K2qN8f3kKxKhtSFsPoKJuSsCCyeybqic3AEUEI/640?wx_fmt=png&from=appmsg#imgIndex=9)

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0VicbniaShnicdeN8ljK5KnlwJIAdiaWWjbpfRDXYDAQk1a0C3PeIRZ02lvIwl1BWibYgXppjiaXfHTed8KUic5vSMrA0ibIDxn4X19iaPBjIw/640?wx_fmt=png&from=appmsg#imgIndex=10)

图 4 · 横轴：谁定义问题（L1–L5）

L3 到 L4 是质变。

L1 到 L3，不管看起来多智能，问题都是用户定义的：L2 的时间规则是用户定的，L3 的触发条件也是用户定的，Agent 只是在合适的时机执行。

到了 L4，用户只给目标，"现在缺什么、该补什么"由 Agent 自己算出来。L4 有一个前提：差距必须是可计算的。目标是清晰的，要么能量化，要么有可检查的状态。

L5 本身是 Agent 自己推断目标；L4 的目标如果说不清，就会实际上变成 L5。

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0VicbnsAedk4oaCiaAmrKUSjBu5rDh4JteF5HZO7PjspdwvM02UAUSeZvyBLQEyD1XUicfYTq7RiaDwG5V0wDrKFd01ibib5ZYX4OJQYf0U/640?wx_fmt=png&from=appmsg#imgIndex=11)

### 3.2 纵轴：做到哪一步

横轴回答"问题从哪来"，但没回答"Agent 能做到哪一步"。同样是 L4，"提醒你某个依赖没人认领"和"直接替你在群里认领"，完全是两件事。

所以还需要第二根轴：

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0VicbmPdG0D00djExrYMV2Kia8xG2RsrzNMQLC3FpT0Mw5hMvVezz6yIr6Ra8gQ6J1hibcO20la82J36Hk96GIb1tB5VAz6SVejAphLicc/640?wx_fmt=png&from=appmsg#imgIndex=12)

图 5 · 纵轴：做到哪一步

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0Vicbm7BjQeHLjm3nHCS7guMMxg4n56CTF3M2nOJpDNVqLTSVXTibiabMW2uDe2nABmrMtcA1cReQtjCgl2wJYmv19GE6kTr6BkVzjWzX/640?wx_fmt=png&from=appmsg#imgIndex=13)

两根轴是独立的。一个 L5 的 Agent 可以只停在"告知"，一个 L3 的 Agent 也可以直接对外执行。讨论 PA 能做到什么程度时，必须同时说清楚它在两根轴上的位置。

## 04 Personal Agent 实践与重新认识

我给自己搭了一个 PA，叫 Daisy。它有几个常驻的 loop：

- 每日收敛 loop：每晚 20:00 扫一遍当天的会话、钉钉群、关键私聊和文档，产出两份东西。一份是待办（todo），另一份是"今天涉猎到、可能值得沉淀的话题"（discover）。
- 自动回复 loop：白名单群里有人 @我 时，按规则先替我回复。

把它们放到两根轴上：

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0Vicbn8V3OTNXcyWsa4sUVZlhTSM4PvCwWvZ7jSu4y7CTjbay6BSusT385Lr0OzGGbJibHQJHJ0sNm31UvTk3g2Fb6BUEexbzeUibrkCU/640?wx_fmt=png&from=appmsg#imgIndex=15)

横向看，它已经走到了 L4、L5：todo 是对照我的工作目标算出来的差距，discover 是它推断"我可能关心什么"。

纵向看，todo 和 discover 几乎都停在最底下两格。

### 4.1 数据很诚实

> 从 07-01 起，每日 loop 一共产出 276 条 todo，其中 138 条 被标为完成。这 138 条里有 126 条，是我在 08-13 的一次会话里集中手动核销的。loop 自己执行、关闭的：0 条。

它每天都在「发现问题」，但从来没有「解决问题」。所有的执行和收口，最后都回到了我身上。

### 4.2 是太谨慎了吗？

发现不是。看同一个 PA 里的自动回复 loop：

它直接在钉钉群里替我回复同事。这是对外、不可逆的动作，回出去就收不回来，风险比关掉一条 todo 大得多。可这件事我放心交给它，因为规则全是我自己定的：

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0VicblIg4KHuus6JJ4gEpaONx8hMEFgR5415ngUcplHPxKpLDDWGtjjc3MQ49pJInCr6BEhz5C4IxSgjCTj25ug93trloWMG2PD0o/640?wx_fmt=png&from=appmsg#imgIndex=16)

问题是我定义的，边界是我画的，出了事责任在我。所以我敢放。

而 to do 是 Agent 自己算出来的问题。它判断"这件事该做"，可如果它算错了，替我做错了，这个后果该谁来担？这个问题没有答案之前，我只会让它停在"建议"。

### 4.4 升仓：同一件事，可以从 L5 走到 L4

Discover 是个更有意思的例子。它一共扫出了 80 多个话题，我没有照着清单直接把它们沉淀进知识库。

但我并不是不沉淀。我的方式是：觉得某个话题值得，就接着和 Agent 聊，聊到满意、理解透了，再让它整理进知识库。清单里没处理的那些，一部分是我没时间，或者懒了；另一部分是我担心自动生成的内容直接进库，质量不够高。

换个设定，情况就不一样了。如果在 PA 场景里我明确说了"我要成为某个领域的专家"，同时给出清楚的入库规则：

- 知识架构清晰，能挂到已有的概念体系里；
- 来源扎实，优先官方文档和一手资料；
- 和库里已有的结论不冲突，冲突就标出来。

那么在风险可控的前提下，有一部分入库是可以让 Agent 自己完成的。

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0VicbnicM9KryjdR1F9Ytdiael5mF8c7aEJiciaZ7ic5czo5H7DoLLPicjjNlRicQJv31HFA40t8jT2bZFhR0kRJickLFm8buuw4RABBYylws/640?wx_fmt=png&from=appmsg#imgIndex=17)

图 6 · 同一件事从 L5 走到 L4

这一步变化里，Agent 的能力没有变，变的是我交给它的东西：一个可计算的目标，和一套可检查的验收规则。

## 05 哪些适合直接交给 Agent 主动？看失败代价

一件事能不能交给 Agent 执行，跟它在第几层关系不大，跟个人谨不谨慎也关系不大。真正起作用的是两个问题：

问题是谁定义的？ 这决定了出错时的责任归属。

失败代价有多大？ 拆开看是三件事：能不能撤回，影响到谁，结果能不能验证。

按这两个问题，可以把待办分成五档。每档举一个真实的例子：

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0VicbnlNXcP6DLnUabV3ETVKFfZ0gO9heQAiaZoJxTHg5V8zoDawv9cMW29PQic3pBfdJWmCkmI1Zzq0DO0S38MI55By7b6yYrkHHeKiac/640?wx_fmt=png&from=appmsg#imgIndex=19)

把它画成一张图会更直观：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/GicicSW0VicbnvC948PdpFB2N0mdsVJLFbnfVo04cUvW5Qmj3Ftob3zqZynDmdBXFxOvY3MI7DY6Abq5on4QaVmHq4PUKLPBRxzK5icsKzicM/640?wx_fmt=png&from=appmsg#imgIndex=20)

图 7 · 能不能交给 Agent 执行

左下角最适合直接执行：问题是我定的，做错了代价也小。越往右上走，越需要人在关键节点上把关。

## 06 主动性的上限在哪？杠杆是什么？

回到分层。L1 到 L3 的执行，今天已经能比较放心地交出去：问题是用户定义的，边界是用户画的，Agent 做的是"按规则执行"。真正卡住的，是 L4 的执行和 L5 的一切。

### 6.1 L4：Agent 定义了问题，责任却还在人身上

L4 的问题是 Agent 算出来的。算对了，它替我省了事；算错了，后果还是我担。只要这个不对称存在，人就会本能地把 L4 留在"建议"。

长周期还会让情况更糟。目标在几周里会漂，Agent 在用户不在场时拿着旧目标往前推，差距算得越认真，偏得越远。所以 L4 想往上走，除了初始的目标，还需要持续对齐的机制：在关键节点重新确认"目标还是这个吗"。

### 6.2 L5：在 L4 的风险上，再叠一层"目标猜错"

L5 连目标都是 Agent 推断出来的，于是出现了第二个误差来源：

- L4 的风险：目标对，差距算错了。
- L5 的风险：目标本身就猜错了，后面的差距、问题、任务全部跟着错。

这不是假设。据媒体报道，Meta Muse 的系统指令里就要求它去推断用户的目标，包括那些用户"没有说出口"的目标；为了做到这一点，它会读取聊天、消息、邮件和已连接的应用，这也引发了不小的隐私争议[5]。推断"没说出口的目标"，能力上做得到，但用户愿不愿意被这样理解是另一回事。所以至少在今天，L5 更适合停在"告知"：告诉我你观察到了什么，由我来决定这是不是我的目标。

### 6.3 杠杆：把目标和验收规则说清楚

回看前面所有的例子，能让一件事往上走的只有一件事：

![](https://mmbiz.qpic.cn/mmbiz_png/GicicSW0VicbmMcp9UKXlwT1FCokWyM3KVsulXYwPjSUvnjGn8wxZyaABeJb18XJGMcJZ3mkSeuyib83OdUSo5LMAdAQTWGKb82ajP9bDZHMcib8/640?wx_fmt=png&from=appmsg#imgIndex=22)

图 8 · 杠杆：把目标和验收规则说清楚

- 说清目标，Agent 就不用猜，L5 变成 L4。
- 说清验收规则，"做没做对"就能被检查，L4 的一部分变成了"按规则执行"，问题定义权和责任也重新回到用户手里。

升仓就是这么走上去的：从"猜我关心什么"，到"对照专家目标算差距"，再到"符合规则的直接入库"。

所以，PA 的主动性能放大到什么程度，最终不只取决于 Agent 多聪明，也取决于人愿意把目标和规则说到多清楚。Agent 负责把差距算准、把事情推进；人负责把方向和底线说清楚，并在目标漂移时及时校准。

主动性的上限，是人与 Agent 之间能显式对齐的那部分目标。

## 07 用 Qoder Cloud Agents 把这套思考做成 Personal Agent

这套分层不只是在讨论 Agent 的聪明程度，也在反过来定义 PA 产品需要怎样的基础设施：稳定的身份与记忆让目标跨会话持续，Channel 与 Schedule 提供事件和时机，云端执行环境让行动在用户离线时继续；权限、确认和运行记录，则用来承接不同执行档位的风险。

如果你也想把长期目标、个人上下文和持续执行做成真正可用的 Personal Agent，可以从这里开始：https://qoder.com/zh/cloud-agents
