import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

const app = createApp(App)

import api from './api'
app.config.globalProperties.$api = api

import dayjs from 'dayjs'
app.config.globalProperties.$dayjs = dayjs

import Cookies from 'js-cookie'
app.config.globalProperties.$cookies = Cookies

// 全局组件自动注册
import { registerGlobalComponent } from '@/components/registerGlobalComponent'
registerGlobalComponent(app)

// 加载 svg 图标
import 'vite-plugin-svg-icons/register'

import '@/assets/styles/globals.scss'

app
    .use(router)
    .use(store)
    .mount('#app')
