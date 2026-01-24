import { test as base } from "@playwright/test";

type TestFixtures = {
  // сюда можно будет добавлять, например apiClient, testData, etc.
};

export const test = base.extend<TestFixtures>({
  storageState: ".auth/standard.json",
});

export { expect } from "@playwright/test";
