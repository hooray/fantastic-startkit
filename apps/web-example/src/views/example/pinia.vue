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
  <div class="max-w-[760px]">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        Pinia 状态管理
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        跨路由共享状态，切换页面后返回数据依然保留。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <div class="mb-5 flex flex-wrap gap-2.5">
        <button
          class="inline-flex cursor-pointer items-center gap-1.5 border-0 rounded-lg bg-blue-600 px-4 py-2 text-[13px] text-white font-semibold transition-colors hover:bg-blue-700"
          type="button"
          @click="getInfo"
        >
          获取数据
        </button>
        <button
          class="inline-flex cursor-pointer items-center gap-1.5 border border-slate-200 rounded-lg bg-transparent px-4 py-2 text-[13px] text-slate-600 font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900"
          type="button"
          @click="removeLast"
        >
          删除最后一条
        </button>
        <button
          class="inline-flex cursor-pointer items-center gap-1.5 border border-slate-200 rounded-lg bg-transparent px-4 py-2 text-[13px] text-slate-600 font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900"
          type="button"
          @click="getLength"
        >
          查看数据长度
        </button>
      </div>

      <div v-if="newsCount" class="mb-4 border border-emerald-100 rounded-lg bg-emerald-50 px-4 py-2.5 text-[12.5px] text-emerald-700 font-medium">
        ✦ 切换路由后返回，数据依然存在
      </div>

      <transition-group
        v-if="news.length"
        name="news"
        tag="ul"
        class="m-0 list-none p-0"
      >
        <li
          v-for="(item, index) in news"
          :key="index"
          class="flex items-baseline gap-3 border-b border-slate-100 py-2.5 last:border-b-0"
        >
          <span class="font-code shrink-0 text-[11px] text-slate-400">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="text-[13.5px] text-slate-600">{{ item.title }}</span>
        </li>
      </transition-group>

      <div v-else class="py-8 text-center text-sm text-slate-400">
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
