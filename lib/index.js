"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const append_1 = __importDefault(require("./append"));
const del_1 = __importDefault(require("./del"));
const download_1 = __importDefault(require("./download"));
const exists_1 = __importDefault(require("./exists"));
const get_1 = __importDefault(require("./get"));
const getBuffer_1 = __importDefault(require("./getBuffer"));
const invalidate_1 = __importDefault(require("./invalidate"));
const lock_1 = __importDefault(require("./lock"));
const patch_1 = __importDefault(require("./patch"));
const put_1 = __importDefault(require("./put"));
const sync_1 = __importDefault(require("./sync"));
const unlock_1 = __importDefault(require("./unlock"));
function S3cb(env) {
    return {
        get: get_1.default(env),
        put: put_1.default(env),
        del: del_1.default(env),
        append: append_1.default(env),
        sync: sync_1.default(env),
        invalidate: invalidate_1.default(env),
        lock: lock_1.default(env),
        unlock: unlock_1.default(env),
        patch: patch_1.default(env),
        getBuffer: getBuffer_1.default(env),
        download: download_1.default(env),
        exists: exists_1.default(env),
    };
}
exports.default = S3cb;
//# sourceMappingURL=index.js.map