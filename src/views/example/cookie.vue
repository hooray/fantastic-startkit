<template>
    <div>
        <button type="button" @click="setCookie">设置cookie</button>
        <button type="button" @click="removeCookie">删除cookie</button>
        <button type="button" @click="isSetCookie">判断cookie是否设置</button>
        <div>a的cookie值是：{{ cookie }}</div>
    </div>
</template>

<script setup>
const { proxy } = getCurrentInstance()

let cookie = ref(proxy.$cookies.get('a'))

function setCookie() {
    proxy.$cookies.set('a', 'abc')
    cookie.value = proxy.$cookies.get('a')
}

function removeCookie() {
    proxy.$cookies.remove('a', 'abc')
    cookie.value = proxy.$cookies.get('a')
}

function isSetCookie() {
    alert(!!proxy.$cookies.get('a'))
}
</script>
