<template>
  <div class="vk-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { formContextKey, type FormEmits, type FormProps } from './types'
defineOptions({ name: 'VkForm' })
const props = defineProps<FormProps>()
defineEmits<FormEmits>()
provide(formContextKey, props)
</script>
