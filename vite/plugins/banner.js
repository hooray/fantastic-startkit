import banner from 'vite-plugin-banner'

export default function createBanner() {
    return banner(`
/**
 * 由 Fantastic-template 提供技术支持
 * https://hooray.gitee.io/fantastic-template/
 * Powered by Fantastic-template
 * https://hooray.github.io/fantastic-template/
 */
    `)
}
