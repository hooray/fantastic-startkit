export default [
    {
        path: '/',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login.vue'),
        meta: {
            title: '登录'
        }
    }
]
