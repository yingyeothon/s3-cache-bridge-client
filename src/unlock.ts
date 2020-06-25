import Env from "./env";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";

export default function unlock(env: Env) {
  return (key: string) =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ lock: "release" }),
      requestArgs: {
        method: "POST",
        headers: {
          ...authorizationHeader(env),
        },
      },
    });
}
