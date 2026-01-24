import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { users } from "../../test-data/users";

test.describe("Auth", () => {
  test("Valid login: standard user", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText("Products")).toBeVisible();
  });

  test("Invalid password shows error", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, "wrong_password");

    await loginPage.expectErrorContains("Username and password do not match");
  });

  test("Locked user cannot login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.locked.username, users.locked.password);

    await loginPage.expectErrorContains("locked out");
  });
});