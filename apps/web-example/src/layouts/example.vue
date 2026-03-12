<template>
  <div class="min-h-screen bg-slate-50">
    <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav class="mx-auto max-w-[900px] flex flex-wrap items-center gap-1 px-6 py-2.5">
        <RouterLink to="/example/svgicon">
          SVG Icon
        </RouterLink>
        <RouterLink to="/example/iconify">
          Iconify
        </RouterLink>
        <RouterLink to="/example/global-component">
          全局组件
        </RouterLink>
        <RouterLink to="/example/axios">
          Axios
        </RouterLink>
        <RouterLink to="/example/pinia">
          Pinia
        </RouterLink>
        <RouterLink to="/example/component">
          组件
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
    <main class="mx-auto max-w-[900px] px-6 py-10 pb-20">
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
