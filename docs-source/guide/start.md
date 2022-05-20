# 开始

## 开发环境

使用本模板前，需要在本地依次安装好 [Node.js](https://nodejs.org/zh-cn/), [pnpm](https://pnpm.io/zh/), [Git](https://git-scm.com/) 和 [Visual Studio Code](https://code.visualstudio.com/)，并且在 Visual Studio Code 里安装好以下扩展：

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Vue Language Features](https://marketplace.visualstudio.com/items?itemName=vue.volar)

::: tip
以上 5 个为 Visual Studio Code 必备扩展，以下则是作者建议安装的扩展，安装它们将在一定程度上提升开发效率。

- [Chinese (Simplified) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) 中文语言包
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) 在代码中高亮颜色
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) 高亮显示匹配的标签
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) 图片预览
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 彩虹缩进提示
:::

除此之外，还需要准备好开发使用的浏览器，推荐使用 [Chrome](https://www.google.cn/chrome/) ，并且在 Chrome 里安装好 [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 扩展，这一步很重要，安装 Vue 官方提供的调试工具将大大提升解决 bug 的效率。

不过由于安装 Vue.js devtools 需要访问 Chrome 应用商店，如果在大陆地区访问，需要自行准备相关**可访问外网**的工具。如果不具备该条件，也可访问 [Vue.js devtools](https://devtools.vuejs.org/) 官网了解本地构建或者下载支持 Firefox 的 Vue.js devtools 。

## 拉取代码

做好准备工作后，依次执行下面的命令：

```bash:no-line-numbers
# 克隆项目（如果本地已有源码，可跳过这步）
# 可选择从 github 或 gitee 克隆项目
git clone https://github.com/hooray/fantastic-template.git
# 或者
git clone https://gitee.com/hooray/fantastic-template.git

# 进入项目目录
cd fantastic-template

# 安装项目依赖
pnpm install

# 运行
pnpm run dev
```

运行成功后，会自动访问页面，默认情况下，地址为 `http://localhost:3000`

如果你已经了解本模板的特性，我们推荐你通过拉取 `template` 分支进行项目开发，该分支不含任何示例代码。

```bash:no-line-numbers
# 可选择从 github 或 gitee 克隆 template 分支
git clone -b template https://github.com/hooray/fantastic-template.git
# 或者
git clone -b template https://gitee.com/hooray/fantastic-template.git
```

::: warning 注意
安装依赖时如果提示 husky 安装失败，请使用 `git init` 对项目进行初始化，然后重新安装依赖即可。

husky 需要项目有 git 环境才能正常安装，详细介绍请阅读《[代码规范 - husky & lint-staged](coding-standard.md#husky-lint-staged)》。
:::

::: tip 说明
如果是从 [vue-automation](https://eoner.gitee.io/vue-automation) 转移过来的开发者，可能会有疑问，为什么不使用 Yarn ，而改用 pnpm 做为包管理工具。关于这一点，网上有很多对比的文章，可以同时搜索关键词：**npm yarn pnpm**了解三者的优缺点，这里就不再赘述了。
:::

## 技术栈

了解并熟悉模板使用到的技术栈，能让你使用本模板更得心应手。

- [Vite](https://cn.vitejs.dev/)
- [Vue 3](https://v3.cn.vuejs.org/) ([v3 迁移指南](https://v3.cn.vuejs.org/guide/migration/introduction.html))
- [Vue Router 4](https://next.router.vuejs.org/zh/)
- [Pinia](https://pinia.vuejs.org/)