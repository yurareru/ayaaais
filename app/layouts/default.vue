<template>
  <div>
    <NuxtImg
      src="/assets/main.jpg"
      class="object-cover h-screen w-screen fixed scale-110 -z-50"
      format="webp"
      loading="lazy"
      preload
    />
    <div
      class="bg-gradient-to-br from-rose-600 to-violet-400 object-cover h-screen w-screen fixed opacity-50 -z-50"
    />
    <slot />
  </div>
</template>
