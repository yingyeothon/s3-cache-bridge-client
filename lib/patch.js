"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = __importDefault(require("./authorization"));
const buildQueryParams_1 = __importDefault(require("./support/buildQueryParams"));
const httpRequest_1 = __importDefault(require("./httpRequest"));
const makeBodyAsPayload_1 = __importDefault(require("./support/makeBodyAsPayload"));
function patch(env) {
    return (key, modRequest, { noLock = false, sync = false, fetch = modRequest.operation === "fetch", } = {}) => httpRequest_1.default({
        url: env.apiUrl +
            key +
            buildQueryParams_1.default({
                noLock,
                sync,
                fetch,
            }),
        requestArgs: {
            method: "PATCH",
            headers: {
                ...authorization_1.default(env),
            },
        },
        body: makeBodyAsPayload_1.default(JSON.stringify(modRequest)),
    }).then((response) => {
        if (!fetch) {
            return null;
        }
        const value = JSON.parse(response);
        if (!value._ok) {
            throw new Error(value.error);
        }
        return value.result;
    });
}
exports.default = patch;
//# sourceMappingURL=patch.js.map