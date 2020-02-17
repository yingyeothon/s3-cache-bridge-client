"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
const buildQueryParams_1 = require("./support/buildQueryParams");
function del(env) {
    return (key, { noLock = false } = {}) => httpRequest_1.default(env.apiUrl + key + buildQueryParams_1.default({ noLock }), {
        method: "DELETE",
        headers: {
            ...authorization_1.default(env)
        }
    });
}
exports.default = del;
//# sourceMappingURL=del.js.map