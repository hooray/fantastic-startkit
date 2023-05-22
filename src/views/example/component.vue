<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
import ExampleList from './components/ExampleList/index.vue'

const index = ref(1)
const list = ref(['张三', '李四', '王五'])
function add() {
  list.value.push(`这是新添加的${index.value++}`)
}
</script>

<template>
  <div>
    <p>这是一个非全局组件，需要在页面上引用该组件才能使用</p>
    <ExampleList :list="list" />
    <button @click="add">
      添加一列
    </button>
  </div>
</template>
