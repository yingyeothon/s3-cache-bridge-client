import Env from "./env";
import LockOptions from "./support/lockOptions";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";

export default function getBuffer(env: Env) {
  return (key: string, { noLock = false }: LockOptions = {}) =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ noLock }),
      requestArgs: {
        method: "GET",
        headers: {
          ...authorizationHeader(env),
        },
      },
      handleResponse: async (response) => {
        const buffers: Buffer[] = [];
        return new Promise<Buffer>((resolve, reject) =>
          response
            .on("error", reject)
            .on("data", (buffer) => buffers.push(buffer))
            .on("end", () => resolve(Buffer.concat(buffers)))
        );
      },
    });
}
