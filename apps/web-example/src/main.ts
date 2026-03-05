import App from './App.vue'
import router from './router'
import pinia from './store'
import './utils/system.copyright'

// 加载 svg 图标
import 'virtual:svg-icons-register'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/globals.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
