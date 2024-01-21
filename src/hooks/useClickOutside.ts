import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

const useClickOutside = (
  elementRef: Ref<undefined | HTMLElement>,
  callback: (e: MouseEvent) => void
) => {
  const handler = (e: MouseEvent) => {
    // 当我们点击容器 及 容器内部任意元素
    if (elementRef.value && e.target) {
      // 这里判断为： 点击区域不包含当前元素
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e)
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}

export default useClickOutside
