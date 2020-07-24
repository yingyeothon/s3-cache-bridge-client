import S3cb from "../lib";

test("simple", async () => {
  const cb = S3cb({
    apiUrl: "http://localhost:3000/",
    apiId: "test",
    apiPassword: "test",
  });

  const testKey = "mbcs";
  const longMbcs = Array(1024 * 512)
    .fill(0)
    .map((_) => "안녕")
    .join("");

  // Not found
  await expect(cb.get(testKey)).rejects.toThrow(/Not Found/);

  // Put and get
  await expect(cb.put(testKey, longMbcs)).resolves.toBeDefined();
  await expect(cb.get(testKey)).resolves.toEqual(longMbcs);

  // Append and get
  await expect(cb.append(testKey, longMbcs)).resolves.toBeDefined();
  await expect(cb.get(testKey)).resolves.toEqual(longMbcs + longMbcs);

  // Overwrite and get
  await expect(cb.put(testKey, longMbcs)).resolves.toBeDefined();
  await expect(cb.get(testKey)).resolves.toEqual(longMbcs);

  // Delete and not found
  await expect(cb.del(testKey)).resolves.toBeDefined();
  await expect(cb.get(testKey)).rejects.toThrow(/Not Found/);
});
