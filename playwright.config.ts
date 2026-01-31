import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["html", { open: "never" }]],

  use: {
    baseURL: "https://www.saucedemo.com",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

projects: [
  {
    name: "setup",
    testMatch: /.*\.setup\.ts/,
  },
  {
  name: "chromium-no-auth",
  use: {
  ...devices["Desktop Chrome"],
  launchOptions: {
    slowMo: 300,
  },
},
  testMatch: [
    /tests\/ui\/.*\.spec\.ts/,
    /tests\/api\/.*\.spec\.ts/
  ],
},
  {
  name: "chromium",
  dependencies: ["setup"],
  use: { ...devices["Desktop Chrome"], storageState: ".auth/standard.json" },
  testMatch: /tests\/ui\/.*authenticated.*\.spec\.ts/,
},
{
  name: "debug",
  dependencies: ["setup"],
  use: {
    ...devices["Desktop Chrome"], 
    headless: false,
    launchOptions: {
      slowMo: 300,
    },
    trace: "on",
    video: "on",
    screenshot: "on",
  },
},
],
});
