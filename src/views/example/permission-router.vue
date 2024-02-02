<route lang="yaml">
meta:
  layout: example
  requireLogin: true
</route>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
</script>

<template>
  <div>token信息：{{ userStore.token }}</div>
</template>
