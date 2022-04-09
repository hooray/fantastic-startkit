# 全局状态管理

:::tip 说明
因为 [Pinia](https://pinia.vuejs.org/) 已正式成为 Vue.js 官方状态库，本模版也从 Vuex 替换为 Pinia 。

如果你对 Pinia 还不熟悉，我整理了一些文字/视频的介绍，可以帮助你快速上手。

- [欧耶！Pinia 正式成为 vuejs 的一员](https://mp.weixin.qq.com/s/_OlLFedVJfyEapGzYFETuw)
- [全新的 Vue3 状态管理工具：Pinia](https://mp.weixin.qq.com/s/4B-ZzOXdYrF-Auvm_wWBVQ)
- [【探索学习】面向未来的 Vuex -- pinia](https://www.bilibili.com/video/BV1Mb4y1X7NL/)
:::

全局状态文件存放在 `/src/store/modules/` 目录下，请按模块进行区分。同时请保证文件名和文件内唯一ID保持一致，建议使用 `pnpm new` 指令进行创建。

例如新建一个 `example.js` 的文件：

```js
import { defineStore } from 'pinia'
import { piniaStore } from '@/store'

export const useExampleStore = defineStore(
    // 唯一ID
    'example',
    {
        state: () => ({}),
        getters: {},
        actions: {}
    }
)

export function useExampleOutsideStore() {
    return useExampleStore(piniaStore)
}
```

使用方法：

```js:no-line-numbers
import { useExampleStore } from '@/store/modules/example'
const exampleStore = useExampleStore()

exampleStore.data
exampleStore.doSomething()
```