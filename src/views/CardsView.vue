<script setup lang="ts">
import CardsList from '@/components/library/CardsList.vue'
import { useSearchStore } from '@/stores/search-store'
import type { SearchResponse } from '@/types/search-response'
import { ref, watch } from 'vue'

const searchResponse = ref<SearchResponse>({ items: [], total_count: 0 })
const selectedLanguages = ref<string[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchStore = useSearchStore()

watch(
  [() => searchStore.searchQuery, () => searchStore.searchSelectedLanguages],
  ([newSearchQuery, newSearchSelectedLanguages]) => {
    fetchRepositories(newSearchQuery)
    selectedLanguages.value = newSearchSelectedLanguages
  }
)

const fetchRepositories = async (newSearchQuery: string) => {
  const url = `https://api.github.com/search/repositories?q=${newSearchQuery}`
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
  <div class="flex flex-col pl-4">
    <h1 class="text-3xl font-bold">Github Repositories</h1>
    <CardsList
      :repositories="searchResponse?.items"
      :selectedLanguages="selectedLanguages"
    ></CardsList>
  </div>
</template>

<style scoped></style>
