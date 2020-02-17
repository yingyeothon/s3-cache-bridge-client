import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";
import buildQueryParams from "./support/buildQueryParams";
import LockOptions from "./support/lockOptions";

export default function append(env: Env) {
  return (key: string, body: string, { noLock = false }: LockOptions = {}) =>
    httpRequest(
      env.apiUrl + key + buildQueryParams({ append: true, noLock }),
      {
        method: "PUT",
        headers: {
          ...authorizationHeader(env)
        }
      },
      body
    );
}
