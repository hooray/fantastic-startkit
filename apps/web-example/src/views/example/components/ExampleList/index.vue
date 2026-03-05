<script setup lang="ts">
defineOptions({
  name: 'ExampleList',
})

defineProps<{
  list: string[]
}>()
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
