<template>
  <i class="vk-icon" :class="{ [`vk-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type { FontAwesomeIconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({ 
  name: 'VkIcon',
  inheritAttrs: false
})

const props = defineProps<FontAwesomeIconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<style scoped></style>
