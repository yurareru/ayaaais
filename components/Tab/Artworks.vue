<script lang="ts" setup>
const { year, page, limit, artworks2024, artworks2023 } = storeToRefs(
  useGeneralStore()
)

const fetchArtworks = () => {
  $fetch(
    `/api/artworks/${year.value}?page=${page.value}&limit=${limit.value}`
  ).then((data: any) => {
    if (year.value === 2023) {
      artworks2023.value.push(...data.data)
      if (!data.nextPage) return (isObserverActive.value = false)
    }
    if (year.value === 2024) {
      artworks2024.value.push(...data.data)
      if (!data.nextPage) {
        year.value = 2023
        page.value = 0
      }
    }
    page.value++
  })
}

const target = ref<HTMLElement | null>(null)
const isObserverActive = ref(true)
fetchArtworks()

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (!isIntersecting || !isObserverActive.value) return
  console.log(isIntersecting)
  fetchArtworks()
})
</script>
<template>
  <div>
    <h1 class="text-center underline">Artworks</h1>
    <div v-auto-animate>
      <div>
        <h1 class="text-center text-4xl mt-4">2024</h1>
        <Artworks :data="artworks2024" />
      </div>
      <div v-if="artworks2023.length > 0">
        <h1 class="text-center text-4xl mt-16">2023</h1>
        <Artworks :data="artworks2023" />
      </div>
      <div class="border -translate-y-16 invisible" ref="target" />
    </div>
  </div>
</template>
