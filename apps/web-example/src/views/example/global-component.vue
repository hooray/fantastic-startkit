<route lang="yaml">
meta:
  layout: example
</route>

<template>
  <div class="max-w-[760px]">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        全局组件
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        全局组件无需手动引入，可在任意页面直接使用。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <div class="border border-blue-100 rounded-lg bg-blue-50 p-4 text-sm text-slate-600 leading-relaxed">
        <ol class="mt-2 pl-5 space-y-2">
          <li>
            全局组件存放于
            <code class="font-code border border-blue-100 rounded bg-white px-1.5 py-0.5 text-xs text-blue-600">./src/components/</code>
            目录下，每个组件独占一个文件夹，<strong class="text-slate-700 font-semibold">文件夹名即组件名</strong>。
            可参考
            <RouterLink to="/example/svgicon" class="text-blue-600 font-medium hover:underline">
              SvgIcon
            </RouterLink>
            的写法。
          </li>
          <li>
            文件夹内必须包含名为
            <code class="font-code border border-blue-100 rounded bg-white px-1.5 py-0.5 text-xs text-blue-600">index.vue</code>
            的入口文件。
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
