<script lang="ts" setup>
const { page, limit, artworks } = storeToRefs(useGeneralStore())

const fetchArtworks = () => {
  $fetch(`/api/artworks?page=${page.value}&limit=${limit.value}`).then(
    (data: any) => {
      data.data.forEach((path: string) => {
        if (path.includes('/2024/')) artworks.value[2024].push(path)
        if (path.includes('/2023/')) artworks.value[2023].push(path)
        if (page.value > data.lastPage) isObserverActive.value = false
      })
    }
  )
}
fetchArtworks()
page.value++

const target = ref<HTMLElement | null>(null)
const isObserverActive = ref(true)

//@ts-ignore
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (!isIntersecting || !isObserverActive.value) return
  fetchArtworks()
  page.value++
})
</script>
<template>
  <div>
    <h1 class="text-center underline">Artworks</h1>
    <div v-auto-animate>
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
