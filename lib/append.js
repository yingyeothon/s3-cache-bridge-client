"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
function append(env) {
    return (key, body) => httpRequest_1.default(env.apiUrl + key + "?append=1", {
        method: "PUT",
        headers: {
            ...authorization_1.default(env)
        }
    }, body);
}
exports.default = append;
//# sourceMappingURL=append.js.map