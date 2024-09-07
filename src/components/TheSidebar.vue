<script setup lang="ts">
import LanguageFilters from './LanguageFilters.vue'
import DateRangePicker from './DateRangePicker.vue'
import StarPicker from './StarPicker.vue'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

let languageQuery = ''
let dateRangeQuery = ''
let starsQuery = ''

const emit = defineEmits<{
  (event: 'search', payload: { searchQuery: string }): void
}>()

const performSearch = () => {
  const suffix = '&sort=stars&order=desc'
  const searchQuery = languageQuery + dateRangeQuery + starsQuery + suffix
  emit('search', { searchQuery })
}

const handleLanguageSelection = (payload: { languagesQuery: string }) => {
  languageQuery = payload.languagesQuery
}

const handleDateRangeSelectionChange = (payload: { dateRangeQuery: string }) => {
  dateRangeQuery = payload.dateRangeQuery
}

const handleStarSelectionChange = (payload: { minStarsQuery: string }) => {
  starsQuery = payload.minStarsQuery
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
