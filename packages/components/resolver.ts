import type { ComponentResolver, TypeImport } from 'unplugin-vue-components'
import { createRequire } from 'node:module'

const COMPONENT_PREFIX = 'Fs'
const PACKAGE_NAME = createRequire(import.meta.url)('./package.json').name

const COMPONENT_NAMES = [
  'FsIcon',
] as const

export function ComponentsResolver(): ComponentResolver {
  const names = new Set<string>(COMPONENT_NAMES)
  return {
    type: 'component',
    resolve(name: string) {
      if (name.startsWith(COMPONENT_PREFIX) && names.has(name)) {
        return {
          name,
          from: PACKAGE_NAME,
        }
      }
    },
  }
}

export const ComponentsType: TypeImport = {
  from: PACKAGE_NAME,
  names: [...COMPONENT_NAMES],
}
