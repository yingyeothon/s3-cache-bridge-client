"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_stream_1 = require("get-stream");
const http = require("http");
const https = require("https");
const url_1 = require("url");
function httpRequest(url, requestArgs, body) {
    return new Promise((resolve, reject) => {
        const request = url_1.parse(url).protocol === "http:" ? http.request : https.request;
        const req = request(url, requestArgs, async (res) => {
            debugPrint(`Receive from the opposite`, res.statusCode);
            if (res.statusCode !== 200) {
                reject(new Error(`${res.statusCode} ${res.statusMessage}`));
            }
            else {
                try {
                    const response = await get_stream_1.default(res.setEncoding("utf-8"));
                    res.destroy();
                    resolve(response);
                }
                catch (error) {
                    reject(error);
                }
            }
        });
        if (body !== undefined) {
            debugPrint(`Start to write body`, body.length);
            req.write(body, "utf-8", requestError => {
                if (requestError !== null && requestError !== undefined) {
                    console.warn(`Error on request`, requestError);
                    reject(requestError);
                }
                else {
                    debugPrint(`Request completed`, body.length);
                    req.end();
                }
            });
        }
        else {
            debugPrint(`Request completed without body`);
            req.end();
        }
    });
}
exports.default = httpRequest;
const debugPrint = process.env.DEBUG === "1"
    ? (...args) => console.debug(...args)
    : () => 0;
//# sourceMappingURL=httpRequest.js.map