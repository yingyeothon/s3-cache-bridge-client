"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./authorization");
const buildQueryParams_1 = require("./support/buildQueryParams");
const httpRequest_1 = require("./httpRequest");
const makeBodyAsPayload_1 = require("./support/makeBodyAsPayload");
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