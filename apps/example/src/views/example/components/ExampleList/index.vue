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
    <transition-group name="list" tag="ul" class="m-0 p-0 list-none">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="text-[13.5px] text-slate-600 py-2.5 border-b border-slate-100 flex gap-2.5 items-center last:border-b-0"
      >
        <span class="rounded-full bg-blue-500 shrink-0 size-1.5" />
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
