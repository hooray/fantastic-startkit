<route lang="yaml">
name: exampleParams
meta:
  layout: example
</route>

<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <div>params:{{ route.params.test }}</div>
  </div>
</template>
