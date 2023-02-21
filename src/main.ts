import './utils/system.copyright'
import App from './App.vue'
import pinia from './store'
import router from './router'
// 加载 svg 图标
import 'virtual:svg-icons-register'
// 全局样式
import '@/assets/styles/globals.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
