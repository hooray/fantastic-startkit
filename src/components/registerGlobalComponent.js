export function registerGlobalComponent(app) {
    const componentsContext = import.meta.globEager('./**/index.vue')
    Object.keys(componentsContext).forEach(v => {
        // 获取文件中的 default 模块
        const component = componentsContext[v].default
        app.component(component.name, component)
    })
}
