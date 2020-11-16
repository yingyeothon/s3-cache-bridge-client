"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = __importDefault(require("./authorization"));
const buildQueryParams_1 = __importDefault(require("./support/buildQueryParams"));
const httpRequest_1 = __importDefault(require("./httpRequest"));
const makeBodyAsPayload_1 = __importDefault(require("./support/makeBodyAsPayload"));
function append(env) {
    return (key, body, { noLock = false, sync = false } = {}) => httpRequest_1.default({
        url: env.apiUrl + key + buildQueryParams_1.default({ append: true, noLock, sync }),
        requestArgs: {
            method: "PUT",
            headers: {
                ...authorization_1.default(env),
            },
        },
        body: makeBodyAsPayload_1.default(body),
    });
}
exports.default = append;
//# sourceMappingURL=append.js.map