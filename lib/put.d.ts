import Env from "./env";
import LockOptions from "./support/lockOptions";
import SyncOptions from "./support/syncOptions";
export default function put(env: Env): (key: string, body: string, { noLock, sync }?: LockOptions & SyncOptions) => Promise<string>;
