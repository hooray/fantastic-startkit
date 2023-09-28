import type { RouteRecordRaw } from 'vue-router'

function ExampleLayout() {
  return import('@/layouts/example.vue')
}

const routes: RouteRecordRaw = {
  path: '/example',
  redirect: '/example/svgicon',
  component: ExampleLayout,
  children: [
    {
      path: 'svgicon',
      component: () => import('@/views/example/svgicon.vue'),
      meta: {
        title: 'Svg Icon',
      },
    },
    {
      path: 'iconify',
      component: () => import('@/views/example/iconify.vue'),
      meta: {
        title: 'Iconify',
      },
    },
    {
      path: 'global-component',
      component: () => import('@/views/example/global-component.vue'),
    },
    {
      path: 'axios',
      component: () => import('@/views/example/axios.vue'),
    },
    {
      path: 'pinia',
      component: () => import('@/views/example/pinia.vue'),
    },
    {
      path: 'component',
      component: () => import('@/views/example/component.vue'),
    },
    {
      path: 'params/:test',
      name: 'exampleParams', // 设置路由的name时，建议加上模块名，避免name和其他模块重名
      component: () => import('@/views/example/params/[test].vue'),
    },
    {
      path: 'query',
      component: () => import('@/views/example/query.vue'),
    },
    {
      path: 'reload',
      component: () => import('@/views/example/reload.vue'),
    },
    {
      path: 'permission-router',
      component: () => import('@/views/example/permission-router.vue'),
      meta: {
        requireLogin: true, // 鉴权
      },
    },
    {
      path: 'permission-js',
      component: () => import('@/views/example/permission-js.vue'),
    },
  ],
}

export default routes
