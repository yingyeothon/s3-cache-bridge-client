"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const https = require("https");
const get_stream_1 = require("get-stream");
const url_1 = require("url");
function httpRequest({ url, requestArgs, body, handleResponse, }) {
    const request = url_1.parse(url).protocol === "http:" ? http.request : https.request;
    return new Promise((resolve, reject) => {
        const req = request(url, requestArgs, handleResponseCompletion(resolve, reject, handleResponse));
        if (body === undefined) {
            debugPrint(`Request completed without body`);
            req.end();
        }
        else {
            debugPrint(`Start to write body`, body.length);
            const handleRequest = handleRequestCompletion(reject, req, body);
            if (typeof body === "string") {
                req.write(body, "utf-8", handleRequest);
            }
            else {
                req.write(body, handleRequest);
            }
        }
    });
}
exports.default = httpRequest;
function handleResponseCompletion(resolve, reject, handleResponse) {
    return async function handleRespons(res) {
        debugPrint(`Receive from the opposite`, res.statusCode);
        if (res.statusCode !== 200) {
            reject(new Error(`${res.statusCode} ${res.statusMessage}`));
        }
        else {
            try {
                const response = await ((handleResponse !== null && handleResponse !== void 0 ? handleResponse : handleTextResponse))(res);
                res.destroy();
                resolve(response);
            }
            catch (error) {
                reject(error);
            }
        }
    };
}
async function handleTextResponse(res) {
    return await get_stream_1.default(res.setEncoding("utf-8"));
}
function handleRequestCompletion(reject, req, body) {
    return function handle(error) {
        var _a;
        if (error !== null && error !== undefined) {
            console.warn(`Error on request`, error);
            reject(error);
        }
        else {
            debugPrint(`Request completed`, (_a = body) === null || _a === void 0 ? void 0 : _a.length);
            req.end();
        }
    };
}
function debugPrint(...args) {
    if (process.env.DEBUG === "1") {
        console.debug(...args);
    }
}
//# sourceMappingURL=httpRequest.js.map