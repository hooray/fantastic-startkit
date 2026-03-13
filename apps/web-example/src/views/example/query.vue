<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="max-w-full">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        路由 Query
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        通过
        <code class="font-code border border-blue-100 rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-600">route.query</code>
        读取 URL 中的查询参数。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <p class="mb-2.5 text-[11px] text-slate-400 font-semibold tracking-widest uppercase">
        query.test
      </p>
      <div class="font-code flex items-center gap-2 border border-slate-200 rounded-lg bg-slate-50 px-4 py-3 text-sm">
        <span class="text-blue-600">test</span>
        <span class="text-slate-400">=</span>
        <span class="text-emerald-600">{{ route.query.test ?? '—' }}</span>
      </div>
    </div>
  </div>
</template>
