"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
function put(env) {
    return (key, body) => httpRequest_1.default(env.apiUrl + key, {
        method: "PUT",
        headers: {
            ...authorization_1.default(env)
        }
    }, body);
}
exports.default = put;
//# sourceMappingURL=put.js.map