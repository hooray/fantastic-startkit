<template>
    <div>
        <p>如果未登录，会跳转到登录页，如果已登录，则弹出用户信息。</p>
        <button @click="user">点我</button>
        <button @click="remove">清除登录状态</button>
    </div>
</template>

<script setup>
const store = useStore()
const router = useRouter()

function user() {
    if (store.getters['token/isLogin']) {
        alert('token信息：' + store.state.token.token)
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
    store.dispatch('token/logout')
}
</script>
