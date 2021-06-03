import { createStore, createLogger } from 'vuex'

const modules = {}
const modulesContext = import.meta.globEager('./modules/*.js')
Object.keys(modulesContext).forEach(v => {
    modules[v.slice(10, -3)] = modulesContext[v].default
})

export default createStore({
    modules: modules,
    strict: !import.meta.env.PROD,
    plugins: !import.meta.env.PROD ? [createLogger()] : []
})
