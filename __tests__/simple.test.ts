import S3cb from "../lib";

test("simple", async () => {
  const cb = S3cb({
    apiUrl: "http://localhost:3000/",
    apiId: "test",
    apiPassword: "test"
  });

  // Not found
  await expect(cb.get("hello")).rejects.toThrow(/Not Found/);

  // Put and get
  await expect(cb.put("hello", "WORLD")).resolves.toBeDefined();
  await expect(cb.get("hello")).resolves.toEqual("WORLD");

  // Append and get
  await expect(cb.append("hello", "WORLD")).resolves.toBeDefined();
  await expect(cb.get("hello")).resolves.toEqual("WORLDWORLD");

  // Overwrite and get
  await expect(cb.put("hello", "WORLD")).resolves.toBeDefined();
  await expect(cb.get("hello")).resolves.toEqual("WORLD");

  // Delete and not found
  await expect(cb.del("hello")).resolves.toBeDefined();
  await expect(cb.get("hello")).rejects.toThrow(/Not Found/);
});

test("json-mod", async () => {
  const cb = S3cb({
    apiUrl: "http://localhost:3000/",
    apiId: "test",
    apiPassword: "test"
  });

  // Append
  await expect(
    cb.patch(
      "mod-test",
      { operation: "append", path: "a.b", value: { c: 10 } },
      { fetch: true }
    )
  ).resolves.toEqual({ a: { b: { c: 10 } } });

  // Modify
  await expect(
    cb.patch(
      "mod-test",
      { operation: "modify", path: "a.b", value: { c: 20 } },
      { fetch: true }
    )
  ).resolves.toEqual({ a: { b: { c: 20 } } });

  // Remove
  await expect(
    cb.patch("mod-test", { operation: "remove", path: "a.b" }, { fetch: true })
  ).resolves.toEqual({ a: {} });

  // Cleanup
  await expect(cb.del("mod-test")).resolves.toBeDefined();
});
