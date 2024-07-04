import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(async (event) => {
  const page = parseInt(getQuery<{ page: string }>(event).page || '1')
  const limit = parseInt(getQuery<{ limit: string }>(event).limit || '4')

  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const folderPath = path.join(process.cwd(), 'public', 'assets', 'artworks')
  try {
    const files = fs.readdirSync(folderPath).reverse()
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
  } catch (error) {
    return error
  }
})
