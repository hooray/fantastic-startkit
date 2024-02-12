import apiUser from '@/api/modules/user'
import router from '@/router'

const useUserStore = defineStore(
  // 唯一ID
  'user',
  () => {
    const token = ref(sessionStorage.token ?? '')

    const isLogin = computed(() => {
      if (token.value) {
        return true
      }
      return false
    })

    function login(data: {
      account: string
      password: string
    }) {
      return new Promise((resolve, reject) => {
        apiUser.login(data).then((res) => {
          sessionStorage.setItem('token', res.data.token)
          token.value = res.data.token
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      })
    }
    function logout(redirect = router.currentRoute.value.fullPath) {
      // 模拟退出登录，清除 token 信息
      sessionStorage.removeItem('token')
      token.value = ''
      router.push({
        name: 'login',
        query: {
          ...(router.currentRoute.value.name !== 'login' && { redirect }),
        },
      })
    }

    return {
      token,
      isLogin,
      login,
      logout,
    }
  },
)

export default useUserStore
