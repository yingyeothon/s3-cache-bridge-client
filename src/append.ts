import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";
import buildQueryParams from "./support/buildQueryParams";
import LockOptions from "./support/lockOptions";
import SyncOptions from "./support/syncOptions";

export default function append(env: Env) {
  return (
    key: string,
    body: string,
    { noLock = false, sync = false }: LockOptions & SyncOptions = {}
  ) =>
    httpRequest(
      env.apiUrl + key + buildQueryParams({ append: true, noLock, sync }),
      {
        method: "PUT",
        headers: {
          ...authorizationHeader(env)
        }
      },
      body
    );
}
