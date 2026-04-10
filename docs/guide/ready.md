# 准备工作

## 源码

可以直接下载源码，或者通过 git 拉取源码

```bash
# 从 Github 拉取
git clone https://github.com/hooray/fantastic-startkit.git
# 从 Gitee 拉取
git clone https://gitee.com/hooray/fantastic-startkit.git
```

## 开发环境

使用本套件前，需要在本地依次安装好 [Node.js](https://nodejs.org/), [pnpm](https://pnpm.io/zh/), [Git](https://git-scm.com/) 和 [Visual Studio Code](https://code.visualstudio.com/)。

:::warning 注意
在 [package.json](https://github.com/hooray/fantastic-startkit/blob/main/package.json#L3-L5) 文件中有限制 node 要求版本，建议使用最新 LTS 版本。
:::

然后在 Visual Studio Code 里安装好以下扩展：

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

在 Visual Studio Code 里打开源码的文件夹，右下角会自动提示需要安装的依赖，直接点击安装即可。

::: tip 额外推荐
以上为开发时必备扩展，以下则是作者推荐安装的扩展，安装它们将在一定程度上提升开发效率。

- [Chinese (Simplified) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) 中文语言包
- [Catalog Lens](https://marketplace.visualstudio.com/items?itemName=antfu.pnpm-catalog-lens) 显示PNPM/Yarn/Bun目录的嵌套版本
- [Goto definition alias](https://marketplace.visualstudio.com/items?itemName=antfu.goto-alias) 转到別名重定向后的定义
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 在代码中预览 iconify 图标
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) 在代码中高亮颜色
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) 高亮显示匹配的标签
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) 图片预览
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 彩虹缩进提示
:::

## 技术栈

了解并熟悉框架使用到的技术栈，能让你使用本框架更得心应手。

- [Vite](https://cn.vitejs.dev/)
- [Vue 3](https://cn.vuejs.org/)
- [Vue Router](https://router.vuejs.org/zh/)
- [Pinia](https://pinia.vuejs.org/zh/)
- [UnoCSS](https://unocss.dev/)
