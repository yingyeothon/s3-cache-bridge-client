import Env from "./env";
import LockOptions from "./support/lockOptions";
import SyncOptions from "./support/syncOptions";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";
import makeBodyAsBuffer from "./support/makeBodyAsPayload";

export default function append(env: Env) {
  return (
    key: string,
    body: string,
    { noLock = false, sync = false }: LockOptions & SyncOptions = {}
  ) =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ append: true, noLock, sync }),
      requestArgs: {
        method: "PUT",
        headers: {
          ...authorizationHeader(env),
        },
      },
      body: makeBodyAsBuffer(body),
    });
}
