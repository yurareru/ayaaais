// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
  ],

  image: {
    format: ['webp'],
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-04',
})
