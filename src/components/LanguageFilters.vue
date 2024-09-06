<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <InputText type="text" v-model="value" />
</template>
