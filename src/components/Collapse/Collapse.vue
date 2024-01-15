<template>
  <div class="vk-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'VkCollapse',
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<NameType[]>(props.modelValue)
watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
const handleItemClick = (item: NameType) => {
  if (props.accorrdion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      // 存在，删除数组对应的一项
      activeNames.value.splice(index, 1)
    } else {
      // 不存在，则插入对应的name
      activeNames.value.push(item)
    }
  }

  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
})
</script>

<style scoped></style>
