import Env from "./env";
import LockOptions from "./support/lockOptions";
export default function append(env: Env): (key: string, body: string, { noLock }?: LockOptions) => Promise<string>;
