<template>
    <div>
        <button @click="login">模拟登录</button>
    </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

import { useTokenStore } from '@/store/modules/token'
const tokenStore = useTokenStore()

function login() {
    tokenStore.login().then(() => {
        // 登录成功后路由跳回
        if (route.query.redirect) {
            router.replace({
                path: route.query.redirect
            })
        } else {
            if (window.history.length <= 1) {
                router.push({ path: '/' })
            } else {
                router.go(-1)
            }
        }
    })
}
</script>
