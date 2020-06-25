import Env from "./env";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";

export default function invalidate(env: Env) {
  return (key: string) =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ cache: true }),
      requestArgs: {
        method: "DELETE",
        headers: {
          ...authorizationHeader(env),
        },
      },
    });
}
