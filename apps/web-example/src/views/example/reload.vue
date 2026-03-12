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
  <div class="max-w-[760px]">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        刷新当前页面
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        修改计数器后点击「刷新」，页面会重置回初始状态（组件重新挂载）。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <div class="mb-5">
        <p class="mb-2.5 text-[11px] text-slate-400 font-semibold tracking-widest uppercase">
          当前计数
        </p>
        <div class="flex items-center gap-3">
          <div class="font-code w-20 border border-slate-200 rounded-lg bg-slate-50 py-2 text-center text-[20px] text-blue-600 font-semibold">
            {{ value }}
          </div>
          <button
            class="inline-flex cursor-pointer items-center gap-1.5 border border-slate-200 rounded-lg bg-transparent px-4 py-2 text-[13px] text-slate-600 font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900"
            type="button"
            @click="plus"
          >
            +1
          </button>
        </div>
      </div>

      <button
        class="inline-flex cursor-pointer items-center gap-1.5 border-0 rounded-lg bg-blue-600 px-4 py-2 text-[13px] text-white font-semibold transition-colors hover:bg-blue-700"
        type="button"
        @click="reload"
      >
        刷新页面
      </button>
    </div>
  </div>
</template>
