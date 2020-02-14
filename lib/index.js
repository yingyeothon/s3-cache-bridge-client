"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const del_1 = require("./del");
const get_1 = require("./get");
const put_1 = require("./put");
function S3cb(env) {
    return { get: get_1.default(env), put: put_1.default(env), del: del_1.default(env) };
}
exports.default = S3cb;
//# sourceMappingURL=index.js.map