import fs from 'node:fs'

export default defineEventHandler(async (event) => {
  const page = parseInt(getQuery<{ page: string }>(event).page || '1')
  const limit = parseInt(getQuery<{ limit: string }>(event).limit || '4')

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const files = fs
    .readdirSync(`./public/assets/artworks/2024`)
    .map((file) => `/assets/artworks/2024/${file}`)
    .concat(
      ...fs
        .readdirSync(`./public/assets/artworks/2023`)
        .map((file) => `/assets/artworks/2023/${file}`)
    )

  const res = {
    total: files.length,
    limit: limit,
    currentPage: page,
    lastPage: Math.ceil(files.length / limit),
    firstPage: 1,
    nextPage: endIndex < files.length ? page + 1 : null,
    prevPage: startIndex > 0 ? page - 1 : null,
    data: files.slice(startIndex, endIndex),
  }

  return res
})
