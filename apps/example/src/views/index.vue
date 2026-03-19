<route lang="yaml">
meta:
  layout: false
</route>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen items-center justify-center relative overflow-hidden">
    <div class="dots-bg" />

    <div class="text-center relative z-10">
      <div class="text-xs text-slate-500 font-medium mb-6 px-4 py-1.5 border border-slate-200 rounded-full bg-white inline-flex gap-2 shadow-sm items-center">
        <span class="rounded-full bg-emerald-500 size-1.5" />
        Vue 3 · Vite · TypeScript
      </div>

      <h1 class="text-[56px] text-slate-900 leading-none tracking-tight font-extrabold mb-4" style="view-transition-name: site-title;">
        Fantastic
        <span class="text-blue-600">Startkit</span>
      </h1>

      <p class="text-[17px] text-slate-500 mb-10">
        开箱即用的企业级前端开发脚手架
      </p>

      <div class="flex gap-3 items-center justify-center">
        <RouterLink
          to="/example/icon"
          class="text-[14px] text-white font-semibold px-6 py-2.5 border-0 rounded-xl bg-blue-600 no-underline inline-flex gap-2 cursor-pointer shadow-md transition-all items-center hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
        >
          查看演示
          <span class="text-blue-200">→</span>
        </RouterLink>
        <a
          rel="noreferrer"
          href="https://hurui.me/fantastic-startkit/"
          target="_blank"
          class="text-[14px] text-slate-600 font-semibold px-6 py-2.5 border border-slate-200 rounded-xl bg-white no-underline inline-flex gap-1.5 cursor-pointer shadow-sm transition-all items-center hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5"
        >
          文档
        </a>
      </div>
    </div>

    <div class="text-xs text-slate-400 flex gap-6 bottom-8 left-0 right-0 justify-center absolute">
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
