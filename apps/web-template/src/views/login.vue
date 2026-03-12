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
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
    <div class="dots-bg" />

    <div class="relative z-10 max-w-[360px] w-full px-4">
      <div class="border border-slate-200 rounded-2xl bg-white p-8 shadow-sm">
        <div class="mb-8 text-center">
          <div class="mx-auto mb-4 size-12 flex items-center justify-center rounded-xl bg-blue-600 text-lg text-white font-bold shadow-md">
            F
          </div>
          <h1 class="text-[20px] text-slate-900 font-bold">
            欢迎回来
          </h1>
          <p class="mt-1 text-sm text-slate-400">
            Fantastic Startkit 演示登录
          </p>
        </div>

        <div class="mb-5 space-y-3">
          <div class="border border-slate-200 rounded-lg bg-slate-50 px-4 py-3">
            <div class="mb-0.5 text-[11px] text-slate-400 font-medium">
              账号
            </div>
            <div class="font-code text-sm text-slate-700">
              admin
            </div>
          </div>
          <div class="border border-slate-200 rounded-lg bg-slate-50 px-4 py-3">
            <div class="mb-0.5 text-[11px] text-slate-400 font-medium">
              密码
            </div>
            <div class="font-code text-sm text-slate-700 tracking-widest">
              ••••••
            </div>
          </div>
        </div>

        <button
          class="w-full cursor-pointer border-0 rounded-xl bg-blue-600 py-2.5 text-sm text-white font-semibold shadow-sm transition-all active:scale-[0.98] hover:bg-blue-700 hover:shadow-md"
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
