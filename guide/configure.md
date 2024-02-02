# 环境配置

默认提供三套环境配置，分别为：

::: code-group

```yaml [.env.development 开发环境]
# 页面标题
VITE_APP_TITLE = 页面标题(development)
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否开启代理
VITE_OPEN_PROXY = true
# 是否开启开发者工具
VITE_OPEN_DEVTOOLS = false
```

```yaml [.env.test 测试环境]
# 页面标题
VITE_APP_TITLE = 页面标题(test)
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否在打包时启用 Mock
VITE_BUILD_MOCK = true
# 是否在打包时生成 sourcemap
VITE_BUILD_SOURCEMAP = true
# 是否在打包时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS =
# 是否在打包后生成存档，支持 zip 和 tar
VITE_BUILD_ARCHIVE =
```

```yaml [.env.production 生产环境]
# 页面标题
VITE_APP_TITLE = 页面标题
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否在打包时启用 Mock
VITE_BUILD_MOCK = false
# 是否在打包时生成 sourcemap
VITE_BUILD_SOURCEMAP = false
# 是否在打包时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS = gzip,brotli
# 是否在打包后生成存档，支持 zip 和 tar
VITE_BUILD_ARCHIVE =
```

:::

其中 `VITE_APP_SETTING` `VITE_APP_TITLE` `VITE_APP_API_BASEURL` `VITE_APP_DEBUG_TOOL` 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。

开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。
