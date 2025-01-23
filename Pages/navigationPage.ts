import { Page } from '@playwright/test'

export class NavigationPage {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    async formLayoutPage() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Form Layouts').click()
    }

    async datePickerPage() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Datepicker').click()
    }

    async dialogPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByRole('link', { name: 'Dialog' }).click()
    }

    async windowPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByRole('link', { name: 'Window' }).click()
    }

    async popoverPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Popover').click()
    }
    async Toaster() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Toastr').click()
    }
    async Tooltip() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Tooltip').click()
    }

}