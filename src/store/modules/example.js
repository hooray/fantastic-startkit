import api from '@/api'

const useExampleStore = defineStore(
    // 唯一ID
    'example',
    {
        state: () => ({
            news: []
        }),
        getters: {
            newsCount: state => {
                return state.news.length
            }
        },
        actions: {
            getNews() {
                api.get('/news/list', {
                    baseURL: '/mock/'
                }).then(res => {
                    this.news = res.data.list
                })
            },
            removeLast() {
                this.news.splice(this.news.length - 1, 1)
            }
        }
    }
)

export default useExampleStore
