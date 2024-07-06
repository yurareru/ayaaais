import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
  const path = ref<string>('')
  const setPath = (data: string = '') => {
    path.value = data
  }

  const page = ref<number>(1)
  const limit = ref<number>(8)
  const artworks = ref<{
    2024: { path: string; name: string }[]
    2023: { path: string; name: string }[]
  }>({
    2024: [],
    2023: [],
  })
  return {
    path,
    setPath,
    page,
    limit,
    artworks,
  }
})
