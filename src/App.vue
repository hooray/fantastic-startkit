<template>
    <div id="app">
        <RouterView v-if="isRouterAlive" />
    </div>
</template>

<script>
export default {
    provide() {
        return {
            reload: this.reload
        }
    },
    data() {
        return {
            isRouterAlive: true
        }
    },
    watch: {
        $route: 'routeChange',
        '$store.state.settings.title': {
            handler() {
                this.setDocumentTitle()
            },
            immediate: true
        }
    },
    methods: {
        reload() {
            this.isRouterAlive = false
            this.$nextTick(() => (this.isRouterAlive = true))
        },
        routeChange(newVal, oldVal) {
            if (newVal.name == oldVal.name) {
                this.reload()
            }
        },
        setDocumentTitle() {
            let title = this.$store.state.settings.title
            document.title = `${title} - ${import.meta.env.VITE_APP_TITLE}`
        }
    }
}
</script>
