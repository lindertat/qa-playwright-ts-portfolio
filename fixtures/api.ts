import { request, type APIRequestContext, type APIResponse } from "@playwright/test";

export async function createApiContext(baseURL: string): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL,
    extraHTTPHeaders: {
      accept: "application/json",
      "content-type": "application/json",
    },
    timeout: 30_000,
  });
}

export async function getWithRetry(
  api: APIRequestContext,
  url: string,
  retries = 3
): Promise<APIResponse> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await api.get(url, { timeout: 30_000 });
      if (res.ok()) return res;

      lastError = new Error(`Non-OK response: ${res.status()} ${res.statusText()}`);
    } catch (err) {
      lastError = err;
    }

    // backoff: 300ms, 600ms, 900ms
    await new Promise((r) => setTimeout(r, attempt * 300));
  }

  throw lastError;
}