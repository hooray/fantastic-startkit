<route lang="yaml">
meta:
  layout: example
  requireLogin: true
</route>

<script setup lang="ts">
const userStore = useUserStore()
</script>

<template>
  <div class="max-w-[760px]">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        Router 鉴权
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        通过路由 meta 配置
        <code class="font-code border border-blue-100 rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-600">requireLogin: true</code>，
        由路由守卫统一拦截未登录访问。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <p class="mb-2.5 text-[11px] text-slate-400 font-semibold tracking-widest uppercase">
        当前 Token
      </p>
      <div class="font-code break-all border border-slate-200 rounded-lg bg-slate-50 px-4 py-3 text-sm">
        <span v-if="userStore.token" class="text-blue-600">{{ userStore.token }}</span>
        <span v-else class="text-slate-400">— 暂无 Token —</span>
      </div>
    </div>
  </div>
</template>
