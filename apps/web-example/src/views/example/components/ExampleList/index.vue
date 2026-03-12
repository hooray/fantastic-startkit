<script setup lang="ts">
defineOptions({
  name: 'ExampleList',
})

defineProps<{
  list: string[]
}>()
</script>

<template>
  <div class="mb-4">
    <transition-group name="list" tag="ul" class="m-0 list-none p-0">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="flex items-center gap-2.5 border-b border-slate-100 py-2.5 text-[13.5px] text-slate-600 last:border-b-0"
      >
        <span class="size-1.5 shrink-0 rounded-full bg-blue-500" />
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
.list-enter-active {
  transition: all 0.2s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-8px);
}
</style>
