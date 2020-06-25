import Env from "./env";
import LockOptions from "./support/lockOptions";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";

export default function del(env: Env) {
  return (key: string, { noLock = false }: LockOptions = {}) =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ noLock }),
      requestArgs: {
        method: "DELETE",
        headers: {
          ...authorizationHeader(env),
        },
      },
    });
}
