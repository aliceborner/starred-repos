export interface SearchResponse {
  total_count: number
  items: Repository[]
}

export interface Repository {
  id: string
  name: string
  html_url: string
  description: string
  stargazers_count: number
  created_at: string
  language: string
}
