import 'vue-router'

declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}
