<script setup lang="ts">
import type { Repository } from '@/types/search-response'
import Card from 'primevue/card'
import { format } from 'date-fns'

const props = defineProps<{
  repository: Repository
}>()

const formattedDate = () => {
  return format(props.repository.created_at, 'yyyy-MM-dd')
}
</script>

<template>
  <div class="h-full">
    <Card class="h-full">
      <template #title
        ><a :href="repository.html_url" target="_blank">{{ repository.name }}</a></template
      >
      <template #content>
        <div class="flex flex-col space-between gap-4 h-full">
          <p class="m-0">
            {{ repository.description }}
          </p>
          <div class="flex flex-col space-between gap-4 h-full">
            <p class="m-0"><i class="pi pi-calendar mr-2"></i> Created at {{ formattedDate() }}</p>
            <p class="m-0">
              <i class="pi pi-star mr-2"></i> Stars count {{ repository.stargazers_count }}
            </p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style>
.p-card-body,
.p-card-content {
  height: 100%;
}
</style>
