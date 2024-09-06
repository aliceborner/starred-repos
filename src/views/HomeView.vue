<script setup lang="ts">
import CardsList from '@/components/CardsList.vue'
import type { SearchResponse } from '@/types/repositories'
import Button from 'primevue/button'
import { ref, onMounted } from 'vue'

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

async function searchRepositories(query: string) {
  const url = `https://api.github.com/search/repositories?q=${query}`

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
  <h1 class="text-3xl font-bold">{{ title }}</h1>
  <Button v-on:click="searchRepositories('tetris+language:assembly&sort=stars&order=desc')"
    >Test</Button
  >
  <CardsList :repositories="searchResponse?.items"></CardsList>
</template>

<style scoped></style>
