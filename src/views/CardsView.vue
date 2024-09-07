<script setup lang="ts">
import CardsList from '@/components/CardsList.vue'
import type { SearchResponse } from '@/types/search-response'
import { ref } from 'vue'
import TheSidebar from '@/components/TheSidebar.vue'

defineProps({
  title: {
    type: String,
    default: 'Github Repositories'
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const searchResponse = ref<SearchResponse>()
const loading = ref(false)
const error = ref<string | null>(null)

const handleSearch = async (payload: { searchQuery: string }) => {
  const url = `https://api.github.com/search/repositories?q=${payload.searchQuery}`
  loading.value = true
  error.value = null

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    searchResponse.value = result
  } catch (err) {
    error.value = 'Failed to fetch data'
    console.error('Fetch error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex">
    <aside>
      <TheSidebar @search="handleSearch" class="min-w-[150px] pr-4" />
    </aside>
    <div class="flex flex-col border-l-2 pl-4">
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <CardsList :repositories="searchResponse?.items"></CardsList>
    </div>
  </div>
</template>

<style scoped></style>
