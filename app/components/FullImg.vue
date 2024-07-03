<script lang="ts" setup>
const { path } = storeToRefs(useGeneralStore())
const { setPath } = useGeneralStore()
const img = useImage()
const background = ref()
useEventListener(background, 'click', (e: Event) => {
  setPath('')
  console.log(e)
})
</script>
<template>
  <div
    v-if="path"
    class="fixed z-50 top-1/2 -translate-y-1/2 bg-glass h-screen w-screen"
    ref="background"
  >
    <NuxtImg
      :src="path"
      format="webp"
      class="object-contain p-4 w-full h-full"
      :placeholder="img(`/${path}`, { w: 128, f: 'webp', blur: 2, q: 50 })"
    />
  </div>
</template>
