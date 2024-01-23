<template>
  <Button>hello</Button>
  <Button loading>Loading</Button>
  <Button plain>plain</Button>
  <Button round>round</Button>
  <Button circle>圆</Button>
  <Button icon="home">Home</Button>
  <Button autofocus>自动聚焦</Button>

  <h2>type</h2>
  <Button type="default">default</Button>
  <Button type="primary">Primary</Button>
  <Button type="danger">Danger</Button>
  <Button type="success">Success</Button>
  <Button type="info">Info</Button>

  <h2>plain</h2>
  <Button plain type="default">default</Button>
  <Button plain type="primary">Primary</Button>
  <Button plain type="danger">Danger</Button>
  <Button plain type="success">Success</Button>
  <Button plain type="info">Info</Button>
</template>
<script setup>
import Button from '@/components/Button/Button.vue'
</script>
