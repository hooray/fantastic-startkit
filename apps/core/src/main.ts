import App from './App.vue'
import router from './router'
import pinia from './store'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/globals.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
