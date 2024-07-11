// https://nuxt.com/docs/api/configuration/nuxt-config
import { readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    'nitro:build:public-assets': (nitro) => {
      const artworks = readdirSync('./public/artworks')
      const data = JSON.stringify(artworks)
      const output = path.join(nitro.options.output.serverDir, 'artworks.json')
      writeFileSync(output, data)
    },
  },
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
