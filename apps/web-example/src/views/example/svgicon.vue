<route lang="yaml">
meta:
  layout: example
  title: Svg Icon
</route>

<template>
  <div class="max-w-[760px]">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        SVG Icon
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        本地 SVG 图标通过
        <code class="font-code border border-blue-100 rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-600">SvgIcon</code>
        组件渲染，支持彩色图标。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <div class="mb-6">
        <p class="mb-3 text-[11px] text-slate-400 font-semibold tracking-widest uppercase">
          图标预览
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="name in ['example', 'example.color']"
            :key="name"
            class="flex flex-col items-center gap-2 border border-slate-200 rounded-lg bg-slate-50 px-6 py-4 transition-colors hover:border-slate-300"
          >
            <SvgIcon :name="name" class="text-[48px]" />
            <span class="font-code text-[11px] text-slate-400">{{ name }}</span>
          </div>
        </div>
      </div>

      <div class="border border-blue-100 rounded-lg bg-blue-50 p-4 text-sm text-slate-600 leading-relaxed">
        <ol class="mt-2 pl-5 space-y-1.5">
          <li>
            前往
            <a href="https://www.iconfont.cn/" target="_blank" class="text-blue-600 font-medium hover:underline">
              Iconfont
            </a>
            下载所需的 SVG 图标
          </li>
          <li>
            将 SVG 文件放入
            <code class="font-code border border-blue-100 rounded bg-white px-1.5 py-0.5 text-xs text-blue-600">assets/icons</code>
            目录
          </li>
          <li>
            文件名即为
            <code class="font-code border border-blue-100 rounded bg-white px-1.5 py-0.5 text-xs text-blue-600">name</code>
            属性的值
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
