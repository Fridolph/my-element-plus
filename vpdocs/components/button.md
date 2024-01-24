---
title: Button | V-Element
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

### Button Attributes

| 键名       | 描述         | 类型                                    | 默认值 |
| ---------- | ------------ | --------------------------------------- | ------ |
| size       | 大小         | large、small、normal                    | normal |
| type       | 类型         | primary、success、warning、danger、info | -      |
| plain      | 是否为空心   | boolean                                 | false  |
| round      | 是否有圆角   | boolean                                 | false  |
| circle     | 圆形按钮     | boolean                                 | false  |
| loading    | 等待         | boolean                                 | false  |
| disabled   | 禁用         | boolean                                 | false  |
| icon       | 加图标       | string                                  | -      |
| autofocus  | 原生自动聚焦 | boolean                                 | false  |
| nativeType | 原生属性     | enum: button、submit、reset             | button |
