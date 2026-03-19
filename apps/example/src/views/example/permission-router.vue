<route lang="yaml">
meta:
  layout: example
  requireLogin: true
</route>

<script setup lang="ts">
const userStore = useUserStore()
</script>

<template>
  <div class="max-w-full">
    <div class="mb-7">
      <h2 class="text-[22px] text-slate-900 tracking-tight font-bold mb-2">
        Router 鉴权
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        通过路由 meta 配置
        <code class="text-xs text-blue-600 px-1.5 py-0.5 border border-blue-100 rounded bg-blue-50">requireLogin: true</code>，
        由路由守卫统一拦截未登录访问。
      </p>
    </div>

    <div class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
      <p class="text-[11px] text-slate-400 tracking-widest font-semibold mb-2.5 uppercase">
        当前 Token
      </p>
      <div class="text-sm px-4 py-3 border border-slate-200 rounded-lg bg-slate-50 break-all">
        <span v-if="userStore.token" class="text-blue-600">{{ userStore.token }}</span>
        <span v-else class="text-slate-400">— 暂无 Token —</span>
      </div>
    </div>
  </div>
</template>
