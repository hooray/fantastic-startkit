<route lang="yaml">
meta:
  layout: false
  title: 登录
</route>

<script lang="ts" setup>
import useTokenStore from '@/store/modules/token'

const router = useRouter()
const route = useRoute()
const tokenStore = useTokenStore()

function login() {
  tokenStore.login().then(() => {
    // 登录成功后路由跳回
    if (route.query.redirect) {
      router.replace({
        path: route.query.redirect as string,
      })
    }
    else {
      if (window.history.length <= 1) {
        router.push({ path: '/' })
      }
      else {
        router.go(-1)
      }
    }
  })
}
</script>

<template>
  <div>
    <button @click="login">
      模拟登录
    </button>
  </div>
</template>
