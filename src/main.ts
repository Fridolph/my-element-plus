import { createApp } from 'vue'
import App from './App.vue'
import { userKey } from './config/key'

import './styles/index.css'

const app = createApp(App)

app.config.globalProperties.msg = '欢迎访问本项目'
app.provide(userKey, { name: 'fridolph' })

app.mount('#app')
