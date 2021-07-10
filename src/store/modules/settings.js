/**
 * 存放全局公用状态
 */

const state = () => ({
    title: ''
})

const getters = {}

const actions = {}

const mutations = {
    // 设置网页标题
    setTitle(state, title) {
        state.title = title
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
