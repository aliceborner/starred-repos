<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import { ref } from 'vue'

const from = ref('')
const to = ref('')
</script>

<template>
  <DatePicker v-model="from" />
  <DatePicker v-model="to" />
</template>
