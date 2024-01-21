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
      <br />
      <br />
      <Button :loading="true">loading</Button>
      <Button icon="arrow-up">向上图标</Button>
    </Wrap>
    <Wrap title="Collapse">
      <Collapse v-model="openValue" accordion>
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
        <CollapseItem disabled name="item3" title="disabled状态">
          <div>数控刀具法律手段科技 胜多负少考虑到就分手了科技</div>
          <div>塑料袋咖啡机塑料袋可视对讲发了尽快slkj</div>
          <div>sdflksjdfaskjfowieruowieruo9iaosodifusodfui</div>
        </CollapseItem>
      </Collapse>
      <p>openValue: {{ openValue }}</p>
    </Wrap>
    <Wrap title="Icon">
      <Icon icon="fa-solid fa-user" size="2x" />
      <Icon icon="fa-solid fa-check" type="success" size="2x" />
    </Wrap>

    <Wrap title="Tooltip">
      <Tooltip placement="bottom" width="300" content="简单">
        <Button>默认hover触发</Button>
      </Tooltip>
      <span>------------</span>
      <Tooltip
        placement="right"
        trigger="click"
        content="圣诞快sdfs 水岸东方艾斯乐"
      >
        <Button>点我右边</Button>
      </Tooltip>
      <span>------------</span>
      <Tooltip
        placement="left"        
        trigger="click"
        content="圣诞快sdfs 水岸东方艾斯乐"
      >
        <Button>出现在左边</Button>
      </Tooltip>      
      <span>------------</span>
      <Tooltip placement="top" width="300" content="简水电费水电单">
        <Button>默认hover触发</Button>
      </Tooltip>
      <span>------------</span>
    </Wrap>

    <Wrap title="Dropdown">
      <Dropdown
        :menu-options="menuOptions"
        trigger="click"
        @visible-change="onVisibleChange"
        @select="onSelect"
      >
        <Button>我是菜单</Button>
      </Dropdown>
    </Wrap>

    <Wrap title="Message">
      <Button @click="onMessage">消息3秒消失</Button>
      <Button @click="onMessage2">不消失，有X</Button>
      <Button @click="onMessage3">不消失3，有X</Button>

      <Message message="hello world" />
    </Wrap>

    <Wrap title="Input">
      <Input v-model="input" />
      <Input type="password" v-model="input2" />
    </Wrap>

    <Wrap title="Switch">
      <Switch />
    </Wrap>

    <Wrap title="Select">
      <Select style="width:500px" v-model="selected" :options="selectOptions"></Select>
      <span>selected: {{ selected }}</span>
    </Wrap>
  </main>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import Wrap from './components/Wrap/Wrap.vue'
import type { ButtonInstance } from './components/Button/types'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import { MenuOptions } from './components/Dropdown/types'
import Message from './components/Message/Message.vue'
import { createMessage } from './components/Message/createMessage'
import Input from './components/Input/Input.vue'
import Switch from './components/Switch/Switch.vue'
import Select from './components/Select/Select.vue'

// Button
const buttonRef = ref<ButtonInstance | null>(null)

// Collapse
const openValue = ref(['item1'])

// Dropdown
const menuOptions: MenuOptions[] = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: h('b', '我是h(b, "标签")') },
  { key: 4, label: 'item4', divided: true },
]
const onSelect = (item: MenuOptions) => {
  console.log('onSelect: ', item)
}
const onVisibleChange = (value: boolean) => {
  console.log('onVisibleChange: ', value)
}

// Message
const onMessage = () => {
  createMessage({ message: 'hello > Message', duration: 3000 })
}
const onMessage2 = () => {
  createMessage({
    type: 'success',
    message: 'my-element-plus > Message2',
    duration: 0,
    showClose: true,
  })
}
const onMessage3 = () => {
  createMessage({
    type: 'danger',
    message: 'my-element-plus > Message3',
    duration: 0,
    showClose: true,
  })
}

// Input
const input = ref('xxx')
const input2 = ref('123456')

// Select
const selected = ref('1')
const selectOptions = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3', disabled: true },
  { label: '选项四', value: '3' },
]
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
</style>