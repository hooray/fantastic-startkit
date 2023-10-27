<route lang="yaml">
meta:
  layout: example
  title: Iconify
</route>

<template>
  <div>
    <p>Iconify 图标</p>
    <SvgIcon name="logos:vue" class="text-[48px]" />
    <SvgIcon name="logos:vitejs" class="text-[48px]" />
    <SvgIcon name="uim:box" class="text-[48px]" />
    <p>搭配 unocss 使用，将不会渲染成 svg 标签</p>
    <SvgIcon name="i-logos:vue" class="text-[48px]" />
    <SvgIcon name="i-logos:vitejs" class="text-[48px]" />
    <SvgIcon name="i-uim:box" class="text-[48px]" />
    <p>使用方法：</p>
    <ol>
      <li>上 <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a> 找寻需要的图标</li>
      <li>复制图标名到 SvgIcon 组件的 name 属性中即可，格式为 <kbd>{图标集}:{图标名}</kbd> ，如果要搭配 unocss 使用，则格式为 <kbd>i-{图标集}:{图标名}</kbd></li>
    </ol>
  </div>
</template>
