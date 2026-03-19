<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
const reload = inject('reload') as any

const value = ref(0)

function plus() {
  value.value += 1
}
</script>

<template>
  <div class="max-w-full">
    <div class="mb-7">
      <h2 class="text-[22px] text-slate-900 tracking-tight font-bold mb-2">
        刷新当前页面
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        修改计数器后点击「刷新」，页面会重置回初始状态（组件重新挂载）。
      </p>
    </div>

    <div class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
      <div class="mb-5">
        <p class="text-[11px] text-slate-400 tracking-widest font-semibold mb-2.5 uppercase">
          当前计数
        </p>
        <div class="flex gap-3 items-center">
          <div class="text-[20px] text-blue-600 font-semibold py-2 text-center border border-slate-200 rounded-lg bg-slate-50 w-20">
            {{ value }}
          </div>
          <button
            class="text-[13px] text-slate-600 font-semibold px-4 py-2 border border-slate-200 rounded-lg bg-transparent inline-flex gap-1.5 cursor-pointer transition-colors items-center hover:text-slate-900 hover:bg-slate-100"
            type="button"
            @click="plus"
          >
            +1
          </button>
        </div>
      </div>

      <button
        class="text-[13px] text-white font-semibold px-4 py-2 border-0 rounded-lg bg-blue-600 inline-flex gap-1.5 cursor-pointer transition-colors items-center hover:bg-blue-700"
        type="button"
        @click="reload"
      >
        刷新页面
      </button>
    </div>
  </div>
</template>
