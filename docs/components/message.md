---
title: Message | V-Element
description: Message 组件的文档
---

# Message

可直接用于展示，或用 API 操作新建实例展示

## 基础用法

通过 `import Message from 'my-element'` 使用

<!-- <preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础用法"></preview> -->
由于 VitePress 自身bug , 服务端渲染导致 document 未找到，一直没解决，build 出来的暂时不给例子了


```html
<template>
  <Message type="info" message="hello Message" />
  <Message type="primary" message="hello Primary" />
  <Message type="danger" message="hello Danger" />
  <Message type="success" message="hello Success" />
</template>

<script setup>
import Message from '@/components/Message/Message.vue'
</script>
```

## createMessage

<!-- <preview path="../demo/Message/Basic2.vue" title="createMessage" description="通过`createMessage`来创建实例"></preview> -->

```html
<template>
  <Button @click="onMsg1">打开消息1 - info</Button>
  <Button @click="onMsg2">打开消息2 - primary</Button>
  <Button @click="onMsg3">打开消息3 - success</Button>
  <Button @click="onMsg4">打开消息4 - danger</Button>
</template>

<script setup>
import Button from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/createMessage'
const onMsg1 = () => {
  createMessage({ message: '打开消息1 - info', duration: 3000 })
}
const onMsg2 = () => {
  createMessage({ type: 'success', message: '打开消息2 - primary', duration: 0, showClose: true })
}
const onMsg3 = () => {
  createMessage({ type: 'danger', message: '打开消息3 - success', duration: 0, showClose: true })
}
const onMsg4 = () => {
  createMessage({ type: 'danger', message: '打开消息4 - danger', duration: 0, showClose: true })
}
</script>

```

## Props

| 键名           | 描述                         | 类型                           | 默认值      |
| -------------- | ---------------------------- | ------------------------------ | ----------- |
| message        | 消息内容                     | string / VNode                 | -           |
| duration       | message 持续时间             | number                         | 4000 (毫秒) |
| showClose      | 是否有 close Icon 可手动关闭 | boolean                        | false       |
| type           | 默认提供四种类型支持         | success、info、warning、danger | info        |
| transitionName | 过渡效果                     | string                         | fade        |
| onDestory      | 组件销毁方法                 | Function                       | -           |
| offset         | 偏移位置                     | number                         | 0           |

## Instance

| 键名   | 描述               | 类型   | 默认值      |
| ------ | ------------------ | ------ | ----------- |
| id     | 实例对应 id        | string | -           |
| zIndex | 实例生成的 z-index | number | 4000 (毫秒) |
