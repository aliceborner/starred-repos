<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { ref } from 'vue'

const value = ref(50)
</script>

<template>
  <span>With at least <InputNumber v-model="value" inputId="integeronly" fluid /> stars</span>
</template>
