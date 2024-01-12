import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Heatmap', () => {
  test.describe('renders year with values', () => {
    test('renders 1st day with empty color', async ({ page }) => {
      await expect(
        page.locator('[data-sandbox-heatmap] rect').first()
      ).toHaveAttribute('fill', 'rgb(20,30,30)')
    })

    test('renders 3rd day with fill color', async ({ page }) => {
      await expect(
        page.locator('[data-sandbox-heatmap] rect').nth(2)
      ).toHaveAttribute('fill', 'rgb(87,172,87)')
    })

    test('renders 7th day with fill color', async ({ page }) => {
      await expect(
        page.locator('[data-sandbox-heatmap] rect').nth(6)
      ).toHaveAttribute('fill', 'rgb(58,157,58)')
    })

    test('renders 362nd day with fill color', async ({ page }) => {
      await expect(
        page.locator('[data-sandbox-heatmap] rect').nth(361)
      ).toHaveAttribute('fill', 'rgb(73,164,73)')
    })
  })

  test('renders with explicit viewbox', async ({ page }) => {
    await expect(page.locator('[data-sandbox-heatmap]')).toHaveAttribute(
      'viewBox',
      '0 0 636 82'
    )
  })
})
