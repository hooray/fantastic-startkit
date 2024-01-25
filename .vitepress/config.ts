import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fantastic-startkit 官方文档',
  description: '一款简单好用的 Vue3 项目启动套件',
  lang: 'zh-CN',
  base: '/fantastic-startkit/',
  head: [
    ['meta', { name: 'keywords', content: 'vue,vite,router,vuex,pinia,typescript,template,startkit,starter,启动套件,模板' }],
    ['keywords', { content: 'vue,vite,router,vuex,pinia,typescript,template,startkit,starter,启动套件,模板' }],
    ['description', { content: '一款简单好用的 Vue3 项目启动套件' }],
  ],
  themeConfig: {
    footer: {
      copyright: 'Copyright © 2020-present Fantastic-startkit',
    },
    nav: [
      {
        text: '指南',
        link: '/guide/start',
      },
      {
        text: '技术支持',
        link: '/support',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hooray/fantastic-startkit',
      },
      {
        icon: {
          svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>',
        },
        link: 'https://gitee.com/hooray/fantastic-startkit',
      },
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
            { text: '图标', link: '/guide/svg-icon' },
            { text: '路由', link: '/guide/router' },
            { text: '全局状态管理', link: '/guide/store' },
            { text: '与服务端交互', link: '/guide/axios' },
            { text: '代码文件自动生成', link: '/guide/plop' },
            { text: '常用 API', link: '/guide/api' },
            { text: '移动端支持', link: '/guide/mobile-support' },
            { text: '构建与预览', link: '/guide/build' },
            { text: '开发辅助', link: '/guide/assistance' },
          ],
        },
      ],
      '/': [
        {
          text: '',
          items: [
            { text: '技术支持', link: '/support' },
          ],
        },
      ],
    },
    outline: 'deep',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
})
