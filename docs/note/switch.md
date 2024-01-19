---
title: Switch | V-Element
description: Switch 组件的文档
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。 可以使用 **--vk-switch-on-color** 属性与 **--vk-switch-off-color** 属性来设置开关的背景色。

<preview path="../demo/Switch/Basic.vue" title="基础Switch" description="Switch 基础用例"></preview>

## 禁用状态

设置 **disabled** 属性，接受一个 boolean，设置true即可禁用。

<preview path="../demo/Switch/Disabled.vue" title="Switch 禁用状态" description="Switch 禁用状态"></preview>

## 不同尺寸

设置 **size** 属性，接受**large / small**，呈现不同的尺寸。

<preview path="../demo/Switch/Size.vue" title="Switch 不同尺寸" description="Switch 不同尺寸"></preview>

## 支持自定义 value 类型

你可以设置 **active-value** 和 **inactive-value** 属性， 它们接受 boolean | string | number 类型的值。
<preview path="../demo/Switch/CustomValue.vue" title="支持自定义 value 类型" description="Switch 支持自定义 value 类型"></preview>

## 文字描述

使用 **active-text** 属性与 **inactive-text** 属性来设置开关的文字描述。

<preview path="../demo/Switch/Text.vue" title="支持文字描述" description="Switch 文字描述"></preview>