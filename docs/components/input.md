---
title: Input | V-Element
description: Input 组件的文档
---

# Input 输入框
通过鼠标或键盘输入字符

## 用法

### 基础文本框

<preview path="../demo/Input/Basic.vue" title="基础文本框" description="Input 基础文本框"></preview>

### 禁用文本框

通过 **disabled** 属性指定是否禁用 input 组件


<preview path="../demo/Input/Disable.vue" title="禁用文本框" description="Input 禁用文本框"></preview>

### 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： **large**, **small**。

<preview path="../demo/Input/Size.vue" title="不同尺寸文本框" description="不同尺寸文本框"></preview>


### 复合型输入框

可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 **prepend** 和 **append** 插槽。
要在输入框中添加前后元素，可以使用 **prefix** 和 **suffix** 插槽。

<preview path="../demo/Input/Combo.vue" title="复合型输入框" description="Input 复合型输入框"></preview>

### Textarea

用于输入多行文本信息可缩放的输入框。 添加 **type="textarea"** 属性来将 input 元素转换为原生的 textarea 元素。

<preview path="../demo/Input/Textarea.vue" title="Textarea" description="Textarea"></preview>

### 密码文本框

使用 **show-password** 属性即可得到一个可切换显示隐藏的密码框

<preview path="../demo/Input/Password.vue" title="密码文本框" description="Input 密码文本框"></preview>

### 清空文本框

使用 **clearable** 属性即可得到一个可一键清空的输入框

<preview path="../demo/Input/Clear.vue" title="清空文本框" description="Input 清空文本框"></preview>

## Props

| 键名           | 描述                         | 类型                           | 默认值      |
| -------------- | ---------------------------- | ------------------------------ | ----------- |
| message        | 消息内容                     | string / VNode                 | -           |
| duration       | message 持续时间             | number                         | 4000 (毫秒) |
| showClose      | 是否有 close Icon 可手动关闭 | boolean                        | false       |
| type           | 默认提供四种类型支持         | success、info、warning、danger | info        |
| transitionName | 过渡效果                     | string                         | fade        |
| onDestory      | 组件销毁方法                 | Function                       | -           |
