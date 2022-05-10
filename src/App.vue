<script setup>
const isRouterAlive = ref(true)

import useSettingsStore from '@/store/modules/settings'
const settingsStore = useSettingsStore()

provide('reload', reload)
function reload() {
    isRouterAlive.value = false
    nextTick(() => (isRouterAlive.value = true))
}

watch(() => settingsStore.title, () => {
    let title = settingsStore.title
    document.title = title ? `${title} - ${import.meta.env.VITE_APP_TITLE}` : import.meta.env.VITE_APP_TITLE
}, {
    immediate: true
})
</script>

<template>
    <div id="app">
        <RouterView v-if="isRouterAlive" />
    </div>
</template>
