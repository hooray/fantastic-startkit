# 资源

## 图片

### 全局公共

全局公共图片存放在 `/src/assets/images/` 目录下，可自行新建文件夹分类管理。

### 局部私有

局部私有图片建议采用就近原则，你可以在需要的模块文件夹下建立一个 `images` 文件夹，专门用于存放局部私有图片。

## 样式

### 全局公共

全局公共样式存放在 `/src/assets/styles/` 目录下，可自行新建文件，并在 `/src/main.ts` 中引入即可。

此目录下还有一个特殊目录，即 `/src/assets/styles/resources/` ，这是全局 SCSS 资源目录，你可以在该目录下编写变量、函数、混合等支持 SCSS 特性的代码。

### 局部私有

基于 SFC 组件规范，局部私有样式建议直接在 `.vue` 文件中编写，模板集成了 UnoCSS / PostCSS / SCSS 方案，可选择自己适合的方案。更多单文件组件 CSS 功能请参考[这里](https://cn.vuejs.org/api/sfc-css-features)。

#### UnoCSS

```vue
<template>
  <div class="flex flex-1 flex-col select-none text-center all:transition-400">
    <div class="ma">
      <div class="animate-bounce-alt animate-duration-1s animate-count-infinite text-5xl fw100">
        UnoCSS
      </div>
    </div>
  </div>
</template>
```

#### PostCSS

模板内置了 [postcss-nested](https://github.com/postcss/postcss-nested) 插件，可实现接近于 SCSS 的写法和特性。

```vue
<style scoped>
.phone {
  &_title {
    width: 500px;
    @media (max-width: 500px) {
      width: auto;
    }
    body.is_dark & {
      color: white;
    }
  }
  img {
    display: block;
  }
}
</style>
```

#### SCSS

```vue
<style lang="scss" scoped>
$width: 500px;

.phone {
  &_title {
    width: $width;
    @media (max-width: $width) {
      width: auto;
    }
    body.is_dark & {
      color: white;
    }
  }
  img {
    display: block;
  }
}
</style>
```

## 组件

### 全局公共

::: tip 说明
全局公共组件在使用时，无需手动引入，框架会在你使用时自动引入，该特性由 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 提供支持。
:::

全局公共组件存放在 `/src/components/` 目录下，每个组件按文件夹进行区分。

每个组件的文件夹内至少保留一个文件名为 `index.vue` 的组件入口（可参考 `SvgIcon` 组件），文件夹名称即为组件名。

推荐使用 `pnpm new` 指令进行组件生成，详细可查看《[代码文件自动生成](plop)》。

### 局部私有

局部私有组件建议采用就近原则，你可以在需要的模块文件夹下建立一个 `components` 文件夹，专门用于存放局部私有组件。