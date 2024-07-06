<script setup lang="ts">
const data = ref()
//@ts-ignore
const props = defineProps<{
  data: { path: string }
}>()
const { setPath } = useGeneralStore()
const img = useImage()
setTimeout(() => {
  data.value = props.data
}, 500)
</script>
<template>
  <div
    class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] lg:w-[60rem] xl:w-[76rem] mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
  >
    <TransitionGroup name="pop" appear mode="out-in">
      <div
        class="size-80 md:size-64 lg:size-64 overflow-hidden rounded-2xl cursor-pointer flex"
        v-for="({ path, name }, index) in data"
        :key="`${path}-${index}`"
        @click="setPath(path)"
      >
        <NuxtImg
          :src="path"
          format="webp"
          width="320px"
          class="duration-500 hover:scale-105 hover:-rotate-3 flex-grow text-white flex justify-center items-center w-full h-full object-cover"
          :alt="`loading ${name}`"
          :placeholder="
            img(`/${path}`, { w: 32, h: 32, f: 'webp', blur: 2, q: 50 })
          "
        />
      </div>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.pop-enter-active {
  transition: all 0.5s ease;
}
.pop-enter-from {
  transform: scale(0.8);
}
</style>
