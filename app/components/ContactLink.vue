<script setup lang="ts">
//@ts-ignore
defineProps<{
  to: string
}>()
</script>
<template>
  <NuxtLink
    :to="to"
    target="_blank"
    class="text-xl md:text-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 p-2 rounded-full duration-200 hover:scale-110"
  >
    <slot />
  </NuxtLink>
</template>
