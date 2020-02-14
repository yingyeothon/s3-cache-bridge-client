/// <reference types="node" />
import Env from "./env";
export default function S3cb(env: Env): {
    get: (key: string) => Promise<string>;
    put: (key: string, body: string) => Promise<import("http").IncomingMessage>;
    del: (key: string) => Promise<import("http").IncomingMessage>;
};
