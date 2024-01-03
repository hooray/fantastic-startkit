import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

export default defineFakeRoute([
  {
    url: '/mock/news/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: Mock.mock({
          'list|5-10': [
            {
              title: '@ctitle',
            },
          ],
        }),
      }
    },
  },
])
