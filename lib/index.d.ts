import Env from "./env";
export default function S3cb(env: Env): {
    get: (key: string, { noLock }?: import("./support/lockOptions").default) => Promise<string>;
    put: (key: string, body: string, { noLock, sync }?: import("./support/lockOptions").default & import("./support/syncOptions").default) => Promise<string>;
    del: (key: string, { noLock }?: import("./support/lockOptions").default) => Promise<string>;
    append: (key: string, body: string, { noLock, sync }?: import("./support/lockOptions").default & import("./support/syncOptions").default) => Promise<string>;
    sync: (key: string) => Promise<string>;
    invalidate: (key: string) => Promise<string>;
    lock: (key: string) => Promise<string>;
    unlock: (key: string) => Promise<string>;
    patch: <T>(key: string, modRequest: import("./support/jsonModificationProtocol").default, { noLock, sync, fetch, }?: import("./support/lockOptions").default & import("./support/syncOptions").default & import("./support/fetchOptions").default) => Promise<T | null>;
};
