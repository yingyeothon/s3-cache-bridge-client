"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
const buildQueryParams_1 = require("./support/buildQueryParams");
function put(env, { noLock = false } = {}) {
    return (key, body) => httpRequest_1.default(env.apiUrl + key + buildQueryParams_1.default({ noLock }), {
        method: "PUT",
        headers: {
            ...authorization_1.default(env)
        }
    }, body);
}
exports.default = put;
//# sourceMappingURL=put.js.map