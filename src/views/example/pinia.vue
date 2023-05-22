<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
import useExampleStore from '@/store/modules/example'

const exampleStore = useExampleStore()

const news = computed(() => exampleStore.news)
const newsCount = computed(() => exampleStore.newsCount)

function getInfo() {
  return exampleStore.getNews()
}

function removeLast() {
  return exampleStore.removeLast()
}

function getLength() {
  // eslint-disable-next-line no-alert
  alert(newsCount.value)
}
</script>

<template>
  <div>
    <button type="button" @click="getInfo">
      获取数据
    </button>
    <button type="button" @click="removeLast">
      删除最后一条数据
    </button>
    <button type="button" @click="getLength">
      获取数据长度
    </button>
    <p v-for="(item, index) in news" :key="index">
      {{ item.title }}
    </p>
    <strong v-if="newsCount">现在你可以切换路由，你会发现，切换回来后，数据还在。</strong>
  </div>
</template>

<style lang="scss" scoped>
img {
  display: block;
  width: 300px;
}
</style>
