<route lang="yaml">
meta:
  layout: false
</route>

<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50">
    <div class="dots-bg" />

    <div class="relative z-10 text-center">
      <div class="mb-6 inline-flex items-center gap-2 border border-slate-200 rounded-full bg-white px-4 py-1.5 text-xs text-slate-500 font-medium shadow-sm">
        <span class="size-1.5 rounded-full bg-emerald-500" />
        Vue 3 · Vite · TypeScript
      </div>

      <h1 class="mb-4 text-[56px] text-slate-900 font-extrabold leading-none tracking-tight">
        Fantastic
        <span class="text-blue-600">Startkit</span>
      </h1>

      <p class="mb-10 text-[17px] text-slate-500">
        开箱即用的企业级前端开发脚手架
      </p>

      <div class="flex items-center justify-center gap-3">
        <RouterLink
          to="/example/svgicon"
          class="inline-flex cursor-pointer items-center gap-2 border-0 rounded-xl bg-blue-600 px-6 py-2.5 text-[14px] text-white font-semibold no-underline shadow-md transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
        >
          查看演示
          <span class="text-blue-200">→</span>
        </RouterLink>
        <a
          rel="noreferrer"
          href="https://hurui.me/fantastic-startkit/"
          target="_blank"
          class="inline-flex cursor-pointer items-center gap-1.5 border border-slate-200 rounded-xl bg-white px-6 py-2.5 text-[14px] text-slate-600 font-semibold no-underline shadow-sm transition-all hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5"
        >
          文档
        </a>
      </div>
    </div>

    <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-6 text-xs text-slate-400">
      <span>Vue 3</span>
      <span class="text-slate-300">·</span>
      <span>Vite</span>
      <span class="text-slate-300">·</span>
      <span>UnoCSS</span>
      <span class="text-slate-300">·</span>
      <span>Pinia</span>
      <span class="text-slate-300">·</span>
      <span>Vue Router</span>
    </div>
  </div>
</template>

<style scoped>
.dots-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.5;
}
</style>
