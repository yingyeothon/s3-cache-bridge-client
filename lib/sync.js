"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
function sync(env) {
    return (key) => httpRequest_1.default(env.apiUrl + key + "?sync=1", {
        method: "POST",
        headers: {
            ...authorization_1.default(env)
        }
    });
}
exports.default = sync;
//# sourceMappingURL=sync.js.map