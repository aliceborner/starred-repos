<script setup lang="ts">
import type { Repository } from '@/types/search-response'

const props = defineProps({
  repositories: {
    type: Array as () => Repository[],
    default: () => []
  }
})
</script>

<template>
  <ul v-if="repositories.length">
    <li v-for="repo in repositories" :key="repo.id">
      <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
    </li>
  </ul>
  <p v-else>No results found.</p>
</template>
