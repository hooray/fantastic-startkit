import { h, toRefs } from 'vue'
import Theme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import './fonts/fira_code/fira_code.css'
import SponsorsAside from './components/SponsorsAside.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'aside-bottom': () => h(SponsorsAside),
    })
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = toRefs(useData())
    const route = useRoute()

    // 评论组件 - https://giscus.app/
    giscusTalk({
      repo: 'hooray/fantastic-startkit',
      repoId: 'MDEwOlJlcG9zaXRvcnkzNzMzNjIxOTI=',
      category: 'Announcements', // 默认: `General`
      categoryId: 'DIC_kwDOFkEOEM4CeRHv',
      mapping: 'pathname', // 默认: `pathname`
      inputPosition: 'top', // 默认: `top`
      lang: 'zh-CN', // 默认: `zh-CN`
      lightTheme: 'light', // 默认: `light`
      darkTheme: 'transparent_dark', // 默认: `transparent_dark`
      loading: true,
    }, {
      frontmatter,
      route,
    },
    // 是否全部页面启动评论区。
    // 默认为 true，表示启用，此参数可忽略；
    // 如果为 false，表示不启用。
    // 可以在页面使用 `comment: true` 前言单独启用
    true)
  },
}
