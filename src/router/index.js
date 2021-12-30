import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import { useSettingsOutsideStore } from '@/store/modules/settings'
import { useTokenOutsideStore } from '@/store/modules/token'

const routes = []
const routesContext = import.meta.globEager('./modules/*.js')
Object.keys(routesContext).forEach(v => {
    routes.push(routesContext[v].default)
})

routes.push({
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    meta: {
        title: '找不到页面'
    }
})

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes.flat()
})

router.beforeEach((to, from, next) => {
    const tokenOutsideStore = useTokenOutsideStore()
    NProgress.start()
    if (to.meta.requireLogin) {
        if (tokenOutsideStore.isLogin) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})

router.afterEach(to => {
    NProgress.done()
    useSettingsOutsideStore().setTitle(typeof to.meta.title === 'function' ? to.meta.title() : to.meta.title || '')
})

export default router
