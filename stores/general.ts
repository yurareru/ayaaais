import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
  const path = ref<string>('')
  const setPath = (data: string = '') => {
    path.value = data
  }
  return { path, setPath}
})
