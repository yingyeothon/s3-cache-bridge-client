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
            req.write(body, "utf-8");
        }
        req.end();
    });
}
exports.default = httpRequest;
//# sourceMappingURL=httpRequest.js.map