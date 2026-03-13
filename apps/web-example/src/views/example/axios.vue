<route lang="yaml">
meta:
  layout: example
</route>

<script setup lang="ts">
import apiNews from '@/api/modules/news'

const news = ref<any[]>([])
const loading = ref(false)

async function getInfo() {
  loading.value = true
  try {
    const [res1, res2] = await Promise.all([apiNews.list(), apiNews.list()])
    news.value = [...res1.data.list, ...res2.data.list]
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-full">
    <div class="mb-7">
      <h2 class="mb-2 text-[22px] text-slate-900 font-bold tracking-tight">
        Axios 请求
      </h2>
      <p class="text-sm text-slate-500 leading-relaxed">
        使用 <code class="font-code border border-blue-100 rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-600">Promise.all</code>
        并发请求两个接口，合并返回的 mock 数据。
      </p>
    </div>

    <div class="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
      <div class="mb-5">
        <button
          class="inline-flex cursor-pointer items-center gap-2 border-0 rounded-lg bg-blue-600 px-4 py-2 text-[13px] text-white font-semibold transition-colors disabled:cursor-not-allowed hover:bg-blue-700 disabled:opacity-50"
          :disabled="loading"
          @click="getInfo"
        >
          <span v-if="loading" class="spinner" />
          {{ loading ? '请求中...' : '获取 Mock 数据' }}
        </button>
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

      <div v-else-if="!loading" class="py-8 text-center text-sm text-slate-400">
        点击按钮获取数据
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgb(255 255 255 / 40%);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.news-enter-active {
  transition: all 0.2s ease;
}

.news-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
</style>
