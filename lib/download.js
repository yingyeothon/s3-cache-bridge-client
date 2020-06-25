"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const authorization_1 = require("./authorization");
const buildQueryParams_1 = require("./support/buildQueryParams");
const httpRequest_1 = require("./httpRequest");
function download(env) {
    return (key, downloadPath, { noLock = false } = {}) => httpRequest_1.default({
        url: env.apiUrl + key + buildQueryParams_1.default({ noLock }),
        requestArgs: {
            method: "GET",
            headers: {
                ...authorization_1.default(env),
            },
        },
        handleResponse: async (response) => new Promise((resolve, reject) => response
            .on("error", reject)
            .pipe(fs.createWriteStream(downloadPath))
            .on("close", () => resolve(downloadPath))),
    });
}
exports.default = download;
//# sourceMappingURL=download.js.map