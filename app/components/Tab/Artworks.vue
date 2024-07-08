<script lang="ts" setup>
useHead({
  title: 'My Artworks',
})
const { page, limit, artworks } = storeToRefs(useGeneralStore())

const fetchArtworks = () => {
  $fetch(`/api/artworks?page=${page.value}&limit=${limit.value}`).then(
    (data: any) => {
      data.data.forEach((name: string) => {
        if (name.includes('2024_')) artworks.value[2024].push(name)
        if (name.includes('2023_')) artworks.value[2023].push(name)

        if (page.value > data.lastPage) isObserverActive.value = false
      })
    }
  )
}

fetchArtworks()
page.value++

const target = ref<HTMLElement | null>(null)
const isObserverActive = ref(true)

useIntersectionObserver(target, ([{ isIntersecting }]: any) => {
  if (!isIntersecting || !isObserverActive.value) return
  fetchArtworks()
  page.value++
})
</script>
<template>
  <div class="min-h-screen">
    <h1 class="text-center underline">Artworks</h1>
    <div>
      <div>
        <h1 class="text-center text-4xl mt-4">2024</h1>
        <Artworks :data="artworks[2024]" />
      </div>
      <div v-if="artworks[2023].length > 0">
        <h1 class="text-center text-4xl mt-16">2023</h1>
        <Artworks :data="artworks[2023]" />
      </div>
      <div class="border -translate-y-16 invisible" ref="target" />
    </div>
  </div>
</template>
