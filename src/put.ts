import Env from "./env";
import LockOptions from "./support/lockOptions";
import SyncOptions from "./support/syncOptions";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";
import makeBodyAsBuffer from "./support/makeBodyAsPayload";

export default function put(env: Env) {
  return (
    key: string,
    body: string | Buffer | Uint8Array,
    { noLock = false, sync = false }: LockOptions & SyncOptions = {}
  ) =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ noLock, sync }),
      requestArgs: {
        method: "PUT",
        headers: {
          ...authorizationHeader(env),
          "Content-Length":
            typeof body === "string"
              ? Buffer.from(body, "utf8").length
              : body.length,
        },
      },
      body: makeBodyAsBuffer(body),
    });
}
