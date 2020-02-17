import Env from "./env";
import LockOptions from "./support/lockOptions";
export default function put(env: Env, { noLock }?: LockOptions): (key: string, body: string) => Promise<string>;
