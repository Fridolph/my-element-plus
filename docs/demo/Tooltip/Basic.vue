<template>
  <Tooltip content="收到联发科见识到了就开了">
    <Button>我是Tooltip</Button>
  </Tooltip>

  <Tooltip trigger="click" content="收到联发科见识到了就开了">
    <Button>点击触发</Button>
  </Tooltip>
</template>

<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
