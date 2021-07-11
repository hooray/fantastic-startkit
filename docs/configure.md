# 环境配置

在模板根目录下，默认提供三套环境配置，分别为：

- `.env.development` 开发环境
- `.env.test` 测试环境
- `.env.production` 生产环境

以生产环境配置介绍：

```dot {3-8}
NODE_ENV = production

# 页面标题
VITE_APP_TITLE = 页面标题
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否在打包时生成 sourcemap
VITE_BUILD_SOURCEMAP = false
# 是否在打包时删除 console 代码
VITE_BUILD_DROP_CONSOLE = false
```

其中高亮部分代码为通用配置，即不管是在开发、测试，还是生产环境都适用。开发者也可根据实际业务需求进行扩展，如果对这块不熟悉，可阅读 Vite [环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。