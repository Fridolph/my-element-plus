---
title: Form | V-Element
description: Form 组件的文档
---

# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。 
使用表单，您可以收集、验证和提交数据。

## 典型表单

最基础的表单包括各种输入表单项，比如input、select、radio、checkbox等。

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。

<preview path="../demo/Form/Basic.vue" title="典型表单" description="Form 典型表单"></preview>

## Props

| 键名           | 描述                         | 类型                           | 默认值      |
| -------------- | ---------------------------- | ------------------------------ | ----------- |
| message        | 消息内容                     | string / VNode                 | -           |
| duration       | message 持续时间             | number                         | 4000 (毫秒) |
| showClose      | 是否有 close Icon 可手动关闭 | boolean                        | false       |
| type           | 默认提供四种类型支持         | success、info、warning、danger | info        |
| transitionName | 过渡效果                     | string                         | fade        |
| onDestory      | 组件销毁方法                 | Function                       | -           |
