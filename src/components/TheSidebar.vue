<script setup lang="ts">
import LanguageFilters from './LanguageFilters.vue'
import DateRangePicker from './DateRangePicker.vue'
import StarPicker from './StarPicker.vue'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
import { useSearchStore } from '@/stores/search-store'

let languageQuery = ''
let dateRangeQuery = ''
let starsQuery = ''

const searchStore = useSearchStore()

const performSearch = () => {
  const suffix = '&sort=stars&order=desc'
  const searchQuery = languageQuery + dateRangeQuery + starsQuery + suffix
  searchStore.setSearchQuery(searchQuery)
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
  <div class="flex flex-col h-full pr-4 border-r-2">
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
