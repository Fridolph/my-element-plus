<script setup>
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
const openValue = ref(['item1'])
</script>
<template>
  <Collapse v-model="openValue">
    <CollapseItem name="item1" title="标题1">
      <p>内容段落展示 - 索拉卡党风建设肯定放假睡觉了附件开始的</p>
    </CollapseItem>
    <CollapseItem name="item2" title="测试标题2">
      <p>直接写些简单内容 - 双联单控福建省两地分居立卡手机卡了双联单控就</p>
    </CollapseItem>
    <CollapseItem disabled name="item3" title="disabled状态">
      <div>数控刀具法律手段科技 胜多负少考虑到就分手了科技</div>
      <div>塑料袋咖啡机塑料袋可视对讲发了尽快slkj</div>
      <div>sdflksjdfaskjfowieruowieruo9iaosodifusodfui</div>
    </CollapseItem>
    <CollapseItem name="item4" title="标题4">
      <p>直接写些简单内容 - 双联单控福建省两地分居立卡手机卡了双联单控就</p>
    </CollapseItem>
  </Collapse>
  <p>openValue: {{ openValue }}</p>
</template>
