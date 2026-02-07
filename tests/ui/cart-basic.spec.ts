import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { users } from "../../test-data/users";
import { InventoryPage } from "../../pages/inventory.page";


test("Cart basic flow: add item and verify in cart", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Открываем сайт
  await loginPage.goto();

  // 2. Логинимся
  await loginPage.login(
    users.standard.username,
    users.standard.password
  );

  // Проверяем, что мы вошли
  await expect(page).toHaveURL(/inventory\.html/);

  const inventoryPage = new InventoryPage(page);

  // 3. Добавляем первый товар в корзину
  const addToCartButton = page.getByRole("button", {
    name: /add to cart/i,
  }).first();
await page.pause();
  await addToCartButton.click();

  // 4. Открываем корзину
  const cartLink = page.locator(".shopping_cart_link");
  await cartLink.click();

  // 5. Проверяем, что товар появился
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
});