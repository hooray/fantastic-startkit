<script setup lang="ts">
defineProps({
  list: Array,
})

defineOptions({
  name: 'ExampleList',
})
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
