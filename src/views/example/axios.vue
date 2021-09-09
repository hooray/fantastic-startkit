<template>
    <div>
        <button type="button" @click="getInfo">获取 mock 数据</button>
        <div>
            <p v-for="(item, index) in news" :key="index">{{ item.title }}</p>
        </div>
    </div>
</template>

<script setup>
const { proxy } = getCurrentInstance()

let news = ref([])

const getInfo = () => {
    Promise.all([
        proxy.$api.get('news/list', {
            baseURL: '/mock/'
        }),
        proxy.$api.get('news/list', {
            baseURL: '/mock/'
        })
    ]).then(res => {
        news.value = res[0].data.list.concat(
            res[1].data.list
        )
    })
}
</script>

<style lang="scss" scoped>
img {
    display: block;
    width: 300px;
}
</style>
