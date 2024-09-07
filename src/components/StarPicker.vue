<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { ref } from 'vue'

const minStars = ref(0)

const emit = defineEmits<{
  (event: 'starSelectionChange', payload: { minStarsQuery: string }): void
}>()

const starSelectionChange = () => {
  let minStarsQuery: string = '+stars:' + minStars.value
  emit('starSelectionChange', { minStarsQuery })
}
</script>

<template>
  <span
    >With at least
    <InputNumber
      v-model="minStars"
      inputId="integeronly"
      fluid
      @update:modelValue="starSelectionChange"
    />
    stars</span
  >
</template>
