module.exports = {
	base: '/fantastic-template/',
    title: 'Fantastic-template 官网',
    description: '一款开箱即用的 Vue 项目模板，基于 Vue(3.x) & Vite(2.x)',
    themeConfig: {
        // 头部导航
        nav: [
            {
                text: 'Gitee',
                link: 'https://gitee.com/hooray/fantastic-template',
            },
            {
                text: 'Github',
                link: 'https://github.com/hooray/fantastic-template',
            },
        ],
        sidebar: {
            '/': [
                {
                    text: '指南',
                    children: [
                        { text: '开始', link: '/start' },
                        { text: '环境配置', link: '/configure' },
                        { text: '全局资源', link: '/global-resources' },
                        { text: '全局组件', link: '/global-component' },
                        { text: 'vue-router', link: '/vue-router' },
                        { text: 'Vuex', link: '/vuex' },
                        { text: '接口联调与 Mock', link: '/axios-mock' },
                        { text: '快速创建文件', link: '/plop' },
                        { text: '移动端支持', link: '/mobile-support' },
                        { text: '代码规范', link: '/coding-standard' },
                        { text: '构建', link: '/build' },
                    ],
                },
            ],
        },
    },
};
