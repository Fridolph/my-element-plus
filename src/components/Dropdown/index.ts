import type { App } from 'vue'
import Dropdown from './Dropdown'

Dropdown.install = (app: App) => {
  app.component(Dropdown.name, Dropdown)
}

export default Dropdown
export * from './types'
