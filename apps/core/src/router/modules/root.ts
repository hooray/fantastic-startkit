import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
    },
  },
]

export default routes
