import { createApp } from 'vue'
import App from './App.vue'
import { userKey } from './config/key'
// 其他资源
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 样式
import './styles/index.css'

library.add(fas)

const app = createApp(App)

app.config.globalProperties.msg = '欢迎访问本项目'
app.provide(userKey, { name: 'fridolph' })

app.mount('#app')
