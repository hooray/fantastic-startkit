<route lang="yaml">
meta:
  layout: example
  title: 组件
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
  <div class="max-w-full space-y-6">
    <!-- 页头 -->
    <div>
      <h2 class="text-[22px] text-slate-900 tracking-tight font-bold mb-1.5">
        组件
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        项目中的组件分为两类：需要手动引入的<strong class="text-slate-700">局部组件</strong>，以及无需引入可直接使用的<strong class="text-slate-700">全局组件</strong>。
      </p>
    </div>

    <!-- 局部组件 -->
    <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
      <div class="px-5 py-3.5 border-b border-slate-100 bg-slate-50 flex gap-3 items-center">
        <span class="rounded-full bg-slate-400 size-2" />
        <span class="text-xs text-slate-500 tracking-widest font-semibold uppercase">局部组件</span>
      </div>
      <div class="p-5">
        <p class="text-sm text-slate-500 mb-4">
          存放于页面的
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">components/</code>
          子目录下，使用前需在
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">&lt;script setup&gt;</code>
          中手动
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">import</code>
          引入。
        </p>

        <!-- 交互 demo -->
        <div class="p-4 border border-slate-200 rounded-lg bg-slate-50">
          <p class="text-[11px] text-slate-400 tracking-widest font-semibold mb-3 uppercase">
            ExampleList 演示
          </p>
          <ExampleList :list="list" />
          <button
            class="text-[13px] text-slate-600 font-semibold px-4 py-2 border border-slate-200 rounded-lg bg-white inline-flex gap-1.5 cursor-pointer transition-colors items-center hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50"
            @click="add"
          >
            + 添加一项
          </button>
        </div>

        <div class="text-xs text-slate-500 mt-4 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
          <div><span class="text-slate-400">// 手动引入</span></div>
          <div>
            <span class="text-violet-500">import</span>
            <span class="text-sky-600"> ExampleList </span>
            <span class="text-violet-500">from</span>
            <span class="text-amber-600"> './components/ExampleList/index.vue'</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 全局组件 -->
    <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
      <div class="px-5 py-3.5 border-b border-slate-100 bg-slate-50 flex gap-3 items-center">
        <span class="rounded-full bg-blue-400 size-2" />
        <span class="text-xs text-slate-500 tracking-widest font-semibold uppercase">全局组件</span>
      </div>
      <div class="p-5 space-y-4">
        <p class="text-sm text-slate-500">
          通过
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">unplugin-vue-components</code>
          实现自动导入，无需手动
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">import</code>，
          可直接在模板中使用。全局组件有两个来源：
        </p>

        <!-- 来源一：src/components -->
        <div class="p-4 border border-slate-200 rounded-lg">
          <div class="mb-2 flex gap-2 items-center">
            <span class="text-[11px] text-slate-500 font-semibold px-2 py-0.5 rounded bg-slate-100">来源一</span>
            <code class="text-xs text-slate-600">src/components/</code>
          </div>
          <p class="text-sm text-slate-500 mb-3">
            存放于
            <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">src/components/</code>
            目录下，每个组件独占一个文件夹，<strong class="text-slate-700">文件夹名即组件名</strong>，目录内包含
            <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">index.vue</code>
            入口文件即可。以
            <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">DemoButton</code>
            为例：
          </p>
          <div class="mb-3 p-4 border border-slate-200 rounded-lg bg-slate-50">
            <p class="text-[11px] text-slate-400 tracking-widest font-semibold mb-3 uppercase">
              DemoButton 演示
            </p>
            <div class="flex flex-wrap gap-2">
              <DemoButton label="默认按钮" />
              <DemoButton label="确认" />
              <DemoButton label="取消" />
            </div>
          </div>
          <div class="text-xs text-slate-500 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
            <div class="text-slate-400">
              // 无需 import，直接使用
            </div>
            <div class="mt-1">
              <span class="text-violet-500">&lt;DemoButton</span>
              <span class="text-sky-600"> label</span>=<span class="text-amber-600">"默认按钮"</span>
              <span class="text-violet-500"> /&gt;</span>
            </div>
          </div>
        </div>

        <!-- 来源二：子包 -->
        <div class="p-4 border border-slate-200 rounded-lg">
          <div class="mb-2 flex gap-2 items-center">
            <span class="text-[11px] text-slate-500 font-semibold px-2 py-0.5 rounded bg-slate-100">来源二</span>
            <code class="text-xs text-slate-600">@fantastic-startkit/components</code>
          </div>
          <p class="text-sm text-slate-500 mb-3">
            monorepo 子包提供的公共组件，通过
            <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">FantasticComponentsResolver</code>
            自动识别并导入，组件名以
            <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">Fs</code>
            开头。以
            <RouterLink to="/example/icon" class="text-blue-500 font-medium hover:text-blue-600 hover:underline">
              FsIcon
            </RouterLink>
            为例：
          </p>
          <div class="text-xs text-slate-500 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
            <span class="text-slate-400">// 无需 import，直接使用</span>
            <br>
            <span class="text-violet-500">&lt;FsIcon</span>
            <span class="text-sky-600"> name</span>=<span class="text-amber-600">"logos:vue"</span>
            <span class="text-violet-500"> /&gt;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
