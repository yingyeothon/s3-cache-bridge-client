"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
function unlock(env) {
    return (key) => httpRequest_1.default(env.apiUrl + key + "?lock=release", {
        method: "POST",
        headers: {
            ...authorization_1.default(env)
        }
    });
}
exports.default = unlock;
//# sourceMappingURL=unlock.js.map