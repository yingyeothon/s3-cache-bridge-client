import Env from "./env";
import FetchOptions from "./support/fetchOptions";
import JSONModificationRequest from "./support/jsonModificationProtocol";
import LockOptions from "./support/lockOptions";
import SyncOptions from "./support/syncOptions";
export default function patch<T>(env: Env): (key: string, modRequest: JSONModificationRequest, { noLock, sync, fetch }?: LockOptions & SyncOptions & FetchOptions) => Promise<T | null>;
