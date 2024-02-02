<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
import apiNews from '@/api/modules/news'

const news = ref<any[]>([])

function getInfo() {
  Promise.all([
    apiNews.list(),
    apiNews.list(),
  ]).then((res) => {
    news.value = res[0].data.list.concat(
      res[1].data.list,
    )
  })
}
</script>

<template>
  <div>
    <button type="button" @click="getInfo">
      获取 mock 数据
    </button>
    <div>
      <p v-for="(item, index) in news" :key="index">
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  display: block;
  width: 300px;
}
</style>
