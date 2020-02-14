/// <reference types="node" />
import Env from "./env";
export default function invalidate(env: Env): (key: string) => Promise<import("http").IncomingMessage>;
