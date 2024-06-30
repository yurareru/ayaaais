<script setup lang="ts">
const error: any = useError();
const text = ref("Redirecting");
if ((error.statusCode = 404)) {
  setInterval(() => {
    text.value += ".";
  }, 2e2);
  setTimeout(() => {
    useRouter().push("/");
  }, 1e3);
}
</script>
<template>
  <div>
    <NuxtImg
      src="/assets/main.jpg"
      class="object-cover h-screen w-screen fixed scale-110 -z-10"
      format="webp"
    />
    <div
      class="bg-gradient-to-br from-rose-600 to-violet-400 object-cover h-screen w-screen fixed opacity-50 -z-10"
    />
    <div class="flex items-center justify-center h-screen flex-col">
      <p class="text-2xl md:text-4xl">
        <b>{{ error.statusCode }}</b> {{ error.message }}
      </p>
      <p class="text-xl" v-if="error.statusCode === 404">{{ text }}</p>
    </div>
  </div>
</template>
