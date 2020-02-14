/// <reference types="node" />
import Env from "./env";
export default function unlock(env: Env): (key: string) => Promise<import("http").IncomingMessage>;
