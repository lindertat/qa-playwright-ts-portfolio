import { request, type APIRequestContext } from "@playwright/test";

export async function createApiContext(baseURL: string): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL,
    extraHTTPHeaders: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
}
