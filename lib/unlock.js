"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const buildQueryParams_1 = require("./support/buildQueryParams");
const httpRequest_1 = require("./httpRequest");
function unlock(env) {
    return (key) => httpRequest_1.default({
        url: env.apiUrl + key + buildQueryParams_1.default({ lock: "release" }),
        requestArgs: {
            method: "POST",
            headers: {
                ...authorization_1.default(env),
            },
        },
    });
}
exports.default = unlock;
//# sourceMappingURL=unlock.js.map