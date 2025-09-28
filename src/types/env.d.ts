/// <reference types="vite/client" />
interface ImportMetaEnv {
  // Auto generate by env-parse
  /**
   * 页面标题
   */
  readonly VITE_APP_TITLE: string
  /**
   * 接口请求地址，会设置到 axios 的 baseURL 参数上
   */
  readonly VITE_APP_API_BASEURL: string
  /**
   * 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
   */
  readonly VITE_APP_DEBUG_TOOL: string
  /**
   * 是否开启代理
   */
  readonly VITE_ENABLE_PROXY: boolean
  /**
   * 是否启用 Vue 开发工具
   */
  readonly VITE_ENABLE_VUE_DEVTOOLS: boolean
  /**
   * 是否启用 console 工具
   */
  readonly VITE_ENABLE_CONSOLE: boolean
  /**
   * 启动编辑器，该配置用于 vite-plugin-vue-devtools 和 unplugin-turbo-console
   * 支持IDE列表 https://github.com/yyx990803/launch-editor#supported-editors
   */
  readonly VITE_LAUNCH_EDITOR: string
}
