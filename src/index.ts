import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// 组件
import Button from './components/Button'
import Collapse, { CollapseItem } from './components/Collapse'
import Dropdown from './components/Dropdown'
import Form, { FormItem } from './components/Form'
import Icon from './components/Icon'
import Input from './components/Input'
import Message, { createMessage, closeAllInstances } from './components/Message'
import Select from './components/Select'
import Switch from './components/Switch'
import Tooltip from './components/Tooltip'
// 导入样式 - 会被单独打包成css文件
import './styles/index.css'

const components = [
  Button,
  Collapse,
  CollapseItem,
  Dropdown,
  Form,
  FormItem,
  Icon,
  Input,
  Message,
  Select,
  Switch,
  Tooltip,
  // 方法
  createMessage,
  closeAllInstances,
]

library.add(fas)

function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { 
  install, 
  Button,
  Collapse,
  CollapseItem,
  Dropdown,
  Form,
  FormItem,
  Icon,
  Input,
  Message,
  Select,
  Switch,
  Tooltip,
  createMessage,
  closeAllInstances,
}

export default install
