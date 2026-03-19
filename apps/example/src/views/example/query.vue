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
      <h2 class="text-[22px] text-slate-900 tracking-tight font-bold mb-2">
        路由 Query
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        通过
        <code class="text-xs text-blue-600 px-1.5 py-0.5 border border-blue-100 rounded bg-blue-50">route.query</code>
        读取 URL 中的查询参数。
      </p>
    </div>

    <div class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
      <p class="text-[11px] text-slate-400 tracking-widest font-semibold mb-2.5 uppercase">
        query.test
      </p>
      <div class="text-sm px-4 py-3 border border-slate-200 rounded-lg bg-slate-50 flex gap-2 items-center">
        <span class="text-blue-600">test</span>
        <span class="text-slate-400">=</span>
        <span class="text-emerald-600">{{ route.query.test ?? '—' }}</span>
      </div>
    </div>
  </div>
</template>
