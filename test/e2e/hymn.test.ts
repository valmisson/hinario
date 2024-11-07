import { expect, test } from '@playwright/test'

test.describe('Hymn', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/hino/1-cristo-meu-mestre')
  })

  test('should have breadcrumb', async ({ page }) => {
    await expect(page.locator('.breadcrumb')).toBeVisible()
  })

  test('should goto the home page when clicking on the breadcrumb link', async ({ page }) => {
    await page.locator('.breadcrumb a').click()

    await expect(page).toHaveURL('/')
  })

  test('should have hymn title in the breadcrumb', async ({ page }) => {
    await expect(await page.locator('.breadcrumb span').textContent()).toMatchSnapshot()
  })

  test('should have hymn title', async ({ page }) => {
    await expect(await page.locator('.lyrics h1').textContent()).toMatchSnapshot()
  })

  test('should have hymn lyric', async ({ page }) => {
    await expect(await page.locator('.lyrics ol').textContent()).toMatchSnapshot()
  })
})
