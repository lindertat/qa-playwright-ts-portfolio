import { Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  async addFirstItemToCart() {
    await this.page
      .getByRole("button", { name: /add to cart/i })
      .first()
      .click();
  }

  async openCart() {
    await this.page.locator(".shopping_cart_link").click();
  }
}