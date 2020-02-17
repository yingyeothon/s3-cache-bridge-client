import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";
import buildQueryParams from "./support/buildQueryParams";

export default function unlock(env: Env) {
  return (key: string) =>
    httpRequest(env.apiUrl + key + buildQueryParams({ lock: "release" }), {
      method: "POST",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
