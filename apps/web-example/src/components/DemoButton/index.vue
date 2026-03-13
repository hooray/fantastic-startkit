<script setup lang="ts">
defineOptions({
  name: 'DemoButton',
})

defineProps<{
  label?: string
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    class="inline-flex cursor-pointer select-none items-center gap-2 border-2 border-slate-900 rounded-none bg-amber-400 px-5 py-2.5 text-[13px] text-slate-900 font-bold tracking-wider uppercase shadow-[4px_4px_0_#0f172a] transition-all duration-150 active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-none hover:shadow-none"
    @click="emit('click')"
  >
    {{ label ?? '按钮' }}
  </button>
</template>
