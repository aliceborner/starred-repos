<script setup lang="ts">
import LanguageFilters from './LanguageFilters.vue'
import DateRangePicker from './DateRangePicker.vue'
import StarPicker from './StarPicker.vue'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
import { ref } from 'vue'

const queryBuffer = ref('')

const emit = defineEmits<{
  (event: 'search', payload: { searchQuery: string }): void
}>()

const performSearch = () => {
  const suffix = '&sort=stars&order=desc'
  const searchQuery = queryBuffer.value.concat(suffix)
  emit('search', { searchQuery })
}

const handleLanguageSelection = (payload: { languagesQuery: string }) => {
  queryBuffer.value = queryBuffer.value.concat(payload.languagesQuery)
}

const handleDateRangeSelectionChange = (payload: { dateRangeQuery: string }) => {
  queryBuffer.value = queryBuffer.value.concat(payload.dateRangeQuery)
}

const handleStarSelectionChange = (payload: { minStarsQuery: string }) => {
  queryBuffer.value = queryBuffer.value.concat(payload.minStarsQuery)
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <h2 class="text-2xl">Filters</h2>
    <Divider />
    <LanguageFilters @languageSelectionChange="handleLanguageSelection"></LanguageFilters>
    <Divider />
    <DateRangePicker @dateRangeSelectionChange="handleDateRangeSelectionChange"></DateRangePicker>
    <Divider />
    <StarPicker @starSelectionChange="handleStarSelectionChange"></StarPicker>
    <Divider />
    <Button v-on:click="performSearch()">Search selected filters</Button>
  </div>
</template>
