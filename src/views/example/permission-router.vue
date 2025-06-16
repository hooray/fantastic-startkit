<route lang="yaml">
meta:
  layout: example
  requireLogin: true
</route>

<script setup lang="ts">
const userStore = useUserStore()
</script>

<template>
  <div>token信息：{{ userStore.token }}</div>
</template>
