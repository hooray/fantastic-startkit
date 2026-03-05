<route lang="yaml">
meta:
  layout: example
</route>

<template>
  <div>
    <p>全局组件无需手动引入，可直接使用</p>
    <ol>
      <li>
        全局组件相关文件存放在 ./src/components/ 目录下，需要注意各个组件按文件夹区分，文件夹名称即为组件名，可参考 <RouterLink to="/example/svgicon">
          SvgIcon
        </RouterLink> 组件写法
      </li>
      <li>文件夹内必须有文件名为 index.vue 的组件入口</li>
    </ol>
  </div>
</template>
