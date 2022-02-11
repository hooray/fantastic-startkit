<script setup>
import { useTokenStore } from '@/store/modules/token'
const tokenStore = useTokenStore()
</script>

<template>
    <div>token信息：{{ tokenStore.token }}</div>
</template>
