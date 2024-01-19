import type { VNode, ComponentInternalInstance } from 'vue'

export interface MessageProps {
  message?: string | VNode                         // 消息内容
  duration?: number                                // message 持续时间
  showClose?: boolean                              // 是否有 close Icon 可手动关闭
  type?: 'success' | 'info' | 'warning' | 'danger' // 默认四种类型支持
  transitionName?: string                          // 过渡效果 默认为fade
  onDestory?: () => void                           // 组件销毁方法
  id?: string                                      // 实例对应id
  zIndex?: number                                  // css z-index
  offset?: number                                  // 偏移位置
}

export interface MessageContext {
  id: string
  vnode: VNode
  vm: ComponentInternalInstance
  props: MessageProps
  destory: () => void
}

export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>
