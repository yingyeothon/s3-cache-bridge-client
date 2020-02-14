import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";

export default function sync(env: Env) {
  return (key: string) =>
    httpRequest(env.apiUrl + key + "?sync=1", {
      method: "POST",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
