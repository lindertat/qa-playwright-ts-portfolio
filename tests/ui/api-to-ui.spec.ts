import { test, expect } from "@playwright/test";
import { createApiContext, getWithRetry } from "../../fixtures/api";
import { LoginPage } from "../../pages/login.page";
import { users } from "../../test-data/users";

test("API → UI: use API data in UI test (data-driven)", async ({ page }) => {
  const api = await createApiContext("https://jsonplaceholder.typicode.com");
  const res = await getWithRetry(api, "/posts/1", 3);
  expect(res.ok()).toBeTruthy();

  const post = await res.json();
  const apiTitle: string = post.title;

  test.info().annotations.push({ type: "api-data", description: `post.title="${apiTitle}"` });

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText("Products")).toBeVisible();

  expect(apiTitle.length).toBeGreaterThan(0);
});