<script lang="ts" setup>
const { name } = storeToRefs(useGeneralStore())
const { setName } = useGeneralStore()
const background = ref()
const preventScroll = (e: Event) => {
  e.preventDefault()
}
useEventListener(document.body, 'wheel', preventScroll, { passive: false })
useEventListener(document.body, 'touchmove', preventScroll, { passive: false })
useEventListener(document.body, 'mousedown', (e: MouseEvent) => {
  if (e.button !== 2) setName()
})
useEventListener(document.body, 'keydown', () => setName())
</script>
<template>
  <div
    v-if="name"
    ref="background"
    class="fixed z-50 top-1/2 -translate-y-1/2 bg-glass h-screen w-screen"
  >
    <NuxtImg
      :src="`/artworks/${name}`"
      format="webp"
      class="object-contain p-4 w-full h-full text-white flex justify-center items-center"
      :alt="`loading ${name}`"
    />
  </div>
</template>
