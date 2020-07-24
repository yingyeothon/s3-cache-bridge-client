import Env from "./env";
import FetchOptions from "./support/fetchOptions";
import JSONModificationRequest from "./support/jsonModificationProtocol";
import LockOptions from "./support/lockOptions";
import SyncOptions from "./support/syncOptions";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";
import makeBodyAsBuffer from "./support/makeBodyAsPayload";

export default function patch(env: Env) {
  return <T>(
    key: string,
    modRequest: JSONModificationRequest,
    {
      noLock = false,
      sync = false,
      fetch = modRequest.operation === "fetch",
    }: LockOptions & SyncOptions & FetchOptions = {}
  ): Promise<T | null> =>
    httpRequest({
      url:
        env.apiUrl +
        key +
        buildQueryParams({
          noLock,
          sync,
          fetch,
        }),
      requestArgs: {
        method: "PATCH",
        headers: {
          ...authorizationHeader(env),
        },
      },
      body: makeBodyAsBuffer(JSON.stringify(modRequest)),
    }).then((response) => {
      if (!fetch) {
        return null;
      }
      const value = JSON.parse(response);
      if (!value._ok) {
        throw new Error(value.error);
      }
      return value.result as T;
    });
}
