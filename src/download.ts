import * as fs from "fs";

import Env from "./env";
import LockOptions from "./support/lockOptions";
import authorizationHeader from "./authorization";
import buildQueryParams from "./support/buildQueryParams";
import httpRequest from "./httpRequest";

export default function download(env: Env) {
  return (
    key: string,
    downloadPath: string,
    { noLock = false }: LockOptions = {}
  ): Promise<string> =>
    httpRequest({
      url: env.apiUrl + key + buildQueryParams({ noLock }),
      requestArgs: {
        method: "GET",
        headers: {
          ...authorizationHeader(env),
        },
      },
      handleResponse: async (response) =>
        new Promise<string>((resolve, reject) =>
          response
            .on("error", reject)
            .pipe(fs.createWriteStream(downloadPath))
            .on("close", () => resolve(downloadPath))
        ),
    });
}
