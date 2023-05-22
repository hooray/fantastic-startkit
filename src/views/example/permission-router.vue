<route lang="yaml">
meta:
  layout: example
  requireLogin: true
</route>

<script setup lang="ts">
import useTokenStore from '@/store/modules/token'

const tokenStore = useTokenStore()
</script>

<template>
  <div>token信息：{{ tokenStore.token }}</div>
</template>
