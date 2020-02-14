/// <reference types="node" />
import Env from "./env";
export default function S3cb(env: Env): {
    get: (key: string) => Promise<string>;
    put: (key: string, body: string) => Promise<import("http").IncomingMessage>;
    del: (key: string) => Promise<import("http").IncomingMessage>;
    append: (key: string, body: string) => Promise<import("http").IncomingMessage>;
    invalidate: (key: string) => Promise<import("http").IncomingMessage>;
    lock: (key: string) => Promise<import("http").IncomingMessage>;
    unlock: (key: string) => Promise<import("http").IncomingMessage>;
};
