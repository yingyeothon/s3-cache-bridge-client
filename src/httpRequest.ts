import getStream from "get-stream";
import * as http from "http";
import * as https from "https";
import { parse as parseURL } from "url";

export default function httpRequest(
  url: string,
  requestArgs: http.ClientRequestArgs,
  body?: string
) {
  return new Promise<string>((resolve, reject) => {
    const request =
      parseURL(url).protocol === "http:" ? http.request : https.request;
    const req = request(url, requestArgs, async res => {
      if (res.statusCode !== 200) {
        reject(new Error(`${res.statusCode} ${res.statusMessage}`));
      } else {
        try {
          const response = await getStream(res.setEncoding("utf-8"));
          res.destroy();
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }
    });
    if (body !== undefined) {
      req.write(body, "utf-8");
    }
    req.end();
  });
}
