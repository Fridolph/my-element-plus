---
title: Tooltip | V-Element
description: Tooltip 组件的文档
---

# Tooltip

- 通用组件
- tooltip
- dropdown
- select
- ...

## 功能分析

- 基本功能，两块区域
  - 触发区域
  - 展示区域
- 触发方式
  - 点击
  - hover
  - 手动

重点就是触发区，发生特定事件时，展示区的内容将隐藏

## 开发

- 基础功能实现 （使用popper.js 来完成位置的展示
- 支持 click / hover 两种触发方式
- 支持 clickoutside 时的隐藏
- 支持手动触发
- 支持popper参数
- 过渡效果
- 支持延迟显示
- 其他样式处理
