"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorizationHeader(env) {
    if (env.apiId !== undefined && env.apiPassword !== undefined) {
        const authorization = Buffer.from(`${env.apiId}:${env.apiPassword}`, "utf-8").toString("base64");
        return {
            Authorization: `Basic ${authorization}`
        };
    }
    return {};
}
exports.default = authorizationHeader;
//# sourceMappingURL=authorization.js.map