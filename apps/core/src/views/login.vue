<route lang="yaml">
meta:
  layout: false
  title: 登录
</route>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

function login() {
  userStore.login({
    account: 'admin',
    password: '123456',
  }).then(() => {
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
  <div class="bg-slate-50 flex min-h-screen items-center justify-center relative overflow-hidden">
    <div class="dots-bg" />

    <div class="px-4 max-w-[360px] w-full relative z-10">
      <div class="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm">
        <div class="mb-8 text-center">
          <div class="text-lg text-white font-bold mx-auto mb-4 rounded-xl bg-blue-600 flex size-12 shadow-md items-center justify-center">
            F
          </div>
          <h1 class="text-[20px] text-slate-900 font-bold">
            欢迎回来
          </h1>
          <p class="text-sm text-slate-400 mt-1">
            Fantastic Startkit 演示登录
          </p>
        </div>

        <div class="mb-5 space-y-3">
          <div class="px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
            <div class="text-[11px] text-slate-400 font-medium mb-0.5">
              账号
            </div>
            <div class="text-sm text-slate-700">
              admin
            </div>
          </div>
          <div class="px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
            <div class="text-[11px] text-slate-400 font-medium mb-0.5">
              密码
            </div>
            <div class="text-sm text-slate-700 tracking-widest">
              ••••••
            </div>
          </div>
        </div>

        <button
          class="text-sm text-white font-semibold py-2.5 border-0 rounded-xl bg-blue-600 w-full cursor-pointer shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
          @click="login"
        >
          模拟登录
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dots-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.5;
}
</style>
