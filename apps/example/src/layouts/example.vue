<template>
  <div class="bg-slate-50 min-h-screen">
    <header class="border-b border-slate-200 bg-white/90 top-0 sticky z-50 backdrop-blur-md">
      <div class="mx-auto px-6 py-3 border-b border-slate-100 flex gap-4 max-w-[800px] items-center">
        <RouterLink to="/" class="text-[15px] text-slate-900 tracking-tight font-bold no-underline" style="view-transition-name: site-title;">
          Fantastic <span class="text-blue-600">Startkit</span>
        </RouterLink>
        <span class="bg-slate-200 h-4 w-px" />
        <span class="text-xs text-slate-400">演示示例</span>
      </div>
      <nav class="mx-auto px-6 py-2.5 flex flex-wrap gap-1 max-w-[800px] items-center">
        <RouterLink to="/example/icon">
          Icon
        </RouterLink>
        <RouterLink to="/example/component">
          组件
        </RouterLink>
        <RouterLink to="/example/axios">
          Axios
        </RouterLink>
        <RouterLink to="/example/pinia">
          Pinia
        </RouterLink>
        <RouterLink :to="{ name: 'exampleParams', params: { test: '123' } }">
          路由 Params
        </RouterLink>
        <RouterLink :to="{ path: '/example/query', query: { test: '123' } }">
          路由 Query
        </RouterLink>
        <RouterLink to="/example/reload">
          刷新页面
        </RouterLink>
        <RouterLink to="/example/permission-router">
          Router 鉴权
        </RouterLink>
        <RouterLink to="/example/permission-js">
          JS 鉴权
        </RouterLink>
      </nav>
    </header>
    <main class="mx-auto px-6 py-10 pb-20 max-w-[800px]">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav :deep(a) {
  padding: 4px 12px;
  font-size: 12.5px;
  font-weight: 500;
  color: #64748b;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border-radius: 6px;
  transition: all 0.15s ease;
}

nav :deep(a:hover) {
  color: #1e40af;
  background: #eff6ff;
}

nav :deep(a.router-link-active) {
  font-weight: 600;
  color: #1d4ed8;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
}
</style>
