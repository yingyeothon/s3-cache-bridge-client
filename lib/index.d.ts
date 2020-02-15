import Env from "./env";
export default function S3cb(env: Env): {
    get: (key: string) => Promise<string>;
    put: (key: string, body: string) => Promise<string>;
    del: (key: string) => Promise<string>;
    append: (key: string, body: string) => Promise<string>;
    invalidate: (key: string) => Promise<string>;
    lock: (key: string) => Promise<string>;
    unlock: (key: string) => Promise<string>;
};
