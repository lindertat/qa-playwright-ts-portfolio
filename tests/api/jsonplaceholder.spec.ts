import { test, expect } from "@playwright/test";
import { createApiContext } from "../../fixtures/api";

test.describe("API: JSONPlaceholder", () => {
  test("GET /posts returns list", async () => {
    const api = await createApiContext("https://jsonplaceholder.typicode.com");

    const res = await api.get("/posts");
    expect(res.ok()).toBeTruthy();

    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty("id");
    expect(data[0]).toHaveProperty("title");
  });

  test("GET /posts/1 returns a single post", async () => {
    const api = await createApiContext("https://jsonplaceholder.typicode.com");

    const res = await api.get("/posts/1");
    expect(res.status()).toBe(200);

    const post = await res.json();
    expect(post.id).toBe(1);
    expect(typeof post.title).toBe("string");
  });

  test("POST /posts creates a post (fake API) and returns 201", async () => {
    const api = await createApiContext("https://jsonplaceholder.typicode.com");

    const payload = { title: "hello", body: "world", userId: 1 };
    const res = await api.post("/posts", { data: payload });

    expect(res.status()).toBe(201);
    const created = await res.json();
    expect(created).toMatchObject(payload);
    expect(created).toHaveProperty("id");
  });

  test("Negative: GET unknown endpoint returns 404", async () => {
    const api = await createApiContext("https://jsonplaceholder.typicode.com");

    const res = await api.get("/unknown-endpoint");
    expect(res.status()).toBe(404);
  });
});
