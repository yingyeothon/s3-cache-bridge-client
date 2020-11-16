import S3cb from "../lib";

test("simple", async () => {
  const cb = S3cb({
    apiUrl: "http://localhost:3000/",
    apiId: "test",
    apiPassword: "test",
  });

  // Not found
  await expect(cb.get("hello")).rejects.toThrow(/Not Found/);
  await expect(cb.exists("hello")).resolves.toBe(false);

  // Put and get
  await expect(cb.put("hello", "WORLD")).resolves.toBeDefined();
  await expect(cb.get("hello")).resolves.toEqual("WORLD");
  await expect(cb.exists("hello")).resolves.toBe(true);

  // Append and get
  await expect(cb.append("hello", "WORLD")).resolves.toBeDefined();
  await expect(cb.get("hello")).resolves.toEqual("WORLDWORLD");
  await expect(cb.exists("hello")).resolves.toBe(true);

  // Overwrite and get
  await expect(cb.put("hello", "WORLD")).resolves.toBeDefined();
  await expect(cb.get("hello")).resolves.toEqual("WORLD");
  await expect(cb.exists("hello")).resolves.toBe(true);

  // Delete and not found
  await expect(cb.del("hello")).resolves.toBeDefined();
  await expect(cb.get("hello")).rejects.toThrow(/Not Found/);
  await expect(cb.exists("hello")).resolves.toBe(false);
});

test("json-mod", async () => {
  const cb = S3cb({
    apiUrl: "http://localhost:3000/",
    apiId: "test",
    apiPassword: "test",
  });

  // Cleanup
  await expect(cb.del("mod-test")).resolves.toBeDefined();
  await expect(cb.exists("mod-test")).resolves.toBe(false);

  // Append
  await expect(
    cb.patch(
      "mod-test",
      { operation: "append", path: "a.b", value: { c: 10 } },
      { fetch: true }
    )
  ).resolves.toEqual({ a: { b: { c: 10 } } });
  await expect(cb.exists("mod-test")).resolves.toBe(true);

  // Modify
  await expect(
    cb.patch(
      "mod-test",
      { operation: "modify", path: "a.b", value: { c: 20 } },
      { fetch: true }
    )
  ).resolves.toEqual({ a: { b: { c: 20 } } });
  await expect(cb.exists("mod-test")).resolves.toBe(true);

  // Fetch with only path
  await expect(
    cb.patch("mod-test", { operation: "fetch", path: "a" })
  ).resolves.toEqual({ b: { c: 20 } });
  await expect(cb.exists("mod-test")).resolves.toBe(true);

  // Fetch with only path and fetch flag (meaningless)
  await expect(
    cb.patch("mod-test", { operation: "fetch", path: "a.b" }, { fetch: true })
  ).resolves.toEqual({ c: 20 });
  await expect(cb.exists("mod-test")).resolves.toBe(true);

  // Upsert
  await expect(
    cb.patch("mod-test", {
      operation: "append",
      path: "a.b",
      value: { c: 30 },
      upsert: true,
    })
  ).resolves.toEqual(null); // No fetched result.
  await expect(cb.exists("mod-test")).resolves.toBe(true);

  // Fetch with path and key
  await expect(
    cb.patch("mod-test", { operation: "fetch", path: "a", key: ["b"] })
  ).resolves.toEqual([{ c: 30 }]);
  await expect(cb.exists("mod-test")).resolves.toBe(true);

  // Remove
  await expect(
    cb.patch("mod-test", { operation: "remove", path: "a.b" }, { fetch: true })
  ).resolves.toEqual({ a: {} });
  await expect(cb.exists("mod-test")).resolves.toBe(true);

  // Cleanup
  await expect(cb.del("mod-test")).resolves.toBeDefined();
  await expect(cb.exists("mod-test")).resolves.toBe(false);
});
