# 开始

## 开发环境

使用本套件前，需要在本地依次安装好 [Node.js](https://nodejs.org/zh-cn/), [pnpm](https://pnpm.io/zh/), [Git](https://git-scm.com/) 和 [Visual Studio Code](https://code.visualstudio.com/)。

:::warning 注意
Node.js 版本需 >= 14.18.0 ，建议为 16.x
:::

然后在 Visual Studio Code 里安装好以下扩展：

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

```bash
# 克隆项目（如果本地已有源码，可跳过这步）
# 可选择从 github 或 gitee 克隆 example 分支
git clone -b example https://github.com/hooray/fantastic-startkit.git
# 或者
git clone -b example https://gitee.com/hooray/fantastic-startkit.git

# 进入项目目录
cd fantastic-startkit

# 安装项目依赖
pnpm install

# 运行
pnpm run dev
```

运行成功后，会自动访问页面，默认情况下，地址为 `http://127.0.0.1:5173`

如果你已经了解本套件的特性，我们推荐你通过拉取默认 `master` 分支进行项目开发，该分支不含任何示例代码。

```bash
# 可选择从 github 或 gitee 克隆
git clone https://github.com/hooray/fantastic-startkit.git
# 或者
git clone https://gitee.com/hooray/fantastic-startkit.git
```

::: tip
由于框架有使用到 husky 这个依赖包，所以请确保在安装依赖前，已经使用 `git init` 对项目进行过 git 环境初始化，否则安装依赖过程中会提示 husky 安装失败。

husky 需要项目有 git 环境才能正常安装，详细介绍请阅读《[代码规范 - husky & lint-staged](coding-standard.md#husky-lint-staged)》。

此外，如果 git 仓库目录和框架目录并非同一个，则需要在 `package.json` 中修改 `prepare` 脚本，先切换到 git 所在目录。例如 git 目录是 `project/` ，而框架目录是 `project/fantastic-startkit/` ，则在 `package.json` 里找到 `"prepare": "husky install"` 并修改为 `"prepare": "cd .. && husky install"` 即可。
:::

::: warning 报错
安装依赖时提示 404 ，或者安装结束后，运行时提示「 'vite' 不是内部或外部命令，也不是可运行的程序或批处理文件 」，都些都是依赖未安装成功导致的。可以尝试执行 `pnpm config set registry https://registry.npmmirror.com/` 切换为国内淘宝源（也可以使用 [nrm](https://github.com/Pana/nrm) 一键切换源），然后删除根目录下 `/node_modules` 文件夹并重新安装依赖。

如果依旧无法运行（基本不太可能），可尝试删除根目录下 `/node_modules` 文件夹与 `pnpm-lock.yaml` 文件后，再删除 `package.json` 中 `"preinstall": "npx only-allow pnpm"` 这句脚本，最后使用 `npm / yarn` 进行安装依赖。但需要清楚一点，这样操作后，将无法与官方环境锁定的依赖包版本保持一致，可能会出现无法预知的问题，非必要情况下，请勿使用该方案。
:::

## 技术栈

了解并熟悉本套件使用到的技术栈，能让你更得心应手。

- [Vite](https://cn.vitejs.dev/)
- [Vue 3](https://cn.vuejs.org/) ([v3 迁移指南](https://v3-migration.vuejs.org/))
- [Vue Router 4](https://next.router.vuejs.org/zh/)
- [Pinia](https://pinia.vuejs.org/)