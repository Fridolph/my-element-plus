## 需求分析

Button组件大部分关注样式，没有交互

根据分析可得具体属性列表：

|属性名|数据类型|默认值|相关描述|
|-|-|-|-|
|type|string|default|代表不同样式，如default、primary、danger、info、success、warning等|
|plain|boolean|false|样式的不同展现模式 之前的ghost 实心空心模式|
|round|boolean|false|按钮是否有border-radius圆角|
|circle|boolean|false|是否是圆形按钮|
|size|string|normal|预设不同大小small、normal、large|
|disabled|boolean|false|是否为禁用状态|
|icon|string|''|后续再添加|
|loading|boolean|false|是否为loading状态|

## 遇到问题

1. 不能导入外部文件的类型

https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props

2. 组件属性需要单独写一个script

```html
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'xxx-xxx'
})
</script>
```