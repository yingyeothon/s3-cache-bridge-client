import S3cb from "../lib";
import { readFileSync } from "fs";

test("binary", async () => {
  const cb = S3cb({
    apiUrl: "http://localhost:3000/",
    apiId: "test",
    apiPassword: "test",
  });

  const testKey = "binkey";

  // Not found
  await expect(cb.get(testKey)).rejects.toThrow(/Not Found/);

  // Put and get
  const testValue = "SOMETHING SPECIAL";
  const buffer = Buffer.from(testValue, "utf8");
  await expect(cb.put(testKey, buffer)).resolves.toBeDefined();
  await expect(cb.getBuffer(testKey)).resolves.toEqual(buffer);

  const localTempFile = "/tmp/binkey-test";
  await expect(cb.download(testKey, localTempFile)).resolves.toEqual(
    localTempFile
  );
  expect(readFileSync(localTempFile, "utf8")).toEqual(testValue);

  // Delete and not found
  await expect(cb.del(testKey)).resolves.toBeDefined();
  await expect(cb.get(testKey)).rejects.toThrow(/Not Found/);
});
