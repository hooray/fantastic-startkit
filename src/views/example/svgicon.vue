<template>
    <div>
        <p>这是两个 Svg Icon 图标</p>
        <svg-icon name="example" class="example-icon" />
        <svg-icon name="example.color" class="example-icon" />
        <p>使用方法：</p>
        <ol>
            <li>上 <a href="https://www.iconfont.cn/" target="_blank">Iconfont</a> 下载需要的 svg 图标</li>
            <li>将 svg 文件放入 assets/icons 目录，文件名即为 name</li>
        </ol>
    </div>
</template>

<style scoped>
.example-icon {
    font-size: 48px;
}
</style>
