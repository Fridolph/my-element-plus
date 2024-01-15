<template>
  <header>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="./assets/logo.svg" class="logo vue" alt="Vue logo" />
  </header>
  <main>
    <Wrap title="Button">      
      <Button>default</Button>
      <Button type="primary" plain ref="buttonRef">primary</Button>
      <Button type="danger">danger</Button>
      <Button type="info">info</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button :disabled="true">disabled</Button>
      <br />
      <br />
      <Button plain type="primary" ref="buttonRef">primary</Button>
      <Button plain type="danger">danger</Button>
      <Button plain type="info">info</Button>
      <Button plain type="success">success</Button>
      <Button plain type="warning">warning</Button>
      <br/>
      <br/>
      <Button :loading="true">loading</Button>
      <Button icon="arrow-up">向上图标</Button>
    </Wrap>
    <Wrap title="Collapse">
      <Collapse v-model="openValue" accorrdion>
        <CollapseItem name="item1">
          <template #title>
            <h2>我是标题</h2>
          </template>
          <h2>副标题展示</h2>
          <p>内容段落展示 - 索拉卡党风建设肯定放假睡觉了附件开始的</p>
        </CollapseItem>
        <CollapseItem name="item2" title="测试标题2">
          <p>直接写些简单内容 - 双联单控福建省两地分居立卡手机卡了双联单控就</p>
        </CollapseItem>
        <CollapseItem name="item3" title="disabled状态">
          <div>数控刀具法律手段科技 胜多负少考虑到就分手了科技</div>
          <div>塑料袋咖啡机塑料袋可视对讲发了尽快slkj</div>
          <div>sdflksjdfaskjfowieruowieruo9iaosodifusodfui</div>
        </CollapseItem>
      </Collapse>
      <p>openValue: {{ openValue }}</p>
    </Wrap>
    <Wrap title="Icon">
      <Icon icon="fa-solid fa-user" size="2x"/>
      <Icon icon="fa-solid fa-check" type="success" size="2x"/>
    </Wrap>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Wrap from './components/Wrap/Wrap.vue'
import type { ButtonInstance } from './components/Button/types'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
// Button
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log('onMounted: ', buttonRef.value.ref)
  }
})

// Collapse
const openValue = ref(['item1'])
</script>

<style lang="postcss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.module {
  padding: 10px;
  margin-bottom: 20px;
  &__title {
    color: var(--vk-text-color-primary);
  }
}
</style>
