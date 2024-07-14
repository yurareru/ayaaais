<script lang="ts" setup>
const emit = defineEmits()
const target = ref()
//@ts-ignore
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (!isIntersecting) return
  emit('isIntersecting')
})
</script>
<template>
  <div class="min-h-screen" ref="target">
    <!-- <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] mt-4">
      <h1 class="text-center text-xl md:text-4xl">🚧 UNDER CONSTRUCTION 🚧</h1>
    </div> -->
  </div>
</template>
