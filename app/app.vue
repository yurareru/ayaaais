<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Ayaa AIs',
  description:
    "Hello! My name is Aya. I'm an illustrator, and welcome to my web page! Here, you can find information about my artworks, my commission details, and more!",
  ogDescription:
    "Hello! My name is Aya. I'm an illustrator, and this is my web page! Here, you can find information about my artworks, my commission details, and more!",
  ogUrl: 'https://ayaaais.vercel.app',
  ogImage: '/assets/main.jpg',
})

useHead({
  titleTemplate: (titleChunk?: string) => {
    return titleChunk ? `${titleChunk} · Ayaa AIs` : 'Ayaa AIs'
  },
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://ayaaais.vercel.app',
    },
    { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' },
  ],
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
