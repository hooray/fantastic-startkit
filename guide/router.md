# 路由

路由实现了自动注册，路由配置存放在 `/src/router/modules/` 目录下，每一个 ts 文件会被视为一个路由模块，可参考 `/src/router/modules/example.ts` 文件。

更多使用技巧请移步至 Vue-router [官方文档](https://next.router.vuejs.org/zh/)。

## 基于文件系统的路由

> 该特性由 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) 和 [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) 提供支持。

传统使用路由的方式需要手动编写路由，而基于文件系统的路由则会根据文件的目录结构自动生成路由结构，从而节省开发周期。

默认未开启该模式，如果需要启用，到 `/src/router/index.ts` 文件里找到下面代码片段，通过开启/关闭注释修改成下面这样：

```ts {2-13,16-20}
// 注释以下代码
// const routesContext: any = import.meta.glob('./modules/*.ts', { eager: true })
// Object.keys(routesContext).forEach((v) => {
//   routes.push(routesContext[v].default)
// })
// routes.push({
//   path: '/:pathMatch(.*)*',
//   component: () => import('@/views/[...all].vue'),
//   meta: {
//     title: '找不到页面',
//   },
// })
// routes = routes.flat()

// 开启以下代码
import { setupLayouts } from 'virtual:meta-layouts'
import generatedRoutes from 'virtual:generated-pages'
generatedRoutes.forEach(v => {
    routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v)
})
```

启用基于文件系统的路由后，`/src/router/modules/` 目录将不再被需要，而 `/src/views/` 目录下的文件会自动被注册成路由。

```
文件系统                           路由地址                          路由 name

views
├─ example
│    ├─ components
│    │    └─ List
│    │         └─ index.vue
│    ├─ params
│    │    └─ [id].vue              /example/params/:id              example-params
│    ├─ axios.vue                  /example/axios                   example-axios
│    ├─ cookie.vue                 /example/cookie                  example-cookie
│    └─ svgicon.vue                /example/svgicon                 example-svgicon
├─ [...all].vue                    /:all(.*)*                       all
├─ index.vue                       /                                index
└─ login.vue                       /login                           login
```

通过上面的示例，可以看出几个特性：

- 使用路由参数需通过 `[ ]` 将参数名包裹，并设为文件名
- 文件夹不会生成路由，例如 example 文件夹并没有生成 `/example` 路由
- 路由 name 会根据文件的目录结构自动生成，并用 `-` 连接，可确保 name 的唯一性
- 所有 components 目录均不会生成路由

---

默认生成的所有路由均为嵌套路由，父级 component 指向 `/src/layout/index.vue` 组件，即：

```ts
// 生成的路由
{
  path: '/login',
  component: () => import('/src/layout/index.vue'),
  children: [
    {
      path: '',
      component: () => import('/src/views/login.vue'),
      name: 'login',
      meta: {
        layout: 'index',
      },
    },
  ],
}
```

你可以在 SFC 单文件组件里设置 layout ：

```vue {1-4}
<route lang="yaml">
meta:
  layout: example
</route>

<template>
  <div>login 页面</div>
</template>
```

```ts {4,11}
// 生成的路由
{
  path: '/login',
  component: () => import('/src/layout/example.vue'),
  children: [
    {
      path: '',
      component: () => import('/src/views/login.vue'),
      name: 'login',
      meta: {
        layout: 'example',
      },
    },
  ],
}
```

同样也可以设置成 `layout: false` ，这样该路由就不会生成嵌套路由。

```vue {1-4}
<route lang="yaml">
meta:
  layout: false
</route>

<template>
  <div>login 页面</div>
</template>
```

```ts
// 生成的路由
{
  path: '/login',
  component: () => import('/src/views/login.vue'),
  name: 'login',
  meta: {
    layout: false,
  },
}
```