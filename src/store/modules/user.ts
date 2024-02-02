import apiUser from '@/api/modules/user'
import router from '@/router'

const useUserStore = defineStore(
  // 唯一ID
  'user',
  {
    state: () => ({
      token: localStorage.token,
      failure_time: localStorage.failure_time,
    }),
    getters: {
      isLogin: (state) => {
        let retn = false
        if (state.token != null) {
          const unix = Date.parse(new Date().toString())
          if (unix < state.failure_time * 1000) {
            retn = true
          }
        }
        return retn
      },
    },
    actions: {
      login(data: {
        account: string
        password: string
      }) {
        return new Promise((resolve, reject) => {
          apiUser.login(data).then((res) => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('failure_time', res.data.failure_time)
            this.token = res.data.token
            this.failure_time = res.data.failure_time
            resolve(res)
          }).catch((error) => {
            reject(error)
          })
        })
      },
      logout(redirect = router.currentRoute.value.fullPath) {
        // 模拟退出登录，清除 token 信息
        localStorage.removeItem('token')
        localStorage.removeItem('failure_time')
        this.token = null
        this.failure_time = null
        router.push({
          name: 'login',
          query: {
            ...(router.currentRoute.value.name !== 'login' && { redirect }),
          },
        })
      },
    },
  },
)

export default useUserStore
