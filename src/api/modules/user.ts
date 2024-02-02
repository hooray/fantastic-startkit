import api from '../index'

export default {
  // 登录
  login: (data: {
    account: string
    password: string
  }) => api.post('user/login', data, {
    baseURL: '/mock/',
  }),
}
