import { test, expect } from "@playwright/test";

test("Smoke: opens SauceDemo login page", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page.getByText("Swag Labs")).toBeVisible();
});
