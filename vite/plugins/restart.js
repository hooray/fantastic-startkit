import ViteRestart from 'vite-plugin-restart'
import fs from 'fs'

export default function createRestart() {
    const pluginsFile = []
    fs.readdirSync('vite/plugins').map(dirname => {
        if (fs.statSync(`vite/plugins/${dirname}`).isFile()) {
            pluginsFile.push(`vite/plugins/${dirname}`)
        }
    })
    return ViteRestart({
        restart: pluginsFile
    })
}
