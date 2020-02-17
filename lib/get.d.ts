import Env from "./env";
import LockOptions from "./support/lockOptions";
export default function get(env: Env, { noLock }?: LockOptions): (key: string) => Promise<string>;
