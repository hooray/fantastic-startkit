import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

const app = createApp(App)

import globalProperties from '@/util/global.properties'
globalProperties(app)

// 全局组件自动注册
import registerGlobalComponent from '@/components/registerGlobalComponent'
registerGlobalComponent(app)

// 加载 svg 图标
import 'vite-plugin-svg-icons/register'

// 全局样式
import '@/assets/styles/globals.scss'

app
    .use(router)
    .use(store)
    .mount('#app')
