<script setup lang="ts">
import { ref, reactive } from 'vue'
import useMousePosition from '../hooks/useMousePosition'

withDefaults(defineProps<{ name: string, age: number }>(), {
  name: 'fri',
  age: 24,
})

const pos = reactive(useMousePosition())

const emits = defineEmits<{(e: 'change', value: number): void}>()
const count = ref(2)
const add = () => {
  emits('change', ++count.value)
} 
</script>

<template>
  <h1>{{ name }} - {{ age }}</h1>

  <p>x: {{ pos.x }} - y: {{ pos.y }}</p>
  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
      to test HMR
    </p>
  </div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
