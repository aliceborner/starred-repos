<script setup lang="ts">
import type { Repository } from '@/types/search-response'
import { format } from 'date-fns'

const props = defineProps<{
  repository: Repository
}>()

const formattedDate = () => {
  return format(props.repository.created_at, 'yyyy-MM-dd')
}
</script>
<template>
  <a class="text-m font-bold" :href="repository.html_url" target="_blank">{{ repository.name }}</a>
  <p class="m-0">
    {{ repository.description }}
  </p>
  <p class="m-0"><i class="pi pi-calendar mr-2"></i> Created at {{ formattedDate() }}</p>
  <p class="m-0"><i class="pi pi-star mr-2"></i> Stars count {{ repository.stargazers_count }}</p>
</template>
