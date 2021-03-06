import Env from "./env";
import LockOptions from "./support/lockOptions";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";

export default function get(env: Env) {
  return (key: string, { noLock = false }: LockOptions = {}) =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ noLock }),
      requestArgs: {
        method: "GET",
        headers: {
          ...authorizationHeader(env),
        },
      },
    });
}
