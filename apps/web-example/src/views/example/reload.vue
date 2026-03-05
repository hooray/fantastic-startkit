<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
const reload = inject('reload') as any

const value = ref(0)

function plus() {
  value.value += 1
}
</script>

<template>
  <div>
    <p>可以修改一下 input 框内的值，然后点击刷新按钮查看效果</p>
    <p>
      <input v-model="value" type="text">
      <button type="button" @click="plus">
        +1
      </button>
    </p>
    <button type="button" @click="reload">
      刷新
    </button>
  </div>
</template>
