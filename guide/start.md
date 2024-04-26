# 开始

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
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) 在代码中高亮颜色
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) 高亮显示匹配的标签
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) 图片预览
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 彩虹缩进提示
:::

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

运行成功后，会自动访问页面，默认情况下，地址为 `http://localhost:5173`

如果你已经了解本套件的特性，我们推荐你通过拉取默认 `main` 分支进行项目开发，该分支不含任何示例代码。

```bash
# 可选择从 github 或 gitee 克隆
git clone https://github.com/hooray/fantastic-startkit.git
# 或者
git clone https://gitee.com/hooray/fantastic-startkit.git
```

::: warning 报错
安装依赖时提示 404 ，或者安装结束后，运行时提示「 'vite' 不是内部或外部命令，也不是可运行的程序或批处理文件 」，都些都是依赖未安装成功导致的。可以尝试执行 `pnpm config set registry https://registry.npmmirror.com/` 切换为国内 npmmirror 源（也可以使用 [nrm](https://github.com/Pana/nrm) 一键切换源），然后删除根目录下 `/node_modules` 文件夹并重新安装依赖。

如果依旧无法运行（基本不太可能），可尝试删除根目录下 `/node_modules` 文件夹与 `pnpm-lock.yaml` 文件后，再删除 `package.json` 中 `"preinstall": "npx only-allow pnpm"` 这句脚本，最后使用 `npm / yarn` 进行安装依赖。但需要清楚一点，这样操作后，将无法与官方环境锁定的依赖包版本保持一致，可能会出现无法预知的问题，非必要情况下，请勿使用该方案。
:::

## 技术栈

了解并熟悉框架使用到的技术栈，能让你使用本框架更得心应手。

- [Vite](https://cn.vitejs.dev/)
- [Vue 3](https://cn.vuejs.org/) ([v3 迁移指南](https://v3-migration.vuejs.org/))
- [Vue Router](https://router.vuejs.org/zh/)
- [Pinia](https://pinia.vuejs.org/zh/)
- [UnoCSS](https://unocss.dev/)
