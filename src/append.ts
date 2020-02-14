import authorizationHeader from "./authorization";
import Env from "./env";
import httpRequest from "./httpRequest";

export default function append(env: Env) {
  return (key: string, body: string) =>
    httpRequest(
      env.apiUrl + key + "?append=1",
      {
        method: "PUT",
        headers: {
          ...authorizationHeader(env)
        }
      },
      body
    );
}
