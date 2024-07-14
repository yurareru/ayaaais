<script setup lang="ts">
interface NuxtError {
  statusCode: number
  fatal: boolean
  unhandled: boolean
  statusMessage?: string
  data?: unknown
  cause?: unknown
}

const { error } = defineProps({
  error: Object as () => NuxtError,
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
