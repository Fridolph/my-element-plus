<template>
  <header>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </header>
  <main>
    <div class="component-module">
      <div class="module-title">Button</div>
      <Button>default</Button>
      <Button type="primary" plain ref="buttonRef">primary</Button>
      <!-- <Button type="danger">danger</Button> -->
      <!-- <Button type="info">info</Button> -->
      <!-- <Button type="success">success</Button> -->
      <!-- <Button type="warning">warning</Button> -->
      <Button :disabled="true">disabled</Button>
    </div>
    <div class="component-module">
      <div class="module-title">测试一下</div>
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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.component-module {
  .module-title {
    color: pink;
  }
}
</style>
