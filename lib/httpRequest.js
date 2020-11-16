"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const get_stream_1 = __importDefault(require("get-stream"));
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
            req.write(body, handleRequestCompletion(reject, req, body));
        }
    });
}
exports.default = httpRequest;
function handleResponseCompletion(resolve, reject, handleResponse) {
    return async function (res) {
        debugPrint(`Receive from the opposite`, res.statusCode);
        if (res.statusCode !== 200) {
            reject(new Error(`${res.statusCode} ${res.statusMessage}`));
        }
        else {
            try {
                const response = await (handleResponse !== null && handleResponse !== void 0 ? handleResponse : handleTextResponse)(res);
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
        if (error !== null && error !== undefined) {
            console.warn(`Error on request`, error);
            reject(error);
        }
        else {
            debugPrint(`Request completed`, body === null || body === void 0 ? void 0 : body.length);
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