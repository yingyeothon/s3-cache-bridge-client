import Env from "./env";
import LockOptions from "./support/lockOptions";
export default function del(env: Env): (key: string, { noLock }?: LockOptions) => Promise<string>;
