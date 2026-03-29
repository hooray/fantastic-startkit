# 环境配置

环境变量配置文件在 `apps/<app>/` 根目录，默认提供三套配置，分别为：

::: code-group

<<< @/../apps/core/.env.development{env}[.env.development 开发环境]

<<< @/../apps/core/.env.test{env}[.env.test 测试环境]

<<< @/../apps/core/.env.production{env}[.env.production 生产环境]

:::

开发者可根据实际业务需求进行扩展，详细可阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。

## 通用配置项

即不管是在开发、测试，还是生产环境都会使用到。

### VITE_APP_TITLE

网站标题，会在浏览器标题处显示。

### VITE_APP_API_BASEURL

[扩展阅读](axios)

### VITE_APP_DEBUG_TOOL

方便在不支持启用浏览器开发者工具的环境，启用一个轻量级的调试工具。

```env
# 调试工具 eruda
VITE_APP_DEBUG_TOOL = eruda

# 调试工具 vconsole
VITE_APP_DEBUG_TOOL = vconsole
```

## 开发环境配置项

### VITE_ENABLE_PROXY

[扩展阅读](axios#跨域处理)

### VITE_ENABLE_VUE_DEVTOOLS

Vue 开发工具

### VITE_ENABLE_TURBO_CONSOLE

Console 工具

### VITE_LAUNCH_EDITOR

默认启动 IDE

**Vue 开发工具** 和 **Console 工具** 都支持在浏览器中打开 IDE 并定位到源文件。

默认打开 VSCode ，如果你使用其他 IDE ，建议创建 `apps/<app>/.env.development.local` 文件并写入：

```env
# 启动编辑器，用于 vite-plugin-vue-devtools 和 unplugin-turbo-console
# 支持的编辑器 https://github.com/yyx990803/launch-editor#supported-editors
VITE_LAUNCH_EDITOR = code
```

点击查看[支持的 IDE 列表](https://github.com/yyx990803/launch-editor#supported-editors)。

## 测试/生产环境

### VITE_BUILD_FAKE

[扩展阅读](axios#生产环境)

### VITE_BUILD_SOURCEMAP

开启后生成的构建产物里包含 sourcemap 文件

### VITE_BUILD_COMPRESS

可在构建时生成 `.gz` 和 `.br` 文件。

```env
# 单独开启 gzip
VITE_BUILD_COMPRESS = gzip

# 单独开启 brotli ，brotli 是比 gzip 压缩率更高的算法
VITE_BUILD_COMPRESS = brotli

# 也可以都开启，会同时生成 .gz 和 .br 文件
VITE_BUILD_COMPRESS = gzip,brotli
```

两者均需要 nginx 安装指定模块并开启后才会生效。

### VITE_BUILD_ARCHIVE

在构建完后成生成 `.zip` 或 `.tar.gz` 文件。

```env
# 生成 zip
VITE_BUILD_ARCHIVE = zip

# 生成 tar.gz
VITE_BUILD_ARCHIVE = tar
```
