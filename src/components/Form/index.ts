import type { App } from 'vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'

Form.install = (app: App) => {
  app.component(Form.name, Form)
}

FormItem.install = (app: App) => {
  app.component(FormItem.name, FormItem)
}

export default Form
export { FormItem }
export * from './types'
