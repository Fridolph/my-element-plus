---
title: Tooltip | V-Element
description: Tooltip 组件的文档
---

# Tooltip

用于展示更多消息

## 基础用法

默认 hover 触发，也可改为 click 触发

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

### Props

| 键名           | 描述                         | 类型                 | 默认值 |
| -------------- | ---------------------------- | -------------------- | ------ |
| content        | 文字                         | string               | -      |
| trigger        | 触发类型                     | enum: [hover, click] | hover  |
| placement      | 出现位置                     | string               | bottom |
| manual         | 是否手动触发                 | boolean              | false  |
| transitionName | 过渡名                       | string              | fade  |
| openDelay      | 打开延迟                     | number               | 0 毫秒 |
| closeDelay     | 关闭延迟                     | number               | 0 毫秒 |
| popperOptions  | popper.js 配置，更多参考文档 | Options              | -      |

<style>
.vitepress-demo-preview__element-plus__container {
  overflow: visible;
}
</style>