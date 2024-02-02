<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()

function user() {
  if (userStore.isLogin) {
    // eslint-disable-next-line no-alert
    alert(`token信息：${userStore.token}`)
  }
  else {
    router.push({
      path: '/login',
      query: {
        redirect: router.currentRoute.value.fullPath,
      },
    })
  }
}

function remove() {
  userStore.logout()
}
</script>

<template>
  <div>
    <p>如果未登录，会跳转到登录页，如果已登录，则弹出用户信息。</p>
    <button @click="user">
      点我
    </button>
    <button @click="remove">
      清除登录状态
    </button>
  </div>
</template>
