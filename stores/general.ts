import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
  const name = ref<string>('')
  const setName = (data?: string) => {
    name.value = data || ''
  }

  const page = ref<number>(1)
  const limit = ref<number>(8)
  const artworks = ref<{
    2024: string[]
    2023: string[]
  }>({
    2024: [],
    2023: [],
  })
  return {
    name,
    setName,
    page,
    limit,
    artworks,
  }
})
