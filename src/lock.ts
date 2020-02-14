import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";

export default function lock(env: Env) {
  return (key: string) =>
    httpRequest(env.apiUrl + key + "?lock=acquire", {
      method: "POST",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
