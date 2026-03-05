# 图标

框架提供了三种使用图标的方式，你可以根据自己的使用需求自行选择。

## 自定义图标

你可以去[阿里巴巴矢量图标库](https://www.iconfont.cn/)，或者其它支持下载 SVG 图标文件的网站，又或者是设计师绘制的 SVG 文件，将准备好的 SVG 图标文件放到 `/src/assets/icons/` 目录下，然后在页面中就可以通过 SvgIcon 组件使用了，name 就是 svg 的文件名。

```vue
<!-- /src/assets/icons/example.svg -->
<SvgIcon name="example" />
```

## Iconify 图标

::: tip 介绍
[Iconify](https://github.com/iconify/iconify) 提供 100+ 套图标集，有 100,000+ 个图标可以免费使用。
:::

除了可以在 Iconify 官网上查找搜需要的图标，你还可以在 [Icônes 网站](https://icones.js.org/) 上查找，这是一个基于 Iconify 的在线图标搜索网站，它比 Iconify 官网的操作更直观。

### Unocss 方案

::: tip 说明
Unocss 方案采用了 CSS 去处理图标的展示，框架大部分核心模块里采用的是这种方式，如果你对其中的技术细节感兴趣，可以阅读这篇 Unocss 作者的《[聊聊纯 CSS 图标](https://antfu.me/posts/icons-in-pure-css-zh)》这篇文章。
:::

框架已经做好了所有配置，使用方式也极为简单，你只需进入 [Iconify 官网](https://icon-sets.iconify.design/) 上查找 Iconify 提供的所有图标，然后点击需要使用的图标，复制图标名称，在任意原生 HTML 标签上通过设置 class ，格式为 `i-{集合名}:{图标名}`，例如：

```vue
<div class="i-ep:arrow-right" />
<i class="i-ep:search" />
```

当然你同样也可以通过 SvgIcon 使用它。

```vue
<SvgIcon name="i-ep:arrow-right" />
```

在使用 Unocss 图标时，需要注意以下两点：

- 图标字符串不支持拼接

    ```vue
    <!-- 这样不会生效 -->
    <SvgIcon :name="'i-ep' + ':search'" />
    ```

- 图标字符串不支持异步返回

    ```vue
    <!-- 这样不会生效 -->
    <!-- 假设 name 是异步请求返回的数据，name 为 i-ep:search -->
    <SvgIcon :name="name" />
    ```

如果确实有以上需求，你可以使用 Iconify 原生提供的方案。

### Iconify 原生方案

::: tip 说明
框架保留了 Iconify 官方提供的使用方式，格式为 `{集合名}:{图标名}` 。
:::

```vue
<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <Icon icon="ep:arrow-right" />
</template>
```

当然这么使用并没有很方便，依旧还是需要手动导入一个 Icon 组件。如果你也觉得麻烦的话，那么你可以使用 SvgIcon 组件来展示，框架已经帮你做好的所有处理。

```vue
<SvgIcon name="ep:arrow-right" />
```
