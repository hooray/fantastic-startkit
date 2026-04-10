# 开始

本项目采用 Monorepo（单体仓库）架构，基于 pnpm workspace 管理多个应用和公共包。

Monorepo 的优势：

- **代码共享**：多个应用可共享公共代码和依赖
- **统一管理**：统一版本控制和依赖管理
- **开发效率**：一次修改，多处生效
- **原子提交**：跨应用的变更可在一个提交中完成

## 目录结构

```
fantastic-startkit/
├── apps/              # 应用目录
│   ├── core           # 应用源码
│   └── example        # 示例应用
├── packages/          # 公共包目录
├── docs/              # 文档站点
├── scripts/           # 脚本工具
└── package.json       # 根目录 package.json
```

## 应用说明

### apps/core

应用源码，不含示例代码，仅保留必要的项目结构，适合直接用于项目开发。

使用时建议从此处复制一份在 `apps/` 目录下，同时修改 `apps/<app>/package.json` 中 `name` 属性。

这样做的目的是确保项目内始终保留一份原始应用源码，方便后续扩展更多应用。

### apps/example

示例应用，包含丰富的示例代码和最佳实践，适合学习和参考。

## 常用命令

:::tip 建议
在安装依赖前，可以将不需要的应用先删除。假设你已经足够熟悉框架，则可以将 `apps/example` 应用文件夹直接删除，减少无用依赖的安装。
:::

根目录 `package.json` 提供了统一的命令入口：

```bash
# 安装所有依赖
pnpm install

# 启动开发服务器（交互式选择应用）
pnpm dev

# 构建项目（交互式选择应用）
pnpm build

# 预览构建产物（交互式选择应用）
pnpm serve

# 代码检查
pnpm lint
```

其中 `pnpm lint` 会按以下顺序执行：

1. 在各应用目录执行 `vue-tsc`
2. 在根目录执行 `eslint`
3. 在根目录执行 `stylelint`

::: warning 报错
如果无法正常安装依赖，可能是因为 npm 默认源无法访问，可以尝试执行 `pnpm config set registry https://registry.npmmirror.com/` 切换为国内 npmmirror 镜像源（也可以使用 [nrm](https://github.com/Pana/nrm) 一键切换源），然后删除 `node_modules/` 文件夹并重新安装依赖。
:::

## 应用级命令

如果明确知道要操作哪个应用，也可以直接使用 pnpm filter 命令：

```bash
# 运行指定应用
pnpm -F @fantastic-startkit/core dev

# 构建指定应用
pnpm -F @fantastic-startkit/core build

# 在指定应用下执行任意命令
pnpm -F @fantastic-startkit/core lint
```

应用目录中的 `lint` 命令仅执行 `vue-tsc` ，用于当前应用的类型检查。

## 依赖管理

### 根目录依赖

在根目录安装的依赖为所有应用和包共享，通常是：
- ESLint、Stylelint 等代码规范工具
- 脚本工具（如 tsx、taze）
- Git 钩子相关依赖

### 应用/包级依赖

每个应用或包可以拥有自己独立的依赖，安装在各自的 `node_modules/` 目录下。

### 添加新依赖

```bash
# 为指定应用添加依赖
pnpm add axios -F @fantastic-startkit/core

# 为根目录添加开发依赖
pnpm add -D typescript -w
```

你也可以全局安装 [`@rizumu/nai`](https://github.com/LittleSound/nai) ，并通过交互式的 CLI 将依赖包安装到指定应用，如下图：

![](https://github.com/user-attachments/assets/83d164f3-8a13-41f1-a453-23ffd81ed387)
