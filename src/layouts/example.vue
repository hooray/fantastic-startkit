<template>
  <div>
    <div id="nav">
      <RouterLink to="/example/svgicon">
        svg icon
      </RouterLink>
      <RouterLink to="/example/iconify">
        iconify
      </RouterLink>
      <RouterLink to="/example/global-component">
        全局组件
      </RouterLink>
      <RouterLink to="/example/axios">
        axios
      </RouterLink>
      <RouterLink to="/example/pinia">
        pinia
      </RouterLink>
      <RouterLink to="/example/component">
        组件
      </RouterLink>
      <RouterLink :to="{ name: 'exampleParams', params: { test: '123' } }">
        路由params
      </RouterLink>
      <RouterLink :to="{ path: '/example/query', query: { test: '123' } }">
        路由query
      </RouterLink>
      <RouterLink to="/example/reload">
        刷新当前页面
      </RouterLink>
      <RouterLink to="/example/permission-router">
        router鉴权
      </RouterLink>
      <RouterLink to="/example/permission-js">
        js鉴权
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
#nav {
  margin-bottom: 10px;

  a {
    font-size: 14px;
    text-decoration: none;

    &::after {
      margin: 0 10px;
      font-size: 14px;
      font-weight: normal;
      content: "|";
    }

    &:last-child::after {
      content: none;
    }

    &.router-link-active {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
