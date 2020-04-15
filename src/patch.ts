import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";
import buildQueryParams from "./support/buildQueryParams";
import FetchOptions from "./support/fetchOptions";
import JSONModificationRequest from "./support/jsonModificationProtocol";
import LockOptions from "./support/lockOptions";
import SyncOptions from "./support/syncOptions";

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
    httpRequest(
      env.apiUrl +
        key +
        buildQueryParams({
          noLock,
          sync,
          fetch,
        }),
      {
        method: "PATCH",
        headers: {
          ...authorizationHeader(env),
        },
      },
      JSON.stringify(modRequest)
    ).then((response) => {
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
