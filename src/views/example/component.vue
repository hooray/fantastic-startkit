<template>
    <div>
        <p>这是一个非全局组件，需要在页面上引用该组件才能使用</p>
        <ExampleList :list="list" />
        <button @click="add">添加一列</button>
    </div>
</template>

<script setup>
import ExampleList from './components/ExampleList/index.vue'

let index = ref(1)
const list = ref(['张三', '李四', '王五'])
const add = () => {
    list.value.push('这是新添加的' + index.value++)
}
</script>
