# 资源

## 图片

### 全局公共

全局公共图片存放在 `assets/images/` 目录下，可自行新建文件夹分类管理。

### 局部私有

局部私有图片建议采用就近原则，你可以在需要的模块文件夹下建立一个 `images` 文件夹，专门用于存放局部私有图片。

## 样式

### 全局公共

全局公共样式存放在 `assets/styles/` 目录下，可自行新建文件，并在 `main.ts` 中引入即可。

此目录下还有一个特殊目录，即 `assets/styles/resources/` ，这是全局 SCSS 资源目录，你可以在该目录下编写变量、函数、混合等支持 SCSS 特性的代码。

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

全局公共组件有两个来源：

#### 来源一：应用内组件

存放在 `components/` 目录下，每个组件独占一个文件夹，文件夹名称即为组件名。文件夹内至少包含一个名为 `index.vue` 的入口文件。

```
src/components/
└── DemoButton/
    └── index.vue   # 组件名为 DemoButton，直接在模板中使用 <DemoButton />
```

#### 来源二：monorepo 子包

`@fantastic-startkit/components` 子包提供跨应用的公共组件，通过 `FantasticComponentsResolver` 自动识别并导入。子包组件名统一以 `Fs` 为前缀，例如 `<FsIcon />`。

如需新增子包组件，参考 `packages/components` 目录下的结构说明。

### 局部私有

局部私有组件建议采用就近原则，你可以在需要的模块文件夹下建立一个 `components` 文件夹，专门用于存放局部私有组件。
