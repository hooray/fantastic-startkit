export {}

declare global {
  const computed: typeof import('vue').computed
}

declare global {
  // @ts-ignore
  export type { ComponentPublicInstance, VNode } from 'vue'
  import('vue')
}
