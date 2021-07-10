import api from '@/api'

const state = () => ({
    news: []
})

const getters = {
    newsCount: state => {
        return state.news.length
    }
}

const actions = {
    getNews({
        commit
    }) {
        api.get('/news/list', {
            baseURL: '/mock/'
        }).then(res => {
            commit('setNews', res.data.list)
        })
    }
}

const mutations = {
    setNews(state, news) {
        state.news = news
    },
    removeLast(state) {
        state.news.splice(state.news.length - 1, 1)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
