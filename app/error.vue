<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({
      statusCode: 500,
      fatal: false,
      unhandled: false,
    }),
  },
})
const text = ref('Redirecting')
if (error?.statusCode == 404) {
  setInterval(() => {
    text.value += '.'
  }, 666)
  setTimeout(() => {
    useRouter().push('/')
  }, 2e3)
}
</script>
<template>
  <NuxtLayout>
    <div class="flex items-center justify-center h-screen flex-col">
      <p class="text-2xl md:text-4xl">
        <b>{{ error?.statusCode }}</b> {{ error?.statusMessage }}
      </p>
      <p class="text-xl">{{ text }}</p>
    </div>
  </NuxtLayout>
</template>
