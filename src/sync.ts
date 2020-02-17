import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";
import buildQueryParams from "./support/buildQueryParams";

export default function sync(env: Env) {
  return (key: string) =>
    httpRequest(env.apiUrl + key + buildQueryParams({ sync: true }), {
      method: "POST",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
