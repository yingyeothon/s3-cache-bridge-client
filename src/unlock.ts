import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";

export default function unlock(env: Env) {
  return (key: string) =>
    httpRequest(env.apiUrl + key + "?lock=release", {
      method: "POST",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
