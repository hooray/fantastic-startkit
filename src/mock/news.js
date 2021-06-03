export default [
    {
        url: '/mock/news/list',
        method: 'get',
        response: () => {
            return {
                error: '',
                status: 1,
                data: {
                    'list|5-10': [
                        {
                            'title': '@ctitle'
                        }
                    ]
                }
            }
        }
    }
]
