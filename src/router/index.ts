import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'
import useSettingsStore from '@/store/modules/settings'
import useTokenStore from '@/store/modules/token'

let routes: RouteRecordRaw[] = []

const routesContext: any = import.meta.glob('./modules/*.ts', { eager: true })
Object.keys(routesContext).forEach((v) => {
  routes.push(routesContext[v].default)
})
routes.push({
  path: '/:pathMatch(.*)*',
  component: () => import('@/views/[...all].vue'),
  meta: {
    title: '找不到页面',
  },
})
routes = routes.flat()

// generatedRoutes.forEach((v) => {
//   routes.push(v?.meta?.layout !== false ? setupLayouts([v])[0] : v)
// })

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const tokenOutsideStore = useTokenStore()
  NProgress.start()
  if (to.meta.requireLogin) {
    if (tokenOutsideStore.isLogin) {
      next()
    }
    else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      })
    }
  }
  else {
    next()
  }
})

router.afterEach((to) => {
  NProgress.done()
  useSettingsStore().setTitle(to.meta.title ?? '')
})

export default router
