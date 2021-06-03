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
        $route: 'routeChange'
    },
    methods: {
        reload() {
            this.isRouterAlive = false
            this.$nextTick(() => (this.isRouterAlive = true))
        },
        routeChange(newVal, oldVal) {
            this.$store.commit('settings/setTitle', this.$route.meta.title)
            if (newVal.name == oldVal.name) {
                this.reload()
            }
        }
    }
}
</script>
