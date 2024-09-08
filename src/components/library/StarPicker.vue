<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { ref } from 'vue'

const minStars = ref(0)

const emit = defineEmits<{
  (event: 'starSelectionChange', payload: { minStarsQuery: string }): void
}>()

const starSelectionChange = () => {
  let minStarsQuery: string = '+stars:>=' + minStars.value
  emit('starSelectionChange', { minStarsQuery })
}
</script>

<template>
  <p>Minimum amount of stars</p>
  <InputNumber v-model="minStars" inputId="integeronly" @update:modelValue="starSelectionChange" />
</template>
