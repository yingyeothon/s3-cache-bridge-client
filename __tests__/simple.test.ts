import S3cb from "../lib";

test("simple", async () => {
  const cb = S3cb({
    apiUrl: "http://localhost:3000/",
    apiId: "test",
    apiPassword: "test"
  });
  await expect(cb.get("hello")).rejects.toThrow(/Not Found/);
  await expect(cb.put("hello", "WORLD")).resolves.toBeDefined();
  await expect(cb.get("hello")).resolves.toEqual("WORLD");
  await expect(cb.del("hello")).resolves.toBeDefined();
  await expect(cb.get("hello")).rejects.toThrow(/Not Found/);
});
