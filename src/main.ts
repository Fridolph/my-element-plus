import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { userKey } from './config/key'

const app = createApp(App)

app.config.globalProperties.msg = '欢迎访问本项目'
app.provide(userKey, { name: 'fridolph' })

app.mount('#app')
