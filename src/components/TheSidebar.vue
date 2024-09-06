<script setup lang="ts">
import LanguageFilters from './LanguageFilters.vue'
import DateRangePicker from './DateRangePicker.vue'
import StarPicker from './StarPicker.vue'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <LanguageFilters></LanguageFilters>
  <DateRangePicker></DateRangePicker>
  <StarPicker></StarPicker>
  <InputText type="text" v-model="value" />
</template>
