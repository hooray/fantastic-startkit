<script setup name="ExampleList">
defineProps({
    list: Array
})
</script>

<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
