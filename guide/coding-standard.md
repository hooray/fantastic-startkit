# 代码规范

## IDE 编辑器

:::tip
请确保已阅读《[准备工作 - 开发环境](start.md#开发环境)》，并且按照文档说明安装好相关软件及扩展。
:::

为保证代码风格统一，请使用 [Visual Studio Code](https://code.visualstudio.com/) 做为开发 IDE ，本套件已提供相关配置文件，可直接测试效果：在保存代码时，会自动对当前文件进行代码格式化操作。

## ESLint

相关文件分别为 `.eslintrc` 和 `.eslintignore` 。

当你在 `.eslintrc` 中修改了规则后，可以执行 `pnpm run lint:eslint` 命令，该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。

如果不想使用，可将 `src/` 目录加入 `.eslintignore` 中进行忽略。

## StyleLint

相关文件分别为 `.stylelintrc` 和 `.stylelintignore` 。

当你在 `.stylelintrc` 中修改了规则后，可以执行 `pnpm run lint:stylelint` 命令，该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。

如果不想使用，可将 `src/` 目录加入 `.stylelintignore` 中进行忽略。

## husky & lint-staged

IDE 能做的事比较有限，仅对代码的写法规范进行格式化，对于用户没发现的错误代码，则需要借助 [husky](https://github.com/typicode/husky) 和 [lint-staged](https://github.com/okonet/lint-staged) 这两个依赖来解决，本套件已默认集成该依赖。

在提交代码时，husky 会通过 lint-staged 对 `./src` 目录下的 js vue scss 文件进行分别进行 eslint 和 stylelint 检测，如果有报错，则会阻止本次代码提交，直到开发者修改完所有错误代码后，才允许提交到 git 仓库。

这样可以确保 git 仓库里的代码不会有语法错误，在多人协作开发时尤为重要。

::: tip 更多
可通过修改 `.eslintignore` 和 `.stylelintignore` 忽略无需做代码规范校验的文件，例如在项目中引用了一些第三方的插件或组件，我们就可以将其进行忽略。
:::