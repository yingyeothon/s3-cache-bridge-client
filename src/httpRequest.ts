import * as http from "http";
import * as https from "https";

import getStream from "get-stream";
import { parse as parseURL } from "url";

export default function httpRequest<R = string>({
  url,
  requestArgs,
  body,
  handleResponse,
}: {
  url: string;
  requestArgs: http.ClientRequestArgs;
  body?: Buffer | Uint8Array;
  handleResponse?: (message: http.IncomingMessage) => Promise<R>;
}): Promise<R> {
  const request =
    parseURL(url).protocol === "http:" ? http.request : https.request;
  return new Promise<R>((resolve, reject) => {
    const req = request(
      url,
      requestArgs,
      handleResponseCompletion<R>(resolve, reject, handleResponse)
    );
    if (body === undefined) {
      debugPrint(`Request completed without body`);
      req.end();
    } else {
      debugPrint(`Start to write body`, body.length);
      req.write(body, handleRequestCompletion(reject, req, body));
    }
  });
}

function handleResponseCompletion<R>(
  resolve: (result: R) => void,
  reject: (error: Error) => void,
  handleResponse?: (res: http.IncomingMessage) => Promise<R>
) {
  return async function(res: http.IncomingMessage) {
    debugPrint(`Receive from the opposite`, res.statusCode);
    if (res.statusCode !== 200) {
      reject(new Error(`${res.statusCode} ${res.statusMessage}`));
    } else {
      try {
        const response = await (handleResponse ?? handleTextResponse)(res);
        res.destroy();
        resolve(response as R);
      } catch (error) {
        reject(error);
      }
    }
  };
}

async function handleTextResponse(res: http.IncomingMessage): Promise<string> {
  return await getStream(res.setEncoding("utf-8"));
}

function handleRequestCompletion(
  reject: (error: Error) => void,
  req: http.ClientRequest,
  body?: string | Buffer | Uint8Array
) {
  return function handle(error: Error | null | undefined) {
    if (error !== null && error !== undefined) {
      console.warn(`Error on request`, error);
      reject(error);
    } else {
      debugPrint(`Request completed`, body?.length);
      req.end();
    }
  };
}

function debugPrint(...args: unknown[]): void {
  if (process.env.DEBUG === "1") {
    console.debug(...args);
  }
}
