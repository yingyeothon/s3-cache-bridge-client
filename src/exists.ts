import Env from "./env";
import LockOptions from "./support/lockOptions";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";

export default function exists(env: Env) {
  return (
    key: string,
    { noLock = false }: LockOptions = {}
  ): Promise<boolean> =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ noLock }),
      requestArgs: {
        method: "HEAD",
        headers: {
          ...authorizationHeader(env),
        },
      },
    })
      .then(() => true)
      .catch((error) => {
        if (/^404 /.test(error.message)) {
          return false;
        }
        throw error;
      });
}
