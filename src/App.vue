<script lang="ts" setup>
import eruda from 'eruda'
import VConsole from 'vconsole'
import useSettingsStore from '@/store/modules/settings'

const isRouterAlive = ref(true)
const settingsStore = useSettingsStore()

provide('reload', reload)
function reload() {
  isRouterAlive.value = false
  nextTick(() => (isRouterAlive.value = true))
}

watch(() => settingsStore.title, () => {
  const title = settingsStore.title
  document.title = title ? `${title} - ${import.meta.env.VITE_APP_TITLE}` : import.meta.env.VITE_APP_TITLE
}, {
  immediate: true,
})

import.meta.env.VITE_APP_DEBUG_TOOL === 'eruda' && eruda.init()
import.meta.env.VITE_APP_DEBUG_TOOL === 'vconsole' && new VConsole()
</script>

<template>
  <div id="app">
    <RouterView v-if="isRouterAlive" />
  </div>
</template>
