<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
})

defineOptions({
  name: 'SvgIcon',
})
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentcolor;
  overflow: hidden;
}
</style>
