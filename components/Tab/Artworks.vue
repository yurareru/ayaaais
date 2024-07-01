<script lang="ts" setup>
const { data: data2024 } = useFetch(() => `/api/artworks/2024`)
const { data: data2023, execute } = useFetch(() => `/api/artworks/2023`, {
  immediate: false,
})
const target = ref<HTMLElement | null>(null)
const isObserverActive = ref(true)

// I think I should use paginator, but JS backend is hell
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (!isIntersecting || !isObserverActive.value || !data2024.value) return
  if (data2023.value) isObserverActive.value = false
  execute()
})
</script>
<template>
  <div>
    <h1 class="text-center underline">Artworks</h1>
    <div>
      <h1 class="text-center text-4xl mt-4">2024</h1>
      <Artworks :data="data2024" />
      <h1 class="text-center text-4xl mt-16" ref="target">2023</h1>
      <Artworks :data="data2023" />
    </div>
  </div>
</template>
