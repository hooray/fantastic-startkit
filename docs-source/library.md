# 第三方库

除 vue-router 、Pinia 、axios 之外，模板还默认集成了一些常用且成熟的类库或插件，熟悉并熟练使用它们，能让你在开发过程中更得心应手。

以下类库或插件均在 `/src/util/global.properties.js` 文件中配置，并挂载到全局属性。

## [dayjs](https://day.js.org/zh-CN/)

这是一个轻量的处理时间和日期的 JavaScript 库。

```js:no-line-numbers
this.$dayjs
```

## [vue-cookies](https://github.com/cmp-cc/vue-cookies)

cookies 操作库。

```js:no-line-numbers
this.$cookies
```

## [mitt](https://github.com/developit/mitt)

一个全局事件总线的库，也是 Vue 3 推荐的库。

```js:no-line-numbers
this.$eventBus
```