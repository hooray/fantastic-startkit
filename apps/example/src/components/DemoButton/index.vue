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
    class="text-[13px] text-slate-900 tracking-wider font-bold px-5 py-2.5 border-2 border-slate-900 rounded-none bg-amber-400 inline-flex gap-2 cursor-pointer select-none uppercase shadow-[4px_4px_0_#0f172a] transition-all duration-150 items-center active:shadow-none hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[4px] hover:translate-y-[4px]"
    @click="emit('click')"
  >
    {{ label ?? '按钮' }}
  </button>
</template>
