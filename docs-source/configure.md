# 环境配置

默认提供三套环境配置，分别为：

- 开发环境 `.env.development`
- 测试环境 `.env.test`
- 生产环境 `.env.production`

:::: code-group
::: code-group-item 开发环境
```dot:no-line-numbers {1-6}
# 页面标题
VITE_APP_TITLE = 页面标题(development)
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否开启代理
VITE_OPEN_PROXY = true
```
:::
::: code-group-item 测试环境
```dot:no-line-numbers {3-8}
NODE_ENV = production

# 页面标题
VITE_APP_TITLE = 页面标题(test)
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否在打包时生成 sourcemap
VITE_BUILD_SOURCEMAP = true
# 是否在打包时删除 console 代码
VITE_BUILD_DROP_CONSOLE = true
# 是否在打包时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS =
```
:::
::: code-group-item 生产环境
```dot:no-line-numbers {3-8}
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
# 是否在打包时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS = gzip,brotli
```
:::
::::

其中高亮部分为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。

开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。

:::warning 注意
环境配置修改后，需要重新运行才会生效
:::