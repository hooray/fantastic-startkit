<route>
{
    meta: {
        layout: 'example'
    }
}
</route>

<script setup>
const router = useRouter()

import { useTokenStore } from '@/store/modules/token'
const tokenStore = useTokenStore()

function user() {
    if (tokenStore.isLogin) {
        alert('token信息：' + tokenStore.token)
    } else {
        router.push({
            path: '/login',
            query: {
                redirect: router.currentRoute.fullPath
            }
        })
    }
}

function remove() {
    tokenStore.logout()
}
</script>

<template>
    <div>
        <p>如果未登录，会跳转到登录页，如果已登录，则弹出用户信息。</p>
        <button @click="user">点我</button>
        <button @click="remove">清除登录状态</button>
    </div>
</template>
