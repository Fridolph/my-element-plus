import { render, h, shallowReactive } from 'vue'
import type { MessageProps, MessageContext } from './types'
import MessageConstructor from './Message.vue'
import useZIndex from '../../hooks/useZIndex'

let seed = 1000
const instances: MessageContext[] = shallowReactive([])
// reactive([]) 实例内部变动也会造成视图更新，所以我们用shallowReactive 只对浅层增删改有更新，性能优化

export const createMessage = (props: MessageProps) => {
  const { toNextZIndex } = useZIndex()
  const id = `message_${seed++}`
  const container = document.createElement('div')

  const destory = () => {
    // 删除数组中的实例
    const index = instances.findIndex((instance) => instance?.id === id)
    if (index === -1) return

    instances.splice(index, 1)
    // 通过这样的写法完成清空操作
    render(null, container)
  }
  // 手动调用删除，即 手动调整组件的 visible 值
  // visible 通过 expose 传出来的
  const manualDestory = () => {
    const instance = instances.find((instance) => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }
  const newProps = {
    ...props,
    id,
    zIndex: toNextZIndex(),
    onDestory: destory,
  }

  const vnode = h(MessageConstructor, newProps)

  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)
  // 加叹号 表示 非空断言操作符 - 告知TS该处不为null和undefined

  const vm = vnode.component!
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destory: manualDestory,
  }

  instances.push(instance)
  return instance
}

// 获取最后一项实例
export const getLastInstance = () => {
  return instances.at(-1)
}

export const getLastBottomOffset = (id: string) => {
  const index = instances.findIndex((instance) => instance.id === id)
  // 没找到时 就设为最高 + 用户预设的offset
  if (index <= 0) return 0
  else {
    const prev = instances[index - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}

export const closeAllInstances = () => {
  instances.forEach(instance => {
    instance.destory()
  })
}