<script setup lang="ts">
import LanguageFilters from './LanguageFilters.vue'
import DateRangePicker from './DateRangePicker.vue'
import StarPicker from './StarPicker.vue'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
import { ref } from 'vue'

const searchQuery = ref('')

const emit = defineEmits<{
  (event: 'search', payload: { searchQuery: string }): void
}>()

const performSearch = () => {
  emit('search', { searchQuery: searchQuery.value })
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <h2 class="text-2xl">Filters</h2>
    <Divider />
    <LanguageFilters></LanguageFilters>
    <Divider />
    <DateRangePicker></DateRangePicker>
    <Divider />
    <StarPicker></StarPicker>
    <Divider />
    <Button v-on:click="performSearch()">Search selected filters</Button>
  </div>
</template>
