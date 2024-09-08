<script setup lang="ts">
import type { Repository } from '@/types/search-response'
import CardItem from './CardItem.vue'

const props = defineProps<{
  selectedLanguages: string[]
  repositories: Repository[]
}>()

const getRepositoriesByLanguage = (language: string) => {
  return props.repositories.filter((repository) => repository.language === language)
}
</script>

<template>
  <ul
    v-if="selectedLanguages.length"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 py-4"
  >
    <li v-for="(language, index) in selectedLanguages" :key="index">
      <CardItem :language="language" :repositories="getRepositoriesByLanguage(language)"></CardItem>
    </li>
  </ul>
  <p v-else>Select at least one language, filters and click on Search!</p>
</template>
