<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
import ExampleList from './components/ExampleList/index.vue'

const index = ref(1)
const list = ref(['张三', '李四', '王五'])

function add() {
  list.value.push(`这是新添加的${index.value++}`)
}
</script>

<template>
  <div class="max-w-[760px]">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        局部组件
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        非全局组件需要在页面中手动
        <code class="font-code border border-blue-100 rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-600">import</code>
        引入后才能使用。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <p class="mb-2.5 text-[11px] text-slate-400 font-semibold tracking-widest uppercase">
        列表数据
      </p>
      <ExampleList :list="list" />
      <button
        class="mt-1 inline-flex cursor-pointer items-center gap-1.5 border border-slate-200 rounded-lg bg-transparent px-4 py-2 text-[13px] text-slate-600 font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900"
        @click="add"
      >
        + 添加一项
      </button>
    </div>
  </div>
</template>
