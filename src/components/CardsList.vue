<script setup lang="ts">
import type { Repository } from '@/types/search-response'
import CardItem from './library/CardItem.vue'

defineProps({
  repositories: {
    type: Array as () => Repository[],
    default: () => []
  }
})
</script>

<template>
  <ul v-if="repositories.length" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 py-4">
    <li v-for="repository in repositories" :key="repository.id" class="h-full">
      <CardItem :repository="repository"></CardItem>
    </li>
  </ul>
  <p v-else>No results found.</p>
</template>
