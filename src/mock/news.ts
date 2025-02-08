import { faker } from '@faker-js/faker'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

const list: any[] = []
for (let i = 0; i < 10; i++) {
  list.push({
    id: i + 1,
    title: faker.lorem.sentence(),
  })
}

export default defineFakeRoute([
  {
    url: '/mock/news/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: {
          list,
        },
      }
    },
  },
])
