---
title: Collapse | V-Element
description: Collapse 组件的文档
---

# Collapse

简易的折叠面板

## 需求分析

- 静态展示
- 提供简单交互
- 多种解决方案
- 涉及一些新的知识点
  - Provide / Inject
  - v-model 实现
  - slots
  - Transition

## 了解功能

- 展示多个item，有标题和内容两部分
- 点击标题可以关闭和展示内容
- 可选手风琴模式

注意

当使用 defineOptions，设置`inheritAttrs: false`时，要配对使用 v-bind="$attrs" 这样不会丢一些透传属性