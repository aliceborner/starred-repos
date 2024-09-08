<script setup lang="ts">
import type { Repository } from '@/types/search-response'
import Card from 'primevue/card'
import RepositoryItem from './RepositoryItem.vue'
import Divider from 'primevue/divider'

defineProps<{
  language: string
  repositories: Repository[]
}>()
</script>

<template>
  <Card>
    <template #title>{{ language }}</template>
    <template #content>
      <ul v-if="repositories.length" class="flex flex-col gap-2 h-96 overflow-y-auto">
        <li v-for="repository in repositories" :key="repository.id">
          <RepositoryItem :repository="repository"></RepositoryItem>
          <Divider />
        </li>
      </ul>
      <p v-else>Select search parameters and click on Search!</p>
    </template>
  </Card>
</template>
