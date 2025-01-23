import { test } from '@playwright/test'

test.beforeEach('the first test', async ({ page }) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
})


test('naviogate to Form layout', async ({ page }) => {
    await page.getByText('Form layout').click()
})

test('naviogate to Datepicker', async ({ page }) => {
    await page.getByText('Datepicker').click()
})