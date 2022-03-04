import Layouts from 'vite-plugin-vue-layouts'

export default function createLayouts() {
    return Layouts({
        layoutsDirs: 'src/layout',
        defaultLayout: 'index'
    })
}
