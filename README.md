# S3 Cache Bridge Client

NodeJS Client library for [S3 Cache Bridge](https://github.com/lacti/s3-cache-bridge).

## Quick start

```typescript
import S3cb from "@yingyeothon/s3-cache-bridge-client";

const cb = S3cb({
  apiUrl: "http://your-server-address/",
  apiId: "api-id",
  apiPassword: "api-password"
});

// Get a file.
await cb.get("hello");

// Put a new content into the file.
await cb.put("hello", "new content");

// Delete a file.
await cb.delete("hello");
```

## Functions

| Name       | Description                                                            | Example                              |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------ |
| get        | Get a file.                                                            | `cb.get(key)`                        |
| put        | Put a content into the file.                                           | `cb.put(key, body: string)`          |
| append     | Append a content into the file.                                        | `cb.append(key, body: string)`       |
| del        | Delete a file.                                                         | `cb.del(key)`                        |
| patch      | Patch a JSON file using [json-mod](https://github.com/lacti/json-mod). | `cb.patch(key, operation: JSON_MOD)` |
| invalidate | Invalidate a cache file in bridge server.                              | `cb.invalidate(key)`                 |
| sync       | Upload a cache file into S3 right now.                                 | `cb.sync(key)`                       |
| lock       | Acquire a lock of key.                                                 | `cb.lock(key)`                       |
| unlock     | Release a lock of key.                                                 | `cb.unlock(key)`                     |

## License

MIT
