import { test as setup, expect } from "@playwright/test";
import { users } from "../../test-data/users";

const authFile = ".auth/standard.json";

setup("authenticate as standard_user", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill(users.standard.username);
  await page.getByPlaceholder("Password").fill(users.standard.password);
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  await page.context().storageState({ path: authFile });
});
