import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorBox = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
    await expect(this.page.getByText("Swag Labs")).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectErrorContains(text: string) {
    await expect(this.errorBox).toBeVisible();
    await expect(this.errorBox).toContainText(text);
  }
}