import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from './router'
app.use(router)

import { piniaStore } from './store'
app.use(piniaStore)

import globalProperties from '@/util/global.properties'
globalProperties(app)

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 全局样式
import '@/assets/styles/globals.scss'

app.mount('#app')
