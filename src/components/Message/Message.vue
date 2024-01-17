<template>
  <Transition :name="transitionName" @after-leave="destroyComponent" @enter="updateHeight">
    <div
      v-show="visible"
      ref="messageRef"
      :style="cssStyle"
      class="vk-message"
      :class="{ [`vk-message--${type}`]: type, 'is-close': showClose }"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="vk-message_content">
        <slot>
          <RenderVnode :v-node="message" v-if="message" />
        </slot>
      </div>
      <div class="vk-message__close" v-if="showClose">
        <Icon icon="xmark" @click="close" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import type { MessageProps } from './types'
import RenderVnode from '../Common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { getLastBottomOffset } from './createMessage'
import useEventListener from '../../hooks/useEventListener'

defineOptions({ name: 'VkMessage' })
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 4000,
  offset: 20,
  transitionName: 'fade-up',
  showClose: false,
})

const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
// const instance = getCurrentInstance()
// console.log('inner instance: ', instance);

// 计算便宜高度 - 指当前message容器 div 的高度
const height = ref(0)
// 上一个实例最下面的坐标数字，第一个应该为0
const lastOffset = computed(() => getLastBottomOffset(props.id as string))
const topOffset = computed(() => props.offset + lastOffset.value)
// 该元素为下一个元素预留的offset， 即它最底端 bottom 的值
const bottomOffset = computed(() => height.value + topOffset.value)
const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex,
}))
let timer: any
const startTimer = () => {
  if (props.duration === 0) return
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
}
const clearTimer = () => {
  clearTimeout(timer)
}

const close = () => {
  visible.value = false
}

onMounted(async () => {
  visible.value = true
  startTimer()
  await nextTick()
  height.value = messageRef.value!.getBoundingClientRect().height
})

const keydown = (e: Event) => {
  const event = e as KeyboardEvent
  if (event.code === 'Escape') {
    visible.value = false
  }
}
useEventListener(document, 'keydown', keydown)

const destroyComponent = () => {
  props.onDestory && props.onDestory()
}

const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height
}

defineExpose({
  bottomOffset,
  visible,
})
</script>
./createMessage
