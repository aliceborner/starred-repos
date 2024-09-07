<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Chip from 'primevue/chip'
import TreeSelect from 'primevue/treeselect'

interface Language {
  key: string
  label: string
  isSelected: boolean
}

const selectedLanguages = ref<Record<string, boolean>>({})
const languages = ref<Language[]>([
  { key: '1', label: 'Java', isSelected: false },
  { key: '2', label: 'JavaScript', isSelected: false },
  { key: '3', label: 'C', isSelected: false }
])

const emit = defineEmits<{
  (event: 'languageSelectionChange', payload: { languagesQuery: string }): void
}>()

const languageSelectionChange = () => {
  let languagesQuery: string = '+language:'

  for (const language of languages.value) {
    if (language.isSelected) {
      languagesQuery = languagesQuery.concat(language.label + ',')
    }
  }

  emit('languageSelectionChange', { languagesQuery })
}

const getNodeLabelByKey = (key: string): string => {
  const findLabel = (languages: any[]): string => {
    for (const language of languages) {
      if (language.key === key) {
        language.isSelected = true
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
  const language = languages.value.find((language) => language.key === key)
  if (language) {
    language.isSelected = false
    languageSelectionChange()
  }
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
  <slot></slot>
  <TreeSelect
    v-model="selectedLanguages"
    :options="languages"
    selectionMode="multiple"
    placeholder="Select languages"
    class="md:w-80 w-full"
    @hide="languageSelectionChange"
  />
</template>
