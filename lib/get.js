"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_stream_1 = require("get-stream");
const authorization_1 = require("./authorization");
const httpRequest_1 = require("./httpRequest");
function get(env) {
    return (key) => httpRequest_1.default(env.apiUrl + key, {
        method: "GET",
        headers: {
            ...authorization_1.default(env)
        }
    }).then(res => get_stream_1.default(res.setEncoding("utf-8")));
}
exports.default = get;
//# sourceMappingURL=get.js.map