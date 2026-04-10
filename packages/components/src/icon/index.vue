<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'FsIcon',
})

const props = defineProps<{
  name: string
}>()

const outputType = computed(() => {
  if (/i-[^:]+:[^:]+/.test(props.name)) {
    return 'unocss'
  }
  else if (props.name.includes(':')) {
    return 'iconify'
  }
  else {
    return 'svg'
  }
})
</script>

<template>
  <i class="leading-[1em] flex-inline size-[1em] items-center justify-center relative fill-current">
    <i v-if="outputType === 'unocss'" class="shrink-0 size-inherit" :class="name" />
    <Icon v-else-if="outputType === 'iconify'" :icon="name" class="shrink-0 size-inherit!" />
    <svg v-else-if="outputType === 'svg'" class="shrink-0 size-inherit" aria-hidden="true">
      <use :xlink:href="`./__spritemap#sprite-${name}`" />
    </svg>
  </i>
</template>
