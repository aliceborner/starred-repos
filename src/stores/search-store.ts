import { defineStore } from 'pinia'

interface SearchState {
  searchQuery: string
  searchSelectedLanguages: string[]
}

export const useSearchStore = defineStore('search', {
  state: (): SearchState => ({
    searchQuery: '',
    searchSelectedLanguages: []
  }),
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    setSearchSelectedLanguages(selectedLanguages: string[]) {
      this.searchSelectedLanguages = selectedLanguages
    }
  }
})
