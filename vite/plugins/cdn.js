import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

export default function createCdn() {
    return importToCDN({
        modules: [
            autoComplete('vue')
        ]
    })
}
