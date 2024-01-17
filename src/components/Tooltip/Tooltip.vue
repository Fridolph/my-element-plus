<template>
  <div class="vk-tooltip" ref="popperContainerNode" v-on="outerEvents">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <Transition :name="transition">
      <div v-if="isOpen" class="vk-tooltip__popper" ref="popperNode">
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import { debounce } from 'lodash-es'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import useClickOutside from '../../hooks/useClickOutside'
defineOptions({
  name: 'VkTooltip',
})
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 66,
  closeDelay: 100,
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
let popperInstance: null | Instance = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
// let openTimes = 0
// let closeTimes = 0
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9],
        },
      },
    ],
    ...props.popperOptions,
  }
})

const open = () => {
  // openTimes++
  // console.log('open times', openTimes)
  isOpen.value = true
  emits('visible-change', true)
}
const close = () => {
  // closeTimes++
  // console.log('close times', closeTimes)
  isOpen.value = false
  emits('visible-change', false)
}
const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)

const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}
const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}

const togglePopper = () => {
  if (isOpen.value) {
    closeFinal()
  } else {
    openFinal()
  }
}
useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    closeFinal()
  }
  if (isOpen.value) {
    emits('click-outside', true)
  }
})
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal
    outerEvents['mouseleave'] = closeFinal
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
if (!props.manual) {
  attachEvents()
}
watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {}
      outerEvents = {}
    } else {
      attachEvents()
    }
  }
)
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      // clear the events
      events = {}
      outerEvents = {}
      attachEvents()
    }
  }
)
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
      } else {
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' }
)

onUnmounted(() => {
  popperInstance?.destroy()
})
defineExpose<TooltipInstance>({
  show: openFinal,
  hide: closeFinal,
})
</script>
