<script lang="ts" setup>
const emit = defineEmits(['isIntersecting'])
const target = ref()
//@ts-expect-error: Property 'isIntersecting' does not exist on type 'IntersectionObserverEntry | undefined'.ts-plugin(2339)
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (!isIntersecting) return
  emit('isIntersecting')
})
</script>
<template>
  <div ref="target" class="min-h-screen">
    <!-- <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] mt-4">
      <h1 class="text-center text-xl md:text-4xl">🚧 UNDER CONSTRUCTION 🚧</h1>
    </div> -->
  </div>
</template>
