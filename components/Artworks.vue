<script setup lang="ts">
defineProps<{
  data: { path: string }
}>()
const { setPath } = useGeneralStore()
const img = useImage()
</script>
<template>
  <div
    v-auto-animate
    class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] lg:w-[60rem] xl:w-[76rem] mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
  >
    <div
      v-auto-animate
      class="size-80 md:size-64 lg:size-64 overflow-hidden rounded-2xl cursor-pointer"
      v-for="(path, index) in data"
      :key="`${path}-${index}`"
      @click="setPath(path)"
    >
      <NuxtImg
        v-auto-animate
        :src="path"
        format="webp"
        width="320px"
        height="320px"
        class="duration-500 hover:scale-105 hover:-rotate-3"
        preload
        loading="lazy"
        :placeholder="
          img(`/${path}`, {
            w: 10,
            h: 10,
            f: 'webp',
            blur: 2,
            q: 50,
          })
        "
      />
    </div>
  </div>
</template>
