# 关于文档

这是一个很好的学习及应用思路。在我们实际开发中，花费一小点的时间成本，构建出这样一个尽可能详细的文档非常有必要。可与产品、UI 和测试同事更好地合作与沟通，避免一些潜在的麻烦。

我认为反馈是非常有重要且有必要的。之前的工作中，UI 同事经常会在开发周期提一些临时修改意见，有了这样一个文档和示例 Demo，同事们能更好地了解项目开发进度和一些实现细节。

前端开发 `styles/vars` 相关颜色变量甚至可让 UI 同事来维护

# 官方文档推荐的示例

暂时保留了

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

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

## Custom Containers

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

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
