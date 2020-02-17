import Env from "./env";
export default function S3cb(env: Env): {
    get: (key: string, { noLock }?: import("./support/lockOptions").default) => Promise<string>;
    put: (key: string, body: string, { noLock }?: import("./support/lockOptions").default) => Promise<string>;
    del: (key: string, { noLock }?: import("./support/lockOptions").default) => Promise<string>;
    append: (key: string, body: string, { noLock }?: import("./support/lockOptions").default) => Promise<string>;
    invalidate: (key: string) => Promise<string>;
    lock: (key: string) => Promise<string>;
    unlock: (key: string) => Promise<string>;
};
