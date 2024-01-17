import { onMounted, onBeforeUnmount, isRef, unref, watch } from 'vue'
import { type Ref } from 'vue'

export default function useEventListener(
  // 扩展，为了在vue3项目中更好使用，这里让target也支持 响应式对象
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => any
) {
  if (isRef(target)) {
    watch(target, (newVal, oldVal) => {
      oldVal?.removeEventListener(event, handler)
      newVal?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => {
      unref(target).addEventListener(event, handler)
    })

  }

  onBeforeUnmount(() => {
    unref(target)?.addEventListener(event, handler)
  })
}
