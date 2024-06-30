<script lang="ts" setup></script>
<template>
  <div>
    <h1 class="text-center underline">Artworks</h1>
    <div>
      <h1 class="text-center text-4xl mt-4">2024</h1>
      <div
        class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] lg:w-[60rem] xl:w-[76rem] 2xl:w-[92rem] mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div class="size-80 overflow-hidden rounded-2xl" v-for="_ in 8">
          <NuxtImg
            src="/assets/artworks/2024/image04.jpg"
            format="webp"
            width="320"
            height="320"
            class="duration-500 hover:scale-105 hover:-rotate-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
