import Env from "./env";
import LockOptions from "./support/lockOptions";
export default function download(env: Env): (key: string, downloadPath: string, { noLock }?: LockOptions) => Promise<string>;
