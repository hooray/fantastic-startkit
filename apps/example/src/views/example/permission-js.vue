<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
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
  <div class="max-w-full">
    <div class="mb-7">
      <h2 class="text-[22px] text-slate-900 tracking-tight font-bold mb-2">
        JS 鉴权
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        在 JS 逻辑中手动检查登录状态，未登录时跳转至登录页。
      </p>
    </div>

    <div class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
      <div class="mb-5 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50 flex gap-2.5 items-center">
        <span
          class="rounded-full shrink-0 size-2"
          :class="userStore.isLogin ? 'bg-emerald-500 shadow-[0_0_6px_#10b981]' : 'bg-slate-300'"
        />
        <span class="text-[13.5px] text-slate-600">
          {{ userStore.isLogin ? '当前已登录' : '当前未登录' }}
        </span>
      </div>

      <div class="flex flex-wrap gap-2.5">
        <button
          class="text-[13px] text-white font-semibold px-4 py-2 border-0 rounded-lg bg-blue-600 inline-flex gap-1.5 cursor-pointer transition-colors items-center hover:bg-blue-700"
          @click="user"
        >
          {{ userStore.isLogin ? '查看 Token' : '点击登录' }}
        </button>
        <button
          v-if="userStore.isLogin"
          class="text-[13px] text-red-600 font-semibold px-4 py-2 border border-red-100 rounded-lg bg-red-50 inline-flex gap-1.5 cursor-pointer transition-colors items-center hover:bg-red-100"
          @click="remove"
        >
          清除登录状态
        </button>
      </div>
    </div>
  </div>
</template>
