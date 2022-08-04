import banner from 'vite-plugin-banner'

export default function createBanner() {
  return banner(`
/**
 * 由 Fantastic-startkit 提供技术支持
 * https://hooray.gitee.io/fantastic-startkit/
 * Powered by Fantastic-startkit
 * https://hooray.github.io/fantastic-startkit/
 */
  `)
}
