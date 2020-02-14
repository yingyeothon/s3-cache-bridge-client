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

## License

MIT
