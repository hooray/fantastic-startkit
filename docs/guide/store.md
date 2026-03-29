# 全局状态管理

:::tip 说明
[Pinia](https://pinia.vuejs.org/) 为 Vue.js 官方状态库，如果你对 Pinia 还不熟悉，请先阅读官方文档。
:::

全局状态文件存放在 `apps/<app>/src/store/modules/` 目录下，请按模块进行区分。同时请保证文件名和文件内唯一ID保持一致，建议使用 `pnpm new` 指令进行创建。

例如新建一个 `example.ts` 的文件：

```ts
export const useExampleStore = defineStore(
  // 唯一ID
  'example',
  () => {
    const someThing = ref(0)

    return {
      someThing,
    }
  },
)
```

使用方法：

```ts
const exampleStore = useExampleStore()

exampleStore.someThing
```
