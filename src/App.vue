<template>
    <div id="app">
        <RouterView v-if="isRouterAlive" />
    </div>
</template>

<script setup>
import { provide, ref, watch, nextTick } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const isRouterAlive = ref(true)

provide('reload', reload)
function reload() {
    isRouterAlive.value = false
    nextTick(() => (isRouterAlive.value = true))
}

watch(() => route, (newVal, oldVal) => routeChange(newVal, oldVal))
function routeChange(newVal, oldVal) {
    store.commit('settings/setTitle', route.meta.title)
    if (newVal.name == oldVal.name) {
        reload()
    }
}

watch(() => store.state.settings.title, () => {
    let title = store.state.settings.title
    document.title = title ? `${title} - ${import.meta.env.VITE_APP_TITLE}` : import.meta.env.VITE_APP_TITLE
}, {
    immediate: true
})
</script>
