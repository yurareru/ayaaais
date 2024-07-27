<script lang="ts" setup>
useHead({
  title: 'My Artworks',
})
const { page, limit, artworks, isObserverActive } = storeToRefs(
  useGeneralStore()
)

const fetchArtworks = () => {
  $fetch('/api/artworks', {
    query: { page: page.value, limit: limit.value },
  }).then((res) => {
    res.data.forEach((name: string) => {
      if (name.startsWith('2024_')) artworks.value[2024].push(name)
      if (name.startsWith('2023_')) artworks.value[2023].push(name)

      if (page.value > res.lastPage) isObserverActive.value = false
    })
  })
}

if (isObserverActive.value) {
  fetchArtworks()
  page.value++
  fetchArtworks()
  page.value++
}

const target = ref<HTMLElement | null>(null)

// @ts-expect-error: Property 'isIntersecting' does not exist on type 'IntersectionObserverEntry | undefined'.ts-plugin(2339)
useIntersectionObserver(target, ([{ isIntersecting }]) => {
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
        <ArtworksList :data="artworks[2024]" />
      </div>
      <div v-if="artworks[2023].length > 0">
        <h1 class="text-center text-4xl mt-16">2023</h1>
        <ArtworksList :data="artworks[2023]" />
      </div>
      <div ref="target" class="border -translate-y-16 invisible" />
    </div>
  </div>
</template>
