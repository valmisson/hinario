import { expect, test } from '@playwright/test'

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load title', async ({ page }) => {
    expect(await page.title()).toMatch(
      'Hinário CCB - Hinos de Louvores e Súplicas a Deus - Livro N° 5'
    )
  })
})
