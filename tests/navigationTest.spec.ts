import { test, expect } from '@playwright/test'
import { NavigationPage } from '../Pages/navigationPage'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})


test('naviagte to form page', async ({ page }) => {
    const navigationPage = new NavigationPage(page)
    await navigationPage.formLayoutPage()
    await expect(page.getByText('Inline form')).toBeVisible()
    await expect(page.getByText('Using the Grid')).toBeVisible()
    await expect(page.getByText('Form without labels')).toBeVisible()
    await expect(page.getByText('Block form')).toBeVisible()
})

test('naviagte to datepicker page', async ({ page }) => {
    const navigationPage = new NavigationPage(page)
    await navigationPage.datePickerPage()
    await expect(page.getByText('Common Datepicker')).toBeVisible()
    await expect(page.getByText('Datepicker With Range')).toBeVisible()
    await expect(page.getByText('Datepicker With Disabled Min Max Values')).toBeVisible()

})

test('naviagte to dialog page', async ({ page }) => {
    const navigationPage = new NavigationPage(page)
    await navigationPage.dialogPage()
    await expect(page.getByText('Open Dialog', { exact: true })).toBeVisible()
    await expect(page.getByText('Open Without Backdrop', { exact: true })).toBeVisible()
    await expect(page.getByText('Open Without Esc Close')).toBeVisible()
})

test('naviagte to window page', async ({ page }) => {
    const navigationPage = new NavigationPage(page)
    await navigationPage.windowPage()
    await expect(page.getByText('Window Form', { exact: true })).toBeVisible()
    await expect(page.getByText('Window Without Backdrop', { exact: true })).toBeVisible()
})

test('naviagte to popover page', async ({ page }) => {
    const navigationPage = new NavigationPage(page)
    await navigationPage.popoverPage()
    await expect(page.getByText('Popover Position')).toBeVisible()
    await expect(page.getByText('Simple Popovers')).toBeVisible()
    await expect(page.getByText('Component Popovers')).toBeVisible()

})


test('naviagte to toaster page', async ({ page }) => {
    const navigationPage = new NavigationPage(page)
    await navigationPage.Toaster()
    await expect(page.getByText('Toaster configuration')).toBeVisible()
})

test('naviagte to tooltip page', async ({ page }) => {
    const navigationPage = new NavigationPage(page)
    await navigationPage.Tooltip()
    await expect(page.getByText('Tooltip With Icon')).toBeVisible()
    await expect(page.getByText('Tooltip Placements')).toBeVisible()
    await expect(page.getByText('Colored Tooltips')).toBeVisible()

})

