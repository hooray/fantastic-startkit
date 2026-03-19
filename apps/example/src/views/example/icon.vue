<route lang="yaml">
meta:
  layout: example
  title: 图标
</route>

<template>
  <div class="max-w-full space-y-6">
    <!-- 页头 -->
    <div>
      <h2 class="text-[22px] text-slate-900 tracking-tight font-bold mb-1.5">
        图标
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        通过
        <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">FsIcon</code>
        组件统一渲染，支持三种图标来源，通过
        <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">name</code>
        属性自动识别类型。
      </p>
    </div>

    <!-- 本地 SVG -->
    <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
      <div class="px-5 py-3.5 border-b border-slate-100 bg-slate-50 flex gap-3 items-center">
        <span class="rounded-full bg-slate-300 size-2" />
        <span class="text-xs text-slate-500 tracking-widest font-semibold uppercase">本地 SVG</span>
      </div>
      <div class="p-5">
        <p class="text-sm text-slate-500 mb-4">
          将 SVG 文件放入
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">src/assets/icons/</code>
          目录，文件名即为
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">name</code>
          的值。支持单色和彩色 SVG。
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="name in ['example', 'example.color']"
            :key="name"
            class="group px-6 py-4 border border-slate-200 rounded-lg bg-slate-50 flex flex-col gap-2.5 transition-all items-center hover:border-slate-300 hover:bg-white hover:shadow-sm"
          >
            <FsIcon :name="name" class="text-[40px]" />
            <span class="text-[11px] text-slate-400 group-hover:text-slate-600">{{ name }}</span>
          </div>
        </div>
        <div class="text-xs text-slate-500 mt-4 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
          <span class="text-violet-500">&lt;FsIcon</span>
          <span class="text-sky-600"> name</span>=<span class="text-amber-600">"example"</span>
          <span class="text-violet-500"> /&gt;</span>
        </div>
      </div>
    </div>

    <!-- Iconify -->
    <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
      <div class="px-5 py-3.5 border-b border-slate-100 bg-slate-50 flex gap-3 items-center">
        <span class="rounded-full bg-blue-400 size-2" />
        <span class="text-xs text-slate-500 tracking-widest font-semibold uppercase">Iconify</span>
        <a
          href="https://icon-sets.iconify.design/"
          target="_blank"
          class="text-xs text-blue-500 ml-auto hover:text-blue-600 hover:underline"
        >浏览图标库 →</a>
      </div>
      <div class="p-5">
        <p class="text-sm text-slate-500 mb-4">
          格式为
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">{图标集}:{图标名}</code>，
          渲染为内联 SVG，支持彩色。
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="icon in ['logos:vue', 'logos:vitejs', 'logos:typescript-icon', 'logos:pnpm']"
            :key="icon"
            class="group px-5 py-4 border border-slate-200 rounded-lg bg-slate-50 flex flex-col gap-2.5 transition-all items-center hover:border-slate-300 hover:bg-white hover:shadow-sm"
          >
            <FsIcon :name="icon" class="size-10" />
            <span class="text-[11px] text-slate-400 group-hover:text-slate-600">{{ icon }}</span>
          </div>
        </div>
        <div class="text-xs text-slate-500 mt-4 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
          <span class="text-violet-500">&lt;FsIcon</span>
          <span class="text-sky-600"> name</span>=<span class="text-amber-600">"logos:vue"</span>
          <span class="text-violet-500"> /&gt;</span>
        </div>
      </div>
    </div>

    <!-- UnoCSS -->
    <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
      <div class="px-5 py-3.5 border-b border-slate-100 bg-slate-50 flex gap-3 items-center">
        <span class="rounded-full bg-emerald-400 size-2" />
        <span class="text-xs text-slate-500 tracking-widest font-semibold uppercase">UnoCSS</span>
      </div>
      <div class="p-5">
        <p class="text-sm text-slate-500 mb-4">
          格式为
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">i-{图标集}:{图标名}</code>，
          渲染为 CSS mask，颜色继承自
          <code class="text-xs text-slate-700 px-1.5 py-0.5 border border-slate-200 rounded bg-slate-100">currentColor</code>，适合单色场景。
        </p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="icon in ['i-logos:vue', 'i-logos:vitejs', 'i-logos:typescript-icon', 'i-logos:pnpm']"
            :key="icon"
            class="group px-5 py-4 border border-slate-200 rounded-lg bg-slate-50 flex flex-col gap-2.5 transition-all items-center hover:border-slate-300 hover:bg-white hover:shadow-sm"
          >
            <FsIcon :name="icon" class="size-10" />
            <span class="text-[11px] text-slate-400 group-hover:text-slate-600">{{ icon }}</span>
          </div>
        </div>
        <div class="text-xs text-slate-500 mt-4 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
          <span class="text-violet-500">&lt;FsIcon</span>
          <span class="text-sky-600"> name</span>=<span class="text-amber-600">"i-logos:vue"</span>
          <span class="text-violet-500"> /&gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>
