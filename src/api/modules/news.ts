import api from '../index'

export default {
  list: () => api.get('news/list', {
    baseURL: '/mock/',
  }),
}
