# 全局资源

## 图片

图片资源都放在 `/src/assets/images/` 目录下，可自行新建文件夹分类管理。

## 样式

样式存放目录为 `/src/assets/styles/` ，因为 Vue 的文件特性，页面样式建议写在 `.vue` 文件里，所以该目录只存放全局样式，方便统一管理。

此目录下还有一个特殊目录，即 `/src/assets/styles/resources/` ，这是全局 SCSS 资源目录，首先这个目录里只支持 `.scss` 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。

同样，精灵图目录下生成的 SCSS 资源也是全局可调用的。

:::tip 说明
全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西
:::

## 组件

### 全局组件

::: tip 说明
公共组件在使用时，无需手动引入，框架会在你使用时自动引入，该特性由 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 提供支持。
:::

公共组件存放在 `/src/components/` 目录下，每个组件按文件夹进行区分。

每个组件的文件夹内至少保留一个文件名为 `index.vue` 的组件入口（可参考 `SvgIcon` 组件），文件夹名称即为组件名。

推荐使用 `pnpm new` 指令进行组件生成，详细可查看《[代码文件自动生成](plop)》。

### 局部组件

局部组件没有提供专门的存放目录，我们建议采用就近原则，你可以在每个模块的文件夹下，建立一个 `components` 文件夹专门用于存放局部组件。
