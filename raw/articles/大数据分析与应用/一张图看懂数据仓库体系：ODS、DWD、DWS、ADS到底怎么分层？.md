---
title: "一张图看懂数据仓库体系：ODS、DWD、DWS、ADS到底怎么分层？"
author: "大数据分析与应用"
url: "https://mp.weixin.qq.com/s/tQvddZEyiky1W5lW2lrMlw"
ingested: "2026-11-05"
date: "2026-10-14 08:20:00"
---

# 📰 一张图看懂数据仓库体系：ODS、DWD、DWS、ADS到底怎么分层？

几乎所有接触过数据仓库的人，都会遇到 ODS、DWD、DWS、ADS 这四个缩写。

从概念上看，它们并不复杂：

* ODS 负责接收和保留原始数据；  

* DWD 负责形成标准明细数据；  

* DWS 负责沉淀公共主题和汇总能力；  

* ADS 则面向报表、看板和具体业务应用提供数据。  

但真正进入企业项目之后，问题往往没有这么简单。

* 为什么有些企业已经建立了 ODS、DWD、DWS、ADS，数据口径依然混乱？  

* 为什么有些 DWD 表和 ODS 表几乎一模一样，只是换了一个名字？  

* 为什么同样是“销售月度汇总”，有的项目放在 DWS，有的却放在 ADS？  

甚至一些企业的数据仓库已经有成千上万张表，层级也非常完整，但源系统改一个字段，数据团队仍然要花大量时间排查下游影响。

问题的关键就在于：

**数据仓库分层，从来不是简单地把数据放进不同目录，而是在定义数据加工过程中不同阶段的责任边界。**

如果只从名称理解 ODS、DWD、DWS、ADS，很容易把数据仓库做成“多层数据复制”。

如果从**数据语义、数据粒度、复用范围和服务对象**去理解，就会发现这四层其实对应了数据从业务系统走向数据应用的完整生命周期。

一套典型的数据仓库，可以抽象成：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaeuTAS1g2wrrIvubzLoibrL8icqKSNia0vLNAq5pibjmVtxM8Kia1mkv56EUicloZ6rg62O3DcSkQjRgbXxEVwQzTv1zBlevBjHW6Ekh8/640?wx_fmt=png&from=appmsg)

这里有一个经常被架构图“一根箭头带过”的问题：

业务系统里的数据，究竟怎么稳定进入 ODS？  

ERP、CRM、MES、WMS 使用的数据库和接口可能完全不同，数据更新频率也不一样。有的每天批量同步，有的需要分钟级增量更新，还有不少数据来自文件、接口甚至临时业务系统。

所以真正落到项目里，最麻烦的往往不是画出“数据源 → ODS”这根箭头，而是把背后的连接、同步、清洗、任务调度和异常处理真正跑起来。

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

这类场景我会用 FineDataLink 处理，统一连接 ERP、CRM、MES、WMS 等不同数据源，将原来分散的数据同步、清洗和调度任务集中管理，再持续把数据送入 ODS 或后续数据平台。

有需要的可以直接体验一下：https://s.fanruan.com/nnvqp  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaevoL28GzXMYodKO4AL04MyBgyiaJX8D0tgRaIRdiczjric8WQcnlDSKiabU4gxaZ7QrkicUiao0eibMzGYgPupBY8C7zV81CfibzHEQyIs/640?wx_fmt=png&from=appmsg)

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 一、数据仓库为什么要分层？

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

数据仓库真正要解决的，不是“数据有没有存下来”，而是：

**企业的数据能不能被长期、稳定、统一地使用。**

如果没有明确的数仓分层，最常见的架构就是业务系统直接连接 BI、报表或者分析程序。

项目初期，这种方式通常非常快。

ERP 抽订单，CRM 抽客户，WMS 抽库存，写几段 SQL，很快就能做出一张经营看板。

问题往往出现在业务扩大以后。

系统越来越多，业务规则越来越复杂，每一张报表都会重复做：

* 数据清洗；  

* 字段转换；  

* 数据关联；  

* 指标计算。  

销售部门有一套“销售额”。

财务部门有另一套。

管理驾驶舱为了满足领导需求，又重新计算一遍。

最终企业拥有大量数据和大量报表，却没有形成真正稳定的数据资产。

因此，数据仓库分层首先解决的是**解耦**。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaeu8NLOtWMicLcRawpZvSD85Oyop1k7K3L2tGkznLVvj7GsS3v4I8Vtkpr0I6iaXjlC51yZiaQH2fsVtbJ01xx9IU5FIhnicy3LsBTI/640?wx_fmt=png&from=appmsg)

业务系统负责产生数据，数据仓库负责加工数据，应用系统负责消费数据。

源系统发生变化时，不应该直接影响几十张报表；一个指标口径调整，也不应该要求所有应用重新修改逻辑。

其次，分层解决的是**复用**。

客户编码映射、订单状态转换、销售事实模型、公共指标，都应该尽量只定义一次，再由多个下游应用重复使用。

最后，分层还解决了一个经常被忽略的问题：

### 数据可追溯。

当管理层发现某个经营指标异常时，需要能够从最终结果一路追到汇总层、明细层、原始层，最终定位到源系统中的具体业务记录。

所以真正合理的数据仓库，不是为了把架构图画得更复杂。

而是为了建立一条：

**职责明确、逻辑复用、能够追踪的数据生产链路。**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaetF2UMZYq5tuUP143ohJuJA88PbVBKedlnVic95wHLbjoFWmtjWoQpic3062oicfDM8QGbylE0NVpMmJib1sZUe8TLDhjfJibSnJz2s/640?wx_fmt=png&from=appmsg)

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 二、ODS：保留源系统语义，而不是急着加工

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

ODS 通常指 **Operational Data Store**，也就是原始数据层或操作数据存储层。

它位于数据仓库最靠近源系统的位置。

主要负责接收 ERP、CRM、MES、WMS、财务系统、日志平台、IoT 平台等不同来源的数据，并尽可能保留源系统原始信息。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaetZE1gskODk4R4MGbceq8OOKdxeC5te7mwHP9vlFf3DNu4NuUuIGx0cyF94n6zDfIvQUpnu5yA2cCu15VQexQB6xwjJUKgfuXA/640?wx_fmt=png&from=appmsg)

ODS 最重要的原则可以概括成一句话：

尽可能保留源系统语义，不要过早加入复杂业务规则。  

例如 ERP 中有销售订单表，进入 ODS 后可能形成：

```

ods_erp_sales_order

ods_erp_sales_order

```

CRM 客户数据形成：

```

ods_crm_customer

ods_crm_customer

```

WMS 库存流水形成：

```

ods_wms_inventory_transaction

ods_wms_inventory_transaction

```

这些表通常和源系统保持较强的对应关系。

当然，ODS 并不意味着数据必须完全“原封不动”。

为了后续处理一致，通常还会增加：

* 抽取时间；  

* 数据来源；  

* 分区日期；  

* 基础数据类型转换；  

* 字符编码处理；  

* 时间格式统一。  

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaeuTr1w1WU7SrtA8x4FbFibgicpIwZzBBv4f3R0ia0nkibe2u71p0aDDQa15X4SOFDB9j3zcy7wZk33NXTiaIzSv7o4BsDGcckC8paU0/640?wx_fmt=png&from=appmsg)

但这些操作主要解决技术规范问题。

至于：

客户到底是不是战略客户？

订单属于哪个销售区域？

收入什么时候确认？

这些已经涉及业务规则，一般不适合过早放在 ODS 处理。

---

## ODS最容易被忽略的问题：数据怎么持续进来？

很多文章讲 ODS，只讲“原始数据层”，却很少讲它前面的数据接入。

现实项目中，真正麻烦的地方恰恰在这里。

例如 ERP 每天凌晨同步一次，MES 每五分钟同步，CRM 需要按增量获取客户变化，部分业务数据还存在 Excel 和其他数据库里。

如果这些任务全部依赖零散脚本，很快就会出现：

* 同步任务越来越多；  

* 开发逻辑重复；  

* 谁维护哪条链路没人说得清；  

* 上游字段变化后任务大量报错；  

* 新增一个系统又要重新开发接口。  

所以在这一步，数据集成工具的价值就比较明确了。

实际建设中，可以通过 **FineDataLink** 将不同业务系统的数据接入逻辑统一起来，根据不同场景组织批量、增量等同步任务，再把数据持续送入 ODS。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaetv8IeL2CPG71Jbiaky9c4kgT3hZWVRvxJOUK7QA12hiadPsopwSyCw639HmZVo6MZTyzC9aJaiaoVHjpicMj6T1Hjib3oVf2mLAYBY/640?wx_fmt=png&from=appmsg)

这样 ODS 才真正成为稳定的原始数据入口，而不是一个靠大量临时脚本维持的数据中转站。

从这个角度看：

**ODS负责“原始数据留下来”，FineDataLink解决的是“原始数据怎么稳定进来”。**

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 三、DWD：真正的数据仓库，往往从这一层开始

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

如果说 ODS 更接近数据接入，那么 DWD 才是企业真正开始建立统一数据语义的地方。

DWD 通常称为 **Data Warehouse Detail**，也就是明细数据层。

它的核心任务，是把来自不同系统、不同结构和不同编码体系的数据，转化为企业能够统一理解和使用的标准业务明细。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaeu3EojUM964SaNaBC9szFrKJyibNZxkL0iawTJw0xeLjt1WoTVFXDckp5ZxM5I6pYZ2r2mz4Qricgh7icRFwIic28gDtbdA1mPsRno8/640?wx_fmt=png&from=appmsg)

这一层最重要的两个关键词是：

### 标准化和粒度。

先说标准化。

业务系统的数据天然围绕业务操作设计，而不是围绕企业分析设计。

同一个客户：

ERP 可能有一套编码；

CRM 有另一套；

财务系统又有第三套。

同一个“已完成”状态，也可能分别表示为：

```

CompletedFinished已完成3

CompletedFinished已完成3

```

如果直接拿这些数据进行分析，就很难真正做到跨系统关联。

所以 DWD 通常会完成：

* 数据清洗；  

* 编码映射；  

* 异常处理；  

* 状态统一；  

* 字段标准化；  

* 派生字段加工。  

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaetG4xtxXx37uC6YJYfhUF5iat8p66GJfR275AS2TaKSxxqWO780pRlfnFLGty6LyG4pcD5AtoERHYWhRkH5ALWNibibguoa0afSQk/640?wx_fmt=png&from=appmsg)

经过这一步之后，数据不再只是：

“ERP里的订单”。

而开始变成：

### 企业统一理解的订单。

---

## 数据清洗为什么最好不要散落在几十个脚本里？

这也是 FineDataLink 比较适合自然进入的位置。

现实中，很多企业的数据加工规则并没有真正沉淀在数仓里，而是散落在大量 SQL、ETL 脚本和个人任务中。

比如：

ERP 的客户编码先转换一次；

CRM 的客户编码又写一套规则；

另一个项目为了做报表，再重新清洗一次。

同一套规则被重复实现，不仅增加维护成本，也很容易产生不同版本。

因此，一些相对基础、通用的数据转换规则，可以通过 **FineDataLink** 在数据同步和加工过程中统一执行。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaevUDRPYBtNLpIxwT5UEfdOkXlyAHbOjaHjwODhvF8zYCAT3HPZ2USj6tPtprRhqOdqYZHMFtVKENNia0wgjwtKgtRs4KmdhXNVI/640?wx_fmt=png&from=appmsg)

例如：

* 字段映射；  

* 格式转换；  

* 基础清洗；  

* 多源数据整合；  

* 加工任务调度。  

**工具负责稳定执行规则，业务和数据团队负责定义规则。**

真正涉及企业统一业务事实和数仓模型的部分，则仍然应该在 DWD 的建模体系中明确下来。

这样才能避免把数据集成工具变成另一个“装所有业务逻辑的地方”。

---

### 再说粒度。 ###

数据仓库里的“粒度”，本质上回答的是：

### 一行数据究竟代表什么？

是一张订单？

一个订单商品？

一次支付流水？

一次库存变化？

还是一次设备运行事件？

这个问题非常重要。

因为粒度几乎决定了以后能够分析什么。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaeu5c6VicApVnHfmQ6yRR1SamdqRm4tiaFwV2wtrajwudYrZaItkHpx0dY5AtvEYT241olyia87IxVjWnhEK535mibCFF4gn8ibWOORs/640?wx_fmt=png&from=appmsg)

如果 DWD 阶段直接把订单数据汇总成“客户月度销售额”，那么未来业务想分析商品组合、订单结构、交易时间分布，就很难再恢复。

因此，DWD 通常强调：

### 尽可能保留业务过程合理的最细粒度。

典型事实表可能包括：

```

dwd_sales_order_detaildwd_purchase_order_detaildwd_inventory_transactiondwd_payment_detaildwd_production_order_detail

dwd_sales_order_detaildwd_purchase_order_detaildwd_inventory_transactiondwd_payment_detaildwd_production_order_detail

```

这些数据不一定直接给业务人员使用，却是整个数据仓库最核心的基础资产。

可以说：

**DWD 的质量，很大程度上决定了整个数据仓库的上限。**

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 四、DIM：统一的不是表，而是分析对象

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

DIM 即 **Dimension，维度层**。

它主要描述业务事实发生的分析环境。

常见维度包括：

* 客户；  

* 产品；  

* 组织；  

* 供应商；  

* 渠道；  

* 区域；  

* 时间。  

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaevQp41ZwUpzCs6mTXonibrBI7NdG15gmYHO7jiaC6IGsV8TIzP0vB2ZFEvGE66bG52EKYgZicOhQ9uuQNgCqPD3QnwP0MUebI19fs/640?wx_fmt=png&from=appmsg)

可以简单理解：

**事实回答“发生了什么”，维度回答“从什么角度理解这件事”。**

一笔销售记录可以告诉你：

卖了多少、多少钱、什么时候卖的。  

但如果想继续分析：

哪个区域？

什么客户等级？

哪条产品线？

哪个销售渠道？

就需要客户、产品、组织、渠道等维度参与。

因此会形成：

```

dim_customerdim_productdim_organizationdim_supplierdim_regiondim_channeldim_date

dim_customerdim_productdim_organizationdim_supplierdim_regiondim_channeldim_date

```

DIM 最大的价值并不是少存几个重复字段，而是：

### 统一企业的分析对象。

如果同一个客户在销售、财务、服务系统中分别拥有不同身份，而企业又没有统一客户维度，那么客户收入、回款和服务成本永远无法真正关联。

维度层还要解决历史变化。

例如：

客户等级变了；

员工部门调整了；

产品分类修改了。

如果只是覆盖原值，查询历史交易时，就无法还原“当时”的真实状态。

所以数仓通常会通过缓慢变化维度等方式保留历史版本。

这也是为什么 DIM 看似只是辅助层，实际上直接决定了企业能不能进行稳定的多维分析和历史分析。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaeuzw4j4wb3pow6lNCLYK3mQSAhkaOuAtzibiaYQw4x923LnRW8eyGZrUFrgFJdvWWXzy9SRNWCWllamHN2ySWbcCY3r02kibcbVaU/640?wx_fmt=png&from=appmsg)

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 五、DWS：真正沉淀的是公共分析能力

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

DWS 通常称为 **Data Warehouse Summary**，也就是汇总数据层。

很多初学者会简单理解为：

DWD 存明细，DWS 做 GROUP BY。  

不能说错，但不够准确。

DWS 真正承担的是：

**围绕企业核心分析主题，把能够被多个应用复用的指标和模型沉淀下来。**

它的核心关键词不是“汇总”，而是：

### 公共复用。

例如企业可以围绕：

销售、客户、库存、采购、财务、生产、设备等主题建设 DWS。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaesdtYTbSnNlNZXiblhByTOUV6UTTC6cgyHRrJ8sgsn4bTEf9WiakJD8Uib2Nkx4Hb8Qk6DdDJthPBLdZBq0VIsOiaXF4CG4FlPKkJI/640?wx_fmt=png&from=appmsg)

销售主题中，可以沉淀：

* 销售金额；  

* 订单数量；  

* 客户数量；  

* 退货金额；  

* 毛利。  

客户主题则可以沉淀：

* 购买金额；  

* 交易次数；  

* 活跃度；  

* 生命周期。  

例如：

```

dws_sales_daydws_sales_monthdws_customer_monthdws_product_sales_daydws_region_sales_month

dws_sales_daydws_sales_monthdws_customer_monthdws_product_sales_daydws_region_sales_month

```

从技术上看，它们确实是在做聚合。

但真正重要的是：

**把原本需要每个应用重复计算的逻辑，提前沉淀成公共数据能力。**

如果十张看板都需要计算销售额、订单数、客户数和毛利，这些指标就不应该在十张报表里写十遍。

而应该尽量在公共数据层中形成统一结果。

这样不仅提升查询效率，更重要的是解决：

### 指标一致性。

所以 DWS 可以理解为连接：

### 底层数据模型和上层业务分析

之间的一座桥梁。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaevGALqztCUAxSBpWW2ZSibS5ESTbueFZ4F4VZuOII5asIXxib59rWB4iajPNLM2zAZttQiar2apvAdOicicibj5jKgGM3C18rCz7UyPds/640?wx_fmt=png&from=appmsg)

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 六、ADS：从公共数据走向具体业务应用

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

ADS 通常称为 **Application Data Service** 或 **Application Data Store**，也就是应用数据层。

如果说 DWS 强调公共复用，那么 ADS 更关注：

### 具体业务场景到底需要什么。

例如：

管理层需要经营驾驶舱；

销售部门需要区域销售排名；

供应链需要库存预警；

财务部门需要利润分析。

就可能形成：

```

ads_management_dashboardads_sales_region_rankads_inventory_warningads_profit_analysis

ads_management_dashboardads_sales_region_rankads_inventory_warningads_profit_analysis

```

到了 ADS，数据通常已经完成复杂关联、指标计算和场景化加工。

上层 BI、API 或业务系统可以直接读取。

这里最容易混淆的是：

**DWS 和 ADS 都可能是汇总数据，到底有什么区别？**

关键不在粒度。

而在：

### 复用范围。

DWS 面向多个应用共同复用。

ADS 面向一个具体业务场景直接消费。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaeu4hoZ5uaA5GmL0oMyBhe3wa8ojF3LjrYUOL20k65qkO3IGF1TNvGHlEzpEibsxuedxsPoIoO0YY6gY1jWfYpbM6U6kKwibSBLDc/640?wx_fmt=png&from=appmsg)

例如：

“客户月度销售额”可以被很多业务系统使用，更适合放在 DWS。

但：

“经营驾驶舱TOP10客户排行榜”

明显是某个具体展示场景，更适合放到 ADS。

可以简单理解：

### DWS 是公共分析产品，ADS 是场景数据产品。

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 七、真正理解四层，要同时看粒度和语义

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

ODS、DWD、DWS、ADS 之间真正发生的变化，不只是表数量越来越多。

而是：

### 粒度和语义同时在变化。

从粒度来看：

```

```

通常越向上，数据越接近汇总。

但比粒度更重要的是语义：

```

```

ODS 中还是 ERP、CRM、MES 眼中的数据。

到了 DWD，它们开始变成企业统一语言中的：

订单、客户、库存、交易  

到了 DWS，又进一步变成：

销售主题、客户主题、库存主题  

最终到了 ADS，数据已经可以直接变成业务应用能够使用的指标和结果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaete17o5hw7v2IOvuK4ZTBpkQ9zu0w6npJGvAKz2tqGc8ibk9OGQIjUjww0sPCSEjsDJ07tjyCSlwHJSO98afBJbcIUBqsSibhyqs/640?wx_fmt=png&from=appmsg)

所以数仓真正做的事情，是：

**不断减少数据中的“系统属性”，不断增加数据中的“业务属性”。**

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 八、专业数仓设计，不能只知道分层，还要理解事实模型

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

进一步进入数仓设计，就会发现：

DWD 并不是把所有业务表复制一遍。

不同业务过程，需要不同的事实模型。

最常见的是三类。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaeufnV9DWRqs6AFHTE4Zxy9cGQnrrZ8qypicvzHQFiaNsS4fImAa4qZ8nEMmm241QLoFNzbHwviaa4XkJBf9JUyHfRL3zYTR9tcSf8/640?wx_fmt=png&from=appmsg)

## 1.事务事实表

记录具体业务事件。

例如：

* 订单明细；  

* 支付流水；  

* 库存交易；  

* 用户行为。  

通常一次事件对应一条事实记录。

## 2.周期快照事实表

按照固定时间保存某个业务对象的状态。

例如：

* 每日库存余额；  

* 每日账户余额；  

* 每日设备状态。  

适合分析某个指标随时间的连续变化。

## 3.累积快照事实表

描述一个有明确生命周期的业务流程。

例如：

订单创建 → 支付 → 发货 → 签收  

可以在一条记录中保留多个关键节点，用于分析流程周期和瓶颈。

所以真正专业的数仓设计，往往不是先问：

“这张表属于 DWD 还是 DWS？”

而是先问：

业务过程是什么？

粒度是什么？

应该使用什么事实模型？

未来要支持哪些分析？

**![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaetJbT0IJc4pyZBDnacTyqZZrdNRQmc6ibGenkzSLHib3VwwzUAgqJqIQQibQwkibDNv1Mrl1fSCza7AFFb0JB2micYKl2w6vMYoY9icc/640?wx_fmt=png&from=appmsg)**

分层只是框架。

### 建模，才真正决定数据仓库的能力上限。

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 九、数据仓库成熟以后，一定会走向指标、血缘和元数据

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

ODS、DWD、DWS、ADS 建起来，并不等于数据体系已经成熟。

数据规模扩大之后，企业通常还会继续建设三类能力。

### 第一，指标体系

----------

数据模型解决：

### 数据怎么组织。

指标体系解决：

### 数据怎么算。

例如“销售收入”不能只有一个公式。

还要明确：

* 统计对象；  

* 业务状态；  

* 时间口径；  

* 组织范围；  

* 税务口径；  

* 数据来源；  

* 更新周期。  

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaeu8fzrjpU4fs2bZSJkNMnmZPO9WgVoqibickq5m9yThz4o6xEgob8KpJXsMFWj9d86oBEhqwoovDia81iaYa3D3PCOSyIpib4wrLeicc/640?wx_fmt=png&from=appmsg)

如果这些规则不统一，即使数仓建得很好，上层仍然可能出现多个版本的“销售收入”。

### 第二，数据血缘

----------

企业最终需要能够回答：

一个 BI 指标来自哪里？

例如：

```

```

这条链路一旦能追清楚，数据问题定位、影响分析、版本升级和质量治理都会容易很多。

这也是为什么数据集成不能只关注“任务跑没跑成功”。

像 FineDataLink 这类平台真正有价值的地方之一，是把原本散落在大量脚本中的**数据同步和加工过程逐步平台化**。

当数据链路不再依赖某个人电脑里的一段 SQL，后续的数据维护、问题定位和任务管理才更容易建立标准。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaevEmicjn6SkDbmnuzySnwu4xichMP1pQ6KsVgznG0G6xfdBcXYVuzUNiczHdve5eDd8RyK5EJc19aRXVYQG9FoYXMFcxD5VOce264/640?wx_fmt=png&from=appmsg)

### 第三，元数据体系

----------

随着表和指标越来越多，企业面对的问题会从：

“有没有数据？”

变成：

### “这些数据到底是什么？”

例如：

这张表是谁负责？

这个字段什么意思？

多久更新一次？

哪些系统正在使用？

这个指标是不是已经废弃？

修改字段以后会不会影响下游？

这些问题不能长期依靠口头沟通。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaetib6zpZRV0icOribVG9Ls5GkWyMExjLIRwsIicibMxKUFph47r9N0QCMYG2zIicKnh3ib3XEqOksjicYShA0fJFGKicvuEPuYxrjcaq3WY/640?wx_fmt=png&from=appmsg)

所以成熟的数据仓库最终一定会从“管理数据”，继续走向：

### 管理数据资产、数据关系和数据语义。

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 十、ODS、DWD、DWS、ADS并不是唯一标准

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

虽然四层架构非常常见，但它不是唯一正确答案。

不同企业的数据规模、业务复杂度、实时要求和技术栈不同，分层方式也会不同。

一些企业可能采用：

```

ODS → DWD → ADS

ODS → DWD → ADS

```

公共汇总需求不复杂，就没有必要为了“架构完整”强行增加 DWS。

一些大型数据平台则可能进一步细分：

```

ODS → DWD → DWM → DWS → ADS

ODS → DWD → DWM → DWS → ADS

```

而在 Lakehouse 架构中常见的：

```

Bronze → Silver → Gold

Bronze → Silver → Gold

```

本质上遵循的也是类似思想：

**原始数据 → 标准数据 → 高质量业务数据。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaesfFWSqQN3lajX9MGYBM6PgEsibiavafichORAlbblk7Hg4SVX6glIiaictswmMEIfSniaXhoMdOboLZnJicpyicK2ic0GPuVzoebCSHU8c/640?wx_fmt=png&from=appmsg)**

所以真正重要的，不是：

“到底四层还是五层？”

也不是：

“表名前面有没有 ods\_、dwd\_。”

而是：

**每一层究竟有没有发生明确的数据加工和责任变化。**

如果所谓 ODS、DWD、DWS 只是连续几层：

```

SELECT *

SELECT *

```

既没有语义变化，也没有粒度变化，更没有复用能力提升，那么这种分层只是形式上的分层。

---

![](https://mmbiz.qpic.cn/mmbiz_png/yPNxD63HiavG22A1W4flAibxCavpQBuj6fJu7BICZQW1fNQgPbl7ctKdic4z7rLMRmfDO4nkKkbastGiasUTABmBrQmr1ldYDeDoD8ibP92eGzNQ/640?from=appmsg)

## 十一、怎么判断一个数据仓库分层做得好不好？

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2d6EicickEPtN8xGniacmQicibM9vGpib9ZqBYJnsvbwxSxPs7ibwibbQvHeMFnd4sLAkNldicG38LwbnIbsjvicLRggcHicIkWlkcfjq44yazcEIv3w0o/640?from=appmsg)

==========

可以重点看四个问题。

### 第一，DWD有没有真正形成统一业务事实？

----------

如果每个下游系统还在重复做数据清洗、映射和标准化，说明 DWD 并没有真正沉淀下来。

### 第二，DWS有没有形成公共复用能力？

----------

如果每张看板仍然重新计算销售额、客户数、库存和毛利，那么 DWS 只是形式存在。

### 第三，ADS有没有真正面向应用？

----------

如果 ADS 只是完整复制 DWS，没有针对具体应用进行组织和优化，这一层同样没有发挥价值。

### 第四，整个链路能不能追？

----------

这其实是最重要的一点。

如果某个经营指标异常以后，还需要几个人一起翻 SQL、问开发、找历史脚本，才能判断数据到底来自哪里，那么这套数仓依然很难算成熟。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7Md1Jdc3iaesHzpw2MGuDJYHF6YYyX9CaHP5VNGqibzYqIvBATxxX4UxO31ma9NuvhxwcGS2fUXFWSlWg9zbCyVyGriaEiaKzeF69NoZNz64icF0/640?wx_fmt=png&from=appmsg)

所以评价一个数据仓库，不能只看：

### 有多少张表、分了多少层。

更应该看：

**它有没有真正降低数据使用和维护的成本。**

这也是为什么企业做到一定阶段以后，往往不能继续依靠大量零散的抽取脚本。

当 ERP、CRM、MES、WMS 等系统越来越多时，通过 **FineDataLink** 将多源连接、数据同步、基础转换和任务调度逐步统一起来，本质上是在给整套数仓建立一条更加稳定的数据生产入口。

![](https://mmbiz.qpic.cn/mmbiz_png/7Md1Jdc3iaeuQvLRJbz5a9RzcSiaTDbvicJ0HpxLrWrDhgVwkN48pWeV7qEyarU5fZUfTeEwTHvUerowq4iaePnGx7CbFnGR3S3RrkhWhXR4oI0/640?wx_fmt=png&from=appmsg)

数仓分层解决的是：

### 数据怎么组织。

数据集成平台解决的是：

### 数据怎么稳定地进入和流动。

两者解决的问题并不一样，但最终必须连接在一起。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/D59wbSgS23Dglo6j4V5ZyHWoTgoLw8WezcBFWO8bAWLWXQtQq5xXQ9eibJH2FAxalYUyGWG5WvXuJbBnSn5tcVw3eydNbYe2nic5cbr9iaTEYM/640?wx_fmt=gif&from=appmsg)

**点击【阅读原文】，体验文中同款数据集成平台**  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/D59wbSgS23B4HsodBiazXd3lcYyr107JZqX2nFfraDNgPM7KEDFMWTyicsFSYM2LqcQWJdzOI7dhTzUHGu8H9zMyeNibSAZ53CW40yyoP5Zcm0/640?wx_fmt=gif&from=appmsg)

