"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                resolve(res);
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