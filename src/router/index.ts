import NProgress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import 'nprogress/nprogress.css'

// import { setupLayouts } from 'virtual:meta-layouts'
// import generatedRoutes from 'virtual:generated-pages'
import useSettingsStore from '@/store/modules/settings'
import useUserStore from '@/store/modules/user'

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
  const userStore = useUserStore()
  NProgress.start()
  if (to.meta.requireLogin) {
    if (userStore.isLogin) {
      next()
    }
    else {
      next({
        name: 'login',
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
