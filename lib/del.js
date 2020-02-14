"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
function del(env) {
    return (key) => httpRequest_1.default(env.apiUrl + key, {
        method: "DELETE",
        headers: {
            ...authorization_1.default(env)
        }
    });
}
exports.default = del;
//# sourceMappingURL=del.js.map