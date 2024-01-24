# 关于文档

这是一个很好的学习及应用思路。在我们实际开发中，花费一小点的时间成本，构建出这样一个尽可能详细的文档非常有必要。可与产品、UI 和测试同事更好地合作与沟通，避免一些潜在的麻烦。

我认为反馈是非常有重要且有必要的。之前的工作中，UI 同事经常会在开发周期提一些临时修改意见，有了这样一个文档和示例 Demo，同事们能更好地了解项目开发进度和一些实现细节。

前端开发 `styles/vars` 相关颜色变量甚至可让 UI 同事来维护

## 关于组件

组件开发的方法论

- 根据需求初步确定 `属性`、`事件`、`slots`、`expose` （不需要特别精确，后续随着功能开发可持续更新）
- 组件的静态版本（不添加交互，只有html结构、classes、slots）
- 将需求中有行为的功能做成开发计划列表
- 根据列表一项项地推进，完成对应功能
- 逐步完成 样式 / 测试 等收尾工作
- 更新文档 及 发布


## 官方文档推荐的示例

暂时保留了. 本页面演示了 VitePress 提供的一些内置 Markdown 扩展。

### 语法高亮

VitePress 提供由 [Shiki](https://github.com/shikijs/shiki) 提供支持的语法突出显示，以及行突出显示等附加功能：

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### More

查看文档以获取 Markdown 扩展的 [full list of markdown extensions](https://vitepress.dev/guide/markdown).
