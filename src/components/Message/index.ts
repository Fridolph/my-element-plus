import type { App } from 'vue'
import Message from './Message.vue'
import { createMessage, closeAllInstances } from './createMessage'

Message.install = (app: App) => {
  app.component(Message.name, Message)
}

export default Message
export { createMessage, closeAllInstances }
export * from './types'
