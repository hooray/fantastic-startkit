import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

export default defineFakeRoute([
  {
    url: '/mock/user/login',
    method: 'post',
    response: ({ body }) => {
      return {
        error: '',
        status: 1,
        data: Mock.mock({
          account: body.account,
          token: `${body.account}_@string`,
        }),
      }
    },
  },
])
