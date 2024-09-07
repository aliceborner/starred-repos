<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import { ref } from 'vue'

const from = ref(new Date())
const to = ref(new Date())
</script>

<template>
  <span>From <DatePicker v-model="from" /></span>
  <span>To <DatePicker v-model="to" /></span>
</template>
