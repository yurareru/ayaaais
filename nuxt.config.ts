// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
  ],

  // runtimeConfig: {
  //   proxy: 'https://yuuraeru-api.vercel.app/',
  // },

  routeRules: {
    '/api/**': {
      proxy: `https://yuuraeru-api.vercel.app/api/v1/**`,
    },
    '/_image/**': {
      proxy: `https://yuuraeru-api.vercel.app/_image/**`,
    },
    '/assets/artworks/**': {
      proxy: `https://yuuraeru-api.vercel.app/artworks/**`,
    },
  },

  image: {
    format: ['webp'],
    domains: ['yuuraeru-api.vercel.app'],
    alias: {
      artworks: 'https://yuuraeru-api.vercel.app/artworks',
      // artworks: '/assets/artworks',
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-04',
})
