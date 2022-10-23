<route>
{
  meta: {
    layout: 'example'
  }
}
</route>

<script lang="ts" setup>
import api from '@/api'

const news = ref<any[]>([])

const getInfo = () => {
  Promise.all([
    api.get('news/list', {
      baseURL: '/mock/',
    }),
    api.get('news/list', {
      baseURL: '/mock/',
    }),
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
