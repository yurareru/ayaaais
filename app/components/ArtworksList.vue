<script setup lang="ts">
const props = defineProps<{
  data: string[]
}>()
const { setName } = useGeneralStore()

const _data = ref()
setTimeout(() => {
  _data.value = props.data
}, 500)
</script>
<template>
  <div
    class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] lg:w-[60rem] xl:w-[76rem] mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
  >
    <TransitionGroup name="pop" appear>
      <div
        v-for="(name, index) in _data"
        :key="`${name}-${index}`"
        class="size-80 md:size-64 lg:size-64 overflow-hidden rounded-2xl cursor-pointer flex"
        @click="setName(name)"
      >
        <NuxtImg
          :src="`/artworks/${name}`"
          format="webp"
          width="256 md:320"
          class="duration-500 hover:scale-105 hover:-rotate-3 flex-grow text-white flex justify-center items-center w-full h-full object-cover"
          :alt="`loading ${name}`"
          quality="50"
          placeholder="/assets/MaterialSymbolsImage.svg"
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
