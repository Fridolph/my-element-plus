---
title: Button | V-Element
description: Button 组件的文档
---

# Button 按钮

## 需求分析

Button组件大部分关注样式，没有其他交互。可在其上自行绑定事件

根据分析，暂得以下具体属性列表：（button.type.ts）

- type 样式
- plain 
- round
- circle
- disabled
- icon
- loading

## 确定项目文件结构

- 从简单入手
- 没有必要过度设计
- Button(components) 后续组件都参照这个文件结构来
  - Button.vue
  - style.css
  - types.ts
  - Button.test.ts

## 其他问题及思考

> 不能导入外部文件类型

https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props

> 组件属性需要单独写一个script

```html
<script setup>
defineOptions({
  name: 'MyButton'
})
</script>
```