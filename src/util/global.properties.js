import api from '@/api'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Cookies from 'js-cookie'
import mitt from 'mitt'

export default function globalProperties(app) {
    // 请求
    app.config.globalProperties.$api = api
    dayjs.locale('zh-cn')
    app.config.globalProperties.$dayjs = dayjs
    app.config.globalProperties.$cookies = Cookies
    app.config.globalProperties.$eventBus = mitt()
}
