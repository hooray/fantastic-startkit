import { h } from 'vue'
import Theme from 'vitepress/theme'
import './fonts/fira_code/fira_code.css'
import SponsorsAside from './components/SponsorsAside.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'aside-bottom': () => h(SponsorsAside),
    })
  },
}
