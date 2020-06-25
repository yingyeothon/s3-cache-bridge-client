"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const buildQueryParams_1 = require("./support/buildQueryParams");
const httpRequest_1 = require("./httpRequest");
function getBuffer(env) {
    return (key, { noLock = false } = {}) => httpRequest_1.default({
        url: env.apiUrl + key + buildQueryParams_1.default({ noLock }),
        requestArgs: {
            method: "GET",
            headers: {
                ...authorization_1.default(env),
            },
        },
        handleResponse: async (response) => {
            const buffers = [];
            return new Promise((resolve, reject) => response
                .on("error", reject)
                .on("data", (buffer) => buffers.push(buffer))
                .on("end", () => resolve(Buffer.concat(buffers))));
        },
    });
}
exports.default = getBuffer;
//# sourceMappingURL=getBuffer.js.map