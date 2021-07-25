import vue from '@vitejs/plugin-vue'

import createHtml from './html'
import createSvgIcon from './svg-icon'
import createMock from './mock'
import createCompression from './compression'
import createSpritesmith from './spritesmith'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    vitePlugins.push(createHtml(viteEnv, isBuild))
    vitePlugins.push(createSvgIcon(isBuild))
    vitePlugins.push(createMock())
    isBuild && vitePlugins.push(...createCompression(viteEnv))
    vitePlugins.push(...createSpritesmith())
    return vitePlugins
}
