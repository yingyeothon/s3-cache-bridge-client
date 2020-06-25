"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const buildQueryParams_1 = require("./support/buildQueryParams");
const httpRequest_1 = require("./httpRequest");
function append(env) {
    return (key, body, { noLock = false, sync = false } = {}) => httpRequest_1.default({
        url: env.apiUrl + key + buildQueryParams_1.default({ append: true, noLock, sync }),
        requestArgs: {
            method: "PUT",
            headers: {
                ...authorization_1.default(env),
            },
        },
        body,
    });
}
exports.default = append;
//# sourceMappingURL=append.js.map