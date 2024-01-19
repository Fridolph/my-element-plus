---
title: Message | V-Element
description: Message 组件的文档
---

# Message

可直接用于展示，或用API操作新建实例展示

## 将组件 Render 到 DOM 节点上

使用 createApp 的弊端

- 该方法过于"重"，它返回了一个应用的实例，而我们需另辟更轻量级的解决路径

综上，采用 render 函数

```js
// 一个vue内部的神奇函数，文档中没有特别说明
// 它负责将一个vnode渲染到DOM节点上
// 是一个轻量级的解决方案
import { render } from 'vue'

render(Vnode, DOM节点)
```

## 组件开发

### 使用函数式的方式创建组件

```js
const container = document.createElement('div')
const vnode = h(MessageConstructor, props)

render(vnode, container)
document.body.appendChild(container.firstElementChild!)
```

### 销毁组件实例

```js
render(null, container)
```

### 组件动态构造并且传入属性

```js
const newProps = {
  ...props,
  onDestory: destory
}
const vnode = h(MessageConstructor, newProps)
```

### 其他方式

- 使用一个数组保存组件实例信息，并且添加对应的函数对数组进行处理
- 计算偏移量
  - top: lastBottomOffset(上一个实例留下的底部位置的偏移) + offset
  - 为下一个实例预留 bottomOffset: top + height
  - messageRef.value!.getBoundingClientRect().height
  - 使用defineExpose暴露对应的属性或方法
- 在函数中获取偏移量

