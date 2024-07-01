import fs from 'node:fs'

export default defineEventHandler(async (event) => {
  const year = getRouterParam(event, 'year')
  const files = fs.readdirSync(`./public/assets/artworks/${year}`)
    .map(file => `/assets/artworks/${year}/${file}`)
  return files
})
