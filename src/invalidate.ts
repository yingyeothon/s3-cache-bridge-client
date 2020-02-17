import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";
import buildQueryParams from "./support/buildQueryParams";

export default function invalidate(env: Env) {
  return (key: string) =>
    httpRequest(env.apiUrl + key + buildQueryParams({ cache: true }), {
      method: "DELETE",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
