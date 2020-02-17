import Env from "./env";
import LockOptions from "./support/lockOptions";
export default function append(env: Env, { noLock }?: LockOptions): (key: string, body: string) => Promise<string>;
