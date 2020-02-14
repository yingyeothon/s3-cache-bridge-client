/// <reference types="node" />
import Env from "./env";
export default function lock(env: Env): (key: string) => Promise<import("http").IncomingMessage>;
