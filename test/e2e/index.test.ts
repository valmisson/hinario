import { expect, test } from '@playwright/test'

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load title', async ({ page }) => {
    await expect(await page.title()).toMatchSnapshot()
  })

  test('should have header', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible()
  })

  test('should have brand', async ({ page }) => {
    await expect(page.locator('figure.brand')).toBeVisible()
  })

  test('should goto home when click on brand', async ({ page }) => {
    await page.locator('figure.brand').click()

    await expect(page).toHaveURL('/')
  })

  test('should have search box', async ({ page }) => {
    await expect(page.locator('.search-box')).toBeVisible()
  })

  test('should hidden input from search box in mobile', async ({ page }) => {
    await expect(page.locator('.search-box input')).toBeHidden()
  })

  test('should show input from search box when click on button icon in mobile', async ({ page }) => {
    await page.locator('.search-box button').click()

    await expect(page.locator('.search-box input')).toBeVisible()
  })

  test('should show hymns list when search for a hymn', async ({ page }) => {
    await page.locator('.search-box input').fill('1')

    await expect(page.locator('.search-box ul')).toBeVisible()
  })

  test('should goto hymn page when clicking on a hymn in search box list', async ({ page }) => {
    await page.locator('.search-box input').fill('1')
    await page.locator('.search-box ul li').first().click()

    await expect(page).toHaveURL('/hino/1-cristo-meu-mestre')
  })

  test('should have dark mode button', async ({ page }) => {
    await expect(page.locator('.dark-mode')).toBeVisible()
  })

  test('should enable dark mode when clicking the button', async ({ page }) => {
    await page.locator('.dark-mode').click()
    await expect(await page.locator('.dark').count()).toEqual(1)
  })

  test('should save dark mode status on localStorage', async ({ page }) => {
    await page.locator('.dark-mode').click()

    const storage = await page.evaluate(() => window.localStorage)

    expect(storage['dark-mode']).toBe('true')
  })

  test('should have font jump', async ({ page }) => {
    await expect(page.locator('.font-jump-btn')).toBeVisible()
  })

  test('should increase the font size when clicking the font jump button', async ({ page }) => {
    await page.locator('.font-jump-btn').click()

    await expect(page.locator('.font-jump')).toBeVisible()
  })

  test('should save font jump status on localStorage', async ({ page }) => {
    await page.locator('.font-jump-btn').click()

    const storage = await page.evaluate(() => window.localStorage)

    expect(storage['font-jump']).toBe('true')
  })

  test('should have hymns list', async ({ page }) => {
    await expect(page.locator('.hymns')).toBeVisible()
  })

  test('should have 480 hymn in list', async ({ page }) => {
    await expect(await page.locator('.hymns ul li').count()).toBe(480)
  })

  test('should goto page of the hymn when clicking the hymn name', async ({ page }) => {
    const hymn = await page.locator('.hymns ul li').first()

    await hymn.click()

    await expect(page).toHaveURL('/hino/1-cristo-meu-mestre')
  })
})
