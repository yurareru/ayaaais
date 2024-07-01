// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt', '@vueuse/nuxt','@formkit/auto-animate/nuxt'],
  image: {
    format: ['webp']
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})