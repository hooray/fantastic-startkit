<template>
    <div>
        <button type="button" @click="getInfo">获取数据</button>
        <button type="button" @click="removeLast">删除最后一条数据</button>
        <button type="button" @click="getLength">获取数据长度</button>
        <p v-for="(item, index) in news" :key="index">{{ item.title }}</p>
        <strong v-if="newsCount">现在你可以切换路由，你会发现，切换回来后，数据还在。</strong>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            news: state => state.example.news
        }),
        ...mapGetters({
            newsCount: 'example/newsCount'
        })
    },
    methods: {
        ...mapActions({
            getInfo: 'example/getNews'
        }),
        ...mapMutations({
            removeLast: 'example/removeLast'
        }),
        getLength() {
            alert(this.newsCount)
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    display: block;
    width: 300px;
}
</style>
