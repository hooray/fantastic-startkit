import type { ComponentResolver, TypeImport } from 'unplugin-vue-components'

const COMPONENT_PREFIX = 'Fs'

// 所有已注册的组件名（与 index.ts 导出保持同步）
// 这是唯一数据源，resolver 和 types 都从这里读取
const COMPONENT_NAMES = [
  'FsIcon',
  // 新增组件时，在此处添加对应名称
] as const

/**
 * unplugin-vue-components resolver
 * 用于模板中自动导入组件
 */
export function FantasticComponentsResolver(): ComponentResolver {
  const names = new Set<string>(COMPONENT_NAMES)
  return {
    type: 'component',
    resolve(name: string) {
      if (name.startsWith(COMPONENT_PREFIX) && names.has(name)) {
        return {
          name,
          from: '@fantastic-startkit/components',
        }
      }
    },
  }
}

/**
 * unplugin-vue-components types 配置
 * 用于在生成的 components.d.ts 中声明全局组件类型
 *
 * @example 在 vite 配置中使用：
 * ```ts
 * import { FantasticComponentsResolver, FantasticComponentsType } from '@fantastic-startkit/components/resolver'
 *
 * components({
 *   resolvers: [FantasticComponentsResolver()],
 *   types: [FantasticComponentsType],
 * })
 * ```
 */
export const FantasticComponentsType: TypeImport = {
  from: '@fantastic-startkit/components',
  names: [...COMPONENT_NAMES],
}
