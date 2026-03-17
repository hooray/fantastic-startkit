import apiNews from '@/api/modules/news'

export const useExampleStore = defineStore(
  // 唯一ID
  'example',
  () => {
    const news = ref<{
      title: string
    }[]>([])

    const newsCount = computed(() => {
      return news.value.length
    })

    function getNews() {
      apiNews.list().then((res) => {
        news.value = res.data.list
      })
    }
    function removeLast() {
      news.value.splice(news.value.length - 1, 1)
    }

    return {
      news,
      newsCount,
      getNews,
      removeLast,
    }
  },
)
