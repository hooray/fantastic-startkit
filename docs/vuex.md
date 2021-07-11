# Vuex

Vuex 同样实现了自动注册，开发只需关注 `./src/store/modules/` 文件夹里的文件即可，同样也按模块区分文件。

新建模板：

```js
// example.js
const state = () => ({})
const getters = {}
const actions = {}
const mutations = {}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
```

文件默认开启命名空间，文件名会默认注册为模块名。

使用方法：

```js
this.$store.state.example.xxx;
this.$store.getters['example/xxx'];
this.$store.dispatch('example/xxx');
this.$store.commit('example/xxx');
```