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
  <div class="flex flex-col gap-2">
    <label for="from">From</label>
    <DatePicker id="from" v-model="from" @date-select="dateRangeSelectionChange" showIcon fluid />
    <label for="to">To</label>
    <DatePicker id="to" v-model="to" @date-select="dateRangeSelectionChange" showIcon fluid />
  </div>
</template>
