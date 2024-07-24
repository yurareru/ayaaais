import { setup, createPage, url } from '@nuxt/test-utils/e2e'
import { describe, test, expect } from 'vitest'

describe('app', async () => {
  await setup()
  const page = await createPage()

  const checkTitle = async (expectedTitles: string[]) => {
    const titles = await page.$$eval('h1', (elements) =>
      elements.map((element) => element.textContent)
    )
    expect(titles).toEqual(expect.arrayContaining(expectedTitles))
  }

  test('main', async () => {
    await page.goto(url('/'), { waitUntil: 'hydration' })
    await page.evaluate(() => window.scrollTo(0, window.innerHeight))
    await checkTitle(['Ayaa AIs'])
  })
  
  test('commission info', async () => {
    await page.getByText('Commission Info').click()
    await page.waitForSelector('h1:has-text("Commission")')
    await checkTitle(['Commission', 'Price List'])
  })

  test('about', async () => {
    await page.getByText('About').click()
    await page.waitForSelector('h1:has-text("About")')
    await checkTitle(['About'])
  })

  test('artworks', async () => {
    await page.locator('li:has-text("Artworks")').click()
    await page.waitForSelector('h1:has-text("Artworks")')
    await checkTitle(['Artworks', '2024'])
  })
})
