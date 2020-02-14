"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const append_1 = require("./append");
const del_1 = require("./del");
const get_1 = require("./get");
const invalidate_1 = require("./invalidate");
const lock_1 = require("./lock");
const put_1 = require("./put");
const unlock_1 = require("./unlock");
function S3cb(env) {
    return {
        get: get_1.default(env),
        put: put_1.default(env),
        del: del_1.default(env),
        append: append_1.default(env),
        invalidate: invalidate_1.default(env),
        lock: lock_1.default(env),
        unlock: unlock_1.default(env)
    };
}
exports.default = S3cb;
//# sourceMappingURL=index.js.map