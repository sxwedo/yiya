---
type: Entity
title: "轻熟女图片生成 Skill"
description: "beauty-image-defaults：用户要求 > 参考人物 > 默认 30 岁亚洲女性。管人像美术检查，自己不出图。"
kind: product
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-10-06T12:00:00Z }
related:
  - portrait-character-brief
  - ai-image-judgment
  - ai-portrait-posing
sources:
  - ../../../raw/articles/水族店刘老板/轻熟女图片生成 Skill.md
---

# Identity

**轻熟女图片生成 Skill**（水族店刘老板，文件夹 `beauty-image-defaults`）：把默认人物和人像美术要求写进一份 `SKILL.md`。生成、改图、只补提示词都可以；真正出图仍交给图像工具。文称不含成人色情。无 GitHub 仓，帖内全文，需自己落盘或让编码代理创建。

对照：[人像角色设定](../concepts/portrait-character-brief.md) 把气质翻成骨相妆发词表；本页是**缺省画像 + 参考人物优先**，不是唐风角色展开。

## Mechanism

属性顺序：用户当场指定 ＞ 用作身份的参考图 ＞ 未指定才填默认。默认是 30 岁左右亚洲成熟女性、黑发、眼镜、丰满协调；不能因为默认是 30 岁，就把参考人物改成 30 岁，也不能自动加眼镜、改脸、拉胸臀。

有参考时先读图：年龄观感、五官、发型、眼镜、可见比例沿用原图。半身图没露出的身体不当已知。多张参考先分身份 / 服装 / 风格，不能把模特脸平均进目标人物。

美术指导写皮肤纹理（不写完美无瑕）、眼神与动作一致、手部受力、衣料材质、可解释的主光。全身图检查头脚是否入画。成图按使用尺寸看主次，再查脸、眼镜、手、接触；更漂亮不能单独当修正成功。不把生成图叫实拍，交付前清隐私元数据。

用户只要提示词就不出图。不确定的关键外观先问。

## Boundaries

不是 [人像角色设定](../concepts/portrait-character-brief.md)，不是 [AI 人像美姿提示词](../concepts/ai-portrait-posing.md)，不是色情包。默认画像不是对所有人的外貌标准。装同名文件夹 ≠ 模型突然会画。

## Related

- [人像角色设定](../concepts/portrait-character-brief.md)
- [AI 生图判断](../concepts/ai-image-judgment.md)
- [AI 人像美姿提示词](../concepts/ai-portrait-posing.md)
