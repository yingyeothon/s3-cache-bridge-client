import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";
import buildQueryParams from "./support/buildQueryParams";
import LockOptions from "./support/lockOptions";

export default function get(env: Env) {
  return (key: string, { noLock = false }: LockOptions = {}) =>
    httpRequest(env.apiUrl + key + buildQueryParams({ noLock }), {
      method: "GET",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
