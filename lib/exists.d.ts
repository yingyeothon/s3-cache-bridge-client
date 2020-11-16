import Env from "./env";
import LockOptions from "./support/lockOptions";
export default function exists(env: Env): (key: string, { noLock }?: LockOptions) => Promise<boolean>;
