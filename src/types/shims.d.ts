declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import type { RouteMeta } from 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}
