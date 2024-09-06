<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <InputNumber v-model="value" inputId="integeronly" fluid />
</template>
