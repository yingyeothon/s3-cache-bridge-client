/// <reference types="node" />
import Env from "./env";
import LockOptions from "./support/lockOptions";
import SyncOptions from "./support/syncOptions";
export default function put(env: Env): (key: string, body: string | Buffer | Uint8Array, { noLock, sync }?: LockOptions & SyncOptions) => Promise<string>;
