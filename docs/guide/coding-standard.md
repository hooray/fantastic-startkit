# 代码规范

:::tip
请确保已阅读《[准备工作 - 开发环境](start#开发环境)》，并且按照文档说明安装好相关软件及扩展。
:::

为保证代码风格统一，请使用 [Visual Studio Code](https://code.visualstudio.com/) 做为开发 IDE ，框架源码里已提供相关配置文件，可直接测试效果：在保存代码时，会自动对当前文件进行代码格式化操作。

## IDE 配置

配置文件为 `.editorconfig` ，通常情况下无需做任何修改。

## ESLint

配置文件为 `.eslintrc` ，框架使用 [antfu/eslint-config](https://github.com/antfu/eslint-config) 做为基础规范，如果你对默认的规则有异议，可以查阅 [ESLint](https://eslint.org/) 官网规则并在 `.eslintrc` 文件中进行覆盖。

当你对规则进行修改后，原有的代码可能会因为规则的变动导致编辑器大量提示错误，你可以通过运行 `pnpm run lint:eslint` 进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。

::: tip
通过修改 `.eslintignore` 可忽略无需做代码规范校验的文件，例如在项目中导入了一些第三方的插件代码或组件代码，我们就可以将其进行忽略。
:::

## StyleLint

配置文件为 `.stylelintrc` ，如果你对默认的规则有异议，可以查阅 [Stylelint](https://stylelint.io/) 官网规则并在 `.stylelintrc` 文件中进行修改。

当你对规则进行修改后，原有的代码可能会因为规则的变动导致编辑器大量提示错误，你可以通过运行 `pnpm run lint:stylelint` 进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。

::: tip
通过修改 `.stylelintignore` 可忽略无需做代码规范校验的文件，例如在项目中导入了一些第三方的插件代码或组件代码，我们就可以将其进行忽略。
:::

## simple-git-hooks & lint-staged

由于 IDE 能做的事比较有限，只能对代码的书写规范进行格式化，对于一些无法自动修复的错误代码，如果没有改正到就被推送到 git 仓库，在多人协作开发时，可能会影响到别人的开发体验。所以框架集成了 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 和 [lint-staged](https://github.com/okonet/lint-staged) 这两个依赖来解决这一问题。

在提交代码时， simple-git-hooks 会通过 lint-staged 对本次提交变更的文件进行分别进行 eslint 和 stylelint 检测，如果有报错，则会阻止本次代码提交，直到开发者修改完所有错误代码后，才允许提交到 git 仓库，这样可以确保 git 仓库里的代码不会有不规范的代码。

::: tip 注意
请确保在安装依赖前，已经使用 `git init` 对项目进行过 git 环境初始化，如果你在安装依赖后再初始化了 git 环境，请在 git 环境初始化之后再执行一遍 `pnpm install` 安装命令。

此外，如果 git 仓库目录和框架目录并非同一个，则需要在 `package.json` 中修改 `postinstall` 脚本，切换到 git 所在目录。例如 git 目录是 `project/` ，而框架目录是 `project/fantastic-startkit/` ，则在 `package.json` 里找到 `simple-git-hooks` 配置并修改：

```json {2}
"simple-git-hooks": {
  "pre-commit": "cd ./fantastic-startkit/ && pnpm lint-staged",
  "preserveUnused": true
}
```

修改后重新执行一下 `pnpm install` 即可。
:::

### 移除

如果不想在 git 提交时强制进行代码规范校验，可以在 `package.json` 中移除 `simple-git-hooks` 配置：

```json
{
  "scripts": {
    "postinstall": "simple-git-hooks", // [!code --]
  },
  "simple-git-hooks": { // [!code --]
    "pre-commit": "pnpm lint-staged", // [!code --]
    "preserveUnused": true // [!code --]
  }, // [!code --]
}
```

然后手动删除 `.git/hooks/pre-commit` 文件即可。