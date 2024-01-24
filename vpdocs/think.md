---
outline: deep
---

# 编写组件的一些思考

以学习为目的，不用去纠结一些难点和复杂的功能实现，能理解和掌握一些组件封装、编写的核心思路即可。

通过本项目的学习，我们了解了组件的编写和封装思路。

应明确目的，理解需求和使用、应用场景，这样才能更好地服务自己和他人。

> 下面是官方的例子，感觉挺有用，作为例子暂时保留了

## 运行 API 例子

本页面演示了 VitePress 提供的一些运行时 API 的使用。

主要的 useData() API 可用于访问当前页面的站点、主题和页面数据。它适用于 .md 和 .vue 文件：

```ts
<script setup>
import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()
</script>
```

### More

查看文档以获取运行时 API 的完整列表 [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
