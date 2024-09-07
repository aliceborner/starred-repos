<script setup lang="ts">
import { ref } from 'vue'
import Chip from 'primevue/chip'
import TreeSelect from 'primevue/treeselect'

const selectedLanguages = ref<Record<string, boolean>>({})
const languages = ref<Record<string, string>[]>([
  { key: '1', label: 'Java' },
  { key: '2', label: 'JavaScript' },
  { key: '3', label: 'C' }
])

const getNodeLabelByKey = (key: string): string => {
  const findLabel = (languages: any[]): string => {
    for (const language of languages) {
      if (language.key === key) {
        return language.label
      }
    }
    return ''
  }

  return findLabel(languages.value)
}

const removeNode = (key: string) => {
  const updated = { ...selectedLanguages.value }
  delete updated[key]
  selectedLanguages.value = updated
}
</script>

<template>
  <Chip
    v-for="(isSelected, key) in selectedLanguages"
    :key="key"
    :label="getNodeLabelByKey(key)"
    @remove="removeNode(key)"
    removable
    class="mr-2 mb-2"
  />
  <TreeSelect
    v-model="selectedLanguages"
    :options="languages"
    selectionMode="multiple"
    placeholder="Select languages"
    class="md:w-80 w-full"
  />
</template>
