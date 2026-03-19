<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
const exampleStore = useExampleStore()

const news = computed(() => exampleStore.news)
const newsCount = computed(() => exampleStore.newsCount)

function getInfo() {
  return exampleStore.getNews()
}

function removeLast() {
  return exampleStore.removeLast()
}

function getLength() {
  // eslint-disable-next-line no-alert
  alert(newsCount.value)
}
</script>

<template>
  <div class="max-w-full">
    <div class="mb-7">
      <h2 class="text-[22px] text-slate-900 tracking-tight font-bold mb-2">
        Pinia 状态管理
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        跨路由共享状态，切换页面后返回数据依然保留。
      </p>
    </div>

    <div class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
      <div class="mb-5 flex flex-wrap gap-2.5">
        <button
          class="text-[13px] text-white font-semibold px-4 py-2 border-0 rounded-lg bg-blue-600 inline-flex gap-1.5 cursor-pointer transition-colors items-center hover:bg-blue-700"
          type="button"
          @click="getInfo"
        >
          获取数据
        </button>
        <button
          class="text-[13px] text-slate-600 font-semibold px-4 py-2 border border-slate-200 rounded-lg bg-transparent inline-flex gap-1.5 cursor-pointer transition-colors items-center hover:text-slate-900 hover:bg-slate-100"
          type="button"
          @click="removeLast"
        >
          删除最后一条
        </button>
        <button
          class="text-[13px] text-slate-600 font-semibold px-4 py-2 border border-slate-200 rounded-lg bg-transparent inline-flex gap-1.5 cursor-pointer transition-colors items-center hover:text-slate-900 hover:bg-slate-100"
          type="button"
          @click="getLength"
        >
          查看数据长度
        </button>
      </div>

      <div v-if="newsCount" class="text-[12.5px] text-emerald-700 font-medium mb-4 px-4 py-2.5 border border-emerald-100 rounded-lg bg-emerald-50">
        ✦ 切换路由后返回，数据依然存在
      </div>

      <transition-group
        v-if="news.length"
        name="news"
        tag="ul"
        class="m-0 p-0 list-none"
      >
        <li
          v-for="(item, index) in news"
          :key="index"
          class="py-2.5 border-b border-slate-100 flex gap-3 items-baseline last:border-b-0"
        >
          <span class="text-[11px] text-slate-400 shrink-0">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="text-[13.5px] text-slate-600">{{ item.title }}</span>
        </li>
      </transition-group>

      <div v-else class="text-sm text-slate-400 py-8 text-center">
        点击「获取数据」加载数据
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-enter-active {
  transition: all 0.2s ease;
}

.news-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
</style>
