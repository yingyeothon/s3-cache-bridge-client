"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = __importDefault(require("./authorization"));
const buildQueryParams_1 = __importDefault(require("./support/buildQueryParams"));
const httpRequest_1 = __importDefault(require("./httpRequest"));
function get(env) {
    return (key, { noLock = false } = {}) => httpRequest_1.default({
        url: env.apiUrl + key + buildQueryParams_1.default({ noLock }),
        requestArgs: {
            method: "GET",
            headers: {
                ...authorization_1.default(env),
            },
        },
    });
}
exports.default = get;
//# sourceMappingURL=get.js.map