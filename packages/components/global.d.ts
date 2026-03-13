import type FsIcon from './src/icon/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    FsIcon: typeof FsIcon
  }
}

export {}
