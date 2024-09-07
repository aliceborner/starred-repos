<script setup lang="ts">
import { format } from 'date-fns'
import DatePicker from 'primevue/datepicker'
import { onMounted, ref } from 'vue'

const from = ref(new Date())
const to = ref(new Date())

const emit = defineEmits<{
  (event: 'dateRangeSelectionChange', payload: { dateRangeQuery: string }): void
}>()

const dateRangeSelectionChange = () => {
  let dateRangeQuery: string = '+created:'

  dateRangeQuery = dateRangeQuery.concat(
    format(from.value, 'yyyy-MM-dd') + '..' + format(to.value, 'yyyy-MM-dd')
  )

  emit('dateRangeSelectionChange', { dateRangeQuery })
}

onMounted(() => {
  dateRangeSelectionChange()
})
</script>

<template>
  <span>From <DatePicker v-model="from" @date-select="dateRangeSelectionChange" /></span>
  <span>To <DatePicker v-model="to" @date-select="dateRangeSelectionChange" /></span>
</template>
