export default function makeBodyAsBuffer(
  body: string | Buffer | Uint8Array
): Buffer | Uint8Array {
  return typeof body === "string" ? Buffer.from(body, "utf8") : body;
}
