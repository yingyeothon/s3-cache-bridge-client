import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";

export default function invalidate(env: Env) {
  return (key: string) =>
    httpRequest(env.apiUrl + key + "?cache=1", {
      method: "DELETE",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
