export default {
  title: 'Fantastic-startkit 官方文档',
  description: '一款开箱即用的 Vue 项目启动套件，基于 Vue(3.x) & Vite(2.x)',
  lang: 'zh-CN',
  base: '/fantastic-startkit/',
  head: [
    ['meta', { name: 'keywords', content: 'vue,router,vuex,pinia,typescript,template,startkit,starter,启动套件,模板' }],
    ['keywords', { content: 'vue,router,vuex,pinia,typescript,template,startkit,starter,启动套件,模板' }],
    ['description', { content: '一款开箱即用的 Vue 项目启动套件，基于 Vue(3.x) & Vite(2.x)' }]
  ],
  themeConfig: {
    footer: {
      copyright: 'Copyright © 2020-present Fantastic-startkit'
    },
    nav: [
      {
        text: '指南',
        link: '/guide/start'
      },
      {
        text: '交流社区',
        link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=MwjoF&appChannel=share&businessType=9&from=246610&biz=ka'
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/hooray/fantastic-template',
      },
      {
        text: 'Github',
        link: 'https://github.com/hooray/fantastic-template',
      },
      {
        text: '生态',
        items: [
          {
            text: 'Fantastaic-startkit',
            link: 'https://hooray.gitee.io/fantastic-startkit/'
          },
          {
            text: 'Fantastaic-admin',
            link: 'https://hooray.gitee.io/fantastic-admin/'
          },
          {
            text: 'One-step-admin',
            link: 'https://hooray.gitee.io/one-step-admin/'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '开始', link: '/guide/start' },
            { text: '代码规范', link: '/guide/coding-standard' },
            { text: '环境配置', link: '/guide/configure' },
            { text: '全局资源', link: '/guide/global-resources' },
            { text: '路由', link: '/guide/router' },
            { text: '全局状态管理', link: '/guide/store' },
            { text: '与服务端交互', link: '/guide/axios' },
            { text: '代码文件自动生成', link: '/guide/plop' },
            { text: '常用 API', link: '/guide/api' },
            { text: '移动端支持', link: '/guide/mobile-support' },
            { text: '构建与预览', link: '/guide/build' },
            { text: '开发辅助', link: '/guide/assistance' }
          ]
        }
      ]
    }
  }
}