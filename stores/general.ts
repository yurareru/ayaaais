import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
  const path = ref<string>('')
  const setPath = (data: string = '') => {
    path.value = data
  }

  const year = ref(2024)
  const page = ref<number>(1)
  const limit = ref<number>(4)
  const artworks2024 = ref<string[]>([])
  const artworks2023 = ref<string[]>([])

  return {
    path,
    setPath,
    year,
    page,
    limit,
    artworks2024,
    artworks2023,
  }
})
