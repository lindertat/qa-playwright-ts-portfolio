import { test, expect } from "../../fixtures/fixtures";

test("Inventory page opens with authenticated state", async ({ page }) => {
  // Мы уже залогинены через storageState
  await page.goto("https://www.saucedemo.com/inventory.html");

  await expect(page.getByText("Products")).toBeVisible();
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
});
