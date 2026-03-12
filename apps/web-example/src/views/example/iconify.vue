<route lang="yaml">
meta:
  layout: example
  title: Iconify
</route>

<template>
  <div class="max-w-[760px]">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        Iconify 图标
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        访问
        <a href="https://icon-sets.iconify.design/" target="_blank" class="text-blue-600 font-medium hover:underline">
          Iconify
        </a>
        找到图标后，将图标名填入
        <code class="font-code border border-blue-100 rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-600">SvgIcon</code>
        的
        <code class="font-code border border-blue-100 rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-600">name</code>
        属性即可。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <div class="mb-6">
        <p class="mb-3 text-[11px] text-slate-400 font-semibold tracking-widest uppercase">
          渲染为 SVG 标签
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="icon in ['logos:vue', 'logos:vitejs', 'uim:box']"
            :key="icon"
            class="flex flex-col items-center gap-2 border border-slate-200 rounded-lg bg-slate-50 px-5 py-4 transition-colors hover:border-slate-300"
          >
            <SvgIcon :name="icon" class="size-12" />
            <span class="font-code text-[11px] text-slate-400">{{ icon }}</span>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <p class="mb-3 text-[11px] text-slate-400 font-semibold tracking-widest uppercase">
          搭配 UnoCSS（渲染为 mask 背景）
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="icon in ['i-logos:vue', 'i-logos:vitejs', 'i-uim:box']"
            :key="icon"
            class="flex flex-col items-center gap-2 border border-slate-200 rounded-lg bg-slate-50 px-5 py-4 transition-colors hover:border-slate-300"
          >
            <SvgIcon :name="icon" class="size-12" />
            <span class="font-code text-[11px] text-slate-400">{{ icon }}</span>
          </div>
        </div>
      </div>

      <div class="border border-blue-100 rounded-lg bg-blue-50 p-4 text-sm text-slate-600 leading-relaxed">
        <ol class="mt-2 pl-5 space-y-1.5">
          <li>上 <a href="https://icon-sets.iconify.design/" target="_blank" class="text-blue-600 font-medium hover:underline">Iconify</a> 找寻需要的图标</li>
          <li>
            普通使用：<code class="font-code border border-blue-100 rounded bg-white px-1.5 py-0.5 text-xs text-blue-600">{图标集}:{图标名}</code>
          </li>
          <li>
            搭配 UnoCSS：<code class="font-code border border-blue-100 rounded bg-white px-1.5 py-0.5 text-xs text-blue-600">i-{图标集}:{图标名}</code>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
