<template>
  <header>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="./assets/logo.svg" class="logo vue" alt="Vue logo" />
  </header>
  <main>
    <div class="component-module">
      <h1 class="module-title">Button</h1>
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
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'

const buttonRef = ref<ButtonInstance | null>(null)

onMounted(() => {
  if (buttonRef.value) {
    console.log('onMounted: ', buttonRef.value.ref)
  }
})
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

.component-module {
  .module-title {
    color: var(--vk-text-color-primary);
  }
}
</style>
