<route lang="yaml">
name: exampleParams
meta:
  layout: example
</route>

<template>
  <div>
    <div>params:{{ $route.params.test }}</div>
  </div>
</template>
