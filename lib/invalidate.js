"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
function invalidate(env) {
    return (key) => httpRequest_1.default(env.apiUrl + key + "?cache=1", {
        method: "DELETE",
        headers: {
            ...authorization_1.default(env)
        }
    });
}
exports.default = invalidate;
//# sourceMappingURL=invalidate.js.map