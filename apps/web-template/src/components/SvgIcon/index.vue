<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'SvgIcon',
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
  <i class="relative size-[1em] flex-inline items-center justify-center fill-current leading-[1em]">
    <i v-if="outputType === 'unocss'" class="size-inherit shrink-0" :class="name" />
    <Icon v-else-if="outputType === 'iconify'" :icon="name" class="shrink-0 size-inherit!" />
    <svg v-else-if="outputType === 'svg'" class="size-inherit shrink-0" aria-hidden="true">
      <use :xlink:href="`#icon-${name}`" />
    </svg>
  </i>
</template>
