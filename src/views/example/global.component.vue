<template>
    <div>
        <p>全局组件会自动注册</p>
        <p>使用方法：</p>
        <ol>
            <li>全局组件统一放在 ./src/components/ 目录下，需要注意各个组件按文件夹区分，文件夹名称与组件名无关联</li>
            <li>文件夹内必须有文件名为 index.vue 的组件入口</li>
            <li>普通组件必须设置 name 并保证其唯一，自动注册会将组件的 name 设为组件名，可参考 <RouterLink to="/example/svgicon">SvgIcon</RouterLink> 组件写法</li>
        </ol>
    </div>
</template>
