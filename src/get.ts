import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";

export default function get(env: Env) {
  return (key: string) =>
    httpRequest(env.apiUrl + key, {
      method: "GET",
      headers: {
        ...authorizationHeader(env)
      }
    });
}
