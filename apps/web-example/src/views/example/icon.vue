<route lang="yaml">
meta:
  layout: example
  title: 图标
</route>

<template>
  <div class="max-w-full space-y-6">
    <!-- 页头 -->
    <div>
      <h2 class="mb-1.5 text-[22px] text-slate-900 font-bold tracking-tight">
        图标
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        通过
        <code class="border border-slate-200 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">FsIcon</code>
        组件统一渲染，支持三种图标来源，通过
        <code class="border border-slate-200 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">name</code>
        属性自动识别类型。
      </p>
    </div>

    <!-- 本地 SVG -->
    <div class="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
      <div class="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-3.5">
        <span class="size-2 rounded-full bg-slate-300" />
        <span class="text-xs text-slate-500 font-semibold tracking-widest uppercase">本地 SVG</span>
      </div>
      <div class="p-5">
        <p class="mb-4 text-sm text-slate-500">
          将 SVG 文件放入
          <code class="border border-slate-200 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">src/assets/icons/</code>
          目录，文件名即为
          <code class="border border-slate-200 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">name</code>
          的值。支持单色和彩色 SVG。
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="name in ['example', 'example.color']"
            :key="name"
            class="group flex flex-col items-center gap-2.5 border border-slate-200 rounded-lg bg-slate-50 px-6 py-4 transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm"
          >
            <FsIcon :name="name" class="text-[40px]" />
            <span class="text-[11px] text-slate-400 group-hover:text-slate-600">{{ name }}</span>
          </div>
        </div>
        <div class="mt-4 border border-slate-200 rounded-lg bg-slate-50 px-4 py-3 text-xs text-slate-500">
          <span class="text-violet-500">&lt;FsIcon</span>
          <span class="text-sky-600"> name</span>=<span class="text-amber-600">"example"</span>
          <span class="text-violet-500"> /&gt;</span>
        </div>
      </div>
    </div>

    <!-- Iconify -->
    <div class="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
      <div class="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-3.5">
        <span class="size-2 rounded-full bg-blue-400" />
        <span class="text-xs text-slate-500 font-semibold tracking-widest uppercase">Iconify</span>
        <a
          href="https://icon-sets.iconify.design/"
          target="_blank"
          class="ml-auto text-xs text-blue-500 hover:text-blue-600 hover:underline"
        >浏览图标库 →</a>
      </div>
      <div class="p-5">
        <p class="mb-4 text-sm text-slate-500">
          格式为
          <code class="border border-slate-200 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">{图标集}:{图标名}</code>，
          渲染为内联 SVG，支持彩色。
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="icon in ['logos:vue', 'logos:vitejs', 'logos:typescript-icon', 'logos:pnpm']"
            :key="icon"
            class="group flex flex-col items-center gap-2.5 border border-slate-200 rounded-lg bg-slate-50 px-5 py-4 transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm"
          >
            <FsIcon :name="icon" class="size-10" />
            <span class="text-[11px] text-slate-400 group-hover:text-slate-600">{{ icon }}</span>
          </div>
        </div>
        <div class="mt-4 border border-slate-200 rounded-lg bg-slate-50 px-4 py-3 text-xs text-slate-500">
          <span class="text-violet-500">&lt;FsIcon</span>
          <span class="text-sky-600"> name</span>=<span class="text-amber-600">"logos:vue"</span>
          <span class="text-violet-500"> /&gt;</span>
        </div>
      </div>
    </div>

    <!-- UnoCSS -->
    <div class="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
      <div class="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-3.5">
        <span class="size-2 rounded-full bg-emerald-400" />
        <span class="text-xs text-slate-500 font-semibold tracking-widest uppercase">UnoCSS</span>
      </div>
      <div class="p-5">
        <p class="mb-4 text-sm text-slate-500">
          格式为
          <code class="border border-slate-200 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">i-{图标集}:{图标名}</code>，
          渲染为 CSS mask，颜色继承自
          <code class="border border-slate-200 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">currentColor</code>，适合单色场景。
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="icon in ['i-logos:vue', 'i-logos:vitejs', 'i-logos:typescript-icon', 'i-logos:pnpm']"
            :key="icon"
            class="group flex flex-col items-center gap-2.5 border border-slate-200 rounded-lg bg-slate-50 px-5 py-4 transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm"
          >
            <FsIcon :name="icon" class="size-10" />
            <span class="text-[11px] text-slate-400 group-hover:text-slate-600">{{ icon }}</span>
          </div>
        </div>
        <div class="mt-4 border border-slate-200 rounded-lg bg-slate-50 px-4 py-3 text-xs text-slate-500">
          <span class="text-violet-500">&lt;FsIcon</span>
          <span class="text-sky-600"> name</span>=<span class="text-amber-600">"i-logos:vue"</span>
          <span class="text-violet-500"> /&gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>
