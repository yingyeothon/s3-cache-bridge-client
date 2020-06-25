/// <reference types="node" />
import Env from "./env";
import LockOptions from "./support/lockOptions";
export default function getBuffer(env: Env): (key: string, { noLock }?: LockOptions) => Promise<Buffer>;
