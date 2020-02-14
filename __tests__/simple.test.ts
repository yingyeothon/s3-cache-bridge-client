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
