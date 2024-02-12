import api from '@/api'

const useExampleStore = defineStore(
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
      api.get('/news/list', {
        baseURL: '/mock/',
      }).then((res) => {
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

export default useExampleStore
