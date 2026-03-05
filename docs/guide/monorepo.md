# Monorepo 架构

本项目采用 Monorepo（单体仓库）架构，基于 pnpm workspace 管理多个应用和公共包。

## 目录结构

```
fantastic-startkit/
├── apps/              # 应用目录
│   ├── web-example    # 示例应用
│   └── web-template   # 项目模板
├── packages/          # 公共包目录
├── docs/              # 文档站点
├── scripts/           # 脚本工具
├── package.json       # 根目录 package.json
└── pnpm-workspace.yaml
```

## 应用说明

### apps/web-example

示例应用，包含丰富的示例代码和最佳实践，适合学习和参考。

### apps/web-template

项目模板，不含示例代码，仅保留必要的项目结构，适合直接用于项目开发。

建议使用时直接复制一份在 `apps/` 目录下

## 常用命令

根目录 `package.json` 提供了统一的命令入口：

```bash
# 安装所有依赖
pnpm install

# 启动开发服务器（交互式选择应用）
pnpm dev

# 构建项目（交互式选择应用）
pnpm build

# 代码检查
pnpm lint
```

执行 `pnpm dev` 或 `pnpm build` 时，会通过交互式命令行提示选择要运行或构建的应用。

## 应用级命令

如果明确知道要操作哪个应用，也可以直接使用 pnpm filter 命令：

```bash
# 运行指定应用
pnpm -F @fantastic-startkit/web-template dev

# 构建指定应用
pnpm -F @fantastic-startkit/web-template build

# 在指定应用下执行任意命令
pnpm -F @fantastic-startkit/web-template lint
```

## 依赖管理

### 根目录依赖

在根目录安装的依赖为所有应用和包共享，通常是：
- ESLint、Stylelint 等代码规范工具
- 脚本工具（如 tsx、taze）
- Git 钩子相关依赖

### 应用/包级依赖

每个应用或包可以拥有自己独立的依赖，安装在各自的 `node_modules` 目录下。

### 添加新依赖

```bash
# 为指定应用添加依赖
pnpm add axios -F @fantastic-startkit/web-template

# 为根目录添加开发依赖
pnpm add -D typescript -w
```

## 优势

- **代码共享**：多个应用可共享公共代码和依赖
- **统一管理**：统一版本控制和依赖管理
- **开发效率**：一次修改，多处生效
- **原子提交**：跨应用的变更可在一个提交中完成
