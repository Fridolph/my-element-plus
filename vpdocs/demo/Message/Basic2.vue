<template>
  <Button @click="onMsg1">打开消息1 - info</Button>
  <Button @click="onMsg2">打开消息2 - primary</Button>
  <Button @click="onMsg3">打开消息3 - success</Button>
  <Button @click="onMsg4">打开消息4 - danger</Button>
</template>

<script setup>
import Button from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/createMessage'
const onMsg1 = () => {
  createMessage({ message: '打开消息1 - info', duration: 3000 })
}
const onMsg2 = () => {
  createMessage({ type: 'success', message: '打开消息2 - primary', duration: 0, showClose: true })
}
const onMsg3 = () => {
  createMessage({ type: 'danger', message: '打开消息3 - success', duration: 0, showClose: true })
}
const onMsg4 = () => {
  createMessage({ type: 'danger', message: '打开消息4 - danger', duration: 0, showClose: true })
}
</script>
