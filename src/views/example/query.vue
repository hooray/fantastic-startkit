<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <div>query:{{ route.query.test }}</div>
  </div>
</template>
