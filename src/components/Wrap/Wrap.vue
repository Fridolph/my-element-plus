<template>
  <div class="module">
    <h1 v-if="title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type WrapProps = {
  title?: string
}
defineProps<WrapProps>()
</script>

<style scoped lang="postcss">
.module {
  padding: 10px;
  margin-bottom: 20px;
}
</style>
